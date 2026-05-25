import { useParams, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Users,
  FileText,
  MessageSquare,
  Upload,
  CheckCircle2,
  Clock,
  Lock,
  Shield,
} from 'lucide-react';
import { mockTeams, mockChallenges } from '../data/mockData';

export default function TeamWorkspace() {
  const { teamId } = useParams();
  const team = mockTeams.find((t) => t.id === teamId);
  const challenge = team ? mockChallenges.find((c) => c.id === team.challengeId) : null;

  if (!team || !challenge) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Card className="p-12">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Equipo no encontrado</h3>
              <Button asChild className="mt-4">
                <Link to="/student">Volver al Dashboard</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{team.name} - Workspace</h1>
              <p className="text-gray-600">{challenge.title}</p>
            </div>
            <Badge className="bg-green-100 text-green-800 text-base px-4 py-2">
              Fase: {team.phase}
            </Badge>
          </div>
        </div>

        {/* Security Banner */}
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Lock className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-900 mb-1">
                  Entorno Virtual Seguro Activo
                </p>
                <p className="text-sm text-red-800">
                  Estás trabajando en un ambiente controlado. El entorno aplica controles para
                  restringir descargas, copiado, transferencia de archivos y otras vías de
                  salida de información. Toda actividad queda registrada.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="workspace" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="workspace">Workspace</TabsTrigger>
                <TabsTrigger value="deliverables">Entregables</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="workspace" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Área de Trabajo Colaborativo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                        <Lock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="font-medium text-gray-700 mb-2">
                          Entorno Virtual Seguro
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          Accede al workspace seguro donde trabajas con datos reales
                          anonimizados
                        </p>
                        <Button>Abrir Workspace Seguro (Azure VDI)</Button>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">
                          Características del Entorno:
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>✓ Restricción de descargas, portapapeles y unidades locales</li>
                          <li>✓ Watermark dinámico con tu usuario</li>
                          <li>✓ Datos sintéticos o anonimizados</li>
                          <li>✓ Acceso solo durante el sprint</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chat del Equipo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          👩‍💼
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="font-medium text-sm mb-1">María González</p>
                            <p className="text-sm">
                              He terminado el análisis de datos. Subiendo resultados ahora.
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Hace 2 horas</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          👨‍💻
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="font-medium text-sm mb-1">Carlos Méndez</p>
                            <p className="text-sm">
                              Excelente! Voy a revisar los queries SQL que usaste.
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Hace 1 hora</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Textarea placeholder="Escribe un mensaje al equipo..." rows={2} />
                      <Button>
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deliverables">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Entregables del Equipo</CardTitle>
                      <Button>
                        <Upload className="mr-2 w-4 h-4" />
                        Subir Nuevo
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {team.deliverables.map((deliverable) => (
                        <div key={deliverable.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-blue-600" />
                              <div>
                                <p className="font-medium">{deliverable.name}</p>
                                <p className="text-sm text-gray-600">
                                  Subido el {deliverable.uploadDate}
                                </p>
                              </div>
                            </div>
                            <Badge
                              className={
                                deliverable.status === 'validado'
                                  ? 'bg-green-100 text-green-800'
                                  : deliverable.status === 'en-revisión'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }
                            >
                              {deliverable.status}
                            </Badge>
                          </div>

                          {deliverable.feedback && (
                            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
                              <p className="font-medium text-blue-900 text-sm mb-1">
                                Feedback del Validador:
                              </p>
                              <p className="text-sm text-blue-800">{deliverable.feedback}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback">
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback y Validaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-600 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <p className="font-medium">Validador Técnico Senior</p>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{team.seniorValidator}</p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm">
                            Excelente estructura inicial. La aproximación al problema es
                            correcta. Sugiero profundizar en la optimización de consultas y
                            agregar visualizaciones de tendencia temporal.
                          </p>
                        </div>
                      </div>

                      {team.hrObserver && (
                        <div className="border-l-4 border-purple-600 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            <p className="font-medium">Observador RR.HH.</p>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{team.hrObserver}</p>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="text-sm">
                              El equipo muestra excelente colaboración y comunicación. María
                              demuestra liderazgo natural. Sigan manteniendo la dinámica
                              positiva de trabajo.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progreso General</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Avance del Sprint</span>
                      <span className="text-sm text-gray-600">{team.progress}%</span>
                    </div>
                    <Progress value={team.progress} />
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Análisis inicial completado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Propuesta validada por senior</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span>Dashboard en desarrollo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Assessment Center pendiente</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle>Miembros del Equipo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {team.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                        {member.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-gray-600">{member.role}</p>
                      </div>
                      <Badge variant={member.level === 'avanzado' ? 'default' : 'secondary'}>
                        {member.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenge Info */}
            <Card>
              <CardHeader>
                <CardTitle>Info del Reto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Empresa</p>
                  <p className="font-medium">{challenge.company}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Área</p>
                  <p className="font-medium">{challenge.area}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Duración</p>
                  <p className="font-medium">{challenge.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Dificultad</p>
                  <Badge>{challenge.difficulty}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
