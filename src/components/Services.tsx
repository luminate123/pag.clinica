import Link from 'next/link';

// Using static categories similar to the reference site
const categories = [
    {
        title: "Faciales",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
        link: "/servicios"
    },
    {
        title: "Corporales",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
        link: "/servicios"
    },
    {
        title: "Limpiezas",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600",
        link: "/servicios"
    },
    {
        title: "Tecnologías",
        image: "https://images.unsplash.com/photo-1620331307525-2420a325e839?auto=format&fit=crop&q=80&w=600",
        link: "/servicios"
    }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-[#D4AF37] mb-2 block font-bold">Experiencia & Cuidado</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Nuestras Especialidades</h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Descubre tratamientos diseñados exclusivamente para ti, combinando ciencia médica y estética avanzada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link 
                key={index} 
                href={cat.link}
                className="group relative h-96 overflow-hidden cursor-pointer"
            >
              {/* Image Background */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{cat.title}</h3>
                  <div className="h-0.5 w-12 bg-[#D4AF37] mb-4 transition-all duration-300 group-hover:w-24" />
                  <span className="text-xs uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                      Ver Tratamientos &rarr;
                  </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
