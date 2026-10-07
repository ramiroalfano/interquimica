import React, { useState } from 'react';
import { Product } from '../../types.ts';
import { PRODUCTS, IMAGES } from '../../data/mockData.ts';
import { ProductCard } from '../ProductCard.tsx';
import {
  Search,
  FileDown,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Award,
  Leaf,
  Factory,
} from 'lucide-react';

interface ProductosViewProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductosView: React.FC<ProductosViewProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('Todas');
  const [formatFilter, setFormatFilter] = useState('Todos');

  const filteredProducts = PRODUCTS.filter((p) => {
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Type filter
    if (typeFilter !== 'Todas') {
      if (typeFilter === 'Alcalino' && !p.category.includes('alcalino')) return false;
      if (typeFilter === 'Ácido' && !p.category.includes('acido')) return false;
      if (typeFilter === 'Espumígeno' && !p.category.includes('espumigeno')) return false;
      if (typeFilter === 'Desinfectante' && !p.category.includes('desinfectante')) return false;
    }

    // Format filter
    if (formatFilter !== 'Todos') {
      const isSolid = p.id.startsWith('bio-det');
      if (formatFilter === 'Sólido' && !isSolid) return false;
      if (formatFilter === 'Líquido' && isSolid) return false;
    }

    return true;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setTypeFilter('Todas');
    setFormatFilter('Todos');
  };

  const handleDownloadFullCatalog = () => {
    const content = `INTERQUÍMICA ARGENTINA - CATÁLOGO GENERAL DE PRODUCTOS QUÍMICOS 2026
========================================================================
Mendoza, Argentina | Tel: +54 9 261 123 4567 | info@interquimica.com.ar
Certificación ISO 9001:2015 | Registro SENASA

LISTADO DE PRODUCTOS QUÍMICOS:
${PRODUCTS.map((p) => `
------------------------------------------------------------------------
[${p.code}] ${p.name} - ${p.title}
Categoría: ${p.categoryLabel} (${p.badge})
Descripción: ${p.description}
Presentaciones: ${p.presentations.map((pr) => pr.size).join(', ')}
pH: ${p.technicalData.pH} | Densidad: ${p.technicalData.density}
`).join('\n')}
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'InterQuimica_Argentina_Catalogo_2026.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5492611234567?text=Hola%20InterQuímica,%20deseo%20consultar%20por%20un%20producto%20químico%20específico.',
      '_blank'
    );
  };

  const categoryTabs = [
    { id: 'Todas', label: 'Todos los productos', count: PRODUCTS.length },
    { id: 'Alcalino', label: 'Alcalinos', count: PRODUCTS.filter((p) => p.category.includes('alcalino')).length },
    { id: 'Ácido', label: 'Ácidos', count: PRODUCTS.filter((p) => p.category.includes('acido')).length },
    { id: 'Desinfectante', label: 'Desinfectantes', count: PRODUCTS.filter((p) => p.category.includes('desinfectante')).length },
    { id: 'Espumígeno', label: 'Espumígenos', count: PRODUCTS.filter((p) => p.category.includes('espumigeno')).length },
  ];

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 1. Full-Width Edge-to-Edge Hero Banner */}
      <div className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-16 sm:pb-20 lg:pb-24">
        {/* Full-width background image spanning 100% of viewport */}
        <img
          src={IMAGES.banner4}
          alt="Línea de producción y catálogo InterQuímica"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* High-contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />

        {/* Inner Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase">
              <span>Inicio</span>
              <span className="text-slate-500">/</span>
              <span>Productos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Catálogo de productos
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Soluciones químicas para limpieza y desinfección industrial, desarrolladas para cada necesidad. Fórmulas de alto rendimiento diseñadas para bodegas, cervecerías, frigoríficos y plantas de alimentos.
            </p>

            {/* Quick Action CTAs inside full-width banner */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadFullCatalog}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b4592] hover:bg-[#083470] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-blue-950/40 border border-blue-400/20 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Descargar Catálogo Completo</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-xl backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Consultar Asesor Técnico</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content & Filters in Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Filter and Search Bar Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categoryTabs.map((tab) => {
              const isSelected = typeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setTypeFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-[#0b4592] border-[#0b4592] text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>

          {/* Search bar and secondary filter options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-2 border-t border-slate-200/80">
            {/* Search Input */}
            <div className="lg:col-span-6 relative">
              <input
                type="text"
                placeholder="Buscar por nombre, código o aplicación (ej. CIP, Alcalino, K-300)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0b4592] focus:ring-1 focus:ring-[#0b4592] shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            {/* Format Filter */}
            <div className="lg:col-span-3">
              <select
                value={formatFilter}
                onChange={(e) => setFormatFilter(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0b4592] focus:ring-1 focus:ring-[#0b4592] shadow-xs"
              >
                <option value="Todos">Formato: Todos</option>
                <option value="Líquido">Líquidos (Bidón / IBC)</option>
                <option value="Sólido">Sólidos / Polvo (Bolsa)</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="lg:col-span-3">
              <button
                onClick={handleResetFilters}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpiar filtros</span>
              </button>
            </div>
          </div>

          {/* Active counter indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
            <span>
              Mostrando <strong className="text-slate-900 font-mono font-bold">{filteredProducts.length}</strong> de {PRODUCTS.length} productos disponibles
            </span>
            <span className="text-[11px] font-mono text-[#0b4592] font-semibold hidden sm:inline">
              Fórmulas certificadas de fabricación nacional
            </span>
          </div>
        </div>

        {/* 3. Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                variant="light"
                onSelect={onSelectProduct}
                onRequestQuote={onRequestQuote}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-16 text-center space-y-4">
            <p className="text-sm text-slate-600">
              No se encontraron productos que coincidan con los filtros seleccionados.
            </p>
            <button
              onClick={handleResetFilters}
              className="py-2.5 px-5 text-xs font-semibold text-[#0b4592] bg-blue-50/80 border border-blue-200 rounded-xl hover:bg-[#0b4592] hover:text-white transition-colors"
            >
              Restablecer búsqueda
            </button>
          </div>
        )}

        {/* 4. Bottom Trust Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-slate-200">
          <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-[#0b4592] shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-slate-900">Máxima eficacia</h5>
              <p className="text-[11px] text-slate-500">Garantía de limpieza profunda y resultados consistentes.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-slate-900">Seguridad en cada aplicación</h5>
              <p className="text-[11px] text-slate-500">Formulados bajo estrictos estándares de seguridad industrial.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-slate-900">Compromiso sustentable</h5>
              <p className="text-[11px] text-slate-500">Soluciones eficientes cuidando el medio ambiente.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <Factory className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-slate-900">Cobertura nacional</h5>
              <p className="text-[11px] text-slate-500">Logística propia y entregas programadas en planta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
