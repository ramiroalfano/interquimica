import React, { useState } from 'react';
import { InteractiveScene, Hotspot, Product } from '../types.ts';
import { INTERACTIVE_SCENES, PRODUCTS } from '../data/mockData.ts';
import { CanisterVisual } from './CanisterVisual.tsx';
import {
  MousePointerClick,
  FileDown,
  MessageCircle,
  X,
  Layers,
  Flame,
  Workflow,
  Cylinder,
  Package,
  Snowflake,
  Scissors,
  Activity,
  Truck,
  Droplet,
  RotateCw,
  Wine,
  Grid,
  ChevronRight,
  Headphones,
  ClipboardList,
  FileText,
  MapPin,
  Sparkles,
  Download,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';

interface InteractiveSceneViewerProps {
  initialSceneId?: string;
  onSelectProduct: (product: Product) => void;
  onNavigateToProducts: () => void;
}

export const InteractiveSceneViewer: React.FC<InteractiveSceneViewerProps> = ({
  initialSceneId = 'frigorificos',
  onSelectProduct,
  onNavigateToProducts,
}) => {
  const [selectedSceneId, setSelectedSceneId] = useState<string>(initialSceneId);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentScene =
    INTERACTIVE_SCENES.find((s) => s.id === selectedSceneId) || INTERACTIVE_SCENES[0];

  // If selectedHotspot belongs to currentScene, keep it; otherwise default to "recepcion-carne" or first hotspot
  const activeHotspot: Hotspot | null =
    selectedHotspot && currentScene.hotspots.some((h) => h.id === selectedHotspot.id)
      ? selectedHotspot
      : currentScene.hotspots.find((h) => h.id === 'recepcion-carne') ||
        (currentScene.hotspots.length > 0 ? currentScene.hotspots[0] : null);

  const handleSceneChange = (sceneId: string) => {
    setSelectedSceneId(sceneId);
    const targetScene = INTERACTIVE_SCENES.find((s) => s.id === sceneId);
    if (targetScene && targetScene.hotspots.length > 0) {
      const preferred =
        targetScene.hotspots.find((h) => h.id === 'recepcion-carne') || targetScene.hotspots[0];
      setSelectedHotspot(preferred);
    } else {
      setSelectedHotspot(null);
    }
  };

  const getHotspotIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-4 h-4" />;
      case 'Snowflake':
        return <Snowflake className="w-4 h-4" />;
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Grid':
        return <Grid className="w-4 h-4" />;
      case 'RotateCw':
        return <RotateCw className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4" />;
      case 'Cylinder':
        return <Cylinder className="w-4 h-4" />;
      case 'Bottle':
        return <Package className="w-4 h-4" />;
      case 'Droplet':
        return <Droplet className="w-4 h-4" />;
      case 'Wine':
      case 'Barrel':
        return <Wine className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const handleDownload = (filename: string, title: string) => {
    const content = `INTERQUÍMICA ARGENTINA - PROTOCOLO DE HIGIENE INDUSTRIAL
============================================================
DOCUMENTO: ${title}
SECTOR INDUSTRIAL: ${currentScene.name}
EQUIPO / ÁREA: ${activeHotspot?.name || 'Proceso'}
CÓDIGO OPERATIVO: ${activeHotspot?.code || 'IQA-SOP-01'}

PROBLEMA DE BASE:
${activeHotspot?.commonProblem || ''}

SOLUCIÓN QUÍMICA RECOMENDADA:
${activeHotspot?.recommendedSolution || ''}

PRODUCTOS HOMOLOGADOS:
${activeHotspot?.suggestedProductIds.join(', ')}

NORMAS Y CERTIFICACIONES:
- Cumple con estándares de Gestión de Calidad ISO 9001:2015
- Habilitación SENASA para plantas de alimentos y bebidas

Consultas técnicas: soporte@interquimica.com.ar | Tel: +54 9 261 123 4567
Mendoza, Argentina
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.replace('.pdf', '.txt');
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleWhatsAppChat = () => {
    if (!activeHotspot) return;
    const msg = encodeURIComponent(
      `Hola equipo técnico de InterQuímica Argentina, estoy revisando el sector ${activeHotspot.name} de ${currentScene.name} y necesito asesoramiento sobre la solución recomendada.`
    );
    window.open(`https://wa.me/5492611234567?text=${msg}`, '_blank');
  };

  // Other scenes for the bottom row
  const otherScenes = INTERACTIVE_SCENES.filter((s) => s.id !== selectedSceneId);

  return (
    <div className="w-full bg-[#030816] text-slate-100 pt-24 pb-16 font-sans selection:bg-blue-600 selection:text-white">
      <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-8 space-y-8">
        {/* ========================================================= */}
        {/* 1. TOP BAR: TITLE + GUIDANCE PILLS + 5 INDUSTRY SELECTOR CARDS */}
        {/* ========================================================= */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-2">
          {/* Left Title & Instructions */}
          <div className="max-w-xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] font-display">
              Escenarios<br />
              industriales interactivos
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Explorá cada industria y hacé clic en las áreas del proceso para descubrir problemas habituales, soluciones recomendadas, productos y protocolos de aplicación.
            </p>

            {/* Helper Guidance Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-7 h-7 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                  <MousePointerClick className="w-3.5 h-3.5" />
                </span>
                <span>Hacé clic en un sector</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-7 h-7 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                  <Layers className="w-3.5 h-3.5" />
                </span>
                <span>Explorá cada etapa del proceso</span>
              </div>
            </div>
          </div>

          {/* Right Top Industry Selector Cards Row (5 Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full xl:w-auto xl:max-w-3xl overflow-x-auto pb-1">
            {INTERACTIVE_SCENES.map((scene) => {
              const isSelected = scene.id === selectedSceneId;
              return (
                <button
                  key={scene.id}
                  onClick={() => handleSceneChange(scene.id)}
                  className={`relative group flex flex-col text-left p-2.5 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'bg-[#0077c8]/15 border-[#0077c8] shadow-[0_0_16px_rgba(0,119,200,0.45)] ring-1 ring-[#0077c8]'
                      : 'bg-[#051126]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#081a38]'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-16 sm:h-18 rounded-lg overflow-hidden mb-2 bg-slate-900">
                    <img
                      src={scene.bgImage}
                      alt={scene.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Active Icon Badge if selected */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-blue-600 border border-white/60 flex items-center justify-center text-white shadow-md">
                        <Snowflake className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="leading-tight">
                    <h3
                      className={`text-xs font-bold font-display line-clamp-1 ${
                        isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}
                    >
                      {scene.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 font-normal leading-tight">
                      {scene.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. EXPANDED PANORAMIC VIEWPORT (LEFT) & DETAIL PANEL (RIGHT) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Panoramic Stage with Hotspot Overlay (Takes 75% on desktop xl/2xl) */}
          <div className="lg:col-span-8 xl:col-span-9 2xl:col-span-9 relative bg-slate-950 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl h-[640px] sm:h-[740px] lg:h-[840px] xl:h-[920px] 2xl:h-[980px]">
            {/* Floating Viewport Controls: Zoom In / Zoom Out / Reset / Maximize */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-[#030919]/90 border border-slate-700/80 rounded-xl p-1.5 shadow-2xl backdrop-blur-md">
              <button
                onClick={() => setZoomLevel((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                disabled={zoomLevel <= 1}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Alejar (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="px-2 py-0.5 rounded text-[11px] font-mono font-bold text-sky-400 hover:bg-slate-800 transition-colors"
                title="Restablecer zoom a 100%"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.min(1.75, Number((z + 0.25).toFixed(2))))}
                disabled={zoomLevel >= 1.75}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Acercar (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-slate-700 mx-0.5" />
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                title="Pantalla completa / Vista ampliada"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>
            </div>

            <div
              className="relative w-full h-full select-none overflow-hidden transition-transform duration-300 origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {/* Background Panoramic Facility Photo - Expanded and High-Res */}
              <img
                src={currentScene.bgImage}
                alt={currentScene.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

              {/* Hotspots Overlay */}
              {currentScene.hotspots.map((spot) => {
                const isActive = activeHotspot?.id === spot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="relative flex flex-col items-center group cursor-pointer">
                      {/* Hotspot Pill Badge Button */}
                      <button
                        onClick={() => setSelectedHotspot(spot)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shadow-2xl backdrop-blur-md mb-2 ${
                          isActive
                            ? 'bg-[#0070ba] text-white border-2 border-[#00c8ff] shadow-[0_0_24px_rgba(0,200,255,0.85)] scale-105 ring-2 ring-white/40'
                            : 'bg-[#030919]/90 text-slate-100 border border-slate-700/90 hover:border-sky-400 hover:text-white hover:bg-[#071938]'
                        }`}
                      >
                        <span className={isActive ? 'text-white' : 'text-slate-300'}>
                          {getHotspotIcon(spot.iconName)}
                        </span>
                        <span>{spot.name}</span>
                      </button>

                      {/* Glowing Target Ring + Pulsing Dot Pin on floor/machinery */}
                      <div
                        onClick={() => setSelectedHotspot(spot)}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        {/* Target Circle for Active Pin */}
                        {isActive && (
                          <span className="absolute w-8 h-8 rounded-full border-2 border-[#00c8ff] ring-4 ring-[#00c8ff]/30 animate-pulse pointer-events-none" />
                        )}

                        {/* Ping Ripple */}
                        <span
                          className={`absolute w-6 h-6 rounded-full ${
                            isActive
                              ? 'bg-sky-400/60 animate-ping'
                              : 'bg-sky-500/30 group-hover:animate-ping'
                          }`}
                        />

                        {/* Center Pin Button */}
                        <span
                          className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                            isActive
                              ? 'bg-[#0077c8] border-white shadow-[0_0_12px_rgba(0,200,255,1)] scale-110'
                              : 'bg-blue-500 border-white shadow-md'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detail Side Panel (Col 4 on lg, Col 3 on xl/2xl) */}
          <div className="lg:col-span-4 xl:col-span-3 2xl:col-span-3 bg-[#050f24]/95 border border-slate-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md h-full min-h-[640px] lg:min-h-[840px] xl:min-h-[920px]">
            {activeHotspot ? (
              <div className="space-y-5">
                {/* Header with Hotspot Icon Badge, Name & Close */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-[#00c8ff] shadow-sm">
                      {getHotspotIcon(activeHotspot.iconName)}
                    </span>
                    <h2 className="text-base sm:text-lg font-black text-white font-display leading-tight">
                      {activeHotspot.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                    title="Cerrar panel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Section 1: PROBLEMA HABITUAL */}
                <div className="space-y-1.5">
                  <span className="text-xs font-black text-white uppercase tracking-wider block font-display">
                    PROBLEMA HABITUAL
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {activeHotspot.commonProblem}
                  </p>
                </div>

                {/* Section 2: SOLUCIÓN RECOMENDADA */}
                <div className="space-y-1.5">
                  <span className="text-xs font-black text-white uppercase tracking-wider block font-display">
                    SOLUCIÓN RECOMENDADA
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {activeHotspot.recommendedSolution}
                  </p>
                </div>

                {/* Section 3: PRODUCTOS SUGERIDOS */}
                <div className="space-y-2">
                  <span className="text-xs font-black text-white uppercase tracking-wider block font-display">
                    PRODUCTOS SUGERIDOS
                  </span>
                  <div className="space-y-2">
                    {activeHotspot.suggestedProductIds.map((pid) => {
                      const prod = PRODUCTS.find((p) => p.id === pid);
                      if (!prod) return null;
                      return (
                        <div
                          key={prod.id}
                          onClick={() => onSelectProduct(prod)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#030919] hover:bg-[#071630] border border-slate-800 hover:border-[#0088cc] transition-all cursor-pointer group shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            {/* Small Canister Visual */}
                            <div className="w-8 h-10 flex items-center justify-center shrink-0">
                              <CanisterVisual
                                name={prod.name}
                                color={prod.canisterColor}
                                badge={prod.badge}
                                className="w-full h-full scale-90"
                              />
                            </div>
                            <div className="leading-tight">
                              <span className="text-xs font-bold text-white group-hover:text-[#00c8ff] transition-colors block">
                                {prod.name}
                              </span>
                              <span className="text-[11px] text-slate-400 line-clamp-1 block mt-0.5">
                                {prod.description}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section 4: DESCARGAS */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-black text-white uppercase tracking-wider block font-display">
                    DESCARGAS
                  </span>
                  <div className="space-y-1.5">
                    {activeHotspot.downloads.map((d) => (
                      <button
                        key={d.title}
                        onClick={() => handleDownload(d.filename, d.title)}
                        className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-[#030919] hover:bg-[#071630] border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                      >
                        <span className="truncate pr-2">{d.title}</span>
                        <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 5: Primary Action Button */}
                <div className="pt-2">
                  <button
                    onClick={onNavigateToProducts}
                    className="w-full py-3 px-4 rounded-md bg-[#0b4592] hover:bg-[#0d54b3] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg border border-blue-400/30 cursor-pointer"
                  >
                    VER PRODUCTOS
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-3">
                <MousePointerClick className="w-10 h-10 text-sky-400 animate-bounce" />
                <h3 className="text-base font-bold text-white font-display">
                  Seleccioná un sector del proceso
                </h3>
                <p className="text-xs text-slate-400">
                  Hacé clic en cualquiera de los puntos señalizados en la imagen para ver los problemas habituales, soluciones y productos recomendados.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. LOWER SECTION: "Otros escenarios" (4 Panoramic Cards) */}
        {/* ========================================================= */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold text-white font-display">
            Otros escenarios
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherScenes.map((scene) => (
              <div
                key={scene.id}
                onClick={() => {
                  handleSceneChange(scene.id);
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className="relative group aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 hover:border-[#0088cc] shadow-xl transition-all duration-300 cursor-pointer bg-slate-950"
              >
                {/* Background Image */}
                <img
                  src={scene.bgImage}
                  alt={scene.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Hotspot Glowing Dot in the scene preview */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <span className="absolute w-5 h-5 rounded-full bg-blue-400/40 animate-ping" />
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_8px_rgba(0,200,255,1)]" />
                </div>

                {/* Badge on Bottom Left */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-sky-400/50 transition-colors">
                    <span className="text-[#00c8ff]">
                      {scene.id === 'bodegas' && <Wine className="w-3.5 h-3.5" />}
                      {scene.id === 'cervecerias' && <Flame className="w-3.5 h-3.5" />}
                      {scene.id === 'olivicola' && <Droplet className="w-3.5 h-3.5" />}
                      {scene.id === 'alimentaria' && <Package className="w-3.5 h-3.5" />}
                    </span>
                    <span className="text-xs font-bold text-white font-display">
                      {scene.name}
                    </span>
                    <span className="text-[10px] text-slate-300 hidden sm:inline ml-1 font-normal">
                      Explorá el proceso ›
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. TRUST & GUARANTEE FOOTER STRIP */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guarantee 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  Asesoramiento técnico
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Acompañamiento en cada etapa del proceso de limpieza.
                </p>
              </div>
            </div>

            {/* Guarantee 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  Protocolos por industria
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Procedimientos validados para cada tipo de proceso.
                </p>
              </div>
            </div>

            {/* Guarantee 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  Fichas técnicas y SDS
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Documentación completa disponible para cada producto.
                </p>
              </div>
            </div>

            {/* Guarantee 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-white font-display">
                  Cobertura nacional
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Llegamos a todo el país con logística propia y partners estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. FULLSCREEN MAXIMIZED INTERACTIVE PLANT MODAL */}
      {/* ========================================================= */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#020713]/98 backdrop-blur-2xl flex flex-col p-3 sm:p-5 overflow-hidden animate-fadeIn">
          {/* Top Control Bar in Fullscreen */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                {currentScene.name} — Planta Interactiva
              </h2>
              <span className="text-xs text-sky-400/80 bg-sky-950/60 border border-sky-500/30 px-2.5 py-0.5 rounded-full hidden md:inline">
                Vista panorámica maximizada
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Zoom Controls inside Fullscreen */}
              <div className="flex items-center gap-1.5 bg-[#030919] border border-slate-700/80 rounded-xl p-1 shadow-lg">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white disabled:opacity-40 transition-colors"
                  title="Alejar (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="px-2 py-0.5 rounded text-xs font-mono font-bold text-sky-400 hover:bg-slate-800 transition-colors"
                  title="Restablecer zoom a 100%"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2, Number((z + 0.25).toFixed(2))))}
                  disabled={zoomLevel >= 2}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white disabled:opacity-40 transition-colors"
                  title="Acercar (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Close Fullscreen Button */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all shadow-lg border border-slate-700 cursor-pointer"
              >
                <Minimize2 className="w-4 h-4" />
                <span>Salir de pantalla completa</span>
              </button>
            </div>
          </div>

          {/* Fullscreen Giant Panoramic Stage */}
          <div className="relative flex-1 mt-3 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
            <div
              className="relative w-full h-full select-none overflow-hidden transition-transform duration-300 origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={currentScene.bgImage}
                alt={currentScene.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

              {/* Hotspots Overlay */}
              {currentScene.hotspots.map((spot) => {
                const isActive = activeHotspot?.id === spot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="relative flex flex-col items-center group cursor-pointer">
                      <button
                        onClick={() => setSelectedHotspot(spot)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xl backdrop-blur-md mb-2 ${
                          isActive
                            ? 'bg-[#0070ba] text-white border-2 border-[#00c8ff] scale-110 shadow-[0_0_24px_rgba(0,200,255,0.9)]'
                            : 'bg-[#030919]/90 text-slate-100 border border-slate-700 hover:border-sky-400 hover:text-white'
                        }`}
                      >
                        <span className={isActive ? 'text-white' : 'text-slate-300'}>
                          {getHotspotIcon(spot.iconName)}
                        </span>
                        <span>{spot.name}</span>
                      </button>

                      <div
                        onClick={() => setSelectedHotspot(spot)}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        {isActive && (
                          <span className="absolute w-8 h-8 rounded-full border-2 border-[#00c8ff] ring-4 ring-[#00c8ff]/30 animate-pulse pointer-events-none" />
                        )}
                        <span
                          className={`absolute w-6 h-6 rounded-full ${
                            isActive ? 'bg-sky-400/60 animate-ping' : 'bg-sky-500/30 group-hover:animate-ping'
                          }`}
                        />
                        <span
                          className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                            isActive ? 'bg-[#0077c8] border-white scale-110' : 'bg-blue-500 border-white'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Info Drawer at bottom-right if hotspot is selected */}
            {activeHotspot && (
              <div className="absolute bottom-6 right-6 z-30 max-w-lg w-full bg-[#050f24]/95 border border-slate-700/90 rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-slideUp">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                      {getHotspotIcon(activeHotspot.iconName)}
                    </span>
                    <h3 className="text-base font-bold text-white font-display">
                      {activeHotspot.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="p-1 rounded text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 space-y-2.5 text-xs">
                  <div>
                    <span className="font-bold text-white uppercase text-[10px] tracking-wider block">
                      PROBLEMA HABITUAL
                    </span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      {activeHotspot.commonProblem}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white uppercase text-[10px] tracking-wider block">
                      SOLUCIÓN RECOMENDADA
                    </span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      {activeHotspot.recommendedSolution}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setIsFullscreen(false);
                        onNavigateToProducts();
                      }}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#0b4592] hover:bg-[#0d54b3] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors cursor-pointer"
                    >
                      VER PRODUCTOS HOMOLOGADOS
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
