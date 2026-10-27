import React, { useState } from 'react';
import { InteractiveScene, Hotspot, Product } from '../types.ts';
import { INTERACTIVE_SCENES, PRODUCTS } from '../data/mockData.ts';
import { CanisterVisual } from './CanisterVisual.tsx';
import {
  MousePointerClick,
  X,
  Layers,
  Flame,
  Workflow,
  Cylinder,
  Package,
  Snowflake,
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
  Download,
  MessageCircle,
} from 'lucide-react';

interface InteractiveSceneViewerProps {
  initialSceneId?: string;
  onSelectProduct: (product: Product) => void;
  onNavigateToProducts: () => void;
}

// Fixed visual order matching the reference layout
const SCENE_DISPLAY_ORDER = [
  'bodegas',
  'cervecerias',
  'frigorificos',
  'olivicola',
  'alimentaria',
];

export const InteractiveSceneViewer: React.FC<InteractiveSceneViewerProps> = ({
  initialSceneId = 'bodegas',
  onSelectProduct,
  onNavigateToProducts,
}) => {
  const [selectedSceneId, setSelectedSceneId] = useState<string>(initialSceneId);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  // Ordered scenes list
  const orderedScenes = [...INTERACTIVE_SCENES].sort(
    (a, b) => SCENE_DISPLAY_ORDER.indexOf(a.id) - SCENE_DISPLAY_ORDER.indexOf(b.id)
  );

  const currentScene =
    INTERACTIVE_SCENES.find((s) => s.id === selectedSceneId) ||
    orderedScenes.find((s) => s.id === 'bodegas') ||
    orderedScenes[0];

  // Active hotspot: prefer selectedHotspot if belongs to scene, else 'tanques-inox-bodega' for bodegas, 'sala-desposte' for frigoríficos or first hotspot
  const activeHotspot: Hotspot | null =
    selectedHotspot && currentScene.hotspots.some((h) => h.id === selectedHotspot.id)
      ? selectedHotspot
      : currentScene.hotspots.find((h) => h.id === 'tanques-inox-bodega') ||
        currentScene.hotspots.find((h) => h.id === 'sala-desposte') ||
        currentScene.hotspots.find((h) => h.id === 'recepcion-carne') ||
        (currentScene.hotspots.length > 0 ? currentScene.hotspots[0] : null);

  const handleSceneChange = (sceneId: string) => {
    setSelectedSceneId(sceneId);
    const targetScene = INTERACTIVE_SCENES.find((s) => s.id === sceneId);
    if (targetScene && targetScene.hotspots.length > 0) {
      const preferred =
        targetScene.hotspots.find((h) => h.id === 'tanques-inox-bodega') ||
        targetScene.hotspots.find((h) => h.id === 'sala-desposte') ||
        targetScene.hotspots[0];
      setSelectedHotspot(preferred);
    } else {
      setSelectedHotspot(null);
    }
  };

  const getHotspotIcon = (iconName: string) => {
    switch (iconName) {
      case 'Knife':
      case 'Scissors':
        return (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m20.5 3.5-3 3-9 9-4.5 1 1-4.5 9-9 3-3a1.4 1.4 0 0 1 2 0l1.5 1.5a1.4 1.4 0 0 1 0 2Z" />
            <path d="m14.5 6.5 3 3" />
          </svg>
        );
      case 'Truck':
        return <Truck className="w-3.5 h-3.5" />;
      case 'Snowflake':
        return <Snowflake className="w-3.5 h-3.5" />;
      case 'Grid':
        return <Grid className="w-3.5 h-3.5" />;
      case 'Conveyor':
      case 'Layers':
        return (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="6" width="20" height="8" rx="4" />
            <circle cx="6" cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="18" cy="10" r="1" fill="currentColor" />
            <path d="M4 14v4M20 14v4" />
          </svg>
        );
      case 'Lines':
      case 'Factory':
      case 'Activity':
        return (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 20h20" />
            <path d="M6 20V10l4 4V10l4 4V4h6v16" />
          </svg>
        );
      case 'RotateCw':
        return <RotateCw className="w-3.5 h-3.5" />;
      case 'Flame':
        return <Flame className="w-3.5 h-3.5" />;
      case 'Workflow':
        return <Workflow className="w-3.5 h-3.5" />;
      case 'Cylinder':
        return <Cylinder className="w-3.5 h-3.5" />;
      case 'Bottle':
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 21h4a1 1 0 0 0 1-1v-8a3 3 0 0 0-1-2.2V4h-4v5.8A3 3 0 0 0 6 12v8a1 1 0 0 0 1 1z" />
            <path d="M15 21h3a1 1 0 0 0 1-1v-7a2.5 2.5 0 0 0-1-1.9V6h-3v5.1a2.5 2.5 0 0 0-1 1.9v7a1 1 0 0 0 1 1z" />
          </svg>
        );
      case 'Package':
        return <Package className="w-3.5 h-3.5" />;
      case 'Droplet':
        return <Droplet className="w-3.5 h-3.5" />;
      case 'Barrel':
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="7.5" ry="8.5" />
            <line x1="5.5" y1="8" x2="18.5" y2="8" />
            <line x1="5.5" y1="16" x2="18.5" y2="16" />
            <line x1="12" y1="3.5" x2="12" y2="20.5" />
          </svg>
        );
      case 'Wine':
        return <Wine className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
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

Consultas técnicas: cblanco@interquimica.com.ar | Tel: +54 9 261 468 1775
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

  const handleDownloadTechSheet = () => {
    if (!activeHotspot) return;
    const techDoc =
      activeHotspot.downloads.find((d) => d.type === 'techsheet') ||
      activeHotspot.downloads[0];
    if (techDoc) {
      handleDownload(techDoc.filename, techDoc.title);
    } else {
      handleDownload(
        `Ficha_Tecnica_${activeHotspot.id}.txt`,
        `Ficha técnica de proceso - ${activeHotspot.name}`
      );
    }
  };

  const handleWhatsAppChat = () => {
    if (!activeHotspot) return;
    const msg = encodeURIComponent(
      `Hola equipo técnico de InterQuímica Argentina, estoy revisando el sector "${activeHotspot.name}" en la planta de "${currentScene.name}" y deseo consultar por la solución recomendada.`
    );
    window.open(`https://wa.me/5492614681775?text=${msg}`, '_blank');
  };

  // Other 4 scenes for the lower row
  const otherScenes = orderedScenes.filter((s) => s.id !== selectedSceneId);

  return (
    <div className="w-full bg-[#030816] text-slate-100 pt-20 pb-4 font-sans selection:bg-blue-600 selection:text-white">
      {/* Container */}
      <div className="w-full max-w-[1850px] mx-auto px-3 sm:px-5 lg:px-7 flex flex-col gap-3 sm:gap-4 min-h-[calc(100vh-80px)]">
        
        {/* ========================================================= */}
        {/* MOBILE / TABLET HEADER & INDUSTRY SELECTOR (< lg only) */}
        {/* Placed cleanly above the stage so nothing overlaps */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col gap-2.5">
          {/* Header Title + Badges */}
          <div className="space-y-1.5">
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight font-display">
              Escenarios industriales interactivos
            </h1>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              Explorá cada industria y tocá las áreas del proceso para descubrir problemas habituales, soluciones y productos recomendados.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-slate-900/90 px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                <span className="w-4 h-4 rounded-full bg-blue-950/90 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                  <MousePointerClick className="w-2.5 h-2.5" />
                </span>
                <span className="text-[11px] font-medium">Hacé clic en un sector</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-slate-900/90 px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                <span className="w-4 h-4 rounded-full bg-blue-950/90 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                  <Layers className="w-2.5 h-2.5" />
                </span>
                <span className="text-[11px] font-medium">Explorá cada etapa del proceso</span>
              </div>
            </div>
          </div>

          {/* 5 Industry Selector Cards in smooth horizontal scroll */}
          <div className="flex items-stretch gap-2 overflow-x-auto no-scrollbar pb-1 w-full shrink-0 flex-nowrap -mx-1 px-1">
            {orderedScenes.map((scene) => {
              const isSelected = scene.id === selectedSceneId;
              return (
                <button
                  key={scene.id}
                  onClick={() => handleSceneChange(scene.id)}
                  className={`relative group flex flex-col text-left p-1.5 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden backdrop-blur-md shrink-0 w-[112px] sm:w-[124px] ${
                    isSelected
                      ? 'bg-[#0077c8]/35 border-[#0077c8] shadow-[0_0_16px_rgba(0,119,200,0.5)] ring-1 ring-[#0077c8]'
                      : 'bg-[#051126]/85 border-white/10 hover:border-slate-500 hover:bg-[#081a38]/90'
                  }`}
                >
                  <div className="relative w-full h-11 rounded-lg overflow-hidden mb-1.5 bg-slate-900">
                    <img
                      src={scene.bgImage}
                      alt={scene.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-blue-600 border border-white/70 flex items-center justify-center text-white shadow-md">
                        <Snowflake className="w-2.5 h-2.5" />
                      </div>
                    )}
                  </div>
                  <div className="leading-tight">
                    <h3
                      className={`text-[11px] font-bold font-display truncate ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}
                    >
                      {scene.name}
                    </h3>
                    <p className="text-[9.5px] text-slate-400 line-clamp-1 mt-0.5 font-normal leading-tight">
                      {scene.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 1. MAIN HERO ROW: UNIFIED PANORAMIC STAGE (DESKTOP OVERLAY + MOBILE SECTOR BAR) & DETAIL PANEL */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Panoramic Stage Container */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-2">
            <div className="relative bg-slate-950 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl h-[250px] sm:h-[340px] lg:h-[500px] xl:h-[510px] flex flex-col justify-between">
              {/* Full-bleed background panoramic facility image */}
              <img
                src={currentScene.bgImage}
                alt={currentScene.title}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] sm:object-center pointer-events-none"
              />

              {/* Desktop Gradient Scrims: Only needed on lg+ to protect overlaid text */}
              <div className="hidden lg:block absolute inset-x-0 top-0 h-48 sm:h-56 bg-gradient-to-b from-[#020713]/95 via-[#020713]/70 to-transparent pointer-events-none" />
              <div className="lg:hidden absolute inset-0 bg-black/20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020713]/85 via-transparent to-transparent pointer-events-none" />

              {/* DESKTOP TOP OVERLAID SECTION INSIDE THE IMAGE (Title + Description + Badges + 5 Cards) - lg+ only */}
              <div className="hidden lg:flex relative z-20 p-3 sm:p-4 flex-col xl:flex-row xl:items-start justify-between gap-2.5 sm:gap-3.5">
                {/* Left Title, Subtitle and Badges */}
                <div className="max-w-md xl:max-w-lg space-y-1.5">
                  <h1 className="text-xl sm:text-2xl xl:text-3xl font-black text-white tracking-tight leading-[1.08] font-display drop-shadow-md">
                    Escenarios<br className="hidden sm:inline" /> industriales interactivos
                  </h1>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed line-clamp-1 sm:line-clamp-2 drop-shadow">
                    Explorá cada industria y hacé clic en las áreas del proceso para descubrir problemas habituales, soluciones recomendadas, productos y protocolos de aplicación.
                  </p>

                  {/* Helper Guidance Badges matching screenshot */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                      <span className="w-5 h-5 rounded-full bg-blue-950/90 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                        <MousePointerClick className="w-3 h-3" />
                      </span>
                      <span className="text-[11px] font-medium">Hacé clic en un sector</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                      <span className="w-5 h-5 rounded-full bg-blue-950/90 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                        </svg>
                      </span>
                      <span className="text-[11px] font-medium">Explorá cada etapa del proceso</span>
                    </div>
                  </div>
                </div>

                {/* Right: 5 Industry Selector Cards in a single sleek horizontal row */}
                <div className="flex items-stretch gap-2 overflow-x-auto no-scrollbar pb-1 w-full xl:w-auto xl:max-w-2xl shrink-0 flex-nowrap">
                  {orderedScenes.map((scene) => {
                    const isSelected = scene.id === selectedSceneId;
                    return (
                      <button
                        key={scene.id}
                        onClick={() => handleSceneChange(scene.id)}
                        className={`relative group flex flex-col text-left p-1.5 sm:p-2 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden backdrop-blur-md shrink-0 w-[112px] sm:w-[124px] xl:w-[128px] ${
                          isSelected
                            ? 'bg-[#0077c8]/35 border-[#0077c8] shadow-[0_0_16px_rgba(0,119,200,0.5)] ring-1 ring-[#0077c8]'
                            : 'bg-[#051126]/85 border-white/10 hover:border-slate-500 hover:bg-[#081a38]/90'
                        }`}
                      >
                        <div className="relative w-full h-11 sm:h-12 rounded-lg overflow-hidden mb-1.5 bg-slate-900">
                          <img
                            src={scene.bgImage}
                            alt={scene.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                          {isSelected && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-blue-600 border border-white/70 flex items-center justify-center text-white shadow-md">
                              <Snowflake className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </div>
                        <div className="leading-tight">
                          <h3
                            className={`text-[11px] font-bold font-display truncate ${
                              isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                            }`}
                          >
                            {scene.name}
                          </h3>
                          <p className="text-[9.5px] text-slate-400 line-clamp-2 mt-0.5 font-normal leading-tight">
                            {scene.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hotspots Overlay positioned across the visual stage */}
              <div className="absolute inset-0 pointer-events-none">
                {currentScene.hotspots.map((spot) => {
                  const isActive = activeHotspot?.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto"
                    >
                      <div className="relative flex flex-col items-center group cursor-pointer">
                        {/* Hotspot Pill Badge Button: on mobile (<sm), show only when active to avoid collisions; on sm+ always show */}
                        <button
                          onClick={() => setSelectedHotspot(spot)}
                          className={`items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10.5px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shadow-xl backdrop-blur-md mb-1 sm:mb-1.5 ${
                            isActive ? 'flex' : 'hidden sm:flex'
                          } ${
                            isActive
                              ? 'bg-[#005bb7] text-white border border-[#2b90ff] shadow-[0_0_20px_rgba(43,144,255,0.75)] scale-105 ring-2 ring-white/30 z-40'
                              : 'bg-[#050f24]/90 text-slate-100 border border-slate-700/80 hover:border-sky-400 hover:text-white hover:bg-[#071938]'
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
                          className="relative flex items-center justify-center cursor-pointer p-0.5"
                        >
                          {/* Target Circle for Active Pin */}
                          {isActive && (
                            <span className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#00c8ff] ring-4 ring-[#00c8ff]/25 animate-pulse pointer-events-none" />
                          )}

                          {/* Ping Ripple */}
                          <span
                            className={`absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                              isActive
                                ? 'bg-sky-400/60 animate-ping'
                                : 'bg-sky-500/30 group-hover:animate-ping'
                            }`}
                          />

                          {/* Mobile Icon Circle Pin when label is hidden on <sm */}
                          <div
                            className={`flex sm:hidden w-7 h-7 rounded-full items-center justify-center border-2 transition-all shadow-lg ${
                              isActive
                                ? 'bg-[#0077c8] border-white shadow-[0_0_12px_rgba(0,200,255,1)] scale-110 text-white'
                                : 'bg-[#051126]/95 border-sky-400/80 text-sky-300 hover:scale-105'
                            }`}
                          >
                            {getHotspotIcon(spot.iconName)}
                          </div>

                          {/* Center Pin Button for sm+ */}
                          <span
                            className={`hidden sm:flex w-3.5 h-3.5 rounded-full border-2 transition-all items-center justify-center ${
                              isActive
                                ? 'bg-[#0077c8] border-white shadow-[0_0_12px_rgba(0,200,255,1)] scale-110'
                                : 'bg-blue-500 border-white shadow-md'
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-white" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet Horizontal Sector Chips Bar (< lg only) */}
            <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1.5 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#00c8ff]" />
                Sectores:
              </span>
              {currentScene.hotspots.map((spot) => {
                const isAct = activeHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedHotspot(spot)}
                    className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                      isAct
                        ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{getHotspotIcon(spot.iconName)}</span>
                    <span>{spot.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detail Side Panel matching screenshot exact layout */}
          <div className="lg:col-span-4 xl:col-span-3 bg-[#040e21]/95 border border-slate-800/90 rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xl backdrop-blur-md min-h-[360px] lg:h-[500px] xl:h-[510px] lg:overflow-hidden">
            {activeHotspot ? (
              <div className="flex flex-col justify-between h-full">
                {/* Scrollable / Flexible Upper Content */}
                <div className="space-y-3 overflow-y-auto pr-1">
                  {/* Header with Hotspot Icon, Name & Close */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-[#00c8ff] shadow-sm">
                        {getHotspotIcon(activeHotspot.iconName)}
                      </span>
                      <h2 className="text-sm sm:text-base font-bold text-white font-display leading-tight truncate">
                        {activeHotspot.name}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                      title="Cerrar panel"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Section 1: PROBLEMA HABITUAL */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] font-bold text-white uppercase tracking-wider block font-display">
                      Problema habitual
                    </span>
                    <p className="text-[11px] text-slate-300 leading-snug font-normal">
                      {activeHotspot.commonProblem}
                    </p>
                  </div>

                  {/* Section 2: SOLUCIÓN RECOMENDADA */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] font-bold text-white uppercase tracking-wider block font-display">
                      Solución recomendada
                    </span>
                    <p className="text-[11px] text-slate-300 leading-snug font-normal">
                      {activeHotspot.recommendedSolution}
                    </p>
                  </div>

                  {/* Section 3: PRODUCTOS SUGERIDOS */}
                  <div className="space-y-1.5">
                    <span className="text-[10.5px] font-bold text-white uppercase tracking-wider block font-display">
                      Productos sugeridos
                    </span>
                    <div className="space-y-1.5">
                      {activeHotspot.suggestedProductIds.map((pid) => {
                        const prod = PRODUCTS.find((p) => p.id === pid);
                        if (!prod) return null;
                        return (
                          <div
                            key={prod.id}
                            onClick={() => onSelectProduct(prod)}
                            className="flex items-center justify-between p-1.5 rounded-lg bg-[#020713]/90 hover:bg-[#071630] border border-slate-800 hover:border-[#0088cc] transition-all cursor-pointer group shadow-sm"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {/* Small Canister Visual */}
                              <div className="w-6 h-7 flex items-center justify-center shrink-0">
                                <CanisterVisual
                                  name={prod.name}
                                  color={prod.canisterColor}
                                  badge={prod.badge}
                                  image={prod.image || prod.imageUrl}
                                  isBag={prod.isBag}
                                  className="w-full h-full scale-90"
                                />
                              </div>
                              <div className="leading-tight truncate">
                                <span className="text-[11px] font-bold text-white group-hover:text-[#00c8ff] transition-colors block truncate">
                                  {prod.name}
                                </span>
                                <span className="text-[10px] text-slate-400 truncate block mt-0.5">
                                  {prod.description}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 shrink-0 ml-1" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 4: DESCARGAS */}
                  <div className="space-y-1 pt-0.5">
                    <span className="text-[10.5px] font-bold text-white uppercase tracking-wider block font-display">
                      Descargas
                    </span>
                    <div className="space-y-1">
                      {activeHotspot.downloads.map((d) => (
                        <button
                          key={d.title}
                          onClick={() => handleDownload(d.filename, d.title)}
                          className="w-full flex items-center justify-between py-1 px-2.5 rounded-md bg-[#020713]/90 hover:bg-[#071630] border border-slate-800 text-[10.5px] text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                        >
                          <span className="truncate pr-2">{d.title}</span>
                          <Download className="w-3 h-3 text-slate-400 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 5: Primary Action Buttons (3 CTAs matching screenshot) */}
                <div className="pt-2.5 border-t border-slate-800/80 space-y-1.5 shrink-0 mt-2">
                  <button
                    onClick={onNavigateToProducts}
                    className="w-full py-2 px-3 rounded-lg bg-[#0b4592] hover:bg-[#0d54b3] text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-md border border-blue-400/30 cursor-pointer text-center"
                  >
                    VER PRODUCTOS
                  </button>

                  <button
                    onClick={handleDownloadTechSheet}
                    className="w-full py-2 px-3 rounded-lg bg-[#051126] hover:bg-[#081a38] text-white text-[11px] font-bold uppercase tracking-wider transition-all border border-slate-700/80 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>DESCARGAR FICHA TÉCNICA</span>
                    <Download className="w-3.5 h-3.5 text-slate-300" />
                  </button>

                  <button
                    onClick={handleWhatsAppChat}
                    className="w-full py-2 px-3 rounded-lg border border-emerald-500/70 text-emerald-400 hover:bg-emerald-500/10 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>HABLAR POR WHATSAPP</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-4 space-y-2">
                <MousePointerClick className="w-8 h-8 text-sky-400 animate-bounce" />
                <h3 className="text-sm font-bold text-white font-display">
                  Seleccioná un sector del proceso
                </h3>
                <p className="text-[11px] text-slate-400">
                  Hacé clic en cualquiera de los puntos señalizados en la imagen para ver los problemas habituales, soluciones y productos recomendados.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. LOWER SECTION: "Otros escenarios" (4 Sleek Panoramic Cards) */}
        {/* ========================================================= */}
        <div className="space-y-2.5 pt-1">
          <h2 className="text-xs sm:text-sm font-bold text-white font-display tracking-wider uppercase">
            Otros escenarios
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {otherScenes.map((scene) => (
              <div
                key={scene.id}
                onClick={() => handleSceneChange(scene.id)}
                className="relative group h-18 sm:h-20 rounded-xl overflow-hidden border border-slate-800 hover:border-[#0088cc] shadow-md transition-all duration-300 cursor-pointer bg-slate-950"
              >
                {/* Background Image */}
                <img
                  src={scene.bgImage}
                  alt={scene.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Hotspot Glowing Dot in the scene preview */}
                <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <span className="absolute w-4 h-4 rounded-full bg-blue-400/40 animate-ping" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-white shadow-[0_0_8px_rgba(0,200,255,1)]" />
                </div>

                {/* Badge on Bottom Left matching screenshot */}
                <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 group-hover:border-sky-400/50 transition-colors">
                  <span className="text-[#00c8ff]">
                    {scene.id === 'bodegas' && <Wine className="w-3.5 h-3.5" />}
                    {scene.id === 'cervecerias' && <Flame className="w-3.5 h-3.5" />}
                    {scene.id === 'olivicola' && <Droplet className="w-3.5 h-3.5" />}
                    {scene.id === 'alimentaria' && <Package className="w-3.5 h-3.5" />}
                  </span>
                  <span className="text-xs font-bold text-white font-display truncate">
                    {scene.name}
                  </span>
                  <span className="text-[10px] text-slate-300 hidden sm:inline ml-1 font-normal">
                    Explorá el proceso ›
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. TRUST & GUARANTEE STRIP (4 Items directly above Footer) */}
        {/* ========================================================= */}
        <div className="pt-3 pb-2 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Guarantee 1 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="leading-tight truncate">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white font-display">
                  Asesoramiento técnico
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight truncate">
                  Acompañamiento en cada etapa del proceso de limpieza.
                </p>
              </div>
            </div>

            {/* Guarantee 2 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <ClipboardList className="w-4 h-4" />
              </div>
              <div className="leading-tight truncate">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white font-display">
                  Protocolos por industria
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight truncate">
                  Procedimientos validados para cada tipo de proceso.
                </p>
              </div>
            </div>

            {/* Guarantee 3 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <FileText className="w-4 h-4" />
              </div>
              <div className="leading-tight truncate">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white font-display">
                  Fichas técnicas y SDS
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight truncate">
                  Documentación completa disponible para cada producto.
                </p>
              </div>
            </div>

            {/* Guarantee 4: Argentina silhouette map */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 text-[#00c8ff]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2c2 1 3 0 4 2 1 1 1 3 0 4-1 1-1 3 1 4 1 2 0 4-1 6-1 2-2 4-2 6-1 2-2 3-3 4-1-1-1-2-1-3 0-2 1-3 1-5 0-2-1-4-1-6 0-3 1-5 2-6 1-1 0-2-1-3 0-1 0-2 1-3Z" />
                </svg>
              </div>
              <div className="leading-tight truncate">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white font-display">
                  Cobertura nacional
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight truncate">
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
