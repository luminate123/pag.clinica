import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#111] text-slate-400 py-20 border-t border-[#222]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="flex flex-col mb-8">
                <span className="text-2xl font-serif text-white tracking-wide leading-none">CLÍNICA</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">ESTÉTICA LIMA</span>
            </div>
            <p className="font-light leading-relaxed mb-8 text-sm">
              Centro especializado en medicina estética y rejuvenecimiento integral. Tu belleza en manos de expertos.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-8 font-bold">Explorar</h4>
            <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Nuestros Médicos</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Tecnologías</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Blog de Belleza</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-8 font-bold">Contacto</h4>
            <ul className="space-y-6 text-sm font-light">
                <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-[#D4AF37] flex-shrink-0" />
                    <span>Av. Alfredo Benavides 4462,<br/>Santiago de Surco, Lima</span>
                </li>
                <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-[#D4AF37] flex-shrink-0" />
                    <span>(01) 448 36 00</span>
                </li>
                <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-[#D4AF37] flex-shrink-0" />
                    <span>contacto@clinicaesteticalima.com</span>
                </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-8 font-bold">Horarios</h4>
            <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-[#D4AF37] flex-shrink-0" />
                    <div>
                        <span className="block text-white">Lunes a Viernes</span>
                        <span>9:00 am - 8:00 pm</span>
                    </div>
                </li>
                <li className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-[#D4AF37] flex-shrink-0" />
                    <div>
                        <span className="block text-white">Sábados</span>
                        <span>9:00 am - 7:00 pm</span>
                    </div>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#222] pt-8 text-center text-xs font-light text-slate-600 uppercase tracking-widest">
          <p>&copy; 2026 Clínica Estética Lima. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-slate-400 hover:bg-[#D4AF37] hover:text-white transition-all">
            {icon}
        </a>
    )
}
