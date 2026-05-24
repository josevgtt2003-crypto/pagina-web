import Link from "next/link";
import content from "@/config/es/content.json";

export default function Home() {
  const { hero, ethicalEssay } = content.home;
  const students = content.students;

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section con gradiente sutil y diseño premium en dos columnas con imagen IA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-20 lg:py-28 border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje y CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-accent/15 border border-accent/30 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-sm">
                ✨ Tarea 5 - Ética & Responsabilidad Social
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-primary leading-tight">
                {hero.title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                {hero.subtitle}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/estudiantes"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  {hero.cta}
                </Link>
                <Link
                  href="/caso-odebrecht"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-border"
                >
                  Estudio del Caso Odebrecht
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Imagen Premium Generada con IA con marco Glassmorphism */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                {/* Efecto de brillo de fondo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-2 bg-background/50 backdrop-blur-xl border border-border/60 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/ethics_hero.png"
                    alt="Ética y Responsabilidad Social"
                    className="w-full h-80 object-cover rounded-2xl filter brightness-95 group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-primary/90 backdrop-blur-md border border-primary-foreground/10 text-primary-foreground space-y-1">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-accent">Garantía Moral</div>
                    <div className="font-serif font-bold text-sm">Fe Pública & Transparencia</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección del Escrito Editorial de Ética */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-4xl mb-4">⚖️</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
                {ethicalEssay.title}
              </h2>
              <div className="h-1 w-20 bg-accent rounded mt-4"></div>
            </div>

            <article className="prose prose-slate lg:prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              {ethicalEssay.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Cita en bloque destacada */}
            <div className="mt-12 p-8 rounded-2xl bg-secondary/30 border border-border/60 relative">
              <span className="absolute -top-6 left-6 text-7xl font-serif text-accent/20 select-none">“</span>
              <p className="italic font-serif text-lg text-primary/90 text-center relative z-10 leading-relaxed">
                La fe pública no es una licencia técnica, sino un contrato moral irrevocable con la veracidad y la transparencia de la sociedad.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Grid de Estudiantes Autores */}
      <section className="py-20 bg-secondary/15 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-serif font-bold text-primary">
              Equipo de Estudiantes Autores
            </h2>
            <p className="text-muted-foreground font-light">
              Conoce los perfiles profesionales y las contribuciones por Fases de los estudiantes encargados de estructurar este marco ético contable.
            </p>
            <div className="h-1 w-16 bg-accent rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {students.map((student) => (
              <div
                key={student.id}
                className="group flex flex-col justify-between p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary font-serif font-bold">
                      {student.name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors duration-300">
                        {student.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {student.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {student.profile}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-border/40 mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Fases de 1 a 4
                  </span>
                  <Link
                    href={`/estudiantes?student=${student.id}`}
                    className="inline-flex items-center justify-center h-8 px-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-primary text-xs font-semibold transition-all duration-200"
                  >
                    Ver Trabajos
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
