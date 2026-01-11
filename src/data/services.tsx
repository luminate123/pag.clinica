import { Eraser, ScanFace, Scissors, Syringe } from 'lucide-react';

export const services = [
  {
    slug: "rinoplastia",
    icon: <ScanFace className="w-8 h-8 text-slate-700" />,
    image: "https://images.unsplash.com/photo-1543783227-24844053e1a6?q=80&w=2070&auto=format&fit=crop",
    title: "Rinoplastia",
    shortDescription: "Refinamiento estético y funcional de la nariz para una armonía facial perfecta.",
    longDescription: "La rinoplastia es un procedimiento quirúrgico diseñado para remodelar la nariz, mejorando tanto su apariencia estética como su función respiratoria. Nuestro enfoque se centra en resultados naturales que armonicen con el resto de tus rasgos faciales, evitando el aspecto 'operado'.",
    benefits: [
      "Mejora la armonía facial",
      "Corrige problemas respiratorios",
      "Resultados naturales y definitivos",
      "Aumenta la confianza personal"
    ],
    recovery: "1-2 semanas para retorno a actividades normales. Resultado final visible a los 6-12 meses."
  },
  {
    slug: "lifting-facial",
    icon: <Scissors className="w-8 h-8 text-slate-700" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    title: "Lifting Facial",
    shortDescription: "Rejuvenecimiento integral del rostro recuperando la firmeza y frescura.",
    longDescription: "El lifting facial o ritidectomía es la solución definitiva para combatir los signos visibles del envejecimiento en el rostro y cuello. Mediante técnicas avanzadas, reposicionamos los tejidos profundos y eliminamos el exceso de piel para devolverle a tu rostro su contorno juvenil sin perder tu expresividad natural.",
    benefits: [
      "Elimina arrugas profundas y flacidez",
      "Define el contorno mandibular",
      "Rejuvenecimiento duradero (10+ años)",
      "Cicatrices imperceptibles"
    ],
    recovery: "2-3 semanas. Inflamación principal disminuye en los primeros 10 días."
  },
  {
    slug: "blefaroplastia",
    icon: <Eraser className="w-8 h-8 text-slate-700" />,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    title: "Blefaroplastia",
    shortDescription: "Corrección de párpados caídos para una mirada más joven y descansada.",
    longDescription: "La blefaroplastia rejuvenece la mirada eliminando el exceso de piel y las bolsas de grasa de los párpados superiores e inferiores. Es un procedimiento mínimamente invasivo con un impacto máximo en la frescura y vitalidad de tu expresión facial.",
    benefits: [
      "Elimina la apariencia de cansancio",
      "Mejora el campo visual si hay exceso de piel",
      "Recuperación rápida",
      "Mirada más abierta y joven"
    ],
    recovery: "5-7 días. Los puntos se retiran a los 4-5 días."
  },
  {
    slug: "medicina-estetica",
    icon: <Syringe className="w-8 h-8 text-slate-700" />,
    image: "https://images.unsplash.com/photo-1620331307525-2420a325e839?auto=format&fit=crop&q=80&w=800",
    title: "Medicina Estética",
    shortDescription: "Tratamientos no invasivos como botox y rellenos para realzar tu belleza.",
    longDescription: "Ofrecemos una gama completa de tratamientos no quirúrgicos para el rejuvenecimiento facial y corporal. Desde toxina botulínica (Botox) para suavizar líneas de expresión, hasta rellenos de ácido hialurónico para restaurar volúmenes perdidos, bioestimuladores y más.",
    benefits: [
      "Resultados inmediatos o a corto plazo",
      "Sin tiempo de inactividad",
      "Tratamientos preventivos anti-aging",
      "Ajustables y reversibles en muchos casos"
    ],
    recovery: "Inmediata. Puede haber leve inflamación o hematomas por 2-3 días."
  }
];
