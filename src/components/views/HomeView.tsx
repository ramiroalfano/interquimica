import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  MapPin,
} from 'lucide-react';
import { Product, Industry } from '../../types.ts';
import { IMAGES } from '../../data/mockData.ts';
import { ProcessOverviewSection } from '../home/ProcessOverviewSection.tsx';
import { IndustrySelectorStrip } from '../home/IndustrySelectorStrip.tsx';
import { ProductShowcaseSection } from '../home/ProductShowcaseSection.tsx';
import { LocationMap } from '../LocationMap.tsx';
import { motion, AnimatePresence } from 'motion/react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onSelectProduct?: (product: Product) => void;
  onSelectIndustry?: (ind: Industry) => void;
  onOpenQuote?: (product?: Product) => void;
  onOpenEscenarios?: (sceneId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectIndustry,
  onOpenEscenarios,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 6 Industrial Banners matching the official guide, with the main banner (Banner 6) as first slide
  const heroSlides = [
    {
      id: 'banner6',
      image: IMAGES.banner6,
      type: 'quimica',
      name: 'Banner Principal - Química que limpia. Resultados que impulsan',
    },
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
  ];

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="w-full bg-[#050b14] text-slate-100">
      {/* 1. HERO CAROUSEL ONLY (Exact reference banners 1 to 6 with identical text & CTA) */}
      <section
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-screen flex items-center overflow-hidden border-b border-slate-800 pt-16 sm:pt-20 select-none"
      >
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
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_35%] sm:object-center"
            />
            {/* Deep dark cinematic contrast scrim for enhanced readability on both mobile and desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01040a] via-[#01040a]/80 to-black/25 sm:bg-gradient-to-r sm:from-[#01040a]/98 sm:via-[#020713]/85 sm:to-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-black/30 to-black/50" />
          </div>
        ))}

        {/* Content Container (Left Aligned, Extended Width, Refined Font Size) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full">
          <div className="max-w-4xl lg:max-w-5xl space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {heroSlides[currentSlide].type === 'quimica' ? (
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-snug font-display">
                    Química que limpia.{' '}
                    <span className="text-[#0e4896] sm:text-[#1154b0] font-black">Resultados que impulsan.</span>
                  </h1>
                ) : (
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-snug font-display">
                    Nuevo concepto de <span className="text-[#0e4896] sm:text-[#1154b0] font-black">limpieza y desinfección</span>,{' '}
                    <span className="text-[#0e4896] sm:text-[#1154b0] font-black">sustentable</span> y en un único paso.
                  </h1>
                )}
              </motion.div>
            </AnimatePresence>

            {/* CTAs with entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('productos')}
                className="flex items-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#083470] active:bg-[#062450] rounded-md transition-all shadow-lg shadow-blue-950/40 border border-blue-400/20 cursor-pointer"
              >
                <span>VER PRODUCTOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('soluciones')}
                className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-white hover:text-white bg-[#0b1329]/90 hover:bg-slate-800 rounded-md transition-colors border border-slate-700/80 cursor-pointer"
              >
                CONOCER SOLUCIONES
              </button>
            </motion.div>
          </div>
        </div>

        {/* Desktop Left / Right Carousel Arrow Controls (hidden on mobile so they never overlap the text) */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10 shadow-lg cursor-pointer"
          title="Banner anterior"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10 shadow-lg cursor-pointer"
          title="Siguiente banner"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators & Integrated Mobile Control Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-2.5 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 shadow-2xl">
          {/* Mobile Previous Button (at the bottom, ergonomic and non-intrusive) */}
          <button
            onClick={prevSlide}
            className="sm:hidden p-1 text-slate-300 hover:text-white active:scale-90 transition-transform cursor-pointer"
            aria-label="Banner anterior"
            title="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-1">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-7 sm:w-8 bg-[#104a99] shadow-sm shadow-blue-500/50'
                    : 'w-2 bg-white/35 hover:bg-white/75'
                }`}
                title={slide.name}
                aria-label={`Ir al banner ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Next Button (at the bottom, ergonomic and non-intrusive) */}
          <button
            onClick={nextSlide}
            className="sm:hidden p-1 text-slate-300 hover:text-white active:scale-90 transition-transform cursor-pointer"
            aria-label="Siguiente banner"
            title="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Industrial Process Overview Section (QUÍMICOS QUE IMPULSAN PROCESOS + UN PROCESO LIMPIO, SEGURO Y EFICIENTE) */}
      <ProcessOverviewSection
        onNavigate={onNavigate}
        onOpenEscenarios={onOpenEscenarios}
      />

      {/* Elegí Tu Industria Bar */}
      <IndustrySelectorStrip
        onNavigate={onNavigate}
        onSelectIndustry={onSelectIndustry}
      />

      {/* Catálogo de Productos Showcase Carousel Section */}
      <ProductShowcaseSection
        onNavigate={onNavigate}
        onSelectProduct={onSelectProduct}
      />

      {/* Acerca de Nosotros & Planta Central / Ubicación with Scroll Reveal */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#030712] border-t border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nuestra Planta & Ubicación</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                Acerca de <span className="text-[#00c8ff]">Nosotros</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Empresa argentina líder en el desarrollo y formulación de especialidades químicas para la industria vitivinícola, alimentaria y manufacturera. Contamos con planta de producción propia y laboratorio de control de calidad certificado bajo normas ISO 9001:2015 en Mendoza.
              </p>
            </div>

            <button
              onClick={() => onNavigate('nosotros')}
              className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-900/40 cursor-pointer"
            >
              <span>Conocer más sobre nosotros</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Interactive Map with Exact Location */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <LocationMap height="460px" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
