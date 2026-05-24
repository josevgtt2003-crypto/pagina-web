import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import content from "@/config/es/content.json";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.siteMetadata.title,
  description: content.siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased selection:bg-accent/30 selection:text-foreground">
        
        {/* Navbar con efecto Glassmorphism */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-serif text-lg font-bold shadow-md transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                ⚖️
              </span>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm tracking-wide text-primary leading-tight transition-colors duration-300 group-hover:text-accent">
                  Ética & Responsabilidad
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                  Contaduría UNAD
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex space-x-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-secondary hover:text-primary text-foreground"
              >
                Inicio
              </Link>
              <Link
                href="/estudiantes"
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-secondary hover:text-primary text-foreground"
              >
                Trabajos Individuales
              </Link>
              <Link
                href="/caso-odebrecht"
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-secondary hover:text-primary text-foreground"
              >
                Caso Odebrecht
              </Link>
              <Link
                href="/recomendaciones"
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-secondary hover:text-primary text-foreground"
              >
                Retos & Recomendaciones
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Link
                href="/estudiantes"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-semibold tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>

          {/* Menú de navegación móvil para pantallas pequeñas (Grid de acceso rápido) */}
          <div className="md:hidden border-t border-border/40 bg-secondary/50 px-4 py-2 flex items-center justify-around text-[11px] font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <Link href="/estudiantes" className="hover:text-primary transition-colors">Portafolio</Link>
            <Link href="/caso-odebrecht" className="hover:text-primary transition-colors">Odebrecht</Link>
            <Link href="/recomendaciones" className="hover:text-primary transition-colors">Retos</Link>
          </div>
        </header>

        {/* Contenedor de Contenido Principal */}
        <main className="flex-grow">{children}</main>

        {/* Footer Institucional */}
        <footer className="w-full bg-primary text-primary-foreground border-t border-primary-foreground/10 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Columna 1: Info General */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🎓</span>
                  <h3 className="font-serif font-bold text-lg tracking-wide">
                    Responsabilidad Ética
                  </h3>
                </div>
                <p className="text-xs text-primary-foreground/75 leading-relaxed max-w-sm">
                  Página web académica construida colaborativamente para evidenciar el rol trascendental del contador público ético en la transparencia corporativa.
                </p>
                <div className="text-[11px] text-primary-foreground/50">
                  {content.siteMetadata.course}
                </div>
              </div>

              {/* Columna 2: Enlaces Rápidos */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-accent">
                  Secciones
                </h4>
                <ul className="space-y-2 text-xs text-primary-foreground/80">
                  <li>
                    <Link href="/" className="hover:underline hover:text-accent transition-colors">
                      Inicio & Filosofía Ética
                    </Link>
                  </li>
                  <li>
                    <Link href="/estudiantes" className="hover:underline hover:text-accent transition-colors">
                      Trabajos Individuales
                    </Link>
                  </li>
                  <li>
                    <Link href="/caso-odebrecht" className="hover:underline hover:text-accent transition-colors">
                      Estudio del Caso Odebrecht
                    </Link>
                  </li>
                  <li>
                    <Link href="/recomendaciones" className="hover:underline hover:text-accent transition-colors">
                      Retos Tecnológicos de la Profesión
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Columna 3: Autores (Equipo de Estudiantes) */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-accent">
                  Estudiantes Autores
                </h4>
                <ul className="space-y-2 text-xs text-primary-foreground/80">
                  {content.students.map((student) => (
                    <li key={student.id} className="flex items-center space-x-2">
                      <span className="text-[10px]">🔹</span>
                      <span>{student.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-[10px] text-primary-foreground/60 border-t border-primary-foreground/10">
                  {content.siteMetadata.institution}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/60">
              <p>&copy; {new Date().getFullYear()} - Plataforma de Ética Profesional. Tarea 5 - UNAD. Diseñado con Cero Fricción Cognitiva.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
