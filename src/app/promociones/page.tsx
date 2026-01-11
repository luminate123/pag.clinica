import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Promociones() {
  const promos = [
    {
        title: "Pack Rejuvenecimiento Total",
        description: "Incluye Botox (3 zonas) + Relleno de Labios + Limpieza Profunda.",
        price: "S/ 1,200",
        originalPrice: "S/ 1,800",
        image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=2074&auto=format&fit=crop"
    },
    {
        title: "Rinomodelación Sin Cirugía",
        description: "Corrige imperfecciones de la nariz con ácido hialurónico. Resultados inmediatos.",
        price: "S/ 890",
        originalPrice: "S/ 1,200",
        image: "https://images.unsplash.com/photo-1606902965551-dce061ce6905?q=80&w=2073&auto=format&fit=crop"
    },
    {
        title: "Lipo Papada Enzimática",
        description: "Elimina la grasa localizada de la papada sin cirugía en 3 sesiones.",
        price: "S/ 550",
        originalPrice: "S/ 750",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop"
    },
     {
        title: "Depilación Láser Alexandrita",
        description: "Pack 6 Sesiones Cuerpo Completo. ¡Olvídate del vello para siempre!",
        price: "S/ 1,500",
        originalPrice: "S/ 3,000",
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
        <Header />
        
        <div className="bg-[#D4AF37] py-20 text-center">
            <div className="container mx-auto px-6 animate-fade-in-up">
                <span className="text-sm uppercase tracking-widest text-[#1a1a1a]/70 mb-4 block font-bold">Ofertas Limitadas</span>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Promociones del Mes</h1>
                <p className="max-w-2xl mx-auto text-white/90 font-light text-lg">
                    Aprovecha precios exclusivos en nuestros tratamientos más solicitados. <br/>Válido hasta agotar cupos.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {promos.map((promo, idx) => (
                    <div key={idx} className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all h-full animate-fade-in-up delay-${(idx + 1) * 100}`}>
                        <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                             <img 
                                src={promo.image} 
                                alt={promo.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Oferta
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-serif text-slate-900 mb-3">{promo.title}</h3>
                            <p className="text-slate-600 font-light mb-6 text-sm leading-relaxed">
                                {promo.description}
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <div>
                                    <span className="block text-slate-400 text-sm line-through decoration-red-500">{promo.originalPrice}</span>
                                    <span className="block text-3xl font-serif text-[#D4AF37]">{promo.price}</span>
                                </div>
                                <Link 
                                    href="https://wa.me/123456789"
                                    className="px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors rounded-lg"
                                >
                                    Reservar
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
             <div className="mt-20 text-center bg-white p-12 rounded-2xl border border-slate-100 shadow-sm animate-fade-in-up delay-500">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">¿No encuentras lo que buscas?</h3>
                <p className="text-slate-600 font-light mb-8 max-w-lg mx-auto">
                    Suscríbete a nuestro boletín para ser la primera en enterarte de nuevas promociones y descuentos flash.
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                    <input type="email" placeholder="Tu correo electrónico" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#D4AF37]" />
                    <button className="px-6 py-3 bg-[#D4AF37] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#b08d26] transition-colors text-sm">
                        Suscribir
                    </button>
                </div>
            </div>
        </div>

        <Footer />
    </main>
  );
}
