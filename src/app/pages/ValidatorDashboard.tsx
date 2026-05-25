import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Shield,
  FileCheck,
  AlertCircle,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
} from 'lucide-react';
import { mockTeams, mockChallenges } from '../data/mockData';

export default function ValidatorDashboard() {
  const myTeams = mockTeams.filter((t) =>
    t.seniorValidator.includes('Rodrigo Santillán')
  );
  const pendingReviews = myTeams.filter(
    (t) => t.deliverables.some((d) => d.status === 'en-revisión')
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard de Validador Técnico</h1>
          <p className="text-gray-600">Rodrigo Santillán - Senior Data Architect</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipos Asignados</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myTeams.length}</div>
              <p className="text-xs text-muted-foreground">En diferentes fases</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revisiones Pendientes</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingReviews.length}</div>
              <p className="text-xs text-muted-foreground">Requieren tu validación</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Validaciones Completadas</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score Promedio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86</div>
              <p className="text-xs text-muted-foreground">De equipos validados</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Revisiones Pendientes</TabsTrigger>
            <TabsTrigger value="teams">Mis Equipos</TabsTrigger>
            <TabsTrigger value="assessments">Assessments Programados</TabsTrigger>
            <TabsTrigger value="referrals">Solicitudes de Recomendación</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {myTeams.map((team) => {
              const challenge = mockChallenges.find((c) => c.id === team.challengeId);
              const pendingDeliverables = team.deliverables.filter(
                (d) => d.status === 'en-revisión'
              );

              if (pendingDeliverables.length === 0) return null;

              return (
                <Card key={team.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <CardTitle>{team.name}</CardTitle>
                        </div>
                        <CardDescription>{challenge?.title}</CardDescription>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        {pendingDeliverables.length} pendiente(s)
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pendingDeliverables.map((deliverable) => (
                      <div key={deliverable.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <FileCheck className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium">{deliverable.name}</p>
                              <p className="text-sm text-gray-600">
                                Subido el {deliverable.uploadDate}
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {deliverable.status}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Tu Feedback Técnico
                            </label>
                            <Textarea
                              placeholder="Evalúa la calidad técnica, arquitectura, optimización y cumplimiento de objetivos..."
                              rows={3}
                            />
                          </div>

                          <div className="flex gap-2">
                            <Button className="bg-green-600 hover:bg-green-700">
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Validar y Aprobar
                            </Button>
                            <Button variant="outline">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              Solicitar Cambios
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}

            {myTeams.every((t) => !t.deliverables.some((d) => d.status === 'en-revisión')) && (
              <Card className="p-12">
                <div className="text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No hay revisiones pendientes
                  </h3>
                  <p className="text-gray-600">
                    Todos los entregables han sido validados o están en progreso
                  </p>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="teams" className="space-y-4">
            {myTeams.map((team) => {
              const challenge = mockChallenges.find((c) => c.id === team.challengeId);

              return (
                <Card key={team.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{team.name}</CardTitle>
                        <CardDescription>{challenge?.title}</CardDescription>
                      </div>
                      <Badge className="capitalize">{team.phase}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Miembros del Equipo</p>
                      <div className="flex flex-wrap gap-2">
                        {team.members.map((member) => (
                          <Badge key={member.id} variant="outline">
                            {member.avatar} {member.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Progreso General</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${team.progress}%` }}
                          />
                        </div>
                        <span className="font-medium">{team.progress}%</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600 mb-2">Entregables</p>
                      <div className="space-y-2">
                        {team.deliverables.map((deliverable) => (
                          <div
                            key={deliverable.id}
                            className="flex items-center justify-between text-sm"
                          >
                            <span>{deliverable.name}</span>
                            <Badge
                              variant={deliverable.status === 'validado' ? 'default' : 'outline'}
                              className={
                                deliverable.status === 'validado'
                                  ? 'bg-green-100 text-green-800'
                                  : deliverable.status === 'en-revisión'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : ''
                              }
                            >
                              {deliverable.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Workspace
                      </Button>
                      <Button variant="outline" size="sm">
                        Enviar Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="assessments">
            <Card>
              <CardHeader>
                <CardTitle>Próximos Assessment Centers</CardTitle>
                <CardDescription>
                  Sesiones de evaluación técnica en vivo programadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium">Equipo Alpha - Dashboard de Análisis</h4>
                        <p className="text-sm text-gray-600">
                          Assessment Center en vivo - Evaluación técnica
                        </p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        <Clock className="w-3 h-3 mr-1" />
                        26 May, 10:00 AM
                      </Badge>
                    </div>

                    <div className="bg-purple-50 p-3 rounded-lg mb-3">
                      <p className="text-sm text-purple-900">
                        <strong>Tu Rol:</strong> Evaluar calidad técnica de la solución final,
                        arquitectura del dashboard, optimización de queries y cumplimiento de
                        objetivos.
                      </p>
                    </div>

                    <Button>Preparar Evaluación</Button>
                  </div>

                  <div className="border rounded-lg p-4 opacity-60">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium">Equipo Beta - Automatización de Créditos</h4>
                        <p className="text-sm text-gray-600">Assessment Center - Por confirmar</p>
                      </div>
                      <Badge variant="outline">Próximamente</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Solicitud Recibida de Recomendación</CardTitle>
                <CardDescription>
                  Un participante ha manifestado interés en ser considerado para una recomendación técnica senior
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    MG
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">María González</h3>
                    <p className="text-sm text-gray-600 mb-3">Data Analyst</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Rol objetivo</p>
                        <p className="text-sm text-gray-600">Data Analyst Jr.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Reto evaluado</p>
                        <p className="text-sm text-gray-600">Dashboard de Análisis de Comportamiento de Cliente</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Evidencia disponible</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          Portafolio de habilidades técnicas y blandas
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          Ficha de desempeño individual
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          Entregable validado
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          Registro de experiencia aplicada
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          Brechas detectadas
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Motivo</p>
                      <p className="text-sm text-gray-600 italic">
                        "Me gustaría ser considerada para oportunidades donde pueda aportar en análisis de datos, visualización y comunicación de hallazgos. Busco oportunidades en empresas de analítica, MYPEs o empresas de la red profesional del senior."
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium text-gray-700 mb-3">Opciones de respuesta</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Recomendar
                        </Button>
                        <Button size="sm" variant="outline">
                          Recomendar con condiciones
                        </Button>
                        <Button size="sm" variant="outline">
                          Solicitar mejora previa
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                          No recomendar por ahora
                        </Button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Justificación técnica de la decisión
                        </label>
                        <textarea
                          className="w-full p-3 border rounded-lg text-sm"
                          rows={3}
                          placeholder="Indica para qué roles, contextos o niveles recomiendas a esta persona. Ejemplo: recomendada para Data Analyst Jr. con autonomía media en análisis exploratorio y visualización."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Info Card */}
        <Card className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl">Tu Rol como Validador Técnico Senior</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium mb-2">✅ Validación Técnica</h4>
                <p className="text-sm text-blue-100">
                  Evalúa calidad de código, arquitectura, optimización y cumplimiento de
                  objetivos
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">📝 Feedback Constructivo</h4>
                <p className="text-sm text-blue-100">
                  Proporciona retroalimentación específica para mejorar las soluciones
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">🎯 Generación de Evidencia</h4>
                <p className="text-sm text-blue-100">
                  Tus validaciones generan evidencia laboral trazable para los estudiantes
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">🏆 Recomendación Senior Trazable</h4>
                <p className="text-sm text-blue-100">
                  Puedes emitir recomendaciones solo cuando exista evidencia suficiente. Tu recomendación queda asociada al portafolio del participante.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
