"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import content from "@/config/es/content.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function EstudiantesContent() {
  const searchParams = useSearchParams();
  const [activeStudent, setActiveStudent] = useState("jose-vesga");

  // Si viene un estudiante por URL en el CTA de la página de inicio, lo seleccionamos
  useEffect(() => {
    const studentQuery = searchParams.get("student");
    if (studentQuery && content.students.some((s) => s.id === studentQuery)) {
      setActiveStudent(studentQuery);
    }
  }, [searchParams]);

  const students = content.students;

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-4xl">📁</span>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
            Compilación de Trabajos Individuales
          </h1>
          <p className="text-muted-foreground font-light text-base md:text-lg">
            Selecciona un estudiante para explorar sus reflexiones, análisis de casos y propuestas normativas desarrolladas a lo largo de las cuatro fases del periodo académico.
          </p>
          <div className="h-1 w-24 bg-accent rounded mx-auto mt-4"></div>
        </div>

        {/* Estructura Principal con Tabs de Shadcn */}
        <Tabs
          value={activeStudent}
          onValueChange={setActiveStudent}
          className="w-full max-w-5xl mx-auto space-y-12"
        >
          {/* Selector de Estudiantes en Formato de Pestañas de Alta Estética */}
          <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-secondary/30 p-2 rounded-2xl h-auto border border-border/40">
            {students.map((student) => (
              <TabsTrigger
                key={student.id}
                value={student.id}
                className="py-3 px-4 rounded-xl font-serif text-sm font-semibold tracking-wide transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg cursor-pointer text-center"
              >
                👤 {student.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenido para cada Estudiante */}
          {students.map((student) => (
            <TabsContent
              key={student.id}
              value={student.id}
              className="space-y-8 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 animate-in fade-in-50 duration-500"
            >
              {/* Tarjeta de Presentación del Estudiante */}
              <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl border border-primary-foreground/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-accent">
                    {student.role}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                    {student.name}
                  </h2>
                  <p className="text-sm md:text-base text-primary-foreground/80 font-light max-w-2xl leading-relaxed">
                    {student.profile}
                  </p>
                </div>
              </div>

              {/* Pestañas de Fases individuales ("cuadritos") */}
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-xl text-primary text-center md:text-left">
                  Entregas de Aprendizaje por Fase
                </h3>
                
                <Tabs defaultValue="fase1" className="w-full space-y-6">
                  {/* Fases en formato de cuadritos pequeños responsivos */}
                  <TabsList className="flex flex-wrap md:flex-nowrap gap-2 p-1.5 bg-secondary/40 rounded-xl w-fit border border-border/40">
                    <TabsTrigger
                      value="fase1"
                      className="flex-1 md:flex-initial py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                    >
                      Fase 1
                    </TabsTrigger>
                    <TabsTrigger
                      value="fase2"
                      className="flex-1 md:flex-initial py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                    >
                      Fase 2
                    </TabsTrigger>
                    <TabsTrigger
                      value="fase3"
                      className="flex-1 md:flex-initial py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                    >
                      Fase 3
                    </TabsTrigger>
                    <TabsTrigger
                      value="fase4"
                      className="flex-1 md:flex-initial py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                    >
                      Fase 4
                    </TabsTrigger>
                  </TabsList>

                  {/* Contenidos de las Fases */}
                  {(["fase1", "fase2", "fase3", "fase4"] as const).map((phaseKey) => {
                    const phase = student.phases[phaseKey];
                    return (
                      <TabsContent
                        key={phaseKey}
                        value={phaseKey}
                        className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 animate-in slide-in-from-bottom-3 duration-300"
                      >
                        <Card className="border border-border/50 shadow-md rounded-2xl overflow-hidden bg-background">
                          <CardHeader className="bg-secondary/20 border-b border-border/40 p-6 md:p-8">
                            <div className="flex items-center space-x-2 text-accent">
                              <span className="text-lg">📋</span>
                              <CardTitle className="font-serif font-bold text-lg md:text-xl text-primary">
                                {phase.title}
                              </CardTitle>
                            </div>
                            <CardDescription className="text-xs md:text-sm text-muted-foreground pt-1.5 font-light">
                              Compendio del trabajo autónomo y reflexiones metodológicas individuales.
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-6 md:p-8 space-y-6">
                            
                            {/* Resumen de la Fase */}
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                                Resumen del Trabajo
                              </h4>
                              <p className="text-sm md:text-base text-muted-foreground text-justify leading-relaxed font-light">
                                {phase.summary}
                              </p>
                            </div>

                            {/* Entregables / Entregas */}
                            <div className="space-y-3 pt-2">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                                Entregables Específicos
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {phase.deliverables.map((deliverable, idx) => (
                                  <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-secondary/15 border border-border/40 flex items-start space-x-3"
                                  >
                                    <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent-foreground mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                      {deliverable}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Enlace de SharePoint si está disponible */}
                            {(phase as any).link && (
                              <div className="pt-6 border-t border-border/40 flex justify-end">
                                <a
                                  href={(phase as any).link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                                >
                                  📥 Ver Documento de Trabajo en SharePoint
                                </a>
                              </div>
                            )}

                          </CardContent>
                        </Card>
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </div>

            </TabsContent>
          ))}
        </Tabs>

      </div>
    </div>
  );
}

export default function EstudiantesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center text-primary bg-background font-serif space-y-4">
        <span className="text-4xl animate-bounce">📁</span>
        <div className="text-lg font-bold">Cargando portafolio...</div>
      </div>
    }>
      <EstudiantesContent />
    </Suspense>
  );
}
