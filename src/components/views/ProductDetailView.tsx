import React, { useState } from 'react';
import {
  ChevronRight,
  FileText,
  Download,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  Award,
  FlaskConical,
  Headphones,
  Truck,
  Layers,
  Cylinder,
  Workflow,
  Sparkles,
  ShieldCheck,
  Droplets,
  Package,
  Eye,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { Product } from '../../types.ts';
import { PRODUCTS } from '../../data/mockData.ts';
import { CanisterVisual } from '../CanisterVisual.tsx';
import { downloadProductPdf } from '../../utils/generatePdf.ts';

interface ProductDetailViewProps {
  product: Product;
  onNavigate: (view: string) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product, presentation?: string) => void;
  onBack: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onNavigate,
  onSelectProduct,
  onRequestQuote,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<
    'aplicaciones' | 'dosificacion' | 'especificaciones' | 'presentaciones' | 'compatibilidad' | 'documentacion'
  >('aplicaciones');

  // Related products (exclude current product)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 6);
  const [relatedIndex, setRelatedIndex] = useState<number>(0);

  const sheet = product.officialTechSheet;
  const officialName = sheet?.officialName || `${product.name} (${product.title})`;
  const date = sheet?.date || '24/02/2026';
  const properties = sheet?.properties || product.description;
  const physicochemical = sheet?.physicochemical || [
    { label: 'Aspecto', value: product.technicalData.appearance },
    { label: 'pH', value: product.technicalData.pH },
    { label: 'Densidad a 20° C', value: product.technicalData.density },
    { label: 'Solubilidad', value: product.technicalData.solubility },
  ];
  const applications = sheet?.applications || product.applications;
  const usageInstructions = sheet?.usageInstructions || (product.dosageNote || 'Preparar la dilución recomendada en agua potable y aplicar por recirculación o aspersión.');
  const compatibility = sheet?.materialCompatibility || product.compatibility.join('. ');
  const handling = sheet?.handlingAndStorage || 'Conservar en el envase original, evitando la exposición a temperaturas extremas. Consultar la ficha de datos de seguridad.';
  const packaging = sheet?.packaging || product.presentations.map((p) => `${p.packaging} (${p.size})`).join(', ');

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hola InterQuímica Argentina, deseo consultar sobre el producto ${product.name} (${officialName}) y solicitar asesoramiento técnico.`
    );
    window.open(`https://wa.me/5492614681775?text=${text}`, '_blank');
  };

  const handleDownloadPdf = () => {
    downloadProductPdf(product);
  };

  const isSolidProduct =
    product.isBag ??
    product.presentations.some(
      (p) =>
        p.packaging.toLowerCase().includes('bolsa') ||
        p.packaging.toLowerCase().includes('saco') ||
        p.packaging.toLowerCase().includes('perlas')
    );

  const hasImage = Boolean(product.image || product.imageUrl);

  return (
    <div className="w-full bg-[#030917] text-white min-h-screen font-sans selection:bg-blue-600 selection:text-white pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ========================================================= */}
        {/* 1. BREADCRUMBS & OFFICIAL VALIDITY PILL */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 font-medium">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={onBack}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Productos
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">{product.categoryLabel}</span>
            <span className="text-slate-600">/</span>
            <span className="text-[#00c8ff] font-bold">{product.name}</span>
          </nav>

          <div className="flex items-center gap-2 text-[11px] text-sky-300 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full w-fit">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            <span>Ficha Técnica Oficial InterQuímica • Vigente: {date}</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. HERO SPLIT: GALLERY (LEFT) & PRODUCT INFO (RIGHT) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Visual with Splash Background */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Main Stage with Water Splash / Clean Industrial Aura */}
            <div
              className={`relative w-full aspect-square max-w-[460px] rounded-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-2xl transition-all ${
                hasImage
                  ? 'bg-white border border-slate-200/90 shadow-slate-900/50'
                  : 'bg-gradient-to-b from-[#06142e] via-[#040e22] to-[#020713] border border-slate-800/80'
              }`}
            >
              {!hasImage && (
                <>
                  {/* Radial Cyan Glow Spotlight */}
                  <div className="absolute inset-0 bg-radial from-sky-500/15 via-transparent to-transparent pointer-events-none blur-2xl" />

                  {/* Water Splash & Droplets Effect behind Canister */}
                  <svg
                    className="absolute inset-0 w-full h-full text-sky-400/25 pointer-events-none"
                    viewBox="0 0 300 300"
                    fill="currentColor"
                  >
                    <path d="M 50 240 Q 80 180 100 210 Q 130 250 170 210 Q 210 170 240 220 Q 270 250 250 270 Q 150 290 50 240 Z" opacity="0.35" />
                    <path d="M 60 210 Q 40 160 70 140 Q 90 120 85 160 Q 80 190 60 210 Z" opacity="0.25" />
                    <path d="M 230 210 Q 260 160 235 130 Q 215 110 225 150 Q 230 180 230 210 Z" opacity="0.25" />
                    <circle cx="65" cy="120" r="4" opacity="0.6" />
                    <circle cx="85" cy="95" r="3" opacity="0.5" />
                    <circle cx="215" cy="105" r="3.5" opacity="0.6" />
                    <circle cx="240" cy="130" r="4.5" opacity="0.5" />
                    <circle cx="150" cy="70" r="3" opacity="0.4" />
                    <circle cx="180" cy="60" r="2.5" opacity="0.4" />
                    <circle cx="115" cy="80" r="2.5" opacity="0.5" />
                  </svg>
                </>
              )}

              {/* Main Display: Pure Product Canister / Sack Visual */}
              <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 flex items-center justify-center">
                <CanisterVisual
                  name={product.name}
                  color={product.canisterColor}
                  badge={product.badge}
                  className="w-full h-full"
                  image={product.image || product.imageUrl}
                  isBag={isSolidProduct}
                />
              </div>

              {/* Bottom Format Badge */}
              <div
                className={`absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono px-3 py-1.5 rounded-lg border ${
                  hasImage
                    ? 'text-slate-700 bg-slate-100/90 border-slate-200'
                    : 'text-slate-400 bg-black/60 backdrop-blur-md border-slate-800'
                }`}
              >
                <span>{isSolidProduct ? 'Formato: Sólido / Escamas' : 'Formato: Líquido Concentrado'}</span>
                <span className="text-blue-600 font-bold">{product.code}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Denomination, PDF Properties, Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-600/30 text-sky-300 border border-blue-500/40">
                  {product.badge}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700">
                  {product.categoryLabel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#00c8ff] mt-1.5 font-display">
                {officialName}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed max-w-2xl font-normal text-justify">
                {properties}
              </p>
            </div>

            {/* Quick Specs Highlight Grid from PDF */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-[#050f24]/70 border border-slate-800/90 rounded-xl p-3.5 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Aspecto</span>
                <span className="font-semibold text-white truncate block">{product.technicalData.appearance}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">pH</span>
                <span className="font-mono font-bold text-sky-400 block">{product.technicalData.pH}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Densidad</span>
                <span className="font-mono text-white block">{product.technicalData.density}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Solubilidad</span>
                <span className="font-semibold text-white truncate block">{product.technicalData.solubility}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                {/* Solicitar Cotización */}
                <button
                  onClick={() => onRequestQuote(product)}
                  className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3.5 px-5 rounded-md bg-[#0b4592] hover:bg-[#0d54b3] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-950/50 border border-blue-400/30 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>SOLICITAR COTIZACIÓN</span>
                </button>

                {/* Descargar Ficha Técnica PDF (Direct download without modal) */}
                <button
                  onClick={handleDownloadPdf}
                  className="flex-1 min-w-[220px] flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-md bg-[#0077c8] hover:bg-[#008fe6] active:bg-[#0062a3] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-sky-950/50 border border-sky-400/40 cursor-pointer group"
                  title="Descargar Ficha Técnica en PDF"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>DESCARGAR FICHA TÉCNICA (PDF)</span>
                </button>
              </div>

              {/* Hablar por WhatsApp */}
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-md bg-[#051126]/80 hover:bg-[#081a38] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-slate-700 hover:border-[#25D366]/50 cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>CONSULTAR ASESORAMIENTO TÉCNICO POR WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. TABS NAVIGATION BAR */}
        {/* ========================================================= */}
        <div className="border-b border-slate-800">
          <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-none pb-1">
            {[
              { id: 'aplicaciones', label: 'APLICACIONES' },
              { id: 'dosificacion', label: 'FORMA DE USO / DOSIFICACIÓN' },
              { id: 'especificaciones', label: 'ESPECIFICACIONES / DATOS TÉCNICOS' },
              { id: 'presentaciones', label: 'PRESENTACIONES' },
              { id: 'compatibilidad', label: 'COMPATIBILIDAD' },
              { id: 'documentacion', label: 'DOCUMENTACIÓN' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`pb-3 text-xs font-black uppercase tracking-wider transition-all relative whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-[#00c8ff]' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#00c8ff] rounded-t-full shadow-[0_0_8px_rgba(0,200,255,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. ACTIVE TAB CONTENT AREA */}
        {/* ========================================================= */}

        {/* TAB: ESPECIFICACIONES / DATOS TÉCNICOS */}
        {activeTab === 'especificaciones' && (
          <div className="bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2.5">
                  <FlaskConical className="w-5 h-5 text-sky-400" />
                  <span>Especificaciones y Propiedades Físico-Químicas</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Parámetros certificados para el producto {officialName} (Vigencia de ficha: {date}).
                </p>
              </div>

              <button
                onClick={handleDownloadPdf}
                className="flex items-center gap-2 py-2.5 px-4 rounded-lg bg-[#0077c8] hover:bg-[#008fe6] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-sky-950/40 border border-sky-400/40 cursor-pointer w-fit"
              >
                <Download className="w-4 h-4" />
                <span>DESCARGAR FICHA PDF</span>
              </button>
            </div>

            {/* Grid of properties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {physicochemical.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#071530]/80 border border-slate-800 hover:border-sky-500/40 rounded-xl p-4 transition-colors"
                >
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-100 font-mono block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800/80">
              * Estos valores no constituyen especificaciones de venta obligatoria. Los datos químico-físicos indicados representan características típicas del producto derivadas de los análisis de control de calidad bajo norma ISO 9001:2015.
            </p>
          </div>
        )}

        {/* TAB 2: APLICACIONES */}
        {activeTab === 'aplicaciones' && (
          <div className="bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-xl font-bold text-white font-display">
                  Aplicaciones en Planta
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {officialName} ha sido desarrollado con estándares específicos para optimizar el rendimiento en procesos productivos e higienización.
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1.5 rounded-lg block w-fit">
                    Código: {product.code}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="bg-[#071530]/70 border border-slate-700/60 rounded-xl p-4 flex items-start gap-3 hover:border-sky-500/50 hover:bg-[#0a1e44] transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0 text-[#00c8ff] font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-display">
                        Sector / Uso
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {app}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DOSIFICACIÓN ORIENTATIVA / FORMA DE USO */}
        {activeTab === 'dosificacion' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-fadeIn">
            {/* Left Box: Forma de uso del PDF */}
            <div className="lg:col-span-6 bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Info className="w-5 h-5 text-sky-400" />
                  <span>Forma de Uso Oficial</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Instrucciones técnicas extraídas de la Ficha Oficial IQA ({date}).
                </p>

                <div className="mt-4 p-4 rounded-xl bg-[#030919] border border-slate-800 text-xs text-slate-200 leading-relaxed whitespace-pre-line font-mono text-[12px]">
                  {usageInstructions}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-5 pt-3 border-t border-slate-800/80 italic">
                Aclarar con abundante agua potable según especificaciones higiénicas.
              </p>
            </div>

            {/* Right Box: Tabla de dosificación por suciedad */}
            <div className="lg:col-span-6 bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Tabla de Dosificación Sugerida
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Parámetros recomendados según el nivel de incrustación y tipo de circuito.
                </p>

                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-700/80 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        <th className="py-2.5 px-3">SUCIEDAD</th>
                        <th className="py-2.5 px-3">CONCENTRACIÓN</th>
                        <th className="py-2.5 px-3">TEMPERATURA</th>
                        <th className="py-2.5 px-3">TIEMPO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200 text-xs">
                      {product.dosageTable.map((row) => (
                        <tr key={row.dirtLevel} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-3 font-semibold text-white">{row.dirtLevel}</td>
                          <td className="py-3 px-3 font-mono text-sky-400">{row.concentration}</td>
                          <td className="py-3 px-3">{row.temperature}</td>
                          <td className="py-3 px-3">{row.contactTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Control de concentración</span>
                <span className="text-sky-400 font-semibold">Conductividad / Titulación</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PRESENTACIONES */}
        {activeTab === 'presentaciones' && (
          <div className="bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Presentaciones Comerciales
              </h3>
              <p className="text-xs text-slate-300">
                Formatos homologados para el almacenamiento y transporte seguro de sustancias químicas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {product.presentations.map((pres, idx) => (
                <div
                  key={idx}
                  className="bg-[#071530]/60 border border-slate-700/60 rounded-xl p-5 flex flex-col items-center text-center justify-between hover:border-sky-500/50 hover:bg-[#0a1e44] transition-all"
                >
                  <div className="h-32 flex items-center justify-center my-2">
                    <CanisterVisual
                      name={product.name}
                      color={product.canisterColor}
                      badge={product.badge}
                      className="w-20 h-28"
                      image={product.image || product.imageUrl}
                      isBag={isSolidProduct || pres.packaging.toLowerCase().includes('bolsa')}
                    />
                  </div>

                  <div className="space-y-1 mt-3 w-full">
                    <span className="text-base font-black text-white font-display block">
                      {pres.size}
                    </span>
                    <span className="text-xs text-slate-300 block">
                      {pres.packaging}
                    </span>
                    <span className="text-[10px] font-mono text-sky-400 block pt-1">
                      Ref: {pres.code}
                    </span>
                  </div>

                  <button
                    onClick={() => onRequestQuote(product, pres.size)}
                    className="mt-4 w-full py-2 px-3 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cotizar {pres.size}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: COMPATIBILIDAD */}
        {activeTab === 'compatibilidad' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-fadeIn">
            <div className="lg:col-span-6 bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Compatibilidad de Materiales</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {compatibility}
              </p>
              <div className="space-y-2 pt-2">
                {product.compatibility.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Manipulación y Almacenamiento Seguro</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {handling}
              </p>
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-relaxed">
                Utilizar siempre el equipo de protección personal (EPP) adecuado para sustancias químicas industriales: guantes de nitrilo/neopreno, gafas de protección ocular y delantal impermeable.
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: DOCUMENTACIÓN */}
        {activeTab === 'documentacion' && (
          <div className="bg-[#050f24]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Documentación Técnica y Certificaciones
              </h3>
              <p className="text-xs text-slate-300">
                Archivos oficiales disponibles para descarga inmediata o consulta de auditoría.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {/* Document 1: Ficha Técnica Oficial */}
              <div className="p-4 rounded-xl bg-[#030919] border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/40 flex items-center justify-center text-[#00c8ff] mb-2.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                    Ficha Técnica Oficial (IQA)
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Especificación completa actualizada ({date}).
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleDownloadPdf}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#0077c8] hover:bg-[#008fe6] text-white text-[11px] font-bold uppercase transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar Ficha PDF</span>
                  </button>
                </div>
              </div>

              {/* Document 2: Hoja de Seguridad SDS */}
              <div className="p-4 rounded-xl bg-[#030919] border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                    Hoja de Seguridad (SDS / FDS)
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    16 secciones según Sistema Globalmente Armonizado (SGA/GHS).
                  </p>
                </div>
                <button
                  onClick={handleDownloadPdf}
                  className="w-full py-2 px-3 rounded bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold uppercase transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar SDS</span>
                </button>
              </div>

              {/* Document 3: Certificado ISO 9001 */}
              <div className="p-4 rounded-xl bg-[#030919] border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                    Certificación de Calidad ISO 9001
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Garantía de trazabilidad y manufactura homologada.
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-2 px-3 rounded bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold uppercase transition-colors"
                >
                  Solicitar a Calidad
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. PRODUCTOS RELACIONADOS */}
        {/* ========================================================= */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Productos relacionados
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Soluciones complementarias para tu línea de producción y limpieza.
              </p>
            </div>
            <button
              onClick={() => onNavigate('productos')}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a2ff] hover:text-[#38bdf8] transition-colors cursor-pointer group"
            >
              <span>VER CATÁLOGO COMPLETO</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.slice(relatedIndex, relatedIndex + 3).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="bg-[#050f24]/80 hover:bg-[#081838] border border-slate-800/80 hover:border-[#0088cc] rounded-xl p-4 transition-all duration-300 shadow-xl flex items-center gap-3.5 cursor-pointer group"
                >
                  <div className="w-[85px] h-[120px] shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <CanisterVisual
                      name={rel.name}
                      color={rel.canisterColor}
                      badge={rel.badge}
                      className="w-full h-full"
                      image={rel.image || rel.imageUrl}
                      isBag={
                        rel.isBag ??
                        rel.presentations.some((p) =>
                          p.packaging.toLowerCase().includes('bolsa') ||
                          p.packaging.toLowerCase().includes('saco')
                        )
                      }
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-full min-h-[120px] py-1">
                    <div>
                      <h4 className="text-sm font-black text-white tracking-wide font-display group-hover:text-[#00c8ff] transition-colors line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-medium line-clamp-1">
                        {rel.title}
                      </p>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed font-normal">
                        {rel.description}
                      </p>
                    </div>

                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00a2ff] group-hover:text-[#38bdf8] transition-colors">
                        <span>Ver ficha</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {relatedProducts.length > 3 && (
              <button
                onClick={() =>
                  setRelatedIndex((prev) => (prev + 3 >= relatedProducts.length ? 0 : prev + 3))
                }
                className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#06142a] border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 shadow-xl transition-all cursor-pointer hidden lg:flex"
                title="Siguientes productos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. TRUST BADGES FOOTER */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/50 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  CALIDAD GARANTIZADA
                </h5>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Procesos certificados y materias primas de alta calidad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/50 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  FÓRMULAS OFICIALES IQA
                </h5>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Desarrolladas con laboratorio propio en Mendoza.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/50 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  ASESORAMIENTO TÉCNICO
                </h5>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Acompañamiento en cada etapa del proceso de limpieza.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/50 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <Truck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  COBERTURA NACIONAL
                </h5>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Llegamos a todo el país con logística propia y partners estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
