import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Target,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Users,
  FileText,
  BarChart3,
} from 'lucide-react';
import { mockTeams, mockPortfolio, mockChallenges } from '../data/mockData';

export default function StudentDashboard() {
  const currentTeam = mockTeams[0];
  const myChallenge = mockChallenges.find((c) => c.id === currentTeam.challengeId);

  const recentActivity = [
    {
      type: 'upload',
      title: 'Entregable subido',
      description: 'Dashboard v1.0 subido para revisión',
      time: '2 horas',
      icon: FileText,
    },
    {
      type: 'feedback',
      title: 'Feedback recibido',
      description: 'Rodrigo Santillán comentó tu propuesta inicial',
      time: '1 día',
      icon: CheckCircle2,
    },
    {
      type: 'team',
      title: 'Reunión de equipo',
      description: 'Sesión de sprint planning completada',
      time: '2 días',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mi Dashboard</h1>
          <p className="text-gray-600">
            Bienvenida, {mockPortfolio.studentName} - {mockPortfolio.validatedRole}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Retos Activos</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">En fase de selección</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Retos Completados</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockPortfolio.completedChallenges.length}
              </div>
              <p className="text-xs text-muted-foreground">Con validación senior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score Técnico</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92</div>
              <p className="text-xs text-muted-foreground">Promedio validado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competencias Blandas</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88</div>
              <p className="text-xs text-muted-foreground">Observación RR.HH.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Current Challenge */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Reto Actual</CardTitle>
                    <CardDescription>Tu progreso en el reto empresarial</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {currentTeam.phase}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {myChallenge?.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{myChallenge?.company}</span>
                        <span>•</span>
                        <span>{myChallenge?.area}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progreso General</span>
                        <span className="text-sm text-gray-600">{currentTeam.progress}%</span>
                      </div>
                      <Progress value={currentTeam.progress} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Equipo</p>
                          <p className="text-xs text-gray-600">{currentTeam.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <div>
                          <p className="text-sm font-medium">Duración</p>
                          <p className="text-xs text-gray-600">{myChallenge?.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                        <div>
                          <p className="text-sm font-medium">Dificultad</p>
                          <p className="text-xs text-gray-600">{myChallenge?.difficulty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Validadores Asignados</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👨‍💼</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{currentTeam.seniorValidator}</p>
                        <p className="text-xs text-gray-600">Validador Técnico Senior</p>
                      </div>
                    </div>
                    {currentTeam.hrObserver && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-lg">👩‍💼</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{currentTeam.hrObserver}</p>
                          <p className="text-xs text-gray-600">Observador RR.HH.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link to={`/team/${currentTeam.id}`}>
                      Continuar en workspace <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/assessment">Ver Assessment</Link>
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <p className="text-sm text-orange-900">
                    <strong>Nota:</strong> Mientras este reto esté activo, no podrás postular a nuevos retos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Deliverables */}
            <Card>
              <CardHeader>
                <CardTitle>Entregables</CardTitle>
                <CardDescription>Documentos y soluciones subidas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentTeam.deliverables.map((deliverable) => (
                    <div
                      key={deliverable.id}
                      className="flex items-start justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div>
                            <h4 className="font-medium">{deliverable.name}</h4>
                            <p className="text-sm text-gray-600">
                              Subido el {deliverable.uploadDate}
                            </p>
                          </div>
                        </div>
                        {deliverable.feedback && (
                          <div className="ml-8 mt-2 p-3 bg-blue-50 rounded text-sm">
                            <p className="font-medium text-blue-900 mb-1">
                              Feedback del validador:
                            </p>
                            <p className="text-blue-800">{deliverable.feedback}</p>
                          </div>
                        )}
                      </div>
                      <Badge
                        variant={
                          deliverable.status === 'validado'
                            ? 'default'
                            : deliverable.status === 'en-revisión'
                            ? 'secondary'
                            : 'outline'
                        }
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
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle>Mi Equipo</CardTitle>
                <CardDescription>Miembros de {currentTeam.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentTeam.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                          {member.avatar}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={member.level === 'avanzado' ? 'default' : 'secondary'}
                        >
                          {member.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/challenges">
                    <Target className="mr-2 w-4 h-4" />
                    Explorar Nuevos Retos
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/portfolio">
                    <Award className="mr-2 w-4 h-4" />
                    Ver Mi Portafolio
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/senior-referral">
                    <Award className="mr-2 w-4 h-4" />
                    Solicitar evaluación senior
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/oportunidades">
                    <TrendingUp className="mr-2 w-4 h-4" />
                    Ver Oportunidades
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.title}</p>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Hace {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Salidas Laborales Verificables */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardHeader>
                <CardTitle>Mis Salidas Laborales Verificables</CardTitle>
                <CardDescription className="text-blue-100">
                  Rutas disponibles para conectar con oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Portafolio de evidencia laboral</p>
                    <p className="text-blue-100 text-xs">
                      Disponible · Incluye habilidades técnicas, blandas, ficha de desempeño y brechas detectadas
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white border-opacity-20">
                    <p className="font-medium mb-1">Ruta 1: Conversión directa</p>
                    <p className="text-blue-100 text-xs">
                      Disponible si la empresa del reto solicita continuar el proceso
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white border-opacity-20">
                    <p className="font-medium mb-1">Ruta 2: Recomendación senior</p>
                    <p className="text-blue-100 text-xs">
                      Disponible para solicitar evaluación del senior
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white border-opacity-20">
                    <p className="font-medium mb-1">Ruta 3: Fast-track vía ATS/Buk</p>
                    <p className="text-blue-100 text-xs">
                      No activado · Requiere consentimiento para generar Assessment Passport
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/portfolio">Ver portafolio</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades Validadas</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="technical">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="technical">Técnicas</TabsTrigger>
                    <TabsTrigger value="soft">Blandas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="technical" className="space-y-3 mt-4">
                    {mockPortfolio.skills.technical.slice(0, 3).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} />
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="soft" className="space-y-3 mt-4">
                    {mockPortfolio.skills.soft.slice(0, 3).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} />
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
