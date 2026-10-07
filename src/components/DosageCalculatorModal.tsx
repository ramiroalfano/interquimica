import React, { useState } from 'react';
import { Product } from '../types.ts';
import { PRODUCTS } from '../data/mockData.ts';
import {
  X,
  Calculator,
  Droplets,
  Thermometer,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
} from 'lucide-react';

interface DosageCalculatorModalProps {
  initialProduct?: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DosageCalculatorModal: React.FC<DosageCalculatorModalProps> = ({
  initialProduct,
  isOpen,
  onClose,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || 'na45'
  );
  const [tankVolume, setTankVolume] = useState<number>(2500); // liters
  const [dirtLevel, setDirtLevel] = useState<'Ligera' | 'Media' | 'Pesada'>('Media');
  const [applicationType, setApplicationType] = useState<string>('cip');

  if (!isOpen) return null;

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Calculation logic based on product dosage table
  let concentrationPercent = 2.0;
  let tempRange = '60 - 70 °C';
  let contactTime = '20 min';

  const row = currentProduct.dosageTable.find((r) => r.dirtLevel === dirtLevel);
  if (row) {
    tempRange = row.temperature;
    contactTime = row.contactTime;
    // Extract base number from "1,5% - 2%"
    if (dirtLevel === 'Ligera') concentrationPercent = 1.2;
    if (dirtLevel === 'Media') concentrationPercent = 2.0;
    if (dirtLevel === 'Pesada') concentrationPercent = 3.0;
  }

  // Liters/Kg needed = Volume * (concentration / 100)
  const productNeededLiters = (tankVolume * (concentrationPercent / 100)).toFixed(1);
  const containersNeeded = Math.ceil(parseFloat(productNeededLiters) / 20);

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(
      `Hola equipo técnico de InterQuímica, estuve utilizando la calculadora de dosificación para ${currentProduct.name} con un volumen de ${tankVolume}L (suciedad ${dirtLevel}). Necesito validar este protocolo para mi planta.`
    );
    window.open(`https://wa.me/5492611234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#09111e] border border-slate-800 rounded-2xl shadow-2xl p-6 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Calculadora de Dosificación Industrial
              </h3>
              <p className="text-xs text-slate-400">
                Ajuste estequiométrico y recomendaciones para procesos CIP y manuales
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {/* Select Product */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Producto químico
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} - {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Volume input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Volumen de agua en el tanque (Litros)
            </label>
            <div className="relative">
              <input
                type="number"
                min="10"
                max="100000"
                step="50"
                value={tankVolume}
                onChange={(e) => setTankVolume(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-blue-500"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-mono">
                Lts
              </span>
            </div>
          </div>

          {/* Dirt severity */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Grado de suciedad / incrustación
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Ligera', 'Media', 'Pesada'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setDirtLevel(level)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-colors ${
                    dirtLevel === level
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Application Method */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Método de aplicación
            </label>
            <select
              value={applicationType}
              onChange={(e) => setApplicationType(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            >
              <option value="cip">Circuito Cerrado (CIP Automatizado)</option>
              <option value="inmersion">Inmersión en Batea</option>
              <option value="espuma">Espumado con Lanza / Carrito</option>
              <option value="manual">Lavado Manual con Cepillo</option>
            </select>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 border border-blue-800/40 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Resultado del Cálculo
            </span>
            <span className="text-xs font-mono text-slate-400">
              Base: {currentProduct.name} al {concentrationPercent}% v/v
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-2xl font-black text-blue-400 font-mono block">
                {productNeededLiters} <span className="text-sm font-normal">Lts</span>
              </span>
              <span className="text-[11px] text-slate-400">Cantidad de Producto</span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-2xl font-black text-white font-mono block">
                {containersNeeded} <span className="text-sm font-normal">bidones</span>
              </span>
              <span className="text-[11px] text-slate-400">Envases de 20 Kg</span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-sm font-bold text-orange-400 block mt-1 flex items-center justify-center gap-1">
                <Thermometer className="w-4 h-4" />
                {tempRange}
              </span>
              <span className="text-[11px] text-slate-400">Temp. Óptima</span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-sm font-bold text-emerald-400 block mt-1 flex items-center justify-center gap-1">
                <Clock className="w-4 h-4" />
                {contactTime}
              </span>
              <span className="text-[11px] text-slate-400">Tiempo de Lavado</span>
            </div>
          </div>

          {/* Operational recommendations */}
          <div className="pt-2 text-xs text-slate-300 space-y-2 border-t border-slate-800">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Agregar el producto siempre sobre el agua ya cargada, nunca al revés para prevenir salpicaduras corrosivas.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Verificar la conductividad de descarga hasta igualar los microsiemens del agua de red.
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={handleWhatsAppConsult}
            className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-600/50 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Validar con Ingeniero de Soporte</span>
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
