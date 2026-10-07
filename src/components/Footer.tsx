import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Youtube,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { IqaLogo } from './IqaLogo.tsx';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectProductById: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectProductById }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMsg('');
      setIsSent(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#030710] border-t border-slate-800/90 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Bio (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div
              onClick={() => onNavigate('inicio')}
              className="cursor-pointer inline-block hover:opacity-95 transition-opacity"
            >
              <IqaLogo size="md" variant="white" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Somos una empresa argentina dedicada al desarrollo, fabricación y comercialización de productos químicos de alta performance para la industria y limpieza profesional.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* ISO 9001 Seal */}
            <div className="pt-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center p-1 bg-slate-900/60">
                <ShieldCheck className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">ISO 9001:2015</span>
                <span className="text-[10px] text-slate-400 block">Gestión de la Calidad Certificada</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navegación (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-blue-400 transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industrias')} className="hover:text-blue-400 transition-colors">
                  Industrias
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('productos')} className="hover:text-blue-400 transition-colors">
                  Productos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('soluciones')} className="hover:text-blue-400 transition-colors">
                  Soluciones Interactivas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('asistencia')} className="hover:text-blue-400 transition-colors">
                  Asistencia Técnica
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nosotros')} className="hover:text-blue-400 transition-colors">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contacto')} className="hover:text-blue-400 transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Productos Clave (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Líneas Destacadas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onSelectProductById('na45')} className="hover:text-blue-400 transition-colors">
                  Na45 (Alcalino CIP)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectProductById('k45')} className="hover:text-blue-400 transition-colors">
                  K45 (Alcalino Clorado)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectProductById('na75-plus')} className="hover:text-blue-400 transition-colors">
                  Na75 Plus (Aguas duras)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectProductById('acid')} className="hover:text-blue-400 transition-colors">
                  Acid (Desincrustante)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectProductById('foam-plus')} className="hover:text-blue-400 transition-colors">
                  Foam Plus (Espumígeno)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectProductById('oxi-t')} className="hover:text-blue-400 transition-colors">
                  OXI T (Ácido Peracético)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('productos')} className="text-blue-400 font-semibold hover:underline">
                  Ver catálogo completo →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>+54 9 261 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>info@interquimica.com.ar</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Lunes a Viernes 8 a 17 hs</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Mendoza, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Formulario Escríbenos (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Escríbenos
            </h4>
            {isSent ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-600/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>¡Mensaje enviado! Te responderemos a la brevedad.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  required
                  placeholder="Nombre y empresa"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email corporativo"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
                <textarea
                  rows={2}
                  required
                  placeholder="Consulta o necesidad..."
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 InterQuímica Argentina. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Política de privacidad</span>
            <span className="hover:text-slate-400 cursor-pointer">Términos y condiciones</span>
            <span className="hover:text-slate-400 cursor-pointer">Política de calidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
