/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Mail,
  CheckCircle2, 
  Award, 
  Sparkles, 
  ChevronRight,
  ExternalLink,
  Calendar,
  User
} from 'lucide-react';

const ImageSlider = () => {
  const images = [
    "https://i.postimg.cc/FsZMSBpS/dc7e6777_52db_4d24_a3bd_e94ca317a648.jpg",
    "https://i.postimg.cc/J4qfX2xH/3ef19d74_1af7_45c2_9a63_0ad43fbb3af9.jpg",
    "https://i.postimg.cc/02fTSBnM/2ed65a6d_d7f6_4a34_b2e8_3602fdce68c7.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-lg border border-black/[0.03]">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          referrerPolicy="no-referrer"
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-white w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const services = [
    {
      title: 'Carillas Cerámicas',
      description: 'Restauraciones de alta estética que transforman tu sonrisa con naturalidad.',
      price: 'Desde $6,000 por carilla · Diagnóstico sin costo',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: 'Carillas de Resina',
      description: 'Opción versátil y mínimamente invasiva para imperfecciones.',
      price: 'Desde $19,999 por docena de carillas · Diagnóstico sin costo',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: 'Diseño de Sonrisa',
      description: 'Planificación integral basada en armonía facial y diagnóstico serio.',
      icon: <Award className="w-5 h-5" />
    }
  ];

  const strengths = [
    'Especialidad en prótesis y estética dental',
    'Protocolos de diagnóstico avanzados',
    'Resultados premium con base clínica',
    'Calidad humana y honestidad'
  ];

  const mapUrl = "https://maps.app.goo.gl/iQ235pgq8huJTrki9";

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CtaButton = ({ className = "", text = "Agendar Cita" }) => (
    <button 
      onClick={scrollToForm}
      className={`bg-ink text-white rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all uppercase tracking-[0.15em] font-bold text-[10px] sm:text-xs cursor-pointer ${className}`}
    >
      {text} <ChevronRight className="w-4 h-4 text-lavender" />
    </button>
  );

  return (
    <div className="min-h-screen bg-white text-ink font-sans selection:bg-lavender/30">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 px-5 py-4 flex items-center justify-between">
        <img 
          src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" 
          alt="Logo Dra. Caty Avila" 
          className="h-9 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        <CtaButton className="px-5 py-2.5" text="Agendar cita gratuita" />
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-10 pb-16 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/5 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <span className="text-lavender font-bold tracking-[0.25em] uppercase text-[10px] mb-4 block">
            Estética Dental de Autor
          </span>
          <h1 className="text-5xl font-serif leading-[1.1] mb-8 tracking-tight">
            Rediseñamos <br />
            <span className="italic text-lavender relative">
              tu sonrisa
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-lavender/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> <br />
            con excelencia.
          </h1>
          
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 mx-auto max-w-sm border-4 border-white">
            <img 
              src="https://i.postimg.cc/hPGqHYg6/Whats-App-Image-2026-03-11-at-15-14-45.jpg" 
              alt="Dra. Caty Avila" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-left">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-lavender" />
                <p className="text-[10px] uppercase tracking-widest opacity-90 font-bold">Trayectoria Premium</p>
              </div>
              <p className="text-3xl font-serif italic">
                <span className="text-4xl not-italic font-bold">20</span> Años de Experiencia
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="max-w-sm mx-auto text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-lavender/30 flex-1" />
              <h2 className="text-2xl font-serif italic text-ink">Dra. Caty Avila</h2>
              <div className="h-px bg-lavender/30 flex-1" />
            </div>
            
            <p className="text-base text-ink/70 leading-relaxed mb-8 font-light">
              Formada en <span className="text-ink font-semibold">UNITEC y la ULA</span>, me apasiona crear sonrisas que irradien salud y confianza. Soy una profesional extrovertida y perfeccionista, comprometida con el detalle absoluto. 
              <br /><br />
              Mi filosofía es clara: <span className="italic font-serif text-ink">la excelencia estética nace de la armonía facial y la precisión clínica</span>. Diseño resultados espectaculares donde la belleza y el bienestar funcional se encuentran en perfecto equilibrio.
            </p>
            
            <div className="grid grid-cols-1 gap-3 mb-10">
              {strengths.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-3 rounded-xl border border-black/[0.03]">
                  <CheckCircle2 className="w-4 h-4 text-lavender shrink-0" />
                  <span className="text-[11px] uppercase tracking-wider font-medium text-ink/60">{item}</span>
                </div>
              ))}
            </div>
            
            <CtaButton className="w-full py-5 text-sm shadow-xl shadow-lavender/10" text="Quiero mi sesión de valoración" />
          </div>
        </motion.div>
      </section>

      {/* Hours Section - More Aesthetic */}
      <section className="px-6 mb-16">
        <div className="bg-stone-50 p-8 rounded-[2.5rem] border border-black/[0.03] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
            <Clock className="w-32 h-32" />
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Clock className="w-5 h-5 text-lavender" />
            </div>
            <h3 className="font-serif italic text-2xl text-ink">Horarios</h3>
          </div>
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-end pb-2 border-b border-black/5">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/30 mb-1">Días Laborales</span>
                <span className="text-sm font-medium text-ink/80">Lunes a Viernes</span>
              </div>
              <span className="text-sm font-serif italic text-lavender">10:00 am — 7:00 pm</span>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/30 mb-1">Fin de Semana</span>
                <span className="text-sm font-medium text-ink/80">Sábados</span>
              </div>
              <span className="text-sm font-serif italic text-lavender">10:00 am — 2:00 pm</span>
            </div>
          </div>
          
          <div className="mt-8">
            <CtaButton className="w-full py-4 text-xs bg-white text-ink border border-black/5" text="Quiero mi sesión de valoración" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-2">Nuestra Especialidad</h2>
          <div className="w-12 h-0.5 bg-lavender mx-auto" />
        </div>
        
        <div className="space-y-4 mb-10">
          {services.map((service, i) => (
            <div 
              key={i}
              className="p-6 rounded-3xl border border-black/[0.03] bg-white shadow-sm flex items-start gap-5"
            >
              <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-lavender shrink-0 border border-black/[0.02]">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-serif italic mb-1">{service.title}</h3>
                <p className="text-xs text-ink/50 leading-relaxed font-light mb-1">{service.description}</p>
                {service.price && (
                  <p className="text-[10px] text-lavender font-bold uppercase tracking-wider">{service.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <CtaButton className="w-full py-4 text-xs" text="Quiero mi sesión de valoración" />
      </section>

      {/* Image Slider Section */}
      <section className="px-6 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif italic text-ink">Transformaciones Reales</h2>
        </div>
        <ImageSlider />
        <p className="text-xs text-center text-ink/60 mt-5 font-light italic">Los resultados varían en cada paciente</p>
        <div className="mt-8">
          <CtaButton className="w-full py-4 text-xs" text="Quiero mi sesión de valoración" />
        </div>
      </section>

      {/* Form Section - High Prominence */}
      <section id="form-section" className="px-6 mb-20 scroll-mt-24">
        <div className="w-full bg-white rounded-[3rem] p-10 text-left relative overflow-hidden shadow-sm border border-black/[0.03]">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
            <Mail className="w-48 h-48" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5 text-lavender" />
              </div>
              <h3 className="text-2xl font-serif text-ink italic">Contáctanos</h3>
            </div>
            
            <p className="text-ink/40 text-[10px] uppercase tracking-[0.3em] mb-10 font-bold">Rellena el formulario y te contactaremos en breve</p>
            
            <div className="bg-white rounded-[2rem] overflow-hidden min-h-[654px] border border-black/[0.02]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/yY7X307aalvaJYNmGZmK"
                style={{ width: '100%', height: '654px', border: 'none', borderRadius: '3px' }}
                id="inline-yY7X307aalvaJYNmGZmK" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form Carillas"
                data-height="654"
                data-layout-iframe-id="inline-yY7X307aalvaJYNmGZmK"
                data-form-id="yY7X307aalvaJYNmGZmK"
                title="Form Carillas"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Location Card */}
      <section className="px-6 mb-20">
        <div className="bg-stone-50 p-10 rounded-[3rem] relative overflow-hidden border border-black/[0.02]">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-lavender" />
              <h2 className="text-2xl font-serif italic">Ubicación</h2>
            </div>
            
            <p className="text-sm text-ink/60 leading-relaxed mb-8 font-light">
              Camino Santa Mónica 8, local 205.<br />
              Tlalnepantla, 54050 Ciudad de México, Méx.
            </p>
            
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink font-bold text-[10px] uppercase tracking-widest border-b border-lavender pb-1 hover:text-lavender transition-colors"
            >
              Abrir en Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="absolute -right-12 -bottom-12 opacity-[0.03] rotate-12">
             <MapPin className="w-64 h-64" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 text-center bg-white">
        <div className="mb-10 opacity-20 grayscale flex justify-center">
          <img src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" alt="Logo" className="h-7" referrerPolicy="no-referrer" />
        </div>
        
        <div className="h-px bg-black/[0.03] w-12 mx-auto mb-8" />
        
        <div className="mb-12 px-6">
          <CtaButton className="w-full py-5 text-sm" text="Quiero mi sesión de valoración" />
        </div>
        
        <p className="text-[8px] text-ink/20 uppercase tracking-[0.4em] mb-6">© 2026 Dra. Caty Avila Salazar</p>

        <div className="space-y-1 opacity-20">
          <p className="text-[7px] uppercase tracking-[0.2em] text-ink font-bold">Cédula Profesional: 8002066</p>
          <p className="text-[7px] uppercase tracking-[0.2em] text-ink font-bold">Aviso de Publicidad: 2315142002A00017</p>
        </div>
      </footer>
    </div>
  );
}
