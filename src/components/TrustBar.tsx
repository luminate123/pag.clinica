export default function TrustBar() {
  return (
    <section className="bg-slate-50 py-12 border-y border-slate-100 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center bg-white p-8 rounded-xl shadow-sm">
            <TrustItem 
                icon="🏥" 
                title="IPRESS" 
                desc="Supervisado por MINSA" 
            />
            <TrustItem 
                icon="⭐" 
                title="+15 Años" 
                desc="De Experiencia" 
            />
            <TrustItem 
                icon="✔️" 
                title="FDA" 
                desc="Marcas Aprobadas" 
            />
            <TrustItem 
                icon="👨‍⚕️" 
                title="Staff" 
                desc="Médicos Certificados" 
            />
            <TrustItem 
                icon="🧬" 
                title="Tecnología" 
                desc="De Alta Gama" 
            />
            <TrustItem 
                icon="💬" 
                title="Consulta" 
                desc="Sin Costo" 
            />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="flex flex-col items-center justify-center p-2">
            <span className="text-4xl mb-3 grayscale opacity-80">{icon}</span>
            <h4 className="font-serif text-slate-900 font-bold text-lg">{title}</h4>
            <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{desc}</p>
        </div>
    );
}
