import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
interface ProcessOverviewSectionProps {
  onNavigate: (view: string) => void;
  onOpenEscenarios?: (sceneId: string) => void;
}

const processSteps = [
  {
    num: '01',
    title: 'DOSIFICACIÓN SÓLIDA',
    desc: 'Disolución rápida y segura sin manipulación de líquidos corrosivos.',
  },
  {
    num: '02',
    title: 'LAVADO ACTIVO SÓLIDO',
    desc: 'Alta concentración alcalina para remoción profunda de residuos.',
  },
  {
    num: '03',
    title: 'ENJUAGUE ACELERADO',
    desc: 'Fórmula de fácil eliminación con significativo ahorro de agua.',
  },
  {
    num: '04',
    title: 'DESINFECCIÓN INTEGRAL',
    desc: 'Control microbiológico total y máxima seguridad higiénico-sanitaria.',
  },
  {
    num: '05',
    title: 'ACABADO Y AHORRO',
    desc: 'Rápido reinicio operativo con ahorro de tiempo y dinero a largo plazo.',
  },
];

export const ProcessOverviewSection: React.FC<ProcessOverviewSectionProps> = ({
  onNavigate,
  onOpenEscenarios,
}) => {
  const handleOpenProcess = () => {
    if (onOpenEscenarios) {
      onOpenEscenarios('cervecerias');
    } else {
      onNavigate('soluciones');
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#030816] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-[1185px]">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <p className="text-xs font-medium leading-relaxed text-slate-200 sm:text-sm">
            Incorporamos el proceso de lavado con productos sólidos, que es más sencillo, ahorrando tiempo, agua y a la larga dinero.
          </p>
        </motion.header>

        <div className="relative mb-8">
          <div className="absolute left-[10%] right-[10%] top-4 hidden h-px bg-gradient-to-r from-sky-500/40 via-[#00c8ff] to-sky-500/40 shadow-[0_0_8px_rgba(0,200,255,0.8)] sm:block" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-5 sm:gap-2">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0088cc] text-xs font-bold text-white shadow-[0_0_12px_rgba(0,136,204,0.75)]">
                  {step.num}
                </div>
                <div className="mt-2 space-y-1">
                  <h3 className="text-[11px] font-black uppercase leading-tight tracking-wide text-white sm:text-xs">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-[210px] text-[10px] leading-tight text-slate-300 sm:text-[11px]">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-1.5 hidden h-3.5 w-px bg-gradient-to-b from-[#00c8ff] to-transparent opacity-70 sm:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative overflow-hidden rounded-xl border border-sky-500/25 bg-[#020713] shadow-2xl shadow-sky-950/50"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EoEMAUiErCWvSdlhNI2D3Qj3zmgfJN.png"
            alt="Proceso industrial CIP con tanques de acero inoxidable y línea de embotellado"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="block h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#030816] to-transparent" />
        </motion.div>

        <div className="flex justify-center pt-5">
          <button
            onClick={handleOpenProcess}
            className="flex cursor-pointer items-center gap-2 rounded-md border border-[#0099e6] bg-[#06152b] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_16px_rgba(0,153,230,0.3)] transition-all hover:border-[#00e1ff] hover:bg-[#0a2347] hover:text-[#00e1ff] hover:shadow-[0_0_24px_rgba(0,225,255,0.6)]"
          >
            <span>VER TODO EL PROCESO</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
