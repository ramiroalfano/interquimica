import React, { useState } from 'react';
import { Product } from '../types.ts';
import { CanisterVisual } from './CanisterVisual.tsx';
import {
  X,
  FileDown,
  MessageCircle,
  ShoppingCart,
  CheckCircle2,
  AlertCircle,
  Layers,
  Thermometer,
  Clock,
  ShieldCheck,
  ChevronRight,
  PackageCheck,
  Droplets,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product, presentation?: string) => void;
  onOpenDosageCalc: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
  onOpenDosageCalc,
}) => {
  const [activeTab, setActiveTab] = useState<
    'aplicaciones' | 'dosificacion' | 'presentaciones' | 'beneficios' | 'compatibilidad' | 'documentacion'
  >('aplicaciones');

  if (!product) return null;

  const isBag = product.id.startsWith('bio-det');

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hola InterQuímica Argentina, deseo consultar sobre el producto ${product.name} (${product.title}) y solicitar asesoramiento técnico.`
    );
    window.open(`https://wa.me/5492611234567?text=${text}`, '_blank');
  };

  const handleDownloadPdf = (docType: string) => {
    // Generate a clean text file download simulating high-grade tech sheet
    const content = `INTERQUÍMICA ARGENTINA - FICHA TÉCNICA OFICIAL
======================================================
PRODUCTO: ${product.name}
CÓDIGO: ${product.code}
CATEGORÍA: ${product.categoryLabel}
TÍTULO: ${product.title}

DESCRIPCIÓN:
${product.description}

CARACTERÍSTICAS PRINCIPALES:
${product.features.map(f => `- ${f}`).join('\n')}

DATOS TÉCNICOS:
- pH: ${product.technicalData.pH}
- Densidad: ${product.technicalData.density}
- Aspecto: ${product.technicalData.appearance}
- Solubilidad: ${product.technicalData.solubility}
- Biodegradabilidad: ${product.technicalData.biodegradable ? 'Sí (Aprobado)' : 'Estándar'}

TABLA DE DOSIFICACIÓN SUGERIDA:
${product.dosageTable.map(d => `Suciedad ${d.dirtLevel}: Concentración ${d.concentration} | Temp: ${d.temperature} | Tiempo: ${d.contactTime}`).join('\n')}

PRESENTACIONES:
${product.presentations.map(p => `- ${p.size} (${p.packaging}) [Ref: ${p.code}]`).join('\n')}

COMPATIBILIDAD DE MATERIALES:
${product.compatibility.map(c => `- ${c}`).join('\n')}

CERTIFICACIÓN: ISO 9001:2015 - Sistema de Gestión de Calidad
Mendoza, Argentina | info@interquimica.com.ar | Tel: +54 9 261 123 4567
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IQA_${product.name}_${docType}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#09111e] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Inicio</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span>Productos</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-semibold">{product.name}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Hero Split: Product visual & Main Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900/60 to-slate-950 p-6 rounded-2xl border border-slate-800/80 relative">
              <div
                className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: product.canisterColor }}
              />

              <CanisterVisual
                name={product.name}
                badge={product.badge}
                color={product.canisterColor}
                isBag={isBag}
                className="w-48 h-60 drop-shadow-2xl"
              />

              {/* Presentation badges under visual */}
              <div className="flex items-center gap-2 mt-4">
                {product.presentations.map((p) => (
                  <span
                    key={p.size}
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700"
                  >
                    {p.size}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {product.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{product.code}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h2>
                <p className="text-base font-semibold text-blue-400 mt-1">
                  {product.title}
                </p>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Feature highlight bullet grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Strip */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-slate-800">
                <button
                  onClick={() => onRequestQuote(product)}
                  className="flex-1 min-w-[170px] flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Solicitar Cotización</span>
                </button>

                <button
                  onClick={() => handleDownloadPdf('FichaTecnica')}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
                >
                  <FileDown className="w-4 h-4 text-blue-400" />
                  <span>Ficha Técnica</span>
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 rounded-xl transition-colors border border-emerald-600/50"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Information Tabs */}
          <div>
            {/* Tabs Bar */}
            <div className="flex items-center gap-1 border-b border-slate-800 overflow-x-auto pb-1 text-xs font-semibold uppercase tracking-wider">
              <button
                onClick={() => setActiveTab('aplicaciones')}
                className={`px-4 py-2.5 transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === 'aplicaciones'
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Aplicaciones
              </button>
              <button
                onClick={() => setActiveTab('dosificacion')}
                className={`px-4 py-2.5 transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === 'dosificacion'
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Dosificación Orientativa
              </button>
              <button
                onClick={() => setActiveTab('presentaciones')}
                className={`px-4 py-2.5 transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === 'presentaciones'
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Presentaciones
              </button>
              <button
                onClick={() => setActiveTab('beneficios')}
                className={`px-4 py-2.5 transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === 'beneficios'
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Beneficios
              </button>
              <button
                onClick={() => setActiveTab('compatibilidad')}
                className={`px-4 py-2.5 transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === 'compatibilidad'
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Compatibilidad
              </button>
              <button
                onClick={() => setActiveTab('documentacion')}
                className={`px-4 py-2.5 transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === 'documentacion'
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Documentación
              </button>
            </div>

            {/* Tab Panels */}
            <div className="pt-5">
              {activeTab === 'aplicaciones' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {product.name} está especialmente formulado para ser utilizado en sistemas automáticos y manuales en una amplia variedad de aplicaciones industriales:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {product.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex flex-col items-start gap-2"
                      >
                        <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-white">{app}</h4>
                        <p className="text-xs text-slate-400">
                          Remoción profunda y prevención de redepósito de materia saponificada.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'dosificacion' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="text-xs text-slate-400">
                      Valores de referencia para sistemas CIP y lavado recirculado:
                    </p>
                    <button
                      onClick={() => onOpenDosageCalc(product)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 underline underline-offset-4"
                    >
                      <Droplets className="w-3.5 h-3.5" />
                      <span>Abrir Calculadora Automática de Dosificación</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Grado de Suciedad</th>
                          <th className="py-3 px-4">Concentración v/v</th>
                          <th className="py-3 px-4">Temperatura Óptima</th>
                          <th className="py-3 px-4">Tiempo de Contacto</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300 font-mono">
                        {product.dosageTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-sans font-semibold text-white flex items-center gap-2">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  row.dirtLevel === 'Ligera'
                                    ? 'bg-emerald-400'
                                    : row.dirtLevel === 'Media'
                                    ? 'bg-amber-400'
                                    : 'bg-rose-500'
                                }`}
                              />
                              {row.dirtLevel}
                            </td>
                            <td className="py-3.5 px-4 text-blue-400 font-bold">{row.concentration}</td>
                            <td className="py-3.5 px-4 flex items-center gap-1">
                              <Thermometer className="w-3.5 h-3.5 text-orange-400" />
                              {row.temperature}
                            </td>
                            <td className="py-3.5 px-4 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {row.contactTime}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl flex items-start gap-2.5 text-xs text-blue-200">
                    <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Enjuagar siempre con agua potable hasta alcanzar pH neutro o lectura de conductividad idéntica al agua de red antes de reiniciar la producción.
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'presentaciones' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.presentations.map((p) => (
                    <div
                      key={p.size}
                      className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl font-extrabold text-white">{p.size}</span>
                          <PackageCheck className="w-5 h-5 text-blue-400" />
                        </div>
                        <p className="text-xs text-slate-300 font-semibold mb-1">{p.packaging}</p>
                        <p className="text-[11px] font-mono text-slate-500">Ref: {p.code}</p>
                      </div>
                      <button
                        onClick={() => onRequestQuote(product, p.size)}
                        className="mt-4 w-full py-2 px-3 text-xs font-semibold text-blue-400 hover:text-white bg-blue-950/40 hover:bg-blue-600 rounded-lg transition-colors border border-blue-800/50"
                      >
                        Cotizar {p.size}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'beneficios' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl flex items-start gap-3"
                    >
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'compatibilidad' && (
                <div className="space-y-3">
                  {product.compatibility.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-300"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'documentacion' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">Ficha Técnica Oficial (TDS)</h5>
                      <p className="text-xs text-slate-400">Especificaciones fisicoquímicas y protocolos</p>
                    </div>
                    <button
                      onClick={() => handleDownloadPdf('FichaTecnica')}
                      className="py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      Descargar
                    </button>
                  </div>

                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">Hoja de Datos de Seguridad (SDS)</h5>
                      <p className="text-xs text-slate-400">Normativa SGA / GHS y primeros auxilios</p>
                    </div>
                    <button
                      onClick={() => handleDownloadPdf('HojaSeguridad')}
                      className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 border border-slate-700"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      Descargar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
