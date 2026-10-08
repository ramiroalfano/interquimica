/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomeView } from './components/views/HomeView.tsx';
import { IndustriasView } from './components/views/IndustriasView.tsx';
import { ProductosView } from './components/views/ProductosView.tsx';
import { InteractiveSceneViewer } from './components/InteractiveSceneViewer.tsx';
import { AsistenciaView } from './components/views/AsistenciaView.tsx';
import { NosotrosContactoView } from './components/views/NosotrosContactoView.tsx';

import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { DosageCalculatorModal } from './components/DosageCalculatorModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';

import { Product, Industry } from './types.ts';
import { PRODUCTS, INDUSTRIES } from './data/mockData.ts';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('inicio');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(INDUSTRIES[0]);
  const [interactiveSceneId, setInteractiveSceneId] = useState<string>('cervecerias');
  const [isScrolled, setIsScrolled] = useState(false);

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [quotePresentation, setQuotePresentation] = useState<string | undefined>(undefined);

  const [dosageModalOpen, setDosageModalOpen] = useState(false);
  const [dosageProduct, setDosageProduct] = useState<Product | null>(null);

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Track scroll position to shrink the floating WhatsApp button smoothly
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (product?: Product, presentation?: string) => {
    setQuoteProduct(product || null);
    setQuotePresentation(presentation);
    setQuoteModalOpen(true);
  };

  const handleOpenDosageCalc = (product?: Product) => {
    setDosageProduct(product || null);
    setDosageModalOpen(true);
  };

  const handleSelectIndustry = (ind: Industry) => {
    setSelectedIndustry(ind);
    setInteractiveSceneId(ind.id);
  };

  const handleOpenEscenariosWithScene = (sceneId: string) => {
    setInteractiveSceneId(sceneId);
    setCurrentView('soluciones');
  };

  const handleSelectProductById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  const handleFloatingWhatsApp = () => {
    window.open(
      'https://wa.me/5492611234567?text=Hola%20InterQuímica%20Argentina,%20deseo%20hacer%20una%20consulta%20técnica%20sobre%20sus%20productos.',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={setCurrentView}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onSelectIndustry={handleSelectIndustry}
      />

      {/* Main View Switcher */}
      <main className={`flex-1 ${currentView === 'productos' || currentView === 'industrias' ? 'bg-white' : ''}`}>
        {currentView === 'inicio' && (
          <HomeView
            onNavigate={setCurrentView}
            onSelectProduct={setSelectedProduct}
            onSelectIndustry={(ind) => {
              handleSelectIndustry(ind);
              setCurrentView('industrias');
            }}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentView === 'industrias' && (
          <IndustriasView
            selectedIndustryId={selectedIndustry.id}
            onSelectProduct={setSelectedProduct}
            onNavigateToProducts={() => setCurrentView('productos')}
            onOpenQuote={() => handleOpenQuote()}
            onOpenEscenarios={handleOpenEscenariosWithScene}
          />
        )}

        {currentView === 'productos' && (
          <ProductosView
            onSelectProduct={setSelectedProduct}
            onRequestQuote={handleOpenQuote}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'soluciones' && (
          <InteractiveSceneViewer
            initialSceneId={interactiveSceneId}
            onSelectProduct={setSelectedProduct}
            onNavigateToProducts={() => setCurrentView('productos')}
          />
        )}

        {currentView === 'asistencia' && (
          <AsistenciaView onOpenDosageCalc={() => handleOpenDosageCalc()} />
        )}

        {currentView === 'nosotros' && (
          <NosotrosContactoView initialTab="nosotros" />
        )}

        {currentView === 'contacto' && (
          <NosotrosContactoView initialTab="contacto" />
        )}
      </main>

      {/* Global Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prod, pres) => {
          setSelectedProduct(null);
          handleOpenQuote(prod, pres);
        }}
        onOpenDosageCalc={(prod) => {
          setSelectedProduct(null);
          handleOpenDosageCalc(prod);
        }}
      />

      <QuoteModal
        initialProduct={quoteProduct}
        initialPresentation={quotePresentation}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <DosageCalculatorModal
        initialProduct={dosageProduct}
        isOpen={dosageModalOpen}
        onClose={() => setDosageModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={setSelectedProduct}
        onSelectIndustry={(ind) => {
          handleSelectIndustry(ind);
          setCurrentView('industrias');
        }}
      />

      {/* Floating WhatsApp Action Button with Notification Count (shrinks down when user scrolls) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={handleFloatingWhatsApp}
          className={`relative flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-950/90 active:scale-95 transition-all duration-300 ease-out transform ${
            isScrolled
              ? 'w-11 h-11 p-0 scale-90 hover:scale-100 ring-2 ring-emerald-400/40'
              : 'px-4 py-3 sm:px-5 sm:py-3.5 gap-2.5 scale-100 hover:scale-105'
          }`}
          title="Contactanos por WhatsApp (+54 9 261 123 4567)"
        >
          {/* Notification Ping Badge */}
          <span
            className={`absolute bg-rose-600 text-white rounded-full font-bold flex items-center justify-center border-2 border-[#050b14] shadow-sm transition-all duration-300 ${
              isScrolled
                ? '-top-1 -right-1 w-4 h-4 text-[9px]'
                : '-top-1.5 -right-1.5 w-5 h-5 text-[10px]'
            }`}
          >
            1
          </span>
          <MessageCircle className="w-5 h-5 shrink-0" />
          {!isScrolled && (
            <span className="font-semibold whitespace-nowrap overflow-hidden transition-all duration-300">
              Contactanos por WhatsApp
            </span>
          )}
        </button>
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentView}
        onSelectProductById={handleSelectProductById}
      />
    </div>
  );
}
