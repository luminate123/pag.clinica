import Link from 'next/link';
import { services } from '@/data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
       <Header />
       
       <div className="pt-20 pb-24">
            {/* Page Header */}
            <div className="bg-slate-900 py-20 text-center mb-16">
                <div className="container mx-auto px-6">
                    <span className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4 block font-bold">Nuestra Oferta Médica</span>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white mb-6">Procedimientos Exclusivos</h1>
                    <p className="max-w-2xl mx-auto text-slate-300 font-light text-base md:text-lg">
                        Tecnología avanzada y protocolos personalizados para resultados que superan tus expectativas.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Link 
                    key={service.slug} 
                    href={`/servicios/${service.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="h-64 overflow-hidden relative">
                             <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                             <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                             />
                             <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-slate-800 shadow-sm">
                                {service.icon}
                             </div>
                        </div>

                        <div className="p-6 md:p-8 flex-grow">
                            <h2 className="text-xl md:text-2xl font-serif text-slate-900 mb-4 group-hover:text-[#D4AF37] transition-colors">
                                {service.title}
                            </h2>
                            <p className="text-slate-600 font-light leading-relaxed mb-6 line-clamp-3">
                                {service.shortDescription}
                            </p>
                        </div>
                        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center group-hover:bg-[#D4AF37]/10 transition-colors">
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-[#D4AF37]">Ver Detalles</span>
                            <span className="text-slate-400 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all">→</span>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
      </div>
      
      <Footer />
    </main>
  );
}
