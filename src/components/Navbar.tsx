import React, { useState } from 'react';
import {
  Search,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { INDUSTRIES } from '../data/mockData.ts';
import { Industry } from '../types.ts';
import { IqaLogo } from './IqaLogo.tsx';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onSelectIndustry: (ind: Industry) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenQuote,
  onSelectIndustry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'industrias', label: 'INDUSTRIAS', hasDropdown: true },
    { id: 'productos', label: 'PRODUCTOS' },
    { id: 'soluciones', label: 'SOLUCIONES' },
    { id: 'asistencia', label: 'ASISTENCIA TÉCNICA' },
    { id: 'nosotros', label: 'NOSOTROS' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5492611234567?text=Hola%20InterQuímica%20Argentina,%20deseo%20contactar%20a%20un%20asesor%20técnico.',
      '_blank'
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-transparent border-b border-transparent transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark / Exact IQA Logo */}
        <div
          onClick={() => onNavigate('inicio')}
          className="flex items-center cursor-pointer shrink-0 group hover:opacity-95 transition-opacity"
          title="InterQuímica Argentina - Inicio"
        >
          <IqaLogo size="md" variant="white" />
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6 text-[12px] font-bold tracking-wider text-slate-200 uppercase">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setIndustriesDropdownOpen(true)}
                  onMouseLeave={() => setIndustriesDropdownOpen(false)}
                >
                  <button
                    onClick={() => onNavigate('industrias')}
                    className={`flex items-center gap-1 py-2 hover:text-white transition-colors cursor-pointer ${
                      isActive ? 'text-blue-400 font-extrabold' : 'text-slate-200'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  {industriesDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-[#080f1d]/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      {INDUSTRIES.map((ind) => (
                        <div
                          key={ind.id}
                          onClick={() => {
                            onSelectIndustry(ind);
                            onNavigate('industrias');
                            setIndustriesDropdownOpen(false);
                          }}
                          className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 cursor-pointer transition-colors flex items-center justify-between"
                        >
                          <span>{ind.name}</span>
                          <span className="text-[10px] text-[#2c75d8] uppercase font-mono font-bold">
                            Ver
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`py-2 transition-colors relative whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#2c75d8] font-extrabold'
                    : 'hover:text-white text-slate-200'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0b4592] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Search, Request Quote) */}
        <div className="flex items-center gap-3">
          {/* Search Trigger with circular border outline */}
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-white border border-white/20 hover:border-white/50 bg-white/[0.04] hover:bg-white/[0.1] transition-all"
            title="Buscar productos e industrias"
            aria-label="Buscar productos e industrias"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Primary Action Button - darker rich navy/blue */}
          <button
            onClick={onOpenQuote}
            className="hidden sm:flex items-center gap-1.5 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#083470] active:bg-[#062450] rounded-xl transition-all shadow-md shadow-blue-950/40 whitespace-nowrap border border-blue-400/20"
          >
            <span>SOLICITAR COTIZACIÓN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070e1b]/95 backdrop-blur-lg border-b border-white/10 px-6 py-5 space-y-3 animate-in fade-in">
          <div className="flex flex-col space-y-2 text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-left transition-colors ${
                  currentView === link.id ? 'text-blue-400' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#083470] rounded-xl flex items-center justify-center gap-2 border border-blue-400/20 shadow-md"
            >
              <span>SOLICITAR COTIZACIÓN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
