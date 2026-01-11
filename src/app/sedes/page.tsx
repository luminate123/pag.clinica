import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Locations from '@/components/Locations';

export default function Sedes() {
  return (
    <main className="min-h-screen bg-slate-50">
        <Header />
         {/* Page Header */}
         <div className="bg-slate-900 py-20 text-center mb-0">
            <div className="container mx-auto px-6">
                <span className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4 block font-bold">Ubícanos</span>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Nuestras Sedes</h1>
                <p className="max-w-2xl mx-auto text-slate-300 font-light text-lg">
                   Estamos más cerca de ti. Visita nuestras modernas instalaciones diseñadas para tu máximo confort y seguridad.
                </p>
            </div>
        </div>
        
        <Locations />

        <div className="bg-white py-24">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Instalaciones de Primer Nivel</h2>
                        <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                            Cada una de nuestras sedes cuenta con quirófanos equipados con tecnología de última generación, salas de recuperación privadas y consultorios diseñados para brindarte una experiencia relajante y exclusiva.
                        </p>
                        <p className="text-slate-600 font-light leading-relaxed mb-8">
                            Cumplimos con todas las normativas de bioseguridad exigidas por el MINSA y estándares internacionales de calidad.
                        </p>
                        <ul className="space-y-4">
                            <Feature text="Estacionamiento privado para pacientes" />
                            <Feature text="Salas de espera VIP" />
                            <Feature text="Wifi de alta velocidad" />
                            <Feature text="Coffee Station de cortesía" />
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" alt="Interior 1" />
                        <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Interior 2" />
                    </div>
                 </div>
            </div>
        </div>

        <Footer />
    </main>
  );
}

function Feature({ text }: { text: string }) {
    return (
        <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3" />
            {text}
        </li>
    )
}
