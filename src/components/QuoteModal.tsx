import React, { useState } from 'react';
import { Product } from '../types.ts';
import { PRODUCTS, INDUSTRIES } from '../data/mockData.ts';
import {
  X,
  Send,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Package,
} from 'lucide-react';

interface QuoteModalProps {
  initialProduct?: Product | null;
  initialPresentation?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  initialProduct,
  initialPresentation,
  isOpen,
  onClose,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || 'na45'
  );
  const [presentation, setPresentation] = useState<string>(
    initialPresentation || '20 kg'
  );
  const [quantity, setQuantity] = useState<number>(5);
  const [industry, setIndustry] = useState<string>('Bodegas');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola InterQuímica Argentina, solicito cotización:\n\n` +
        `Empresa: ${companyName || 'No especificada'}\n` +
        `Contacto: ${contactName || 'No especificado'}\n` +
        `Tel: ${phone || '-'}\n` +
        `Industria: ${industry}\n` +
        `Producto: ${currentProduct.name} (${currentProduct.title})\n` +
        `Presentación: ${presentation}\n` +
        `Cantidad estimada: ${quantity} unidades\n` +
        `Comentarios: ${comments || 'Sin comentarios adicionales'}`
    );
    window.open(`https://wa.me/5492611234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-xl bg-[#09111e] border border-slate-800 rounded-2xl shadow-2xl p-6 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Solicitar Cotización Oficial
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Respuesta técnica y comercial personalizada en menos de 24 horas
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">¡Solicitud Recibida con Éxito!</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Nuestro departamento técnico y comercial de InterQuímica Argentina se comunicará con{' '}
              <span className="text-white font-semibold">{email || contactName}</span> para coordinar precios corporativos y entrega en planta.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="py-2.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg shadow-emerald-600/30"
              >
                Enviar también por WhatsApp
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-5">
            {/* Product selection preview */}
            <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Producto a cotizar
                  </label>
                  <select
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} - {p.categoryLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Presentación deseada
                  </label>
                  <select
                    value={presentation}
                    onChange={(e) => setPresentation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {currentProduct.presentations.map((pres) => (
                      <option key={pres.size} value={pres.size}>
                        {pres.size} ({pres.packaging})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Cantidad de unidades estimada
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-blue-500"
                    />
                    <Package className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Industria / Aplicación
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Client info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Empresa / Planta
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Ej. Bodega Los Andes"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <Building className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Nombre de contacto
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Ej. Lic. Martín Gómez"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <User className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Email corporativo
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="contacto@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Teléfono / WhatsApp
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 261 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                Comentarios específicos o requisitos de entrega
              </label>
              <div className="relative">
                <textarea
                  rows={2}
                  placeholder="Detalles de la instalación, volumen de consumo mensual o dudas técnicas..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
                <MessageSquare className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-600/50 rounded-xl transition-colors"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
