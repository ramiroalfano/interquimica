import React from 'react';
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { IMAGES } from '../../data/mockData.ts';
import { motion } from 'motion/react';

interface ProcessOverviewSectionProps {
  onNavigate: (view: string) => void;
  onOpenEscenarios?: (sceneId: string) => void;
}

export const ProcessOverviewSection: React.FC<ProcessOverviewSectionProps> = ({
  onNavigate,
  onOpenEscenarios,
}) => {
  // Proceso industrial CIP optimizado en 3 etapas
  const processSteps = [
    { num: '01', title: 'ENJUAGUE INICIAL' },
    { num: '02', title: 'LAVADO Y DESINFECCIÓN', subtitle: '(recircular el producto)' },
    { num: '03', title: 'ENJUAGUE FINAL' },
  ];

  const handleOpenProcess = () => {
    if (onOpenEscenarios) {
      onOpenEscenarios('cervecerias');
    } else {
      onNavigate('soluciones');
    }
  };

  return (
    <section className="relative w-full bg-[#030816] text-white border-t border-b border-slate-800/80 overflow-hidden font-sans">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* ========================================================= */}
        {/* COLUMNA IZQUIERDA: "QUÍMICOS QUE IMPULSAN PROCESOS QUE PRODUCEN MÁS" */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative lg:col-span-5 xl:col-span-4 p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between bg-gradient-to-br from-[#040d21] via-[#030919] to-[#020613] border-b lg:border-b-0 lg:border-r border-slate-800/80 overflow-hidden"
        >
          {/* Technical Blueprint Watermark Texture */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25px 25px, #38bdf8 1.5px, transparent 0),
                linear-gradient(to right, #38bdf8 1px, transparent 1px),
                linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          {/* Blueprint Storage Rack Silhouette */}
          <svg
            className="absolute -right-12 -bottom-12 w-[420px] h-[420px] text-sky-400/[0.04] pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <rect x="5" y="5" width="90" height="90" />
            <line x1="5" y1="25" x2="95" y2="25" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="5" y1="75" x2="95" y2="75" />
            <line x1="25" y1="5" x2="25" y2="95" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="75" y1="5" x2="75" y2="95" />
            <circle cx="50" cy="50" r="32" strokeDasharray="3,3" />
          </svg>

          {/* Headline & Paragraph */}
          <div className="relative z-10 space-y-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] font-display">
              QUÍMICOS QUE<br />
              IMPULSAN PROCESOS<br />
              QUE PRODUCEN MÁS.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Desarrollamos y fabricamos soluciones de alta performance para la industria alimentaria, bebidas, bodegas, frigoríficos y más.
            </p>

            {/* 3 Pillars with cyan icons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
              {/* Pillar 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/10">
                  <FlaskConical className="w-5 h-5 text-[#00c2ff]" />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    FÓRMULAS
                  </p>
                  <p className="text-[11px] font-medium text-slate-300 uppercase">
                    DE ALTO RENDIMIENTO
                  </p>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/10">
                  <ShieldCheck className="w-5 h-5 text-[#00c2ff]" />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    SEGURIDAD Y CUIDADO
                  </p>
                  <p className="text-[11px] font-medium text-slate-300 uppercase">
                    EN CADA ETAPA
                  </p>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/10">
                  <CheckCircle2 className="w-5 h-5 text-[#00c2ff]" />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    RESULTADOS
                  </p>
                  <p className="text-[11px] font-medium text-slate-300 uppercase">
                    COMPROBABLES
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 pt-8 sm:pt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('productos')}
              className="flex items-center gap-2 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0b4592] hover:bg-[#0d54b3] active:bg-[#083470] rounded-md transition-all shadow-lg shadow-blue-950/50 border border-blue-400/30 cursor-pointer"
            >
              <span>VER PRODUCTOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('soluciones')}
              className="flex items-center gap-2 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white hover:text-white bg-[#06122b]/80 hover:bg-[#0a1e47] rounded-md transition-colors border border-slate-600/90 hover:border-sky-400/50 cursor-pointer"
            >
              <span>CONOCÉ NUESTRAS SOLUCIONES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* COLUMNA DERECHA: PROCESO LIMPIO, SEGURO Y EFICIENTE */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative lg:col-span-7 xl:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#040a18] overflow-hidden"
        >
          {/* Ambient Spotlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-sky-600/[0.08] rounded-full blur-[130px] pointer-events-none" />

          {/* Header con Texto Normal No Interactivo */}
          <div className="relative z-10 text-center space-y-2 mb-6 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-wide uppercase font-display">
              UN PROCESO{' '}
              <span className="text-[#00c8ff] drop-shadow-[0_0_14px_rgba(0,200,255,0.5)]">
                LIMPIO, SEGURO Y EFICIENTE
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Acompañamos cada etapa con la solución química ideal.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Incorporamos el proceso de lavado con productos sólidos, que es más sencillo, ahorrando tiempo, agua y a la larga dinero.
            </p>
          </div>

          {/* 3-Step Pipeline Flow with Connected Cyan Line */}
          <div className="relative z-10 w-full mb-6">
            {/* Horizontal Glowing Cyan Pipeline */}
            <div className="absolute top-[16px] sm:top-[18px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-sky-500/30 via-[#00c8ff] to-sky-500/30 shadow-[0_0_8px_rgba(0,200,255,0.8)] pointer-events-none" />

            {/* Steps Row (3 columns) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto">
              {processSteps.map((step, idx) => {
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center text-center select-none"
                  >
                    {/* Number Badge */}
                    <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm bg-[#0088cc] border border-[#38bdf8]/70 text-white shadow-[0_0_12px_rgba(0,180,255,0.7)]">
                      {step.num}
                    </div>

                    {/* Step Title & Note */}
                    <div className="mt-2.5">
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider font-display text-white">
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-[10px] sm:text-xs text-sky-300 font-medium tracking-normal mt-0.5">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Panoramic Realistic Machinery Equipment matching exact reference image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 my-2 rounded-xl overflow-hidden shadow-2xl shadow-sky-950/50 border border-sky-500/20 bg-[#020713]"
          >
            <img
              src={IMAGES.processDiagram}
              alt="Proceso industrial CIP sanitizado con tanques de acero inoxidable, intercambiador de placas y embotellado"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[520px] sm:max-h-[620px] lg:max-h-[700px] transition-transform duration-700 hover:scale-[1.01]"
            />
            {/* Soft gradient edge blend */}
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#040a18] to-transparent pointer-events-none" />
          </motion.div>

          {/* Bottom CTA Button: "VER TODO EL PROCESO →" (exact match to screenshot) */}
          <div className="relative z-10 pt-4 flex justify-center">
            <button
              onClick={handleOpenProcess}
              className="flex items-center gap-2 py-3 px-8 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00e1ff] bg-[#06152b] hover:bg-[#0a2347] border border-[#0099e6] hover:border-[#00e1ff] rounded-md transition-all shadow-[0_0_16px_rgba(0,153,230,0.3)] hover:shadow-[0_0_24px_rgba(0,225,255,0.6)] cursor-pointer"
            >
              <span>VER TODO EL PROCESO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
