import React, { useState } from 'react';
import { Industry, Product } from '../../types.ts';
import { INDUSTRIES, PRODUCTS } from '../../data/mockData.ts';
import {
  ArrowRight,
  Factory,
  MessageCircle,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

interface IndustriasViewProps {
  selectedIndustryId?: string;
  onSelectProduct: (product: Product) => void;
  onNavigateToProducts: () => void;
  onOpenQuote: () => void;
  onOpenEscenarios: (sceneId: string) => void;
}

export const IndustriasView: React.FC<IndustriasViewProps> = ({
  selectedIndustryId = 'bodegas',
  onSelectProduct,
  onNavigateToProducts,
  onOpenQuote,
  onOpenEscenarios,
}) => {
  const [currentId, setCurrentId] = useState<string>(selectedIndustryId);

  const currentIndustry =
    INDUSTRIES.find((i) => i.id === currentId) || INDUSTRIES[0];

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hola InterQuímica Argentina, deseo solicitar asesoramiento técnico especializado para la industria ${currentIndustry.name}.`
    );
    window.open(`https://wa.me/5492611234567?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* Hero Header with Banner 1 to 6 image corresponding to active industry spanning full width */}
      <div className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-16 sm:pb-20 lg:pb-24">
        <img
          src={currentIndustry.heroImage}
          alt={currentIndustry.name}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Contrast Scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
              SOLUCIONES ESPECIALIZADAS POR INDUSTRIA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
              {currentIndustry.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {currentIndustry.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsAppChat}
                className="flex items-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
              >
                <span>HABLAR CON UN ESPECIALISTA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenEscenarios(currentIndustry.id)}
                className="py-3 px-5 text-xs font-bold uppercase tracking-wider text-blue-300 hover:text-white bg-blue-950/70 hover:bg-blue-600 border border-blue-400/40 rounded-xl transition-colors flex items-center gap-1.5 backdrop-blur-sm"
              >
                <span>Ver Planta Interactiva</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content inside standard container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Industry Tabs Selector */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 font-mono">
            Seleccioná tu sector industrial:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {INDUSTRIES.map((ind) => {
              const isSelected = ind.id === currentId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setCurrentId(ind.id)}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-blue-600 text-blue-900 shadow-md scale-[1.02]'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    <Factory className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {ind.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Industry Detail View */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                SECTOR SELECCIONADO
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                {currentIndustry.name}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                {currentIndustry.fullDescription}
              </p>
            </div>

            <button
              onClick={() => onOpenEscenarios(currentIndustry.id)}
              className="shrink-0 flex items-center gap-2 py-2.5 px-4 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Explorar Escenario 3D</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Áreas y procesos de la industria */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Áreas y procesos clave en {currentIndustry.shortName}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentIndustry.areas.map((area) => (
                <div
                  key={area.id}
                  className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 flex flex-col justify-between transition-all group shadow-xs hover:shadow-md"
                >
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-xs text-slate-700 mt-2 font-medium">
                      {area.description}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                      {area.details}
                    </p>
                  </div>

                  {/* Suggested Products list */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
                      Productos recomendados:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.suggestedProductIds.map((pId) => {
                        const prod = PRODUCTS.find((p) => p.id === pId);
                        if (!prod) return null;
                        return (
                          <button
                            key={pId}
                            onClick={() => onSelectProduct(prod)}
                            className="text-xs font-bold py-1 px-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            {prod.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action strip */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onNavigateToProducts}
              className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-md shadow-blue-600/20 flex items-center gap-2"
            >
              <span>VER PRODUCTOS RECOMENDADOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenQuote}
              className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors border border-slate-300 shadow-xs"
            >
              SOLICITAR ASESORAMIENTO TÉCNICO
            </button>
          </div>
        </div>

        {/* CTA Box "¿Tu industria tiene necesidades específicas?" */}
        <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-white border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-xl font-bold text-slate-900">
              ¿Tu industria tiene necesidades específicas?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Nuestro equipo técnico puede formular mezclas a medida y diseñar protocolos CIP adaptados a la dureza del agua y tiempos de tu ciclo.
            </p>
          </div>
          <button
            onClick={handleWhatsAppChat}
            className="shrink-0 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONTACTAR ASESOR</span>
          </button>
        </div>
      </div>
    </div>
  );
};
