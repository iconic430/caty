import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  MapPin, 
  Check, 
  ChevronDown, 
  Calendar, 
  Phone, 
  User,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Star,
  ExternalLink
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Sub-components ---

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  fullWidth = false,
  ...props 
}: { 
  children: ReactNode; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  [key: string]: any;
}) => {
  const variants = {
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'bg-white text-black hover:bg-zinc-100',
    outline: 'border border-brand-border bg-transparent text-brand-text hover:bg-zinc-50',
    ghost: 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-200 uppercase letter-spacing-tag text-sm',
        variants[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Section = ({ 
  children, 
  className, 
  id,
  noPadding = false 
}: { 
  children: ReactNode; 
  className?: string; 
  id?: string;
  noPadding?: boolean;
}) => (
  <section id={id} className={cn('w-full flex justify-center', !noPadding && 'py-16 md:py-24', className)}>
    <div className="w-full max-w-[800px] px-5 sm:px-6">
      {children}
    </div>
  </section>
);

const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={cn('bg-white rounded-[32px] border border-brand-border shadow-md p-8 md:p-12', className)}
  >
    {children}
  </motion.div>
);

const Badge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase letter-spacing-tag rounded-full mb-4', className)}>
    {children}
  </span>
);

// --- Main App Component ---

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const transforms = [
    "https://i.postimg.cc/FsZMSBpS/dc7e6777_52db_4d24_a3bd_e94ca317a648.jpg",
    "https://i.postimg.cc/J4qfX2xH/3ef19d74_1af7_45c2_9a63_0ad43fbb3af9.jpg",
    "https://i.postimg.cc/02fTSBnM/2ed65a6d_d7f6_4a34_b2e8_3602fdce68c7.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transforms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [transforms.length]);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/20">
      
      {/* SECTION 1: HEADER SUPERIOR (Fixed) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border h-24 flex items-center justify-center">
        <div className="w-full max-w-[800px] px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" alt="Logo Caty Avila" className="h-16 w-auto object-contain" />
          </div>
          <Button variant="primary" className="px-5 py-4 text-xs font-bold shadow-xl shadow-black/10" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Agendar <ChevronRight size={16} />
          </Button>
        </div>
      </header>

      <div className="pt-24"> {/* Spacer for fixed header */}
        
        {/* SECTION 2: UBICACION (Sticky-ish subheader) */}
        <div className="w-full border-b border-brand-border bg-white flex justify-center py-4">
          <div className="w-full max-w-[800px] px-6 flex items-center gap-3 text-xs text-zinc-500 font-bold uppercase letter-spacing-tag">
            <MapPin size={16} className="text-brand-primary flex-shrink-0" />
            <span className="truncate">Camino Santa Monica 8, Tlalnepantla, CDMX</span>
          </div>
        </div>

        {/* SECTION 3: LOGO CENTRAL */}
        <Section className="pb-10 pt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-4">
              <img src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" alt="Logo Caty Avila Dental" className="w-full h-auto object-contain" />
            </div>
          </motion.div>
        </Section>

        {/* SECTION 4: GANCHO EMOCIONAL (HOOK) */}
        <Section className="pt-4">
          <Card className="text-center px-6 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              ✨ ¿Evitas sonreír en fotos o al hablar con alguien?
            </h1>
            <p className="text-zinc-600 leading-relaxed text-lg italic serif-italic">
              Un protocolo de estética dental de autor, diseñado para devolverte
              una sonrisa natural, armónica y segura.
            </p>
            <p className="text-zinc-500 mt-6 text-base leading-relaxed">
              Sin tratamientos improvisados. Sin resultados genéricos. Con diagnóstico real y planificación personalizada.
            </p>
          </Card>
        </Section>

        {/* SECTION 5: "TE IDENTIFICAS?" (PAIN POINTS) */}
        <Section className="bg-brand-primary text-white" noPadding>
          <div className="py-20 md:py-28 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-14">¿Te identificas?</h2>
            <div className="space-y-10 max-w-[90%] mx-auto">
              {[
                "Sientes que tu sonrisa no refleja quién realmente eres.",
                "Has consultado antes, pero no te dieron un plan claro ni personalizado.",
                "Te preocupa que un tratamiento dental se vea artificial o fuera de lugar.",
                "Quieres un cambio real, pero no sabes por dónde empezar."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-bold text-xl md:text-2xl leading-tight border-b border-white/20 pb-8 last:border-0"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 6: SERVICIOS */}
        <Section id="servicios">
          <div className="text-center mb-12">
            <Badge>Protocolos Exclusivos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Nuestras Experiencias</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SMILE GLOW UP */}
            <Card className="flex flex-col p-8 border-2 border-brand-secondary/20 relative overflow-hidden ring-4 ring-brand-primary/5">
              <div className="absolute top-4 right-4 translate-x-2 -translate-y-2">
                <div className="bg-brand-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  ⭐ MÁS ELEGIDO
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold uppercase letter-spacing-tag leading-tight">SMILE GLOW UP EXPERIENCE</h3>
                <p className="text-brand-primary font-serif italic text-lg mt-2">6 Carillas de Porcelana</p>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-6 mb-8 border border-brand-border">
                <div className="flex justify-between items-center mb-2 text-zinc-400 text-sm">
                  <span>Antes:</span>
                  <span className="line-through">$60,100</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-zinc-600">Hoy:</span>
                  <span className="text-2xl font-bold text-brand-secondary">$49,500</span>
                </div>
                <div className="pt-3 border-t border-dashed border-zinc-300 flex justify-between items-center">
                  <span className="text-xs uppercase font-bold text-brand-primary">Ahorras:</span>
                  <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">$10,600</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {[
                  { name: "6 Carillas de Porcelana premium", price: "$48,000", badge: "INCLUIDO" },
                  { name: "Diseño de sonrisa digital", price: "$2,000", badge: "GRATIS" },
                  { name: "Análisis facial", price: "$400", badge: "GRATIS" },
                  { name: "Blanqueamiento", price: "$3,000", badge: "50% OFF" },
                  { name: "Limpieza completa", price: "$1,200", badge: "GRATIS" },
                  { name: "Consulta especializada", price: "$800", badge: "GRATIS" },
                  { name: "Fotografía clínica profesional", price: "$400", badge: "GRATIS" }
                ].map((service, i) => (
                  <li key={i} className="flex items-center justify-between text-[10px] font-bold text-zinc-600 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
                      <span className="truncate uppercase">{service.name}</span>
                    </div>
                    <div className="flex-grow border-b border-dotted border-zinc-200 mt-1" />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="line-through text-zinc-400 font-normal">{service.price}</span>
                      <span className="text-[#BF40BF] font-black drop-shadow-[0_0_5px_rgba(191,64,191,0.4)]">
                        {service.badge}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Button fullWidth className="py-5 shadow-xl shadow-brand-primary/20" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                AGENDAR VALORACIÓN
              </Button>
            </Card>

            {/* SMILE GLOW EXPRESS */}
            <Card className="flex flex-col p-8 border-2 border-brand-border hover:border-brand-primary/30 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold uppercase letter-spacing-tag leading-tight">SMILE GLOW EXPRESS EXPERIENCE</h3>
                <p className="text-brand-primary font-serif italic text-lg mt-2">6 Resinas Inyectadas</p>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-6 mb-8 border border-brand-border">
                <div className="flex justify-between items-center mb-2 text-zinc-400 text-sm">
                  <span>Antes:</span>
                  <span className="line-through">$34,800</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-zinc-600">Hoy:</span>
                  <span className="text-2xl font-bold text-brand-secondary">$28,500</span>
                </div>
                <div className="pt-3 border-t border-dashed border-zinc-300 flex justify-between items-center">
                  <span className="text-xs uppercase font-bold text-brand-primary">Ahorras:</span>
                  <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">$6,300</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {[
                  { name: "6 Resinas Inyectadas", price: "$27,000", badge: "INCLUIDO" },
                  { name: "Diseño de sonrisa digital", price: "$2,000", badge: "GRATIS" },
                  { name: "Análisis facial", price: "$400", badge: "GRATIS" },
                  { name: "Blanqueamiento", price: "$3,000", badge: "50% OFF" },
                  { name: "Limpieza completa", price: "$1,200", badge: "GRATIS" },
                  { name: "Consulta especializada", price: "$800", badge: "GRATIS" },
                  { name: "Fotografía clínica profesional", price: "$400", badge: "GRATIS" }
                ].map((service, i) => (
                  <li key={i} className="flex items-center justify-between text-[10px] font-bold text-zinc-600 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
                      <span className="truncate uppercase">{service.name}</span>
                    </div>
                    <div className="flex-grow border-b border-dotted border-zinc-200 mt-1" />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="line-through text-zinc-400 font-normal">{service.price}</span>
                      <span className="text-[#BF40BF] font-black drop-shadow-[0_0_5px_rgba(191,64,191,0.4)]">
                        {service.badge}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Button fullWidth className="py-5" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                AGENDAR VALORACIÓN
              </Button>
            </Card>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-border text-center">
            <p className="text-zinc-400 text-sm italic">
              Planificación integral basada en armonía facial y diagnóstico por la Dra. Caty Avila.
            </p>
          </div>
        </Section>

        {/* SECTION 7: ¿POR QUE ELEGIRNOS? */}
        <Section className="bg-brand-primary text-white" noPadding>
          <div className="py-20 text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Por qué elegirnos?</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-[650px] mx-auto opacity-90">
              Porque cada sonrisa que diseñamos nace de la <span className="serif-italic">armonía facial y la precisión clínica</span>. 
              La Dra. Caty Avila cuenta con más de 20 años de experiencia, formación en UNITEC y la ULA, y una filosofía clara: 
              la excelencia estética es el equilibrio perfecto entre belleza y bienestar funcional. 
              Aquí no hay tratamientos genéricos — cada protocolo se diseña según tu rostro, tus necesidades y tus objetivos.
            </p>
          </div>
        </Section>


        {/* SECTION 9: ¿QUIEN LO REALIZA? */}
        <Section>
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quién lo realiza?</h2>
              <p className="text-zinc-600 leading-relaxed max-w-[600px] mx-auto text-lg">
                Todos los procedimientos son realizados personalmente por la 
                <span className="font-bold"> Dra. Caty Avila Salazar</span>, odontólogo con cédula profesional 8002066, 
                con más de 20 años de trayectoria en estética dental y prótesis.
              </p>
              <p className="text-zinc-500 mt-6 leading-relaxed max-w-[600px] mx-auto">
                Formada en UNITEC y la ULA, trabaja con protocolos de diagnóstico 
                avanzados y materiales de calidad premium. Tu sonrisa está en manos 
                de una profesional comprometida con el detalle absoluto, la calidad humana y la honestidad.
              </p>
           </div>
           
           <div className="relative mx-auto w-full max-w-[500px]">
              <div className="aspect-[4/5] bg-zinc-100 rounded-[32px] overflow-hidden relative shadow-2xl">
                 <img 
                   src="https://i.postimg.cc/hPGqHYg6/Whats-App-Image-2026-03-11-at-15-14-45.jpg" 
                   alt="Dra. Caty Avila" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="font-serif italic text-2xl">Dra. Caty Avila Salazar</div>
                    <div className="text-xs uppercase letter-spacing-tag opacity-80 mt-1">Especialista en Estética y Prótesis</div>
                 </div>
              </div>
           </div>
        </Section>

        {/* SECTION 10: BENEFICIOS REALES */}
        <Section className="bg-brand-primary text-white" noPadding>
          <div className="py-20">
            <div className="max-w-[80%] mx-auto grid gap-6">
              {[
                "Diagnóstico personalizado basado en armonía facial",
                "Materiales de alta estética con apariencia natural",
                "Procedimientos mínimamente invasivos según el caso",
                "Atención directa por una especialista con 20 años de experiencia",
                "Sesión de valoración inicial personalizada",
                "Acompañamiento profesional durante todo el proceso",
                "Resultados orientados a la naturalidad y el bienestar funcional"
              ].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 text-base md:text-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                    <Check size={14} />
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 flex justify-center px-6">
              <Button variant="ghost" className="max-w-[400px] w-full border border-white/20" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                QUIERO MI SESIÓN DE VALORACIÓN
              </Button>
            </div>
          </div>
        </Section>

        {/* SECTION 11: "¿PUEDE AYUDARTE?" */}
        <Section>
          <h2 className="text-4xl font-bold mb-12 text-center">¿Puede ayudarte?</h2>
          <div className="grid gap-6 max-w-full">
            {[
              "Si quieres corregir el color, forma o alineación de tus dientes anteriores.",
              "Si buscas una alternativa estética con cambios visibles en la primer sesión.",
              "Si deseas un diagnóstico profesional antes de tomar una decisión.",
              "Si valoras la atención personalizada y los resultados naturales."
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start bg-zinc-50 p-7 rounded-[24px] border border-brand-border">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0">
                  <Check size={14} />
                </div>
                <p className="text-zinc-700 font-medium text-lg leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 12: TRANSFORMACIONES REALES */}
        <Section>
          <div className="text-center mb-12">
            <Badge className="px-4 py-2">Casos Clínicos</Badge>
            <h2 className="text-4xl font-bold mt-4">Transformaciones Reales</h2>
          </div>

          <div className="relative group overflow-hidden">
            <div className="relative aspect-video w-full mx-auto overflow-hidden rounded-[40px] shadow-2xl border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={transforms[currentSlide]} 
                    alt={`Transformación ${currentSlide + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-3 mt-10 mb-8">
               {transforms.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "transition-all duration-500 rounded-full",
                      i === currentSlide ? "bg-brand-primary w-10 h-3" : "bg-zinc-200 w-3 h-3"
                    )} 
                  />
               ))}
            </div>

            <p className="text-[10px] text-zinc-400 text-center italic mb-10">
              * Los resultados varían en cada paciente
            </p>

            <Button fullWidth variant="outline" className="border-brand-border" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              QUIERO MI SESIÓN DE VALORACIÓN
            </Button>
          </div>
        </Section>

        {/* SECTION 13: FORMULARIO DE CONTACTO (IFRAME) */}
        <Section className="bg-brand-primary text-white" noPadding id="contact-form">
          <div className="py-20 text-center px-6">
            <h2 className="text-4xl font-bold mb-4">Cupos limitados</h2>
            <p className="text-lg opacity-90 mb-12">
              Solo se agendan un número limitado de valoraciones por día.<br/>
              Agenda tu sesión para asegurar tu lugar.
            </p>

            <div className="bg-white rounded-[32px] overflow-hidden text-brand-text text-left max-w-full mx-auto shadow-2xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/yY7X307aalvaJYNmGZmK"
                style={{ width: '100%', height: '700px', border: 'none' }}
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
        </Section>

        {/* SECTION 14: VIDEO DE TOUR */}
        <Section className="text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs mb-8">
            <MapPin size={14} className="text-brand-primary" />
            <span>Camino Santa Monica 8, local 205, Tlalnepantla, CDMX</span>
          </div>

          <div className="aspect-video bg-zinc-900 rounded-[32px] shadow-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors" />
             <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white z-10 transition-transform group-hover:scale-110">
                <ChevronRight size={40} className="ml-1" />
             </div>
             <div className="absolute bottom-6 left-6 text-white text-left z-10">
                <p className="text-[10px] uppercase letter-spacing-tag font-bold opacity-70">Tour Virtual</p>
                <h3 className="text-xl font-bold">Conoce Smile Clinic</h3>
             </div>
          </div>
        </Section>

        {/* SECTION 15: PREGUNTAS FRECUENTES (FAQ) */}
        <Section>
          <Badge className="mx-auto block w-fit">Resolvemos tus dudas</Badge>
          <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          
          <div className="space-y-5">
            {[
              {
                q: "¿Las carillas se ven naturales?",
                a: "Sí. Tanto las carillas cerámicas como las de resina se diseñan para integrarse armónicamente con el color, forma y tamaño de tus dientes naturales. Cada caso se planifica de forma personalizada."
              },
              {
                q: "¿El procedimiento es doloroso?",
                a: "En la mayoría de los casos, la colocación de carillas es un procedimiento mínimamente invasivo y bien tolerado. Durante la valoración inicial se explica a detalle el proceso y se resuelven todas tus dudas."
              },
              {
                q: "¿Qué incluye la sesión de valoración?",
                a: "Incluye un diagnóstico estético personalizado, análisis de armonía facial, revisión de tu salud dental actual y una propuesta de tratamiento con opciones y costos claros."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-[24px] overflow-hidden transition-all",
                  activeFaq === index ? "border-brand-primary/40 bg-zinc-50 ring-4 ring-brand-primary/5" : "border-brand-border bg-white"
                )}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-7 text-left"
                >
                  <span className="font-bold text-xl leading-snug">{faq.q}</span>
                  <ChevronDown className={cn("transition-transform duration-300", activeFaq === index && "rotate-180 text-brand-primary")} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 text-zinc-600 text-lg leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 16: UBICACION MAP (IFRAME) */}
        <Section>
          <Card className="bg-zinc-50 border-none p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="text-brand-primary" /> Ubicación
            </h2>
            <div className="space-y-6">
              <div className="text-zinc-600 mb-4 px-2">
                <p className="font-bold text-brand-text">Camino Santa Monica 8, local 205.</p>
                <p>Tlalnepantla, 54050 Ciudad de México, Méx.</p>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-brand-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15042.812399220556!2d-99.2155!3d19.5397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f56860000000%3A0xc399580a9693149f!2sC.%20Santa%20M%C3%B3nica%208%2C%20Hab%20Santa%20M%C3%B3nica%2C%2054050%20Tlalnepantla%20de%20Baz%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1715000000000!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Card>
        </Section>

        {/* SECTION 17: FOOTER */}
        <footer className="bg-zinc-950 text-white py-16 md:py-20 flex justify-center">
          <div className="w-full max-w-[800px] px-6 text-center">
            
            <div className="flex flex-col items-center gap-2 mb-12">
               <img src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" alt="Logo Footer" className="h-20 w-auto brightness-0 invert opacity-80 mb-4" />
               <div className="font-serif italic font-bold text-2xl">Smile Clinic</div>
               <div className="text-[10px] letter-spacing-tag uppercase opacity-50 font-bold -mt-1">Dental Group</div>
            </div>

            <Button fullWidth variant="outline" className="bg-white/10 border-white/20 text-white mb-16 py-6 group" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              QUIERO MI SESIÓN DE VALORACIÓN <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="space-y-4 opacity-40 text-[9px] uppercase letter-spacing-tag">
              <p>© 2026 DRA. CATY AVILA SALAZAR</p>
              <p>CÉDULA PROFESIONAL: 8002066</p>
              <p>AVISO DE PUBLICIDAD: 2315142002A00017</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
