import React from 'react';
import { Product } from '../types.ts';
import { CanisterVisual } from './CanisterVisual.tsx';
import { FileText, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
  compact?: boolean;
  variant?: 'dark' | 'light';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onRequestQuote,
  compact = false,
  variant = 'light',
}) => {
  const isBag = product.id.startsWith('bio-det');
  const isLight = variant === 'light';

  if (compact) {
    return (
      <div
        onClick={() => onSelect(product)}
        className={`group flex flex-col rounded-xl p-4 transition-all cursor-pointer ${
          isLight
            ? 'bg-white border border-slate-200 hover:border-blue-500/60 hover:shadow-md'
            : 'bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-14 shrink-0">
            <CanisterVisual
              name={product.name}
              badge={product.badge}
              color={product.canisterColor}
              isBag={isBag}
              className="w-full h-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <h4
                className={`text-sm font-bold truncate transition-colors ${
                  isLight
                    ? 'text-slate-900 group-hover:text-blue-600'
                    : 'text-white group-hover:text-blue-400'
                }`}
              >
                {product.name}
              </h4>
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {product.categoryLabel}
              </span>
            </div>
            <p
              className={`text-xs line-clamp-1 mt-0.5 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {product.title}
            </p>
          </div>
          <ArrowRight
            className={`w-4 h-4 transition-all shrink-0 ${
              isLight
                ? 'text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5'
                : 'text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5'
            }`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        isLight
          ? 'bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10'
          : 'bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/30'
      }`}
    >
      {/* Product Image Stage */}
      <div
        onClick={() => onSelect(product)}
        className={`relative pt-6 pb-4 px-6 flex items-center justify-center cursor-pointer overflow-hidden ${
          isLight
            ? 'bg-gradient-to-b from-slate-100/80 via-slate-50 to-slate-100 border-b border-slate-200/80'
            : 'bg-gradient-to-b from-slate-800/40 via-slate-900/60 to-slate-950/80'
        }`}
      >
        {/* Subtle radial glow matching canister color */}
        <div
          className="absolute inset-0 opacity-15 blur-2xl group-hover:opacity-30 transition-opacity"
          style={{ backgroundColor: product.canisterColor }}
        />

        <CanisterVisual
          name={product.name}
          badge={product.badge}
          color={product.canisterColor}
          isBag={isBag}
          className="w-36 h-44 py-1"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded ${
              isLight
                ? 'bg-white/95 text-[#0b4592] border border-slate-200 shadow-xs'
                : 'bg-slate-950/90 text-blue-400 border border-slate-800'
            }`}
          >
            {product.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3
              onClick={() => onSelect(product)}
              className={`text-lg font-bold transition-colors cursor-pointer ${
                isLight
                  ? 'text-slate-900 group-hover:text-[#0b4592]'
                  : 'text-white group-hover:text-blue-400'
              }`}
            >
              {product.name}
            </h3>
            <span
              className={`text-xs font-mono ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {product.code}
            </span>
          </div>

          <p
            className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
              isLight ? 'text-[#0b4592]' : 'text-blue-400'
            }`}
          >
            {product.categoryLabel}
          </p>

          <p
            className={`text-xs line-clamp-3 leading-relaxed mb-4 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {product.description}
          </p>
        </div>

        {/* Actions */}
        <div
          className={`pt-3 flex items-center gap-2 border-t ${
            isLight ? 'border-slate-100' : 'border-slate-800/80'
          }`}
        >
          <button
            onClick={() => onSelect(product)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors border ${
              isLight
                ? 'text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border-slate-200'
                : 'text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border-slate-700/60'
            }`}
          >
            <FileText className={`w-3.5 h-3.5 ${isLight ? 'text-[#0b4592]' : 'text-blue-400'}`} />
            <span>Ver ficha</span>
          </button>

          <button
            onClick={() => onRequestQuote(product)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#0b4592] hover:bg-[#083470] rounded-lg transition-colors shadow-sm shadow-blue-950/30"
          >
            <span>Cotizar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
