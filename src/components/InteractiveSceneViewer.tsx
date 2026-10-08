import React, { useState } from 'react';
import { InteractiveScene, Hotspot, Product } from '../types.ts';
import { INTERACTIVE_SCENES, PRODUCTS } from '../data/mockData.ts';
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
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
  ExternalLink,
} from 'lucide-react';

interface InteractiveSceneViewerProps {
  initialSceneId?: string;
  onSelectProduct: (product: Product) => void;
  onNavigateToProducts: () => void;
}

export const InteractiveSceneViewer: React.FC<InteractiveSceneViewerProps> = ({
  initialSceneId = 'cervecerias',
  onSelectProduct,
  onNavigateToProducts,
}) => {
  const [selectedSceneId, setSelectedSceneId] = useState<string>(initialSceneId);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const currentScene =
    INTERACTIVE_SCENES.find((s) => s.id === selectedSceneId) || INTERACTIVE_SCENES[0];

  // Set default active hotspot when scene changes
  const activeHotspot =
    selectedHotspot || (currentScene.hotspots.length > 0 ? currentScene.hotspots[0] : null);

  const handleSceneChange = (sceneId: string) => {
    setSelectedSceneId(sceneId);
    const targetScene = INTERACTIVE_SCENES.find((s) => s.id === sceneId);
    if (targetScene && targetScene.hotspots.length > 0) {
      setSelectedHotspot(targetScene.hotspots[0]);
    } else {
      setSelectedHotspot(null);
    }
    setZoomLevel(1);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4" />;
      case 'Cylinder':
        return <Cylinder className="w-4 h-4" />;
      case 'Bottle':
        return <Package className="w-4 h-4" />;
      case 'Snowflake':
        return <Snowflake className="w-4 h-4" />;
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Truck':
        return <Truck className="w-4 h-4" />;
      case 'Droplet':
        return <Droplet className="w-4 h-4" />;
      case 'RotateCw':
        return <RotateCw className="w-4 h-4" />;
      case 'Barrel':
        return <Wine className="w-4 h-4" />;
      case 'Grid':
        return <Grid className="w-4 h-4" />;
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

  return (
    <div className="w-full bg-[#050b14] text-slate-100 pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title & Guidance Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Tecnología & Asistencia en Planta
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Escenarios industriales interactivos
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Explorá cada industria y hacé clic en las áreas del proceso para descubrir problemas habituales, soluciones recomendadas, productos y protocolos de aplicación.
            </p>
          </div>

          {/* User hint pills */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <MousePointerClick className="w-4 h-4 text-blue-400" />
              <span>Hacé clic en un sector</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Explorá cada etapa</span>
            </div>
          </div>
        </div>

        {/* Industry switcher tab bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6">
          {INTERACTIVE_SCENES.map((scene) => {
            const isSelected = scene.id === selectedSceneId;
            return (
              <button
                key={scene.id}
                onClick={() => handleSceneChange(scene.id)}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/50 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80 hover:border-slate-700'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-blue-400' : 'text-slate-300'}`}>
                  {scene.name}
                </span>
                <span className="text-[11px] text-slate-400 line-clamp-1 mt-1 font-normal">
                  {scene.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage & Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Viewport Canvas (Col 8) */}
        <div className="lg:col-span-8 relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Panoramic Image Stage */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden select-none">
            <img
              src={currentScene.bgImage}
              alt={currentScene.title}
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
            />

            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Hotspots Overlay */}
            {currentScene.hotspots.map((spot) => {
              const isActive = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    onClick={() => setSelectedHotspot(spot)}
                    className="relative flex items-center group-hover:scale-105 transition-all focus:outline-none"
                    aria-label={`Sector ${spot.name}`}
                  >
                    {/* Glowing pulse ring */}
                    <span className="absolute -inset-2.5 rounded-full bg-blue-500/40 animate-pulse-ring pointer-events-none" />

                    {/* Badge container with icon & label */}
                    <span
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md border transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-400 shadow-blue-500/50 scale-105'
                          : 'bg-slate-950/85 text-slate-200 border-slate-700/80 hover:bg-blue-950 hover:border-blue-500 hover:text-white'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-ping' : 'bg-blue-400'}`} />
                      <span className="shrink-0">{getIcon(spot.iconName)}</span>
                      <span className="whitespace-nowrap">{spot.name}</span>
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Viewport Control Bar */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8))}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title="Acercar (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((prev) => Math.max(prev - 0.2, 1))}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title="Alejar (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title="Restablecer vista"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((prev) => (prev > 1.2 ? 1 : 1.4))}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title="Pantalla amplia"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel: Detail for Selected Hotspot (Col 4) */}
        <div className="lg:col-span-4 bg-[#09111e] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          {activeHotspot ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {getIcon(activeHotspot.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {activeHotspot.name}
                    </h3>
                    {activeHotspot.code && (
                      <span className="text-[11px] font-mono text-slate-400">
                        Código: {activeHotspot.code}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Problema Habitual */}
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Problema habitual
                </h4>
                <div className="p-3.5 bg-rose-950/15 border border-rose-900/30 rounded-xl text-xs text-rose-200/90 leading-relaxed">
                  {activeHotspot.commonProblem}
                </div>
              </div>

              {/* Solución Recomendada */}
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Solución recomendada
                </h4>
                <div className="p-3.5 bg-emerald-950/15 border border-emerald-900/30 rounded-xl text-xs text-emerald-200/90 leading-relaxed">
                  {activeHotspot.recommendedSolution}
                </div>
              </div>

              {/* Productos Sugeridos */}
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Productos sugeridos
                </h4>
                <div className="space-y-2">
                  {activeHotspot.suggestedProductIds.map((pId) => {
                    const prod = PRODUCTS.find((p) => p.id === pId);
                    if (!prod) return null;
                    return (
                      <div
                        key={pId}
                        onClick={() => onSelectProduct(prod)}
                        className="group flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 hover:border-blue-500/60 rounded-xl cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: prod.canisterColor }}
                          />
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white group-hover:text-blue-400 truncate block">
                              {prod.name}
                            </span>
                            <span className="text-[11px] text-slate-400 truncate block">
                              {prod.title}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Descargas Oficiales */}
              {activeHotspot.downloads.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Descargas
                  </h4>
                  <div className="space-y-1.5">
                    {activeHotspot.downloads.map((dl, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDownload(dl.filename, dl.title)}
                        className="w-full flex items-center justify-between p-2.5 text-xs text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 rounded-xl transition-colors text-left"
                      >
                        <span className="truncate pr-2">{dl.title}</span>
                        <FileDown className="w-4 h-4 text-blue-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <button
                  onClick={onNavigateToProducts}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5"
                >
                  <span>Ver Todos los Productos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleWhatsAppChat}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-600/50 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar por WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">
              Seleccioná un punto interactivo para ver detalles del proceso.
            </div>
          )}
        </div>
      </div>

      {/* Bottom Industry Thumbnails Strip: "Otros Escenarios" */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
          Explorá otros escenarios industriales
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {INTERACTIVE_SCENES.filter((s) => s.id !== selectedSceneId).map((scene) => (
            <div
              key={scene.id}
              onClick={() => handleSceneChange(scene.id)}
              className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500 cursor-pointer transition-all aspect-[16/9]"
            >
              <img
                src={scene.bgImage}
                alt={scene.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-3 flex flex-col justify-end">
                <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                  {scene.name}
                </span>
                <span className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
                  Explorá el proceso <ChevronRight className="w-3 h-3 text-blue-400" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
