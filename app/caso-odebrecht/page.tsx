import content from "@/config/es/content.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CasoOdebrechtPage() {
  const { summary, problemTree, recommendations, corporateGovernance } = content.odebrechtCase;

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Cabecera del Análisis */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-4xl">🏛️</span>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
            Análisis Colaborativo: Caso Odebrecht
          </h1>
          <p className="text-muted-foreground font-light text-base md:text-lg max-w-3xl mx-auto">
            Estudio crítico sobre las implicaciones éticas, contables y regulatorias de una de las mayores tramas de corrupción transnacional en Latinoamérica.
          </p>
          <div className="h-1 w-24 bg-accent rounded mx-auto mt-4"></div>
        </div>

        {/* 1. Resumen del Caso (Fase 2) - Diseño en dos columnas con imagen IA */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Columna Izquierda: Tarjeta de Resumen y Botón */}
            <div className="lg:col-span-7 flex">
              <Card className="w-full border border-border/50 shadow-md rounded-2xl overflow-hidden bg-background flex flex-col justify-between">
                <div>
                  <CardHeader className="bg-secondary/25 border-b border-border/40 p-6 md:p-8">
                    <div className="flex items-center space-x-2 text-primary">
                      <span className="text-xl">📄</span>
                      <CardTitle className="font-serif font-bold text-xl md:text-2xl">
                        {summary.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-xs md:text-sm font-light pt-1.5">
                      Diagnóstico del fraude sistémico y el quiebre de la fe pública contable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <p className="text-sm md:text-base text-muted-foreground text-justify leading-relaxed font-light">
                      {summary.text}
                    </p>
                  </CardContent>
                </div>

                {/* Enlace al trabajo terminado si está configurado en el footer de la tarjeta */}
                {(summary as any).link && (
                  <div className="p-6 md:p-8 pt-0 border-t border-border/10 flex justify-end">
                    <a
                      href={(summary as any).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      📝 Acceder al Trabajo Colaborativo Terminado (Fase 2)
                    </a>
                  </div>
                )}
              </Card>
            </div>

            {/* Columna Derecha: Tarjeta Visual con la Imagen Corporativa IA */}
            <div className="lg:col-span-5 flex">
              <div className="relative group w-full flex">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur opacity-25 group-hover:opacity-35 transition duration-1000"></div>
                <Card className="w-full border border-border/50 shadow-md rounded-2xl overflow-hidden bg-background relative flex flex-col justify-between p-2">
                  <div className="relative flex-grow rounded-xl overflow-hidden h-64 lg:h-auto">
                    <img
                      src="/corporate_governance.png"
                      alt="Gobierno Corporativo Odebrecht"
                      className="w-full h-full object-cover rounded-xl filter brightness-[0.85] group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
                    <div className="absolute inset-x-6 bottom-6 space-y-2 text-primary-foreground">
                      <span className="inline-flex bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-accent">
                        Fase 4 - Gobierno Corporativo
                      </span>
                      <h3 className="font-serif font-bold text-base md:text-lg">
                        Gobernanza & Sostenibilidad
                      </h3>
                      <p className="text-xs text-primary-foreground/75 leading-relaxed font-light">
                        El contraste entre el control institucional y la opacidad transnacional.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Árbol de Problemas de Causas y Efectos (Fase 3) */}
        <section className="mb-16 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              {problemTree.title}
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
              Estructura diagnóstica que desglosa las causas raíz y los impactos resultantes de la complicidad y el fraude contable.
            </p>
          </div>

          {/* Gráfico del Árbol de Problemas Estilizado en Tailwind CSS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            
            {/* Rama Izquierda: Causas (Raíces) */}
            <div className="flex flex-col space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-accent border-b border-accent/20 pb-2 flex items-center space-x-2">
                <span>🌱</span>
                <span>Causas Raíz (Orígenes)</span>
              </div>
              {problemTree.causes.map((cause, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border/60 bg-secondary/15 hover:border-accent/40 transition-colors duration-200"
                >
                  <h4 className="font-serif font-bold text-sm text-primary mb-1">
                    {cause.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {cause.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tronco Central: Problema Central */}
            <div className="flex flex-col justify-center items-center p-8 rounded-2xl bg-primary text-primary-foreground border border-primary-foreground/5 shadow-xl text-center space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent"></div>
              <span className="text-3xl relative z-10">⚠️</span>
              <h3 className="font-serif font-bold text-lg md:text-xl relative z-10 leading-snug">
                PROBLEMA CENTRAL
              </h3>
              <p className="text-xs md:text-sm text-primary-foreground/80 leading-relaxed font-light relative z-10">
                {problemTree.centralProblem}
              </p>
              <div className="hidden lg:block absolute w-1.5 h-16 bg-accent top-full"></div>
              <div className="hidden lg:block absolute w-1.5 h-16 bg-accent bottom-full"></div>
            </div>

            {/* Rama Derecha: Efectos (Frutos) */}
            <div className="flex flex-col space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-destructive border-b border-destructive/20 pb-2 flex items-center space-x-2">
                <span>🍂</span>
                <span>Efectos Colaterales (Impactos)</span>
              </div>
              {problemTree.effects.map((effect, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border/60 bg-secondary/15 hover:border-destructive/30 transition-colors duration-200"
                >
                  <h4 className="font-serif font-bold text-sm text-primary mb-1">
                    {effect.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {effect.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. Recomendaciones Realizadas (Fase 3) */}
        <section className="mb-16 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              {recommendations.title}
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
              Propuestas estratégicas diseñadas colaborativamente para blindar el ejercicio contable frente a riesgos sistémicos de corrupción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {recommendations.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="h-8 w-8 rounded-lg bg-accent/20 text-accent-foreground font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Gobierno Corporativo y Sostenibilidad Empresarial (Fase 4) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              {corporateGovernance.title}
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
              Contraste metodológico entre las prácticas de gobierno corporativo que promueven la sostenibilidad frente a las fallas estructurales que la sabotean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Elementos Positivos */}
            <Card className="border border-border/40 shadow-sm rounded-2xl overflow-hidden bg-background">
              <CardHeader className="bg-emerald-500/10 border-b border-border/30 p-6">
                <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                  <span className="text-lg">✔️</span>
                  <CardTitle className="font-serif font-bold text-base md:text-lg">
                    Prácticas Positivas (Gobernanza & ESG)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {corporateGovernance.positiveElements.map((elem, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground leading-relaxed font-light">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{elem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Elementos Negativos */}
            <Card className="border border-border/40 shadow-sm rounded-2xl overflow-hidden bg-background">
              <CardHeader className="bg-rose-500/10 border-b border-border/30 p-6">
                <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
                  <span className="text-lg">❌</span>
                  <CardTitle className="font-serif font-bold text-base md:text-lg">
                    Vulnerabilidades Negativas (Fallas & Riesgos)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {corporateGovernance.negativeElements.map((elem, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground leading-relaxed font-light">
                      <span className="text-rose-500 font-bold mt-0.5">✗</span>
                      <span>{elem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </section>

      </div>
    </div>
  );
}
