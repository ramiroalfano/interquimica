import { jsPDF } from 'jspdf';
import { Product } from '../types.ts';

export function downloadProductPdf(product: Product): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let currentY = 0;

  const sheet = product.officialTechSheet;
  const officialName = sheet?.officialName || `${product.name} (${product.title})`;
  const date = sheet?.date || '24/02/2026';
  const properties = sheet?.properties || product.description;
  const physicochemical = sheet?.physicochemical || [
    { label: 'Aspecto', value: product.technicalData.appearance },
    { label: 'pH', value: product.technicalData.pH },
    { label: 'Densidad a 20° C', value: product.technicalData.density },
    { label: 'Solubilidad', value: product.technicalData.solubility },
  ];
  const applications = sheet?.applications || product.applications;
  const usageInstructions =
    sheet?.usageInstructions ||
    product.dosageNote ||
    'Preparar la dilución recomendada en agua potable y aplicar por recirculación o aspersión según el nivel de suciedad.';
  const compatibility = sheet?.materialCompatibility || product.compatibility.join('. ');
  const handling =
    sheet?.handlingAndStorage ||
    'Conservar en el envase original, evitando la exposición a temperaturas extremas. Consultar la ficha de datos de seguridad.';
  const packaging =
    sheet?.packaging ||
    product.presentations.map((p) => `${p.packaging} (${p.size})`).join(', ');

  const drawHeader = () => {
    // Deep Navy Header Banner
    doc.setFillColor(11, 37, 69); // #0b2545
    doc.rect(0, 0, pageWidth, 20, 'F');

    // Cyan underline
    doc.setFillColor(0, 162, 255);
    doc.rect(0, 20, pageWidth, 1.2, 'F');

    // Logo / Brand Text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('IQA', margin, 13);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('INTERQUÍMICA ARGENTINA', margin + 14, 10.5);
    doc.setFontSize(6.5);
    doc.setTextColor(180, 210, 245);
    doc.text('SOLUCIONES QUÍMICAS INDUSTRIALES', margin + 14, 14.5);

    // Right certification
    doc.setTextColor(200, 230, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text('GESTIÓN DE CALIDAD ISO 9001:2015', pageWidth - margin, 12, { align: 'right' });
  };

  const drawFooter = () => {
    // Navy Footer Banner
    const footerH = 14;
    const footerY = pageHeight - footerH;

    doc.setFillColor(11, 37, 69);
    doc.rect(0, footerY, pageWidth, footerH, 'F');

    doc.setFillColor(0, 162, 255);
    doc.rect(0, footerY, pageWidth, 0.8, 'F');

    doc.setTextColor(240, 245, 255);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.text(
      'Dirección: Independencia 28 - Godoy Cruz - Mendoza - Argentina.',
      pageWidth / 2,
      footerY + 4.5,
      { align: 'center' }
    );
    doc.setTextColor(165, 215, 255);
    doc.text(
      'Email: cblanco@interquimica.com.ar  |  Sitio web: www.interquimica.com.ar  |  Tel: +54 9 2614681775',
      pageWidth / 2,
      footerY + 8.5,
      { align: 'center' }
    );
    doc.setTextColor(180, 200, 220);
    doc.text('Documento oficial emitido por InterQuímica Argentina S.A.', pageWidth / 2, footerY + 12, {
      align: 'center',
    });
  };

  const checkPageBreak = (neededHeight: number) => {
    const bottomLimit = pageHeight - 18;
    if (currentY + neededHeight > bottomLimit) {
      doc.addPage();
      drawHeader();
      drawFooter();
      currentY = 27;
    }
  };

  // Start Page 1
  drawHeader();
  drawFooter();
  currentY = 27;

  // Title Row
  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('FICHA TÉCNICA DE PRODUCTO', margin, currentY);

  doc.setFont('helvetica', 'normal');
  doc.text(`FECHA: ${date}`, pageWidth - margin, currentY, { align: 'right' });
  currentY += 5.5;

  // Official Product Name
  doc.setTextColor(0, 90, 150);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  const titleLines = doc.splitTextToSize(officialName, contentWidth);
  doc.text(titleLines, margin, currentY);
  currentY += titleLines.length * 5.5 + 2;

  // Thin gray divider
  doc.setDrawColor(210, 220, 230);
  doc.setLineWidth(0.4);
  doc.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 5;

  // Section Helper
  const drawSectionHeading = (title: string) => {
    checkPageBreak(12);
    // Left blue indicator pill
    doc.setFillColor(0, 102, 160);
    doc.rect(margin, currentY - 3.2, 2.5, 4.5, 'F');

    doc.setTextColor(0, 85, 145);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(title, margin + 4.5, currentY);
    currentY += 4.5;
  };

  // 1. PROPIEDADES
  drawSectionHeading('PROPIEDADES:');
  doc.setTextColor(45, 55, 72);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  const propLines = doc.splitTextToSize(properties, contentWidth - 4);
  checkPageBreak(propLines.length * 3.8 + 4);
  doc.text(propLines, margin + 4, currentY, { maxWidth: contentWidth - 4 });
  currentY += propLines.length * 3.8 + 5;

  // 2. PROPIEDADES FÍSICO-QUÍMICAS (TABLE)
  drawSectionHeading('PROPIEDADES FÍSICO-QUÍMICAS:');
  checkPageBreak(physicochemical.length * 6 + 12);

  const col1Width = 72;
  const col2Width = contentWidth - col1Width;
  const rowH = 5.6;

  physicochemical.forEach((item, idx) => {
    checkPageBreak(rowH + 2);
    // Background alternating
    if (idx % 2 === 0) {
      doc.setFillColor(242, 248, 255);
    } else {
      doc.setFillColor(255, 255, 255);
    }
    doc.rect(margin + 4, currentY, contentWidth - 4, rowH, 'F');

    // Border
    doc.setDrawColor(200, 220, 240);
    doc.setLineWidth(0.2);
    doc.rect(margin + 4, currentY, contentWidth - 4, rowH, 'S');
    doc.line(margin + 4 + col1Width, currentY, margin + 4 + col1Width, currentY + rowH);

    // Label
    doc.setTextColor(0, 95, 155);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.text(`${item.label}:`, margin + 6, currentY + 3.8);

    // Value
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.text(item.value, margin + 4 + col1Width + 2.5, currentY + 3.8);

    currentY += rowH;
  });

  // Table footnote
  doc.setTextColor(140, 150, 165);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(6.8);
  doc.text(
    'Estos valores no constituyen especificaciones. Los datos químico-físicos indicados representan características típicas del producto.',
    margin + 4,
    currentY + 3.5
  );
  currentY += 7.5;

  // 3. APLICACIONES
  if (applications && applications.length > 0) {
    drawSectionHeading('APLICACIONES:');
    doc.setTextColor(45, 55, 72);
    doc.setFontSize(8.2);

    applications.forEach((app) => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 102, 160);
      const appLines = doc.splitTextToSize(app, contentWidth - 10);
      checkPageBreak(appLines.length * 3.8 + 2);

      doc.text('•', margin + 4, currentY);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(45, 55, 72);
      doc.text(appLines, margin + 8, currentY);
      currentY += appLines.length * 3.8 + 1.2;
    });
    currentY += 3.5;
  }

  // 4. FORMA DE USO
  if (usageInstructions) {
    drawSectionHeading('FORMA DE USO:');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    const usageLines = doc.splitTextToSize(usageInstructions, contentWidth - 8);
    const boxHeight = usageLines.length * 3.8 + 4;
    checkPageBreak(boxHeight + 4);

    // Subtle background card for instructions
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin + 4, currentY - 2, contentWidth - 4, boxHeight, 1.5, 1.5, 'FD');

    doc.setTextColor(30, 41, 59);
    doc.text(usageLines, margin + 7, currentY + 1.8);
    currentY += boxHeight + 4;
  }

  // 5. COMPATIBILIDAD CON MATERIALES
  if (compatibility) {
    drawSectionHeading('COMPATIBILIDAD CON MATERIALES:');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 55, 72);
    const compatLines = doc.splitTextToSize(compatibility, contentWidth - 6);
    checkPageBreak(compatLines.length * 3.8 + 3);
    doc.text(compatLines, margin + 4, currentY);
    currentY += compatLines.length * 3.8 + 4;
  }

  // 6. PRECAUCIÓN PARA LA MANIPULACIÓN Y EL ALMACENAJE
  if (handling) {
    drawSectionHeading('PRECAUCIÓN PARA LA MANIPULACIÓN Y EL ALMACENAJE:');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 55, 72);
    const handlingLines = doc.splitTextToSize(handling, contentWidth - 6);
    checkPageBreak(handlingLines.length * 3.8 + 3);
    doc.text(handlingLines, margin + 4, currentY);
    currentY += handlingLines.length * 3.8 + 4;
  }

  // 7. ENVASE
  if (packaging) {
    drawSectionHeading('ENVASE:');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 55, 72);
    const packLines = doc.splitTextToSize(packaging, contentWidth - 6);
    checkPageBreak(packLines.length * 3.8 + 3);
    doc.text(packLines, margin + 4, currentY);
    currentY += packLines.length * 3.8 + 4;
  }

  // Save the generated PDF
  const safeFilename = `FICHA_TECNICA_${product.name.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
  doc.save(safeFilename);
}
