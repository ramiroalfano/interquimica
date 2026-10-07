import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Product, Industry } from '../../types.ts';
import { IMAGES } from '../../data/mockData.ts';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onSelectProduct?: (product: Product) => void;
  onSelectIndustry?: (ind: Industry) => void;
  onOpenQuote?: (product?: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 6 Industrial Banners matching the user's guide images
  const heroSlides = [
    {
      id: 'banner1',
      image: IMAGES.banner1,
      type: 'concepto',
      name: 'Banner 1 - Frigorífico / Cámaras frigoríficas',
    },
    {
      id: 'banner2',
      image: IMAGES.banner2,
      type: 'concepto',
      name: 'Banner 2 - Bodega / Cava de barricas',
    },
    {
      id: 'banner3',
      image: IMAGES.banner3,
      type: 'concepto',
      name: 'Banner 3 - Planta olivícola / Aceite de oliva',
    },
    {
      id: 'banner4',
      image: IMAGES.banner4,
      type: 'concepto',
      name: 'Banner 4 - Embotellado de bebidas',
    },
    {
      id: 'banner5',
      image: IMAGES.banner5,
      type: 'concepto',
      name: 'Banner 5 - Operario sanitización en tanques',
    },
    {
      id: 'banner6',
      image: IMAGES.banner6,
      type: 'quimica',
      name: 'Banner 6 - Cervecería y destilería',
    },
  ];

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="w-full bg-[#050b14] text-slate-100">
      {/* 1. HERO CAROUSEL ONLY (Exact reference banners 1 to 6 with identical text & CTA) */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-slate-800 pt-20">
        {/* Background Images Carousel (Banners 1 to 6) */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.name}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Cinematic contrast scrim from left to transparent on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-black/30" />
          </div>
        ))}

        {/* Content Container (Left Aligned, Identical Typography) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-2xl space-y-8">
            {heroSlides[currentSlide].type === 'quimica' ? (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-display">
                Química que limpia.<br />
                <span className="text-blue-500">Resultados que impulsan.</span>
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-display">
                Nuevo concepto<br />
                de <span className="text-blue-500">limpieza y desinfección</span>,<br />
                <span className="text-blue-500">sustentable</span><br />
                y en un único paso.
              </h1>
            )}

            {/* CTAs identical to screenshots */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('productos')}
                className="flex items-center gap-2 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-lg shadow-blue-600/30"
              >
                <span>VER PRODUCTOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('soluciones')}
                className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white hover:text-white bg-[#0b1329]/90 hover:bg-slate-800 rounded-md transition-colors border border-slate-700/80"
              >
                CONOCER SOLUCIONES
              </button>
            </div>
          </div>
        </div>

        {/* Left / Right Carousel Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10"
          title="Banner anterior"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10"
          title="Siguiente banner"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators (6 Banners) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-7 bg-blue-500 shadow-sm shadow-blue-500/50' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              title={slide.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
