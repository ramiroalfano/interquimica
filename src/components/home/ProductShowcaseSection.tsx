import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types.ts';
import { PRODUCTS } from '../../data/mockData.ts';
import { CanisterVisual } from '../CanisterVisual.tsx';
import { motion } from 'motion/react';

interface ProductShowcaseSectionProps {
  onNavigate: (view: string) => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'todos', label: 'TODOS' },
    { id: 'alcalinos', label: 'ALCALINOS' },
    { id: 'acidos', label: 'ÁCIDOS' },
    { id: 'espumigenos', label: 'ESPUMÍGENOS' },
    { id: 'desinfectantes', label: 'DESINFECTANTES' },
    { id: 'materia_prima', label: 'MATERIA PRIMA' },
  ];

  // Specific priority order matching official products catalog:
  const priorityProductIds = [
    'na45',
    'k45',
    'bio-det-na75-plus',
    'bio-det-acid',
    'bio-foam',
    'oxi-t',
    'bio-ap32',
    'bio-ap32-forte',
    'bio-foam-cl',
    'acid-c30',
    'bio-det-acid-n',
    'bio-acid-s',
    'bio-det-duo-plus',
    'bio-det-k75-plus',
    'bio-det-k45-lq',
    'bio-det-na75-lq',
    'bio-foam-acid',
    'acido-acetico-glacial',
    'acido-citrico-anhidrido',
    'ac32',
  ];

  // Deduplicate products by name
  const uniqueProducts = Array.from(
    new Map(PRODUCTS.map((p) => [p.name, p])).values()
  );

  const sortedProducts = uniqueProducts.sort((a, b) => {
    const idxA = priorityProductIds.indexOf(a.id);
    const idxB = priorityProductIds.indexOf(b.id);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.name.localeCompare(b.name);
  });

  const filteredProducts =
    selectedCategory === 'todos'
      ? sortedProducts
      : sortedProducts.filter((p) => p.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleProductClick = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      onNavigate('productos');
    }
  };

  return (
    <section className="relative w-full bg-[#030917] text-white py-12 sm:py-16 border-b border-slate-800/80 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Title, Categories and Arrow Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10"
        >
          {/* Left Column: Eyebrow, Main Title, Subtitle & Button */}
          <div className="max-w-md space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#00a2ff]">
              CATÁLOGO DE PRODUCTOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-[1.1] font-display">
              TECNOLOGÍA QUE<br />
              GARANTIZA RESULTADOS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Productos formulados para ofrecer máxima eficacia, seguridad y compatibilidad con tus procesos.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('productos')}
                className="flex items-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#0d54b3] active:bg-[#083470] rounded-md transition-all shadow-lg shadow-blue-950/40 border border-blue-400/30 cursor-pointer"
              >
                <span>VER CATÁLOGO COMPLETO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Area: Category Filter Pills + Carousel Arrows */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-4 w-full lg:w-auto">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0066cc] text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400/50'
                        : 'bg-[#061226]/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Carousel Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-[#061226] border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                aria-label="Ver productos anteriores"
                title="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-[#061226] border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                aria-label="Ver productos siguientes"
                title="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Product Cards Row / Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-slate-800 scroll-smooth snap-x snap-mandatory"
        >
          {filteredProducts.map((product, idx) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                onClick={() => handleProductClick(product)}
                className="group shrink-0 w-[275px] sm:w-[295px] lg:w-[310px] snap-start bg-[#071328]/75 hover:bg-[#0a1b38] border border-slate-700/60 hover:border-[#0088cc] rounded-xl p-4 transition-all duration-300 shadow-xl flex items-center gap-3.5 cursor-pointer"
              >
                {/* Canister Image Visual on Left */}
                <div className="w-[105px] h-[145px] shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <CanisterVisual
                    name={product.name}
                    color={product.canisterColor}
                    badge={product.badge}
                    badgeColor={product.badgeColor}
                    className="w-full h-full"
                    image={product.image || product.imageUrl}
                    isBag={product.isBag ?? product.presentations.some((p) =>
                      p.packaging.toLowerCase().includes('bolsa') || p.packaging.toLowerCase().includes('saco')
                    )}
                  />
                </div>

                {/* Product Info on Right */}
                <div className="flex-1 flex flex-col justify-between h-full min-h-[145px] py-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-wide font-display group-hover:text-[#00c8ff] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-3 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* VER MÁS CTA Link with Arrow */}
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#00a2ff] group-hover:text-[#38bdf8] transition-colors">
                      <span>VER MÁS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
