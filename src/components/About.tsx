export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 animate-fade-in-up">
             <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                {/* Placeholder for Doctor/Team image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="text-sm uppercase tracking-widest">Imagen Corporativa</span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-sm uppercase tracking-widest text-slate-500 mb-2 block animate-fade-in-up delay-100">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 animate-fade-in-up delay-200">Compromiso con la Estética y la Salud</h2>
            <p className="text-slate-600 mb-6 font-light leading-relaxed animate-fade-in-up delay-300">
              Nuestra clínica combina la ciencia médica con la visión artística para ofrecer resultados que no solo mejoran la apariencia, sino que también elevan la confianza. Entendemos que cada paciente es único, por lo que cada procedimiento es personalizado.
            </p>
            <p className="text-slate-600 mb-8 font-light leading-relaxed animate-fade-in-up delay-400">
              Con años de experiencia y tecnología de vanguardia, garantizamos la seguridad y satisfacción en cada paso de tu transformación.
            </p>
            <div className="flex gap-8 animate-fade-in-up delay-500">
                <div>
                    <h4 className="text-4xl font-serif text-slate-900">15+</h4>
                    <p className="text-sm text-slate-500 uppercase tracking-wide mt-2">Años de Experiencia</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif text-slate-900">2k+</h4>
                    <p className="text-sm text-slate-500 uppercase tracking-wide mt-2">Pacientes Felices</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
