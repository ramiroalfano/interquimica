import React, { useState, useEffect } from 'react';
import { Industry, Product } from '../../types.ts';
import { INDUSTRIES, PRODUCTS, IMAGES } from '../../data/mockData.ts';
import {
  ArrowRight,
  Factory,
  ChevronRight,
  Sparkles,
  FlaskConical,
  Wine,
  Beer,
  Milk,
  Snowflake,
  Droplets,
  Package,
  Layers,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

interface IndustriasViewProps {
  selectedIndustryId?: string | null;
  onSelectProduct: (product: Product) => void;
  onNavigateToProducts: () => void;
  onOpenQuote: () => void;
  onOpenEscenarios: (sceneId: string) => void;
  onNavigate?: (view: string) => void;
  onSelectIndustry?: (ind: Industry | null) => void;
}

export const IndustriasView: React.FC<IndustriasViewProps> = ({
  selectedIndustryId = null,
  onSelectProduct,
  onNavigateToProducts,
  onOpenQuote,
  onOpenEscenarios,
  onNavigate,
  onSelectIndustry,
}) => {
  // When null: Screen 1 (Vista Principal con las 8 tarjetas de industria)
  // When string: Screen 2 (Vista detallada de la industria seleccionada con breadcrumb navegable)
  const [currentIndustryId, setCurrentIndustryId] = useState<string | null>(selectedIndustryId);
  const [selectedAreaIndex, setSelectedAreaIndex] = useState<number>(0);

  // Sync when selectedIndustryId prop changes from parent
  useEffect(() => {
    setCurrentIndustryId(selectedIndustryId);
  }, [selectedIndustryId]);

  // Scroll to top when switching between main view and specific industry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedAreaIndex(0);
  }, [currentIndustryId]);

  const currentIndustry =
    INDUSTRIES.find((i) => i.id === currentIndustryId) || INDUSTRIES[0];

  const handleSelectIndustryCard = (ind: Industry) => {
    setCurrentIndustryId(ind.id);
    onSelectIndustry?.(ind);
  };

  const handleBackToOverview = () => {
    setCurrentIndustryId(null);
    onSelectIndustry?.(null);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hola InterQuímica Argentina, deseo solicitar asesoramiento técnico especializado para la industria ${currentIndustry?.name || 'industrial'}.`
    );
    window.open(`https://wa.me/5492614681775?text=${text}`, '_blank');
  };

  const handleAdvisorContact = () => {
    window.open(
      'https://wa.me/5492614681775?text=Hola%20InterQuímica%20Argentina,%20deseo%20consultar%20por%20soluciones%20específicas%20para%20mi%20industria.',
      '_blank'
    );
  };

  // Helper function to return the matching icon for each industry card
  const getIndustryIcon = (indId: string) => {
    switch (indId) {
      case 'bodegas':
        return <Wine className="w-5 h-5 text-white" />;
      case 'cervecerias':
        return <Beer className="w-5 h-5 text-white" />;
      case 'lactea':
        return <Milk className="w-5 h-5 text-white" />;
      case 'frigorificos':
        return <Snowflake className="w-5 h-5 text-white" />;
      case 'olivicola':
        return <Droplets className="w-5 h-5 text-white" />;
      case 'alimentos-bebidas':
        return <Package className="w-5 h-5 text-white" />;
      case 'papelera':
        return <Layers className="w-5 h-5 text-white" />;
      case 'industria-general':
      default:
        return <Factory className="w-5 h-5 text-white" />;
    }
  };

  // Display card title matching the user screenshot
  const getCardTitle = (ind: Industry) => {
    if (ind.id === 'bodegas') return 'Vitivinícola';
    if (ind.id === 'cervecerias') return 'Cervecera';
    if (ind.id === 'lactea') return 'Láctea';
    if (ind.id === 'frigorificos') return 'Frigorífica';
    if (ind.id === 'olivicola') return 'Olivícola';
    if (ind.id === 'alimentos-bebidas') return 'Alimentos y bebidas';
    if (ind.id === 'papelera') return 'Papelera';
    if (ind.id === 'industria-general') return 'Industria en general';
    return ind.shortName || ind.name;
  };

  // ==========================================
  // VIEW 1: VISTA PRINCIPAL (OVERVIEW DE INDUSTRIAS)
  // (Coincide 100% con la imagen subida por el usuario)
  // ==========================================
  if (!currentIndustryId) {
    return (
      <div className="w-full bg-white text-slate-900 min-h-screen">
        {/* 1. HERO BANNER PRINCIPAL (Tanques de acero inoxidable) */}
        <section className="relative w-full overflow-hidden bg-slate-950 pt-32 pb-16 sm:pb-20 lg:pb-24">
          <img
            src={IMAGES.banner6}
            alt="Tanques industriales de acero inoxidable"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Contrast Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent" />

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
                Industrias
              </h1>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                Soluciones de limpieza y desinfección desarrolladas para cada industria. Productos eficaces, seguros y sustentables que se adaptan a los más altos estándares de calidad.
              </p>
            </div>
          </div>
        </section>

        {/* 2. CUADRÍCULA DE 8 TARJETAS DE INDUSTRIA */}
        <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-14 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                onClick={() => handleSelectIndustryCard(ind)}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-blue-500 hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Photographic Card Thumbnail */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={ind.heroImage}
                      alt={ind.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Card Header & Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Blue Square Icon Badge */}
                        <div className="w-9 h-9 rounded-xl bg-[#0b4592] flex items-center justify-center shrink-0 shadow-md shadow-blue-950/20">
                          {getIndustryIcon(ind.id)}
                        </div>

                        {/* Card Title */}
                        <h2 className="text-base font-bold text-slate-900 group-hover:text-[#0b4592] transition-colors truncate font-display">
                          {getCardTitle(ind)}
                        </h2>
                      </div>

                      {/* Right Arrow */}
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0b4592] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>

                    {/* Card Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. TARJETA INFERIOR DE ASISTENCIA: "¿Tu industria tiene necesidades específicas?" */}
          <div className="mt-12 bg-blue-50/70 border border-blue-100 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200/70 text-[#1d4ed8] flex items-center justify-center shrink-0 shadow-sm">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  ¿Tu industria tiene necesidades específicas?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                  Nuestro equipo técnico puede ayudarte a encontrar la solución ideal para tu proceso.
                </p>
              </div>
            </div>

            <button
              onClick={handleAdvisorContact}
              className="shrink-0 py-3 px-6 text-xs font-bold uppercase tracking-wider text-[#1d4ed8] hover:text-white border border-[#1d4ed8] hover:bg-[#1d4ed8] rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              CONTACTAR ASESOR →
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: VISTA DETALLADA DE LA INDUSTRIA SELECCIONADA
  // (Con Breadcrumbs navegables "Inicio > Industrias > [Industria]")
  // ==========================================
  const currentArea = currentIndustry.areas?.[selectedAreaIndex] || currentIndustry.areas?.[0];

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 1. HERO BANNER DE LA INDUSTRIA SELECCIONADA CON BREADCRUMB */}
      <section className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-14 sm:pb-18 lg:pb-20">
        <img
          src={currentIndustry.heroImage}
          alt={currentIndustry.name}
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Contrast Scrim */}
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
              onClick={handleBackToOverview}
              className="text-[#3b82f6] hover:text-blue-300 font-semibold transition-colors cursor-pointer"
            >
              Industrias
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-200 font-semibold truncate max-w-[280px] sm:max-w-none">
              {getCardTitle(currentIndustry)}
            </span>
          </nav>

          {/* Industry Title, Description and CTAs */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
              SOLUCIONES ESPECIALIZADAS POR INDUSTRIA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
              {currentIndustry.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-2xl">
              {currentIndustry.fullDescription || currentIndustry.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsAppChat}
                className="flex items-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#083470] rounded-xl transition-colors shadow-lg shadow-blue-950/40 border border-blue-400/20 cursor-pointer"
              >
                <span>HABLAR CON UN ESPECIALISTA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenEscenarios(currentIndustry.id)}
                className="py-3 px-5 text-xs font-bold uppercase tracking-wider text-blue-200 hover:text-white bg-[#07234d]/80 hover:bg-[#0b4592] border border-blue-400/30 rounded-xl transition-colors flex items-center gap-1.5 backdrop-blur-sm cursor-pointer"
              >
                <span>Ver Planta Interactiva</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL: SECTORES Y PROTOCOLOS DE LA INDUSTRIA */}
      <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-14 bg-white space-y-12">
        {/* Industry Sector Selector Buttons */}
        {currentIndustry.areas && currentIndustry.areas.length > 0 && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Sectores y etapas del proceso:
              </h2>
              <button
                onClick={handleBackToOverview}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>← Ver todas las industrias</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {currentIndustry.areas.map((area, index) => {
                const isSelected = index === selectedAreaIndex;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedAreaIndex(index)}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#0c234a] text-white border-[#0c234a] shadow-md shadow-blue-950/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs font-bold leading-snug line-clamp-2">
                      {area.name}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-mono font-bold ${
                        isSelected ? 'text-blue-400' : 'text-[#1d4ed8]'
                      }`}
                    >
                      {isSelected ? 'Activo' : 'Explorar'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Sector Protocol Details */}
        {currentArea && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider font-mono">
                  PROTOCOLO SANITARIO ESPECÍFICO
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-display">
                  {currentArea.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                  {currentArea.description}
                </p>
                {currentArea.details && (
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {currentArea.details}
                  </p>
                )}
              </div>

              <button
                onClick={handleWhatsAppChat}
                className="shrink-0 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#083470] rounded-xl transition-colors cursor-pointer"
              >
                CONSULTAR POR ESTE SECTOR
              </button>
            </div>

            {/* Suggested Products for this Sector */}
            {currentArea.suggestedProductIds && currentArea.suggestedProductIds.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 font-mono">
                  Productos químicos recomendados para {currentArea.name}:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {PRODUCTS.filter((p) => currentArea.suggestedProductIds.includes(p.id)).map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-between hover:shadow-md transition-shadow group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5
                            onClick={() => onSelectProduct(product)}
                            className="text-base font-bold text-slate-900 group-hover:text-[#0b4592] cursor-pointer transition-colors"
                          >
                            {product.name}
                          </h5>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-[#1d4ed8]">
                            {product.categoryLabel}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1d4ed8] hover:text-blue-800 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Ficha técnica</span>
                        </button>
                        <button
                          onClick={onOpenQuote}
                          className="py-1.5 px-3 text-[11px] font-bold uppercase text-[#1d4ed8] border border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          Cotizar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
