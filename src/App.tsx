import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  MapPin, 
  Check, 
  ChevronDown, 
  User,
  ShieldCheck,
  Star
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
  <section id={id} className={cn('w-full flex justify-center', !noPadding && 'py-12 md:py-24', className)}>
    <div className="w-full max-w-[800px] px-4 sm:px-6">
      {children}
    </div>
  </section>
);

const Card = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={cn('bg-white rounded-[32px] border border-brand-border shadow-md p-8 md:p-12', className)}
    {...props}
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const transforms = [
    "https://i.postimg.cc/FsZMSBpS/dc7e6777_52db_4d24_a3bd_e94ca317a648.jpg",
    "https://i.postimg.cc/J4qfX2xH/3ef19d74_1af7_45c2_9a63_0ad43fbb3af9.jpg",
    "https://i.postimg.cc/02fTSBnM/2ed65a6d_d7f6_4a34_b2e8_3602fdce68c7.jpg"
  ];

  const testimonials = [
    {
      quote: "Me daba pavor que el resultado se viera artificial. Llevaba años postergándolo por eso. El diseño digital que Caty me mostró antes de empezar cambió todo — vi exactamente cómo iba a quedar. Cuatro años después, siguen igual: mismo color, misma forma. No lo puedo creer.",
      author: "M.G. · EMPRESARIA · CDMX · 4 AÑOS DE SEGUIMIENTO"
    },
    {
      quote: "Lo que más me impactó fue que en las reuniones de trabajo dejé de pensar en mi sonrisa. Simplemente desapareció esa autocensura que tenía. Ahora aparezco en fotos sin pensarlo — cosa que no hacía en años.",
      author: "A.R. · DIRECTORA COMERCIAL · CDMX · 2.5 AÑOS DE SEGUIMIENTO"
    },
    {
      quote: "Vine pensando que sería un cambio estético. Resultó ser algo mucho más personal. Verme diferente en el espejo — más joven, más elegante, más yo — tuvo un impacto que no esperaba en cómo me muevo en el mundo.",
      author: "C.M. · CONSULTORA · CDMX · 14 MESES DE SEGUIMIENTO"
    },
    {
      quote: "La atención personalizada de la Dra. Caty es lo que marca la diferencia. Te explica todo con una honestidad que hoy es difícil de encontrar. Mi proceso fue increíble y el resultado superó lo que soñaba.",
      author: "S.L. · ARTISTA · CDMX · 18 MESES DE SEGUIMIENTO"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transforms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [transforms.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleAgendar = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/20">
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border h-24 flex items-center justify-center">
        <div className="w-full max-w-[800px] px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" alt="Logo Caty Avila" className="h-16 w-auto object-contain" />
          </div>
          <Button variant="primary" className="px-5 py-4 text-[10px] font-bold shadow-xl shadow-black/10" onClick={handleAgendar}>
            AGENDAR VALORACIÓN <ChevronRight size={14} />
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

        {/* SECTION 3 & 4: HERO CON CONTENIDO VISUAL REAL */}
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1606811841680-28243eb77b3b?q=80&w=2000&auto=format&fit=crop" 
              alt="Sonrisa natural y estética" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 w-full max-w-[800px] px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-[1.1] md:leading-tight serif-italic italic px-2">
                Tu sonrisa puede reflejar quién realmente eres
              </h1>
              <p className="text-sm sm:text-base md:text-xl mb-10 max-w-[600px] mx-auto opacity-90 px-6">
                Protocolo de estética dental personalizado, con diagnóstico real y resultados naturales que duran.
              </p>
              
              <div className="flex flex-col items-center gap-4 px-4">
                <Button variant="secondary" className="w-full sm:w-auto px-10 py-5 text-sm md:text-base shadow-2xl" onClick={handleAgendar}>
                  AGENDAR VALORACIÓN
                </Button>
                <span className="text-[10px] sm:text-xs opacity-70">Atención personalizada · Sin compromiso</span>
              </div>

              {/* Stats Bar */}
              <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/20 pt-8">
                {[
                  { value: "20", label: "Años de exp" },
                  { value: "+500", label: "Sonrisas" },
                  { value: "100%", label: "Naturales" },
                  { value: "20", label: "Min valoración" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center border-r border-white/10 last:border-0 md:last:border-0 last:border-r-0 sm:even:border-r-0 md:even:border-r">
                    <span className="text-2xl md:text-3xl font-bold serif-italic italic">{stat.value}</span>
                    <span className="text-[8px] md:text-[10px] uppercase letter-spacing-tag opacity-60 font-bold mt-1 text-center px-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4.5: ¿QUIÉN LO REALIZA? (Moved up as requested) */}
        <Section className="bg-zinc-50">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <Badge>Tu Especialista</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quién lo realiza?</h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Todos los procedimientos son realizados personalmente por la 
                    <span className="font-bold"> Dra. Caty Avila Salazar</span>, odontóloga con cédula profesional 8002066, 
                    con más de 20 años de trayectoria en estética dental y prótesis.
                  </p>
                  <p>
                    Formada en UNITEC y la ULA, trabaja con protocolos de diagnóstico 
                    avanzados y materiales de calidad premium. Tu sonrisa está en manos 
                    de una profesional comprometida con el detalle absoluto, la calidad humana y la honestidad.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-zinc-200">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        <User size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-zinc-400">Cédula Profesional</p>
                        <p className="text-sm font-bold text-zinc-800">8002066</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="order-1 md:order-2">
                <div className="relative">
                   <div className="absolute -inset-4 bg-brand-primary/5 rounded-[40px] -rotate-2" />
                   <div className="relative aspect-[4/5] bg-zinc-100 rounded-[32px] overflow-hidden shadow-2xl">
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
             </div>
           </div>
        </Section>

        {/* SECTION 5: "TE IDENTIFICAS?" (PAIN POINTS) */}
        <Section className="bg-brand-primary text-white" noPadding>
          <div className="py-24 text-center px-6">
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

        {/* SECTION 5.1: PARA QUIÉN ES ESTA TRANSFORMACIÓN */}
        <Section>
          <div className="text-center mb-16">
            <Badge className="bg-[#C9A55A]/10 text-[#C9A55A]">PARA QUIÉN ES</Badge>
            <h2 className="text-4xl font-bold mt-2">Esta transformación es para ti si…</h2>
            <div className="w-20 h-1 bg-[#C9A55A] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: "😶", 
                title: "CUIDAS CÓMO SONRÍES", 
                desc: "Evitas ciertas fotos, controlas cómo ríes en reuniones o eventos. Esa autocensura ya te cuesta más de lo que crees." 
              },
              { 
                icon: "⏰", 
                title: "LLEVAS TIEMPO PENSÁNDOLO", 
                desc: "No es algo nuevo. Sabes que quieres hacerlo. Lo que necesitas es encontrar a alguien en quien confiar." 
              },
              { 
                icon: "💎", 
                title: "VALORAS CALIDAD Y NATURALIDAD", 
                desc: "No buscas la opción más barata. Buscas la que dure, se vea natural y esté respaldada por alguien que realmente sabe." 
              },
              { 
                icon: "🌿", 
                title: "QUIERES UN CAMBIO REAL", 
                desc: "No un parche. Buscas una transformación con diagnóstico profesional, no improvisación." 
              }
            ].map((card, i) => (
              <Card key={i} className="p-6 md:p-10 border-zinc-100 hover:border-brand-primary/20 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-2xl md:text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-[10px] md:text-xs font-bold uppercase letter-spacing-tag mb-4 tracking-wider">{card.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* SECTION 5.2: ANTES VS DESPUÉS */}
        <Section>
          <div className="text-center mb-16">
            <Badge>EL MOMENTO EN QUE ESTÁS</Badge>
            <h2 className="text-4xl font-bold mt-2">Lo que cuesta sonreír con inseguridad</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HOY - DOLOR */}
            <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-[32px] p-8 md:p-12">
               <span className="text-[10px] font-bold uppercase letter-spacing-tag text-red-400 mb-4 block tracking-widest">HOY</span>
               <h3 className="text-2xl serif-italic italic mb-8 text-red-900 leading-tight">Tu sonrisa te frena.</h3>
               <ul className="space-y-4">
                 {[
                   "No sonríes completamente por pena",
                   "Te sientes mayor de tu edad en fotos",
                   "En reuniones importantes cuidas cómo ríes",
                   "Tu imagen no refleja el nivel que has construido",
                   "Llevas meses diciéndote \"lo hago después\"",
                   "Miedo a que el resultado no sea lo que esperabas"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-red-800/80 text-sm leading-relaxed">
                     <span className="text-red-400 font-bold">✗</span>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* DESPUÉS - SUEÑO */}
            <div className="bg-brand-primary text-white rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               <span className="text-[10px] font-bold uppercase letter-spacing-tag text-white/50 mb-4 block tracking-widest">DESPUÉS DEL SMILE GLOW UP</span>
               <h3 className="text-2xl serif-italic italic mb-8 white leading-tight">Tu sonrisa habla por ti.</h3>
               <ul className="space-y-4">
                 {[
                   "Sonríes completo, sin pensarlo, sin controlarlo",
                   "Te ves más joven, más fresca, más tú",
                   "Tu imagen en fotos refleja quién realmente eres",
                   "La armonía de tu rostro comunica salud y elegancia",
                   "Tienes un resultado que dura",
                   "Confianza real, no actuada"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                     <Check size={16} className="text-[#C9A55A] flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </Section>

        {/* SECTION 6: SERVICIOS */}
        <Section id="servicios">
          <div className="text-center mb-12">
            <Badge>Protocolos Exclusivos</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SMILE GLOW UP */}
            <Card className="flex flex-col p-6 md:p-8 border-2 border-brand-secondary/20 relative overflow-hidden ring-4 ring-brand-primary/5">
              <div className="absolute top-4 right-4 translate-x-2 -translate-y-2">
                <div className="bg-[#C9A55A] text-white text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_4px_12px_rgba(201,165,90,0.3)] z-10 border border-white/20">
                  ⭐ MÁS ELEGIDO
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold uppercase letter-spacing-tag leading-tight">SMILE GLOW UP EXPERIENCE</h3>
                <p className="text-brand-primary font-serif italic text-base md:text-lg mt-2">6 Carillas de Porcelana</p>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-5 md:p-6 mb-8 border border-brand-border">
                <div className="flex justify-between items-center mb-2 text-zinc-400 text-xs md:text-sm">
                  <span>Antes:</span>
                  <span className="line-through">$60,100</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-zinc-600 text-sm md:text-base">Hoy:</span>
                  <span className="text-xl md:text-2xl font-bold text-brand-secondary">$49,500</span>
                </div>
                <div className="text-[10px] md:text-[11px] text-zinc-500 mb-4">
                  o desde <span className="font-bold">$1,650/mes</span> a 36 meses sin intereses*
                </div>
                <div className="pt-3 border-t border-dashed border-zinc-300 flex justify-between items-center">
                  <span className="text-[10px] md:text-xs uppercase font-bold text-brand-primary">Ahorras:</span>
                  <span className="bg-brand-primary text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full">$10,600</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {[
                  { name: "6 Carillas de Porcelana premium", price: "$48,000", badge: "INCLUIDO" },
                  { name: "Diseño de sonrisa digital", price: "$2,000", badge: "INCLUIDO" },
                  { name: "Análisis facial", price: "$400", badge: "INCLUIDO" },
                  { name: "Blanqueamiento", price: "$3,000", badge: "50% OFF" },
                  { name: "Limpieza completa", price: "$1,200", badge: "INCLUIDO" },
                  { name: "Consulta especializada", price: "$800", badge: "INCLUIDO" },
                  { name: "Fotografía clínica profesional", price: "$400", badge: "INCLUIDO" }
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

              <div className="mt-auto">
                <Button fullWidth className="py-5 shadow-xl shadow-brand-primary/20" onClick={handleAgendar}>
                  AGENDAR VALORACIÓN
                </Button>
                <p className="text-[10px] text-zinc-400 text-center mt-3">Atención personalizada · Sin compromiso</p>
              </div>
            </Card>

            {/* SMILE GLOW EXPRESS */}
            <Card className="flex flex-col p-6 md:p-8 border-2 border-brand-border hover:border-brand-primary/30 transition-colors">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold uppercase letter-spacing-tag leading-tight">SMILE GLOW EXPRESS EXPERIENCE</h3>
                <p className="text-brand-primary font-serif italic text-base md:text-lg mt-2">6 Resinas Inyectadas</p>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-5 md:p-6 mb-8 border border-brand-border">
                <div className="flex justify-between items-center mb-2 text-zinc-400 text-xs md:text-sm">
                  <span>Antes:</span>
                  <span className="line-through">$34,800</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-zinc-600 text-sm md:text-base">Hoy:</span>
                  <span className="text-xl md:text-2xl font-bold text-brand-secondary">$28,500</span>
                </div>
                <div className="text-[10px] md:text-[11px] text-zinc-500 mb-4">
                  o desde <span className="font-bold">$950/mes</span> a 36 meses sin intereses*
                </div>
                <div className="pt-3 border-t border-dashed border-zinc-300 flex justify-between items-center">
                  <span className="text-[10px] md:text-xs uppercase font-bold text-brand-primary">Ahorras:</span>
                  <span className="bg-brand-primary text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full">$6,300</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {[
                  { name: "6 Resinas Inyectadas", price: "$27,000", badge: "INCLUIDO" },
                  { name: "Diseño de sonrisa digital", price: "$2,000", badge: "INCLUIDO" },
                  { name: "Análisis facial", price: "$400", badge: "INCLUIDO" },
                  { name: "Blanqueamiento", price: "$3,000", badge: "50% OFF" },
                  { name: "Limpieza completa", price: "$1,200", badge: "INCLUIDO" },
                  { name: "Consulta especializada", price: "$800", badge: "INCLUIDO" },
                  { name: "Fotografía clínica profesional", price: "$400", badge: "INCLUIDO" }
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

              <div className="mt-auto">
                <Button fullWidth className="py-5" onClick={handleAgendar}>
                  AGENDAR VALORACIÓN
                </Button>
                <p className="text-[10px] text-zinc-400 text-center mt-3">Atención personalizada · Sin compromiso</p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] text-zinc-400 italic">
              *Con tarjeta de crédito participante. Sujeto a aprobación.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-8 bg-zinc-50 rounded-[32px] border border-brand-border">
             {[
               { icon: <ShieldCheck className="text-brand-primary" />, title: "Garantía de Diseño Aprobado", desc: "Lo que ves es lo que tienes" },
               { icon: <Check className="text-brand-primary" />, title: "Cita de pulido a los 6 meses", desc: "Incluida en tu pack" },
               { icon: <Star className="text-brand-primary" />, title: "Pagos a 3, 6, 9 y 12 meses", desc: "Sin intereses" }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm uppercase letter-spacing-tag">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-12 pt-8 border-t border-brand-border text-center">
            <p className="text-zinc-400 text-sm italic">
              Planificación integral basada en armonía facial y diagnóstico por la Dra. Caty Avila.
            </p>
          </div>
        </Section>

        {/* SECTION 6.1: CÓMO FUNCIONA */}
        <Section>
          <div className="text-center mb-16">
            <Badge>CÓMO FUNCIONA</Badge>
            <h2 className="text-4xl font-bold mt-2">El protocolo completo, paso a paso</h2>
            <p className="text-zinc-500 mt-6 max-w-[600px] mx-auto text-lg leading-relaxed">
              No es una cita dental cualquiera. Es un proceso de diseño estético personalizado — desde la primera llamada hasta tu nueva sonrisa.
            </p>
          </div>

          <div className="space-y-6 max-w-[700px] mx-auto">
            {[
              {
                id: "1",
                timing: "Día de la valoración",
                title: "Diagnóstico de Identidad",
                desc: "Análisis clínico y estético completo: fotografía profesional, mapeo digital de tu sonrisa y evaluación de armonía facial. No miramos solo tus dientes — miramos cómo tu sonrisa interactúa con tu rostro.",
                res: "un mapa clínico único, base de todo lo que viene."
              },
              {
                id: "2",
                timing: "Semana 1-2",
                title: "Diseño y Aprobación Digital",
                desc: "Diseño 3D de tu nueva sonrisa. Ves el resultado antes de cualquier procedimiento. Ajustamos forma, tamaño y tono hasta que sea exactamente lo que quieres — y lo apruebas por escrito.",
                res: "claridad visual y certeza de cómo va a quedar."
              },
              {
                id: "3",
                timing: "Semana 2-3",
                title: "Preparación de Precisión",
                desc: "Preparación dental con guía digital. Desgaste mínimo y controlado, guiado por el diseño aprobado. Materiales premium — porcelana de alta gama o resinas inyectadas según tu pack.",
                res: "preparación perfecta, sin sorpresas."
              },
              {
                id: "4",
                timing: "Semana 4-6 · Día de transformación",
                title: "Tu Nueva Sonrisa",
                desc: "Colocación final en sesión premium. Ajuste de función y estética para que las carillas funcionen perfectamente al masticar y la sonrisa sea exactamente la del diseño aprobado.",
                res: "sales con tu nueva sonrisa y fotos antes/después."
              },
              {
                id: "5",
                timing: "6 meses después",
                title: "Cita de Pulido y Revisión",
                desc: "Incluida en tu pack. Revisión clínica completa, pulido profesional y ajustes menores si los necesitas. Te acompañamos para que tu sonrisa siga impecable.",
                res: "tranquilidad y mantenimiento sin costo extra."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white border border-brand-border rounded-[32px] p-6 md:p-10 hover:shadow-xl transition-all group">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-primary text-[#C9A55A] flex items-center justify-center text-xl md:text-2xl font-bold serif-italic italic shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                       <span className="text-[9px] md:text-[10px] font-bold bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase letter-spacing-tag">{step.timing}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl serif-italic italic mb-4">{step.title}</h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <div className="pl-6 border-l-2 border-[#C9A55A] italic text-xs md:text-sm text-zinc-600">
                      ✦ Resultado: {step.res}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#C9A55A]/5 border border-[#C9A55A]/20 rounded-[32px] p-10 flex flex-col items-center text-center">
             <div className="w-12 h-12 rounded-full bg-[#C9A55A] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#C9A55A]/20">
                <ShieldCheck size={24} />
             </div>
             <Badge className="bg-[#C9A55A]/20 text-[#C9A55A]">BONO INCLUIDO</Badge>
             <h3 className="text-2xl serif-italic italic mb-4">Smile Longevity Program — 1 año</h3>
             <p className="text-zinc-500 max-w-[500px] text-sm leading-relaxed mb-6">
               Revisión clínica a los 6 meses incluida. Pulido profesional. Atención directa ante cualquier duda o sensibilidad durante el primer año. Resuelve la pregunta: "¿Qué pasa después de que termine el tratamiento? ¿Quedamos solas?"
             </p>
             <div className="text-xs font-bold text-[#C9A55A] uppercase letter-spacing-tag">Valor: $1,500 MXN — INCLUIDO</div>
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
              Aquí no hay tratamientos genéricos. Cada protocolo se diseña según tu rostro, tus necesidades y tus objetivos.
            </p>
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
              <Button variant="ghost" className="max-w-[400px] w-full border border-white/20" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                VER PAQUETES
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
          </div>

          <div className="mt-20">
             <div className="text-center mb-12">
                <h3 className="text-2xl font-bold uppercase letter-spacing-tag text-zinc-300">Testimonios</h3>
             </div>
             
             <div className="relative overflow-hidden min-h-[350px] flex items-center">
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={currentTestimonial}
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="w-full"
                 >
                   <div className="bg-zinc-50 rounded-[32px] p-8 md:p-12 border border-brand-border relative overflow-hidden group hover:bg-white transition-colors duration-500 max-w-[700px] mx-auto">
                     <span className="absolute -top-4 -left-2 text-[120px] font-serif text-brand-primary/5 select-none transition-transform group-hover:scale-110">“</span>
                     <p className="text-zinc-600 italic text-sm md:text-lg leading-relaxed mb-10 relative z-10 transition-colors group-hover:text-zinc-700">
                       "{testimonials[currentTestimonial].quote}"
                     </p>
                     <div className="text-[10px] md:text-[11px] font-black uppercase letter-spacing-tag tracking-[0.2em]">
                       {testimonials[currentTestimonial].author.split(' · ').map((part, index, arr) => (
                         <span key={index} className={cn(index === arr.length - 1 ? "text-[#C9A55A]" : "text-zinc-400")}>
                           {part}{index < arr.length - 1 && " · "}
                         </span>
                       ))}
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>

               {/* Pagination Dots */}
               <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-2">
                 {testimonials.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setCurrentTestimonial(i)}
                     className={cn(
                       "w-2 h-2 rounded-full transition-all duration-300",
                       i === currentTestimonial ? "bg-brand-primary w-6" : "bg-zinc-200"
                     )}
                   />
                 ))}
               </div>
             </div>

             <div className="mt-16 flex justify-center">
                <Button fullWidth variant="outline" className="max-w-[400px] border-brand-border py-6" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                  VER PAQUETES
                </Button>
             </div>
          </div>
        </Section>

        {/* SECTION 13: FORMULARIO DE CONTACTO (IFRAME) */}
        <Section className="bg-brand-primary text-white" noPadding id="contact-form">
          <div className="py-24 text-center px-6">
            <div className="bg-white rounded-[40px] overflow-hidden text-brand-text text-left max-w-full mx-auto shadow-2xl relative">
              <div className="p-8 border-b border-zinc-100 bg-zinc-50">
                <h3 className="text-xl font-bold mb-2">Reserva tu valoración en 2 pasos</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Déjanos tus datos y enseguida eliges el día y hora que mejor te acomode.
                </p>
              </div>
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
              <div className="p-6 bg-zinc-50 border-t border-zinc-100 text-center text-[10px] text-zinc-400 uppercase font-medium">
                Tu información se usa solo para contactarte. No compartimos tus datos.
              </div>
            </div>
          </div>
        </Section>


        {/* SECTION 15: PREGUNTAS FRECUENTES (FAQ) */}
        <Section>
          <Badge className="mx-auto block w-fit">Resolvemos tus dudas</Badge>
          <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          
          <div className="space-y-4 max-w-[700px] mx-auto">
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
                a: "Incluye un diagnóstico estético personalizado, análisis de armonía facial, revisión de tu salud dental actual, fotografía profesional, blanqueamiento dental (diagnóstico) y una propuesta de tratamiento clara."
              },
              {
                q: "¿Cuánto duran las carillas?",
                a: "Las carillas de porcelana del Smile Glow Up duran entre 10 y 15 años con el cuidado adecuado. Las resinas inyectadas del Smile Glow Express duran entre 5 y 7 años. Ambos tratamientos incluyen revisión y pulido a los 6 meses sin costo adicional."
              },
              {
                q: "¿Tienen pagos a meses sin intereses?",
                a: "Sí. Aceptamos pagos a 3, 6, 9 y 12 meses sin intereses con tarjetas de crédito participantes. El Smile Glow Up puede quedar desde $1,650 mensuales y el Smile Glow Express desde $950 mensuales (a 36 MSI con tarjeta participante)."
              },
              {
                q: "¿Cuántas visitas son en total?",
                a: "Entre 3 y 5 sesiones distribuidas en 4-6 semanas, dependiendo del pack y el caso. Te entregamos un calendario claro desde el día uno para que organices tu agenda con tranquilidad."
              },
              {
                q: "¿Qué pasa si no me gusta el diseño?",
                a: "Antes de cualquier procedimiento ves y apruebas el diseño digital de tu nueva sonrisa. Ajustamos forma, tamaño y tono las veces que necesites hasta que el diseño sea exactamente lo que quieres. Nada se ejecuta sin tu aprobación por escrito."
              },
              {
                q: "¿Las carillas se manchan con café, vino o tabaco?",
                a: "La porcelana premium del Smile Glow Up es altamente resistente a manchas y mantiene el color durante años. Las resinas inyectadas pueden requerir más cuidado en consumo de café, vino y tabaco — te damos un protocolo de cuidado claro."
              },
              {
                q: "¿Es realmente accesible la sesión de valoración?",
                a: "Sí, es una sesión diseñada para que nos conozcas y evaluemos la viabilidad de tu caso. Hacemos el análisis facial, te explicamos las opciones reales para tu caso y tú decides si quieres continuar. No hay venta dura ni presión."
              },
              {
                q: "¿Hay estacionamiento en la clínica?",
                a: "Sí, contamos con estacionamiento sin costo para pacientes en Camino Santa Mónica 8, Tlalnepantla."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-[32px] overflow-hidden transition-all duration-300",
                  activeFaq === index ? "border-brand-primary/40 bg-zinc-50 ring-8 ring-brand-primary/5" : "border-brand-border bg-white hover:border-zinc-300"
                )}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="font-bold text-base md:text-xl leading-tight pr-4 md:pr-8">{faq.q}</span>
                  <div className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
                    activeFaq === index ? "bg-brand-primary text-white rotate-180" : "bg-zinc-100 text-zinc-400"
                  )}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-zinc-600 text-base md:text-lg leading-relaxed">
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
        <footer className="bg-zinc-950 text-white py-20 flex justify-center border-t border-white/5">
          <div className="w-full max-w-[800px] px-6 text-center">
            
            <div className="flex flex-col items-center gap-2">
               <img src="https://i.postimg.cc/jSJCYmcF/Logo-Caty.png" alt="Logo Footer" className="h-24 w-auto brightness-0 invert opacity-100 mb-6" />
               <div className="font-serif italic font-bold text-3xl">Smile Clinic</div>
               <div className="text-[11px] letter-spacing-tag uppercase opacity-40 font-bold -mt-2 tracking-widest">Dental Group</div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
