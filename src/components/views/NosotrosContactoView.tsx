import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  Award,
  Factory,
  CheckCircle2,
} from 'lucide-react';
import { IMAGES } from '../../data/mockData.ts';

interface NosotrosContactoViewProps {
  initialTab?: 'nosotros' | 'contacto';
}

export const NosotrosContactoView: React.FC<NosotrosContactoViewProps> = ({
  initialTab = 'nosotros',
}) => {
  const [activeTab, setActiveTab] = useState<'nosotros' | 'contacto'>(initialTab);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5492611234567?text=Hola%20InterQuímica%20Argentina,%20deseo%20comunicarme%20con%20atención%20al%20cliente.',
      '_blank'
    );
  };

  return (
    <div className="w-full bg-[#050b14] text-slate-100 min-h-screen">
      {/* Full-width Edge-to-Edge Banner with Banner 6 image */}
      <div className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-16 sm:pb-20 lg:pb-24">
        <img
          src={IMAGES.banner6}
          alt="Instalaciones InterQuímica"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
              MENDOZA, ARGENTINA · MÁS DE 25 AÑOS DE TRAYECTORIA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              {activeTab === 'nosotros'
                ? 'Innovación y excelencia en química aplicada'
                : 'Contacto y Asesoramiento en Planta'}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {activeTab === 'nosotros'
                ? 'Desarrollamos soluciones químicas de alta performance con laboratorio propio y asistencia técnica especializada para bodegas, cervecerías, frigoríficos e industrias de alimentos de todo el país.'
                : 'Nuestro equipo de ingenieros y especialistas está a tu disposición para cotizaciones, desarrollo de mezclas a medida y soporte en sitio.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Subnav Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('nosotros')}
            className={`py-2 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'nosotros'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => setActiveTab('contacto')}
            className={`py-2 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'contacto'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Contacto & Ubicación
          </button>
        </div>

        {activeTab === 'nosotros' && (
          <div className="space-y-12">
            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div>
                <span className="text-3xl font-black text-blue-400 font-mono block">+25</span>
                <span className="text-xs text-slate-400">Años de trayectoria industrial</span>
              </div>
              <div>
                <span className="text-3xl font-black text-blue-400 font-mono block">+500</span>
                <span className="text-xs text-slate-400">Plantas y bodegas atendidas</span>
              </div>
              <div>
                <span className="text-3xl font-black text-emerald-400 font-mono block">100%</span>
                <span className="text-xs text-slate-400">Fórmulas biodegradables</span>
              </div>
              <div>
                <span className="text-3xl font-black text-emerald-400 font-mono block">ISO</span>
                <span className="text-xs text-slate-400">Certificación 9001:2015</span>
              </div>
            </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Certificación ISO 9001:2015</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cada lote producido es testeado cromatográfica y titrimétricamente en nuestro laboratorio central antes de su despacho.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl w-fit">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Fabricación Propia</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Planta industrial propia en Mendoza equipada con reactores de acero inoxidable de alta capacidad y envasado automatizado.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Compromiso Sustentable</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Desarrollo continuo de surfactantes libres de fosfatos y fórmulas de fácil enjuagabilidad para reducir la huella hídrica.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contacto' && (
        <div className="space-y-12">
          {/* Centered Main Contact Form */}
          <div className="max-w-2xl mx-auto w-full bg-[#09111e] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                ATENCIÓN COMERCIAL & ASESORAMIENTO TÉCNICO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Envianos un Mensaje
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Completá tus datos y un representante técnico te responderá en menos de 2 horas hábiles.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 text-center bg-emerald-950/40 border border-emerald-600/40 rounded-2xl space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">¡Mensaje recibido con éxito!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Nos contactaremos a la brevedad con la información técnica y cotización solicitada para tu planta.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-900/50 hover:bg-emerald-800 rounded-lg transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Empresa / Razón Social *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de la bodega / planta"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+54 9 261 ..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Mensaje o Consulta Técnica *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribí aquí los detalles de los productos o procesos de limpieza que necesitás optimizar..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-500">
                    * Todos los campos son obligatorios. Respuesta en el día.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-w-[200px] py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Centered Direct Contact Channels Grid */}
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="text-center">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Canales de Atención Directa
              </h3>
              <p className="text-xs text-slate-400">
                Atención personalizada con ingenieros químicos especialistas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col justify-between p-5 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">Planta Central</strong>
                    <span className="text-xs text-slate-400">Carril Rodríguez Peña, Mendoza, Argentina.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">Teléfono Comercial</strong>
                    <span className="text-xs text-slate-400 font-mono">+54 9 261 123 4567</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">Correo Electrónico</strong>
                    <span className="text-xs text-slate-400 break-all">info@interquimica.com.ar</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 bg-emerald-950/20 rounded-2xl border border-emerald-900/50 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">WhatsApp Directo</strong>
                    <span className="text-xs text-slate-400">Guardia técnica activa</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chatear ahora</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);
};
