import React, { useState } from 'react';
import { Product, Industry } from '../types.ts';
import { PRODUCTS, INDUSTRIES } from '../data/mockData.ts';
import { Search, X, ChevronRight, FileText, Factory } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectIndustry: (industry: Industry) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectIndustry,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.title.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.categoryLabel.toLowerCase().includes(trimmed) ||
          p.code.toLowerCase().includes(trimmed)
      )
    : PRODUCTS.slice(0, 4);

  const matchingIndustries = trimmed
    ? INDUSTRIES.filter(
        (i) =>
          i.name.toLowerCase().includes(trimmed) ||
          i.description.toLowerCase().includes(trimmed)
      )
    : INDUSTRIES.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div
        className="w-full max-w-2xl bg-[#09111e] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por producto (Na45, Acid), industria, problema CIP o curso..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-md ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Products section */}
          {matchingProducts.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                Productos Químicos
              </span>
              <div className="space-y-1.5">
                {matchingProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-blue-500/50 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: p.canisterColor }}
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-blue-400">
                          {p.name}
                        </h4>
                        <p className="text-[11px] text-slate-400">{p.title}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries section */}
          {matchingIndustries.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-blue-400" />
                Soluciones por Industria
              </span>
              <div className="space-y-1.5">
                {matchingIndustries.map((ind) => (
                  <div
                    key={ind.id}
                    onClick={() => {
                      onSelectIndustry(ind);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-blue-500/50 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-blue-400">
                        {ind.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {ind.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {trimmed &&
            matchingProducts.length === 0 &&
            matchingIndustries.length === 0 && (
              <div className="py-12 text-center text-slate-500 text-xs">
                No se encontraron resultados para "{query}". Probá con "alcalino", "CIP", o "bodegas".
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
