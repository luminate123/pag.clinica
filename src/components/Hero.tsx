export default function Hero() {
  return (
    <section id="inicio" className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa background" 
            className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <span className="inline-block py-1 px-3 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            Clínica Estética Premium
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Medicina Estética <br />
          <span className="italic font-light text-[#D4AF37]">Facial y Corporal</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Tecnología de vanguardia y especialistas certificados para resaltar tu belleza natural con total seguridad.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="#contacto" className="px-10 py-4 bg-[#D4AF37] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b08d26] transition-all shadow-xl hover:shadow-[#D4AF37]/20">
            Reserva tu Cita
          </a>
          <a href="/servicios" className="px-10 py-4 bg-transparent border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
            Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
