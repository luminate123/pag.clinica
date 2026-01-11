"use client";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustBar from '@/components/TrustBar';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      
      {/* Promo Banner Section - Specific to reference site style */}
      <section className="py-20 bg-[#D4AF37] text-white text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">¿No sabes qué tratamiento necesitas?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                  Agenda una consulta médica gratuita y déjanos asesorarte para lograr los mejores resultados.
              </p>
              <a href="#" className="inline-block bg-white text-[#D4AF37] px-10 py-4 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
                  Agendar Evaluación Gratuita
              </a>
          </div>
      </section>

      <Locations />
      <Footer />
    </main>
  );
}
