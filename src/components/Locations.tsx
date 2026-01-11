import { MapPin, Phone } from 'lucide-react';

export default function Locations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm uppercase tracking-widest text-[#D4AF37] mb-2 block font-bold">Nuestras Sedes</span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Encuentra tu sucursal más cercana</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LocationCard 
                district="Surco"
                address="Av. Alfredo Benavides 4462"
                phones={["(01) 448 36 00", "941 100 777"]}
                image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                delay="delay-100"
            />
            <LocationCard 
                district="Miraflores"
                address="Av. 28 de Julio 1064"
                phones={["(01) 448 36 00", "941 100 777"]}
                image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                delay="delay-200"
            />
            <LocationCard 
                district="San Borja"
                address="Av. San Borja Nte. 835"
                phones={["(01) 448 36 00", "941 100 777"]}
                image="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800"
                delay="delay-300"
            />
        </div>
      </div>
    </section>
  );
}

function LocationCard({ district, address, phones, image, delay }: { district: string, address: string, phones: string[], image: string, delay: string }) {
    return (
        <div className={`group rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white animate-fade-in-up ${delay}`}>
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img 
                    src={image} 
                    alt={`Sede ${district}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{district}</h3>
                
                <div className="flex items-start mb-4 text-slate-600">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-[#D4AF37] flex-shrink-0" />
                    <p className="font-light">{address}</p>
                </div>
                
                <div className="flex items-start text-slate-600">
                    <Phone className="w-5 h-5 mr-3 mt-1 text-[#D4AF37] flex-shrink-0" />
                    <div className="font-light">
                        {phones.map((phone, i) => <p key={i}>{phone}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
