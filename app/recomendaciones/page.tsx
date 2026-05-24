import content from "@/config/es/content.json";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecomendacionesPage() {
  const { normativity, technologyChallenges } = content.recommendationsSection;

  // Desglose visual de retos tecnológicos para enriquecer la UI y simplificar la fricción cognitiva
  const techCards = [
    {
      icon: "🤖",
      title: "Inteligencia Artificial y Automatización",
      desc: "Migración de tareas mecánicas de digitación hacia el análisis predictivo de datos contables y auditorías inteligentes automáticas."
    },
    {
      icon: "🔗",
      title: "Tecnología Blockchain",
      desc: "Uso de libros contables distribuidos para la validación de transacciones en tiempo real, erradicando la alteración retrospectiva de balances."
    },
    {
      icon: "📊",
      title: "Big Data & Analítica Avanzada",
      desc: "Procesamiento de volúmenes masivos de transacciones para identificar patrones de comportamiento organizacional y predecir riesgos fiscales."
    },
    {
      icon: "🔒",
      title: "Ciberseguridad Financiera",
      desc: "Protección estricta de bases de datos contables y cumplimiento normativo ético en la confidencialidad de la información del cliente."
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-background via-secondary/15 to-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-4xl">📚</span>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
            Recomendaciones & Retos Profesionales
          </h1>
          <p className="text-muted-foreground font-light text-base md:text-lg max-w-2xl mx-auto">
            Propuestas para el futuro de la disciplina contable: la necesidad imperativa del aprendizaje normativo continuo y la inmersión en la transformación digital.
          </p>
          <div className="h-1 w-24 bg-accent rounded mx-auto mt-4"></div>
        </div>

        {/* 1. La Importancia de la Actualización Normativa */}
        <section className="mb-16">
          <Card className="border border-border/50 shadow-md rounded-2xl overflow-hidden bg-background">
            <CardHeader className="bg-secondary/25 border-b border-border/40 p-6 md:p-8">
              <div className="flex items-center space-x-2 text-primary">
                <span className="text-xl">📜</span>
                <CardTitle className="font-serif font-bold text-xl md:text-2xl">
                  {normativity.title}
                </CardTitle>
              </div>
              <CardDescription className="text-xs md:text-sm font-light pt-1.5">
                La competencia y cuidado profesional como salvaguarda del interés público.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-6">
              {normativity.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base text-muted-foreground text-justify leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* 2. Retos Tecnológicos de la Contaduría (Mínimo 250 palabras) */}
        <section className="space-y-8">
          <Card className="border border-border/50 shadow-md rounded-2xl overflow-hidden bg-background">
            <CardHeader className="bg-primary text-primary-foreground p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10 space-y-2">
                <div className="inline-flex bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-accent">
                  Transformación Digital
                </div>
                <CardTitle className="font-serif font-bold text-xl md:text-2xl">
                  {technologyChallenges.title}
                </CardTitle>
                <CardDescription className="text-xs text-primary-foreground/70 font-light">
                  El rol estratégico del contador frente a las tecnologías disruptivas del siglo XXI.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-8">
              
              {/* Desglose en Micro-Tarjetas de Retos para CRO y Legibilidad */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-border/60 bg-secondary/15 hover:border-accent/40 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{card.icon}</span>
                      <h4 className="font-serif font-bold text-sm text-primary leading-tight">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Escrito Académico Principal - Rediseño Editorial Simétrico y de Alta Gama */}
              <div className="border-t border-border/40 pt-8 space-y-6">
                
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary text-center">
                  Análisis Editorial y Prospectivo
                </h4>
                
                {/* Imagen destacada en formato ancho completo superior */}
                <div className="relative group w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/10 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative p-1 bg-background border border-border/50 rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src="/accounting_future.png"
                      alt="Tecnología Contable del Futuro"
                      className="w-full h-64 sm:h-72 object-cover rounded-xl filter brightness-[0.88] group-hover:scale-[1.005] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Texto a ancho de lectura óptimo centrado */}
                <div className="max-w-3xl mx-auto space-y-6 pt-2">
                  {((technologyChallenges as any).paragraphs || []).map((paragraph: string, idx: number) => (
                    <p
                      key={idx}
                      className={`text-sm md:text-base text-muted-foreground text-justify leading-relaxed font-light ${
                        idx === 0
                          ? "first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

              </div>

            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
