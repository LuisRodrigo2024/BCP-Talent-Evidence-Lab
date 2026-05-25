import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Building2,
  Plus,
  Users,
  TrendingUp,
  CheckCircle2,
  Clock,
  Eye,
  Target,
} from 'lucide-react';
import { mockChallenges } from '../data/mockData';

export default function CompanyDashboard() {
  const myCompanyChallenges = mockChallenges.filter((c) => c.company === 'BCP');
  const activeChallenges = myCompanyChallenges.filter((c) => c.status !== 'completed');
  const completedChallenges = myCompanyChallenges.filter((c) => c.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard de Empresa</h1>
              <p className="text-gray-600">BCP - Banco de Crédito del Perú</p>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Publicar Nuevo Reto
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Retos Publicados</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myCompanyChallenges.length}</div>
              <p className="text-xs text-muted-foreground">
                {activeChallenges.length} activos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipos Trabajando</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {myCompanyChallenges.reduce((sum, c) => sum + c.teams, 0)}
              </div>
              <p className="text-xs text-muted-foreground">En diferentes fases</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Soluciones Validadas</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedChallenges.length}</div>
              <p className="text-xs text-muted-foreground">Listas para implementar</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Talento Observado</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Estudiantes evaluados</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Retos Activos</TabsTrigger>
            <TabsTrigger value="teams">Equipos en Progreso</TabsTrigger>
            <TabsTrigger value="completed">Soluciones Completadas</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeChallenges.map((challenge) => (
              <Card key={challenge.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">
                          {challenge.area}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {challenge.description}
                      </CardDescription>
                    </div>
                    <Badge
                      className={
                        challenge.phase === 'assessment'
                          ? 'bg-purple-100 text-purple-800'
                          : challenge.phase === 'selección'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }
                    >
                      {challenge.phase}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Equipos</p>
                      <p className="font-medium">
                        {challenge.teams}/{challenge.maxTeams}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Duración</p>
                      <p className="font-medium">{challenge.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Dificultad</p>
                      <Badge>{challenge.difficulty}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Estado</p>
                      <p className="font-medium capitalize">{challenge.status}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Equipos
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Progreso
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="teams">
            <Card>
              <CardHeader>
                <CardTitle>Equipos Trabajando en Retos de BCP</CardTitle>
                <CardDescription>
                  Monitorea el progreso de los equipos y observa el talento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockChallenges
                    .filter((c) => c.company === 'BCP' && c.teams > 0)
                    .map((challenge) => (
                      <div key={challenge.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{challenge.title}</h4>
                            <p className="text-sm text-gray-600">
                              {challenge.teams} {challenge.teams === 1 ? 'equipo' : 'equipos'}{' '}
                              trabajando
                            </p>
                          </div>
                          <Badge className="capitalize">{challenge.phase}</Badge>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Observar Talento
                          </Button>
                          <Button variant="outline" size="sm">
                            Ver Entregables
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Soluciones Validadas</CardTitle>
                <CardDescription>
                  Retos completados con soluciones listas para implementar
                </CardDescription>
              </CardHeader>
              <CardContent>
                {completedChallenges.length === 0 ? (
                  <div className="text-center py-12">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      No hay soluciones completadas aún
                    </h3>
                    <p className="text-gray-600">
                      Los equipos están trabajando en los retos activos
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {completedChallenges.map((challenge) => (
                      <div key={challenge.id} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">{challenge.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                        <div className="flex gap-2">
                          <Button size="sm">Ver Solución</Button>
                          <Button variant="outline" size="sm">
                            Descargar Documentación
                          </Button>
                          <Button variant="outline" size="sm">
                            Contactar Equipo
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Info Card */}
        <Card className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl">
              Beneficios de Publicar Retos en Cela AIpa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">🎯 Soluciones Reales</h4>
                <p className="text-sm text-blue-100">
                  Recibe exploraciones de soluciones validadas por especialistas senior
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">👁️ Observa Talento</h4>
                <p className="text-sm text-blue-100">
                  Ve trabajar a estudiantes en problemas reales antes de contratarlos
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">🔒 Seguridad Garantizada</h4>
                <p className="text-sm text-blue-100">
                  Entornos VDI seguros protegen tu información empresarial
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
