import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Target,
  Users,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Award,
  FileCheck,
  Rocket,
  Building2,
  GraduationCap,
  Eye,
  Lock,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-400">
              Sistema Socio-Técnico de Experiencia Laboral Validada
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cela <span className="font-extrabold">AI</span>pa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convertir talento junior con potencial en talento observable, validado y
              recomendable para empresas reales
            </p>
            <p className="text-lg mb-10 text-blue-100 max-w-3xl mx-auto">
              Cela AIpa convierte retos reales de BCP y, progresivamente, de empresas del grupo Credicorp en experiencias aplicadas verificables. Los estudiantes y egresados trabajan en células, resuelven problemas empresariales dentro de entornos virtuales seguros, reciben validación técnica senior en las fases de preselección, selección y Assessment Center, y durante el Assessment Center son observados por RR. HH. Al terminar, los finalistas reciben un portafolio de habilidades técnicas y blandas, una ficha de desempeño y 3 rutas verificables hacia oportunidades laborales. Si su solución es seleccionada para ser enviada a la empresa, obtienen además un registro de experiencia aplicada verificable.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/challenges">
                  Explorar Retos <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-blue-800"
              >
                <Link to="/student">Ver Mi Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Qué hace diferente a este sistema?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No es una bolsa de trabajo. No es solo una plataforma. Es un laboratorio de
              experiencia laboral validada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Retos Empresariales Reales</CardTitle>
                <CardDescription>
                  Inicia con retos de BCP y escala hacia empresas seleccionadas del grupo
                  Credicorp según la fase de implementación del programa
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Validación Técnica Senior</CardTitle>
                <CardDescription>
                  Especialistas senior evalúan tu trabajo en cada fase: preselección,
                  selección y Assessment Center
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Observación de RR.HH.</CardTitle>
                <CardDescription>
                  RR.HH. observa tus competencias blandas, comunicación, colaboración y
                  desempeño bajo presión
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Experiencia Verificable</CardTitle>
                <CardDescription>
                  Genera experiencia aplicada verificable en contexto empresarial real con
                  portafolio de habilidades técnicas y blandas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Portafolio de Evidencia Laboral</CardTitle>
                <CardDescription>
                  Recibe un portafolio con habilidades técnicas y blandas, ficha de desempeño,
                  evidencias del reto y brechas detectadas. El Assessment Passport solo se genera
                  si activas la ruta fast-track.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Rutas Verificables de Salida Laboral</CardTitle>
                <CardDescription>
                  Puedes acceder a tres rutas: conversión directa con la empresa del reto,
                  evaluación para recomendación senior y fast-track vía Buk/ATS bajo
                  consentimiento.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Cómo Funciona?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un proceso estructurado en 4 fases que te lleva desde el reto hasta la
              oportunidad laboral
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Preselección</h3>
                <p className="text-gray-600 mb-3">
                  Formas parte de una célula de trabajo con perfiles avanzados y en
                  desarrollo. Reciben un reto real y presentan una primera aproximación de
                  solución. Un senior técnico filtra los proyectos con mayor potencial.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Formación de Equipos</Badge>
                  <Badge variant="secondary">Reto Asignado</Badge>
                  <Badge variant="secondary">Propuesta Inicial</Badge>
                  <Badge variant="secondary">Validación Senior</Badge>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Selección</h3>
                <p className="text-gray-600 mb-3">
                  Mediante capacitaciones generales, las soluciones se mejoran y aterrizan a
                  lo que la empresa realmente necesita. De esta fase quedan solo cinco
                  equipos finalistas con sus soluciones respectivas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Capacitaciones</Badge>
                  <Badge variant="secondary">Mejora de Soluciones</Badge>
                  <Badge variant="secondary">5 Equipos Finalistas</Badge>
                  <Badge variant="secondary">Validación Técnica</Badge>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Assessment Center</h3>
                <p className="text-gray-600 mb-3">
                  Los finalistas reciben retroalimentación especializada para afinar su
                  solución en vivo, bajo presión y observación. El senior técnico evalúa la
                  calidad técnica mientras RR.HH. observa competencias blandas: liderazgo,
                  comunicación, colaboración y adaptabilidad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Evaluación en Vivo</Badge>
                  <Badge variant="secondary">Validación Senior</Badge>
                  <Badge variant="secondary">Observación RR.HH.</Badge>
                  <Badge variant="secondary">Bajo Presión</Badge>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Validación Final y Salida Laboral</h3>
                <p className="text-gray-600 mb-3">
                  Al finalizar, los finalistas reciben un portafolio de evidencia laboral y una
                  ficha de desempeño. Si la solución del equipo es enviada a la empresa, se
                  registra como experiencia aplicada verificable. Luego el participante puede
                  activar cualquiera de las tres rutas verificables: conversión directa con la
                  empresa del reto, solicitud de evaluación para recomendación senior o fast-track
                  vía Buk/ATS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Portafolio de Evidencia</Badge>
                  <Badge variant="secondary">Ficha de Desempeño</Badge>
                  <Badge variant="secondary">Registro de Experiencia Aplicada</Badge>
                  <Badge variant="secondary">3 Rutas Verificables</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Routes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tres Rutas Verificables de Salida Laboral</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Múltiples caminos verificables hacia oportunidades laborales reales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Ruta 1: Conversión Directa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  El estudiante o equipo destacado puede ser considerado directamente por la
                  empresa que propuso el reto.
                </p>
                <div className="text-sm text-gray-500 italic">
                  "Ya te vi trabajar en un problema real mío; no parto desde cero para
                  evaluarte."
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Ruta 2: Recomendación Senior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  El participante puede manifestar interés en ser recomendado por el especialista
                  técnico senior. El senior recibe su portafolio, ficha de desempeño y registro de
                  experiencia aplicada, y decide si corresponde emitir una recomendación técnica
                  hacia empresas de su red profesional, MYPEs o empresas aliadas.
                </p>
                <div className="text-sm text-gray-500 italic">
                  La recomendación no es automática: se solicita, se evalúa y solo se emite si el
                  senior decide respaldarla con evidencia.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Ruta 3: Fast-Track en ATS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Si el participante decide activar la ruta fast-track, el sistema genera un
                  Assessment Passport bajo consentimiento para enviar evidencia estructurada hacia
                  Buk o un ATS equivalente.
                </p>
                <div className="text-sm text-gray-500 italic">
                  El Assessment Passport no reemplaza el proceso de selección; permite entrar con
                  evidencia previa y solicitar revisión prioritaria.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Layer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Capa de Seguridad</h2>
                <p className="text-lg text-gray-600 mb-6">
                  El sistema reduce las vías de fuga de información mediante entornos
                  virtuales seguros (Azure Virtual Desktop o Citrix), bloqueo de descargas,
                  restricciones de dispositivos, watermark dinámico, datos anonimizados y
                  trazabilidad completa.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Bloqueo de descargas y USB</p>
                      <p className="text-sm text-gray-600">
                        Restricción de dispositivos y vías de salida de información
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Watermark dinámico</p>
                      <p className="text-sm text-gray-600">
                        Cada sesión se identifica con tu usuario y hora
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Datos anonimizados</p>
                      <p className="text-sm text-gray-600">
                        Trabajas con datos sintéticos o enmascarados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Trazabilidad completa</p>
                      <p className="text-sm text-gray-600">
                        Todas las acciones quedan registradas en logs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Demuestra tu valor con evidencia real
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              No solo declares habilidades en un CV. Demuestra desempeño real en retos
              empresariales validados por seniors técnicos y observados por RR.HH.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/challenges">
                  Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-blue-700"
              >
                <Link to="/portfolio">Ver Portafolio de Ejemplo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-gray-600">Retos Prototipo</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <p className="text-gray-600">Equipos Simulados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
              <p className="text-gray-600">Empresas en Roadmap</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600">Evidencia Trazable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
