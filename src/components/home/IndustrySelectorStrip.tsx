import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Industry } from '../../types.ts';
import { INDUSTRIES } from '../../data/mockData.ts';

interface IndustrySelectorStripProps {
  onNavigate: (view: string) => void;
  onSelectIndustry?: (industry: Industry) => void;
}

export const IndustrySelectorStrip: React.FC<IndustrySelectorStripProps> = ({
  onNavigate,
  onSelectIndustry,
}) => {
  const [selectedId, setSelectedId] = useState<string>('alimentos-bebidas');

  // Custom Line Art Icons exactly matching the screenshot
  const icons = {
    // 3 bottles on conveyor tray
    alimentaria: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 25h24a2 2 0 0 0 2-2v-1H2v1a2 2 0 0 0 2 2z" />
        {/* Bottle 1 */}
        <path d="M7 22v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8" />
        <path d="M8 13V8h2v5" />
        {/* Bottle 2 (Center) */}
        <path d="M14 22v-10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10" />
        <path d="M15 11V6h2v5" />
        {/* Bottle 3 */}
        <path d="M21 22v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8" />
        <path d="M22 13V8h2v5" />
      </svg>
    ),
    // Industrial cold storage / cabinet with 4 ports
    frigorifico: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="5" width="20" height="20" rx="3" />
        <circle cx="11.5" cy="11.5" r="2.5" />
        <circle cx="20.5" cy="11.5" r="2.5" />
        <circle cx="11.5" cy="18.5" r="2.5" />
        <circle cx="20.5" cy="18.5" r="2.5" />
        <path d="M8 25v3M24 25v3" />
      </svg>
    ),
    // Milk bottle with circular badge/drop
    lacteos: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 6h10M12 6V9l-3 4v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V13l-3-4V6" />
        <circle cx="16" cy="19" r="3" />
      </svg>
    ),
    // Wine bottle & flask / glass
    bodegas: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Wine Bottle */}
        <path d="M8 26h6a1 1 0 0 0 1-1V15c0-2-2-4-2-6V5h-4v4c0 2-2 4-2 6v10a1 1 0 0 0 1 1z" />
        {/* Flask / glass next to it */}
        <path d="M21 26h4a1 1 0 0 0 1-1v-5a3 3 0 0 0-2-3v-3h-2v3a3 3 0 0 0-2 3v5a1 1 0 0 0 1 1z" />
        <circle cx="23" cy="22" r="1.5" />
      </svg>
    ),
    // Brewery kettle / distillation still
    cervecerias: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 25h18v-8a5 5 0 0 0-5-5H12a5 5 0 0 0-5 5v8z" />
        {/* Top distillation column */}
        <path d="M13 12V8a3 3 0 0 1 6 0v4" />
        <path d="M11 6h10" />
        {/* Base legs */}
        <path d="M9 25v3M23 25v3M16 25v3" />
        <line x1="7" y1="18" x2="25" y2="18" />
        <circle cx="16" cy="21.5" r="1" />
      </svg>
    ),
    // Multiple gears / cogs
    otras: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Main central gear */}
        <circle cx="16" cy="14" r="5" />
        <path d="M16 5v2M16 21v2M7 14h2M23 14h2M9.6 7.6l1.4 1.4M21 19l1.4 1.4M9.6 20.4l1.4-1.4M21 9l1.4-1.4" />
        {/* Smaller satellite gears */}
        <circle cx="10" cy="25" r="2.5" />
        <circle cx="22" cy="25" r="2.5" />
        <path d="M10 21v1M10 28v1M6.5 25h1M12.5 25h1" />
        <path d="M22 21v1M22 28v1M18.5 25h1M24.5 25h1" />
      </svg>
    ),
  };

  const industryItems = [
    {
      id: 'alimentos-bebidas',
      title: 'ALIMENTARIA',
      subtitle: 'Y BEBIDAS',
      icon: icons.alimentaria,
    },
    {
      id: 'frigorificos',
      title: 'FRIGORÍFICOS',
      subtitle: null,
      icon: icons.frigorifico,
    },
    {
      id: 'lactea',
      title: 'LÁCTEOS',
      subtitle: null,
      icon: icons.lacteos,
    },
    {
      id: 'bodegas',
      title: 'BODEGAS',
      subtitle: null,
      icon: icons.bodegas,
    },
    {
      id: 'cervecerias',
      title: 'CERVECERÍAS',
      subtitle: 'Y DESTILERÍAS',
      icon: icons.cervecerias,
    },
    {
      id: 'otras',
      title: 'OTRAS',
      subtitle: 'INDUSTRIAS',
      icon: icons.otras,
    },
  ];

  const handleSelect = (itemId: string) => {
    setSelectedId(itemId);
    // Find target industry in mockData
    const target =
      INDUSTRIES.find((ind) => ind.id === itemId) ||
      INDUSTRIES.find((ind) => ind.id === 'bodegas') ||
      INDUSTRIES[0];

    if (onSelectIndustry && target) {
      onSelectIndustry(target);
    } else {
      onNavigate('industrias');
    }
  };

  const handleViewAll = () => {
    onNavigate('industrias');
  };

  return (
    <section className="w-full bg-[#030917] border-b border-slate-800/80 font-sans select-none overflow-x-auto scrollbar-thin scrollbar-thumb-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between min-w-[1100px] gap-2 lg:gap-4">
          {/* ========================================================= */}
          {/* 1. LEFT TITLE: ELEGÍ TU INDUSTRIA */}
          {/* ========================================================= */}
          <div className="flex items-center gap-3 shrink-0 pr-4 lg:pr-6 border-r border-slate-800/80">
            {/* Blue vertical accent line */}
            <div className="w-[3px] h-9 bg-[#0088cc] rounded-full shadow-[0_0_8px_rgba(0,136,204,0.8)]" />
            <div className="leading-tight">
              <span className="block text-xs font-bold text-slate-200 uppercase tracking-widest">
                ELEGÍ
              </span>
              <span className="block text-sm font-black text-white uppercase tracking-wider font-display">
                TU INDUSTRIA
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. THE 6 INDUSTRY ITEMS */}
          {/* ========================================================= */}
          <div className="flex items-center justify-between flex-1 gap-1 sm:gap-2">
            {industryItems.map((item, idx) => {
              const isSelected = selectedId === item.id;
              return (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => handleSelect(item.id)}
                    className={`group relative flex flex-col items-center justify-center py-2.5 px-3 sm:px-4 min-w-[110px] sm:min-w-[125px] rounded-lg transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border border-[#0077c8] bg-[#0077c8]/15 text-white shadow-[0_0_16px_rgba(0,119,200,0.3)] ring-1 ring-[#0077c8]/40'
                        : 'border border-transparent hover:border-slate-700/80 hover:bg-white/[0.03] text-slate-300 hover:text-white'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mb-2 transition-transform duration-200 group-hover:scale-110 ${
                        isSelected ? 'text-[#00c8ff]' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Text Labels */}
                    <div className="text-center leading-tight">
                      <p className="text-[11px] font-extrabold uppercase tracking-wider font-display">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="text-[11px] font-extrabold uppercase tracking-wider font-display">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </button>

                  {/* Vertical separator between items */}
                  {idx < industryItems.length - 1 && (
                    <div className="h-10 w-[1px] bg-slate-800/80 shrink-0 mx-1" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* 3. RIGHT TEXT & CTA LINK: VER TODAS LAS INDUSTRIAS */}
          {/* ========================================================= */}
          <div className="shrink-0 pl-4 lg:pl-6 border-l border-slate-800/80 max-w-[240px]">
            <p className="text-[11px] text-slate-300 font-normal leading-snug">
              Soluciones desarrolladas para responder a las exigencias específicas de cada industria.
            </p>
            <button
              onClick={handleViewAll}
              className="mt-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a2ff] hover:text-[#38bdf8] transition-colors cursor-pointer group"
            >
              <span>VER TODAS LAS INDUSTRIAS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
