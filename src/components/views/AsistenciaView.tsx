import React, { useState } from 'react';
import { IMAGES } from '../../data/mockData.ts';
import {
  Wrench,
  CheckCircle2,
  Calendar,
  Building,
  Phone,
  Mail,
  Send,
  MessageCircle,
  FileCheck,
  Microscope,
  Calculator,
  ShieldAlert,
} from 'lucide-react';

interface AsistenciaViewProps {
  onOpenDosageCalc: () => void;
}

export const AsistenciaView: React.FC<AsistenciaViewProps> = ({ onOpenDosageCalc }) => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5492611234567?text=Hola%20InterQuímica,%20solicito%20una%20visita%20técnica%20de%20asistencia%20en%20planta.',
      '_blank'
    );
  };

  return (
    <div className="w-full bg-[#050b14] text-slate-100 min-h-screen">
      {/* Header Banner featuring Banner 5 image spanning 100% full width */}
      <div className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.banner5}
            alt="Operario y asistencia técnica sanitaria"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
              DEPARTAMENTO TÉCNICO INTERQUÍMICA
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Asistencia Técnica en Planta
            </h1>
            <p className="text-sm text-slate-200 leading-relaxed">
              No solo proveemos productos químicos: nuestros ingenieros químicos y técnicos especialistas acompañan a tu equipo en cada etapa operativa para asegurar la máxima eficiencia sanitaria y ahorro de recursos.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDosageCalc}
                className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculadora de Dosificación</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="py-3 px-5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white bg-emerald-950/60 hover:bg-emerald-600 border border-emerald-600/50 rounded-xl transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar Guardia Técnica</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl w-fit">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Auditorías CIP y Titulaciones</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monitoreo in situ de conductividad eléctrica, concentración de soda activa, acidez titulable y curvas de temperatura en tus circuitos sanitarios.
            </p>
          </div>
          <ul className="text-xs text-slate-400 space-y-1.5 pt-3 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verificación de caudales y presiones</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Optimización del consumo de agua</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl w-fit">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Validación Microbiológica</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hisopados de superficies, placas petrifilm y bioluminiscencia ATP para comprobar la ausencia de patógenos y biofilms en puntos críticos.
            </p>
          </div>
          <ul className="text-xs text-slate-400 space-y-1.5 pt-3 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Control de bacterias lácticas y acéticas</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Detección de Listeria y Salmonella</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl w-fit">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Capacitación Operativa</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instrucción directa a operarios sobre el uso correcto de elementos de protección personal (EPP), dilución segura y prevención de riesgos.
            </p>
          </div>
          <ul className="text-xs text-slate-400 space-y-1.5 pt-3 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Entrenamiento presencial en planta</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Protocolos operativos y manuales técnicos</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Booking Form for Plant Visit */}
      <div className="bg-[#09111e] border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="max-w-xl mb-6">
          <h3 className="text-xl font-bold text-white">
            Solicitar Visita Técnica o Prueba en Planta
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Completá el formulario para coordinar un relevamiento técnico gratuito de tu sistema CIP.
          </p>
        </div>

        {formSent ? (
          <div className="p-6 bg-emerald-950/40 border border-emerald-600/40 rounded-2xl text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white">Solicitud de visita registrada</h4>
            <p className="text-xs text-slate-300">
              Un ingeniero del equipo técnico se pondrá en contacto dentro de las próximas 24 horas hábiles.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Empresa / Razón Social</label>
              <input
                type="text"
                required
                placeholder="Nombre de la planta"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Sector o Industria</label>
              <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500">
                <option>Bodega / Vitivinícola</option>
                <option>Cervecería / Destilería</option>
                <option>Frigorífico / Faena</option>
                <option>Olivícola / Aceitera</option>
                <option>Láctea / Quesería</option>
                <option>Alimentos y Bebidas</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Nombre del Responsable</label>
              <input
                type="text"
                required
                placeholder="Nombre y apellido"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Teléfono de Contacto</label>
              <input
                type="tel"
                required
                placeholder="+54 9 261 ..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-slate-400 block mb-1">Descripción de la necesidad o desafío de limpieza</label>
              <textarea
                rows={3}
                placeholder="Indicar volumen de tanques, si hay presencia de sarro o biofilm, tipo de agua..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Solicitar Asistencia en Planta</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>
);
};
