import React, { useState, useEffect } from 'react';
import { Product } from '../../types.ts';
import { PRODUCTS, IMAGES } from '../../data/mockData.ts';
import { CanisterVisual } from '../CanisterVisual.tsx';
import {
  FileText,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Droplets,
  FlaskConical,
  Headphones,
  ChevronRight,
  Sparkles,
  Layers,
  TestTube,
} from 'lucide-react';

// High-definition generated images matching the user reference
import lineAlcalinoImg from '../../assets/images/line_alcalino_water_1791474358377.jpg';
import lineDesinfectanteImg from '../../assets/images/line_desinfectante_bubbles_1791474368560.jpg';
import lineDetergenteImg from '../../assets/images/line_detergente_drops_1791474378252.jpg';
import lineAcidoImg from '../../assets/images/line_acido_liquid_1791474387353.jpg';
import lineEspumaImg from '../../assets/images/line_espuma_foam_1791474396152.jpg';
import lineMateriaPrimaImg from '../../assets/images/line_materia_prima_powder_1791474405339.jpg';

interface ProductLineDef {
  id: string;
  title: string;
  heroTitle: string;
  shortDesc: string;
  fullDesc: string;
  categoryTag: string;
  image: string;
  icon: React.ReactNode;
  productIds: string[];
}

export const PRODUCT_LINES: ProductLineDef[] = [
  {
    id: 'limpiadores-desinfectantes-alcalinos',
    title: 'Limpiadores y desinfectantes alcalinos',
    heroTitle: 'LIMPIADORES Y DESINFECTANTES ALCALINOS',
    shortDesc: 'Potentes soluciones para remover grasas, aceites y suciedad orgánica en equipos y superficies.',
    fullDesc:
      'Formulaciones de alta performance desarrolladas para remover suciedad orgánica, grasas y residuos difíciles en equipos, superficies, tanques y sistemas CIP.',
    categoryTag: 'LIMPIADOR/DESINFECTANTE ALCALINO SÓLIDO',
    image: lineAlcalinoImg,
    icon: <FlaskConical className="w-4 h-4" />,
    productIds: ['bio-det-duo-plus', 'bio-det-k75-plus', 'bio-det-na75-plus'],
  },
  {
    id: 'desinfectantes-liquidos',
    title: 'Desinfectantes líquidos',
    heroTitle: 'DESINFECTANTES LÍQUIDOS',
    shortDesc: 'Fórmulas de amplio espectro que eliminan microorganismos patógenos y garantizan condiciones higiénicas.',
    fullDesc:
      'Fórmulas de amplio espectro a base de ácido peracético, amonios cuaternarios y cloro estabilizado que eliminan microorganismos patógenos y garantizan inocuidad microbiológica total.',
    categoryTag: 'DESINFECTANTE LÍQUIDO',
    image: lineDesinfectanteImg,
    icon: <Sparkles className="w-4 h-4" />,
    productIds: ['oxi-t', 'sanitex-forte', 'clor-liq-100'],
  },
  {
    id: 'detergentes-alcalinos-liquidos',
    title: 'Detergentes alcalinos líquidos',
    heroTitle: 'DETERGENTES ALCALINOS LÍQUIDOS',
    shortDesc: 'Detergentes de alta alcalinidad para limpieza profunda en procesos CIP y superficies.',
    fullDesc:
      'Soluciones alcalinas líquidas de alto poder saponificante y secuestrantes quelantes, formuladas para recirculación en sistemas CIP y desengrase pesado.',
    categoryTag: 'DETERGENTE ALCALINO LÍQUIDO',
    image: lineDetergenteImg,
    icon: <Droplets className="w-4 h-4" />,
    productIds: ['na45', 'k45', 'na75-plus'],
  },
  {
    id: 'limpiadores-acidos-liquidos',
    title: 'Limpiadores ácidos líquidos',
    heroTitle: 'LIMPIADORES ÁCIDOS LÍQUIDOS',
    shortDesc: 'Soluciones ácidas para remover sarro, depósitos minerales y óxidos con máxima eficacia.',
    fullDesc:
      'Formulaciones a base de ácidos fosfórico y nítrico para disolver piedra de leche, bitartratos, incrustaciones minerales inorgánicas y pasivar acero inoxidable.',
    categoryTag: 'LIMPIADOR ÁCIDO LÍQUIDO',
    image: lineAcidoImg,
    icon: <TestTube className="w-4 h-4" />,
    productIds: ['acid', 'acid-c30', 'ac32'],
  },
  {
    id: 'limpiadores-desinfectantes-por-espuma',
    title: 'Limpiadores y desinfectantes por espuma',
    heroTitle: 'LIMPIADORES Y DESINFECTANTES POR ESPUMA',
    shortDesc: 'Fórmulas espumantes que aseguran contacto prolongado y máxima adherencia.',
    fullDesc:
      'Detergentes espumantes de alta persistencia vertical y adherencia para paredes, cintas transportadoras, exteriores de tanques y salas de desposte o envasado.',
    categoryTag: 'LIMPIADOR ESPUMÍGENO',
    image: lineEspumaImg,
    icon: <Layers className="w-4 h-4" />,
    productIds: ['foam-plus', 'foam-clor-20', 'foam-acid-15'],
  },
  {
    id: 'materia-prima',
    title: 'Materia Prima',
    heroTitle: 'MATERIA PRIMA',
    shortDesc: 'Insumos químicos de calidad para la formulación y desarrollo de soluciones industriales.',
    fullDesc:
      'Insumos químicos de máxima pureza analítica para formulaciones industriales, corrección de pH, potabilización y requerimientos productivos especiales.',
    categoryTag: 'MATERIA PRIMA INDUSTRIAL',
    image: lineMateriaPrimaImg,
    icon: <Leaf className="w-4 h-4" />,
    productIds: ['soda-caustica-50', 'acido-fosforico-85', 'hipoclorito-sodio-100'],
  },
];

interface ProductosViewProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product?: Product) => void;
  onNavigate?: (view: string) => void;
}

export const ProductosView: React.FC<ProductosViewProps> = ({
  onSelectProduct,
  onRequestQuote,
  onNavigate,
}) => {
  // When null: Screen 1 (Explorá nuestra línea de productos)
  // When string: Screen 2 (Categorías en sidebar + Grid de productos de la línea seleccionada)
  const [selectedLineId, setSelectedLineId] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'name-asc' | 'name-desc'>('name-asc');

  // Scroll to top when switching between screens or lines
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedLineId]);

  const activeLine = PRODUCT_LINES.find((l) => l.id === selectedLineId) || PRODUCT_LINES[0];

  // Get products corresponding to current line
  const currentLineProducts = PRODUCTS.filter((p) =>
    activeLine.productIds.includes(p.id)
  ).sort((a, b) => {
    if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  const handleWhatsAppAdvisor = () => {
    window.open(
      'https://wa.me/5492611234567?text=Hola%20InterQuímica%20Argentina,%20deseo%20contactar%20a%20un%20asesor%20técnico%20para%20mi%20planta.',
      '_blank'
    );
  };

  // ==========================================
  // VIEW 1: OVERVIEW OF ALL PRODUCT LINES
  // (Matches Screenshot 1 exactly)
  // ==========================================
  if (!selectedLineId) {
    return (
      <div className="w-full bg-[#050b14] text-slate-100 min-h-screen">
        {/* 1. HERO BANNER (Operario sanitizando tanque con espuma) */}
        <section className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] overflow-hidden bg-slate-950 flex items-center">
          <img
            src={IMAGES.banner5}
            alt="Operario de sanitización con espuma en tanque industrial"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Contrast Scrim Overlay from dark left to transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent" />

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-16">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-display">
                Productos diseñados
                <br />
                para un desempeño superior
              </h1>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                Fórmulas de alta tecnología para garantizar limpieza, desinfección y eficiencia en cada proceso industrial.
              </p>
              <div>
                <button
                  onClick={() => onRequestQuote()}
                  className="inline-flex items-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#083470] active:bg-[#062450] rounded-xl transition-all shadow-lg shadow-blue-950/50 cursor-pointer"
                >
                  <span>SOLICITAR ASESORAMIENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPLORÁ NUESTRA LÍNEA DE PRODUCTOS */}
        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 bg-[#060f1d] border-t border-slate-800/80">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
                NUESTRA LÍNEA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-display">
                Explorá nuestra línea
                <br />
                de productos
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
                Desarrollamos soluciones químicas innovadoras que combinan rendimiento, seguridad y sustentabilidad para cada necesidad de limpieza y desinfección.
              </p>
              <button
                onClick={() => setSelectedLineId('limpiadores-desinfectantes-alcalinos')}
                className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>VER TODA LA LÍNEA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 6 Product Line Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PRODUCT_LINES.map((line) => (
              <div
                key={line.id}
                onClick={() => setSelectedLineId(line.id)}
                className="group bg-[#0c1a2f] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-950/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Photographic Card Thumbnail */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                    <img
                      src={line.image}
                      alt={line.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2f] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2.5">
                    {/* Small Icon Badge */}
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      {line.icon}
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {line.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                      {line.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="px-4 pb-4 pt-1">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-400 group-hover:text-blue-300 uppercase tracking-wider transition-colors">
                    <span>VER PRODUCTOS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 4 Trust Badges (Horizontal Dark Strip) */}
          <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Alta eficacia comprobada</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Resultados garantizados en cada aplicación.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Desarrollo e innovación</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Fórmulas propias adaptadas a cada industria.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sustentabilidad</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Compromiso con el cuidado del ambiente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Soporte técnico especializado</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Acompañamiento profesional en todo el proceso.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: DETAILED PRODUCT LINE WITH SIDEBAR
  // (Matches Screenshot 2 exactly)
  // ==========================================
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 1. HERO BANNER WITH NAVIGABLE BREADCRUMB (Cervecería / Tanques de acero) */}
      <section className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-14 sm:pb-18 lg:pb-20">
        <img
          src={IMAGES.banner6}
          alt={activeLine.title}
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Navigable Breadcrumb Buttons */}
          <nav
            aria-label="Migas de pan"
            className="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-300 mb-6"
          >
            <button
              onClick={() => onNavigate?.('inicio')}
              className="hover:text-white transition-colors cursor-pointer text-slate-300"
            >
              Inicio
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <button
              onClick={() => setSelectedLineId(null)}
              className="text-[#3b82f6] hover:text-blue-300 font-semibold transition-colors cursor-pointer"
            >
              Productos
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-200 font-semibold truncate max-w-[280px] sm:max-w-none">
              {activeLine.title}
            </span>
          </nav>

          {/* Line Title and Description */}
          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase font-display">
              {activeLine.heroTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-2xl">
              {activeLine.fullDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN BODY (Sidebar Categories + Product Grid) */}
      <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-14 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR: CATEGORÍAS DE PRODUCTOS */}
          <aside className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-3.5 font-mono">
                CATEGORÍAS DE PRODUCTOS
              </h2>

              <div className="space-y-1.5">
                {PRODUCT_LINES.map((line) => {
                  const isActive = line.id === selectedLineId;
                  return (
                    <button
                      key={line.id}
                      onClick={() => setSelectedLineId(line.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#0c234a] text-white shadow-md'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <span className={`shrink-0 ${isActive ? 'text-blue-400' : 'text-[#2563eb]'}`}>
                          {line.icon}
                        </span>
                        <span className="leading-snug truncate">{line.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-white translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Help Card: "¿Necesitás ayuda?" */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100/90 text-[#1d4ed8] flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">¿Necesitás ayuda?</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Nuestro equipo técnico puede asesorarte para encontrar el producto ideal para tu proceso.
                </p>
              </div>
              <button
                onClick={handleWhatsAppAdvisor}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d4ed8] hover:text-blue-800 uppercase tracking-wide group cursor-pointer pt-1"
              >
                <span>CONTACTAR ASESOR</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT: PRODUCTS GRID */}
          <section className="lg:col-span-9 space-y-6">
            {/* Header Toolbar: Products count + Sort dropdown */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563eb]">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <span>{currentLineProducts.length} productos disponibles</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Ordenar por</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'name-asc' | 'name-desc')}
                  className="text-xs font-semibold bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="name-asc">Nombre (A-Z)</option>
                  <option value="name-desc">Nombre (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Products Grid (3 items per row on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentLineProducts.map((product) => {
                const isSolid =
                  product.id.startsWith('bio-det') ||
                  product.categoryLabel.toLowerCase().includes('sólido') ||
                  product.category === 'materia_prima';

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                  >
                    <div>
                      {/* Product Realistic Packaging Stage */}
                      <div
                        onClick={() => onSelectProduct(product)}
                        className="h-60 sm:h-64 flex items-center justify-center p-3 mb-4 bg-slate-50/70 rounded-xl cursor-pointer group-hover:bg-blue-50/30 transition-colors"
                        title={`Ver detalles de ${product.name}`}
                      >
                        <CanisterVisual
                          name={product.name}
                          badge={product.badge}
                          color={product.canisterColor}
                          isBag={isSolid}
                          className="w-44 h-56"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="space-y-2 mb-6">
                        <h3
                          onClick={() => onSelectProduct(product)}
                          className="text-lg font-black text-slate-900 group-hover:text-[#0b4592] transition-colors cursor-pointer font-display"
                        >
                          {product.name}
                        </h3>
                        <p className="text-[11px] font-bold tracking-wider text-[#1d4ed8] uppercase font-mono">
                          {activeLine.categoryTag}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] hover:text-blue-800 transition-colors cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Ver ficha técnica</span>
                      </button>
                      <button
                        onClick={() => onRequestQuote(product)}
                        className="py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#1d4ed8] hover:text-white border border-[#1d4ed8] hover:bg-[#1d4ed8] rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-sm hover:shadow"
                      >
                        SOLICITAR COTIZACIÓN
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom 3 Trust Cards (Matches Screenshot 2) */}
            <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-[#1d4ed8] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Máxima eficacia</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Fórmulas desarrolladas para garantizar limpieza profunda y resultados consistentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-[#1d4ed8] shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Seguridad en cada aplicación</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Productos formulados bajo estrictos estándares de calidad y seguridad industrial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-[#1d4ed8] shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Compromiso sustentable</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Desarrollamos soluciones eficientes cuidando el medio ambiente y los recursos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
