import { services } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Service Header */}
      <div className="bg-slate-900 py-20 text-white">
          <div className="container mx-auto px-6 animate-fade-in-up">
            <Link 
                href="/servicios" 
                className="inline-flex items-center text-xs uppercase tracking-widest text-slate-400 hover:text-[#D4AF37] mb-8 transition-colors"
                >
                <ArrowLeft className="w-3 h-3 mr-2" /> Volver a Servicios
            </Link>
            <div className="flex items-center gap-6">
               <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl text-[#D4AF37]">
                 {service.icon}
               </div>
               <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif">{service.title}</h1>
            </div>
          </div>
      </div>

      <div className="container mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 animate-fade-in-up delay-200">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100 mb-8 md:mb-10">
                <h3 className="text-2xl font-serif text-slate-900 mb-6">Descripción del Procedimiento</h3>
                <div className="prose prose-slate prose-lg max-w-none font-light text-slate-600">
                    <p className="text-xl leading-relaxed text-slate-800 font-normal mb-8 border-l-4 border-[#D4AF37] pl-6 italic">
                        {service.shortDescription}
                    </p>
                    <p className="leading-relaxed">{service.longDescription}</p>
                </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100 animate-fade-in-up delay-300">
                <h3 className="text-2xl font-serif text-slate-900 mb-8">Beneficios Exclusivos</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-slate-700 bg-slate-50 p-4 rounded-lg">
                            <CheckCircle className="w-5 h-5 mr-3 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            <span className="font-light">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 animate-fade-in-up delay-400">
            <div className="bg-[#1a1a1a] text-white p-8 rounded-2xl sticky top-28 shadow-xl">
                <div className="mb-8 pb-8 border-b border-white/10">
                    <h3 className="text-xl font-serif mb-2 text-[#D4AF37]">Detalles Médicos</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Información Importante</p>
                </div>
                
                <div className="mb-8">
                    <div className="flex items-center mb-3 text-[#D4AF37]">
                        <Clock className="w-5 h-5 mr-3" />
                        <span className="text-xs uppercase tracking-widest font-bold">Tiempo de Recuperación</span>
                    </div>
                    <p className="text-slate-300 font-light leading-relaxed text-sm ml-8">
                        {service.recovery}
                    </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 mt-8">
                    <h4 className="text-lg font-serif mb-3 text-white">¿Listo para el cambio?</h4>
                    <p className="text-slate-400 font-light text-sm mb-6 leading-relaxed">
                        Nuestros especialistas están listos para evaluar tu caso y ofrecerte la mejor solución.
                    </p>
                    <Link href="https://wa.me/123456789" className="block w-full text-center bg-[#D4AF37] text-white py-3 px-6 rounded-lg uppercase tracking-widest text-xs font-bold hover:bg-[#b08d26] transition-colors">
                        Agendar Evaluación
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
