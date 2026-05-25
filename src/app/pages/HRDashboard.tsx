import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Users,
  Eye,
  Award,
  TrendingUp,
  Calendar,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { mockTeams, mockAssessments, mockPortfolio } from '../data/mockData';

export default function HRDashboard() {
  const assessment = mockAssessments[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard de RR. HH.</h1>
          <p className="text-gray-600">Isabel Ramírez - HR Manager</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipos Observados</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockTeams.length}</div>
              <p className="text-xs text-muted-foreground">En diferentes fases</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assessments Completados</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAssessments.length}</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Talento Destacado</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Score &gt; 85 en soft skills</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assessment Centers</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Próximos 7 días</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="assessments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="assessments">Assessment Centers</TabsTrigger>
            <TabsTrigger value="talent">Talento Observado</TabsTrigger>
            <TabsTrigger value="briefs">Briefs y Fast-track</TabsTrigger>
          </TabsList>

          <TabsContent value="assessments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Próximos Assessment Centers</CardTitle>
                <CardDescription>
                  Sesiones de observación de competencias blandas programadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-purple-50 border-purple-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium">
                          Equipo Alpha - Dashboard de Análisis de Cliente
                        </h4>
                        <p className="text-sm text-gray-600">
                          Assessment Center en Vivo - Observación de Soft Skills
                        </p>
                      </div>
                      <Badge className="bg-purple-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        26 May, 10:00 AM
                      </Badge>
                    </div>

                    <div className="bg-white p-3 rounded-lg mb-3 border">
                      <p className="text-sm mb-2">
                        <strong>Competencias a Observar:</strong>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Liderazgo',
                          'Comunicación',
                          'Trabajo en Equipo',
                          'Manejo de Presión',
                          'Adaptabilidad',
                          'Toma de Decisiones',
                        ].map((comp) => (
                          <Badge key={comp} variant="outline" className="text-xs">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Eye className="w-4 h-4 mr-2" />
                        Preparar Observación
                      </Button>
                      <Button variant="outline">Ver Equipo</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">
                          Equipo Beta - Automatización de Aprobación
                        </h4>
                        <p className="text-sm text-gray-600">Por confirmar</p>
                      </div>
                      <Badge variant="outline">Próximamente</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Completado Recientemente</CardTitle>
                <CardDescription>
                  Última observación de competencias blandas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium mb-1">María González</h4>
                      <p className="text-sm text-gray-600">
                        Reto: Optimización de Dashboard de Ventas
                      </p>
                      <p className="text-sm text-gray-600">Fecha: {assessment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Score Soft Skills</p>
                      <div className="flex items-center gap-2">
                        <Progress value={assessment.softSkillsScore} className="w-24" />
                        <span className="font-bold text-xl text-purple-600">
                          {assessment.softSkillsScore}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h5 className="font-medium mb-3">Competencias Observadas</h5>
                    <div className="space-y-3">
                      {assessment.competencies.map((comp) => (
                        <div key={comp.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{comp.name}</span>
                            <span className="text-sm text-gray-600">{comp.score}%</span>
                          </div>
                          <Progress value={comp.score} className="mb-1" />
                          <p className="text-xs text-gray-600 italic">{comp.observations}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-sm font-medium text-purple-900 mb-2">
                      Tu Feedback General:
                    </p>
                    <p className="text-sm text-purple-800">{assessment.softSkillsFeedback}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="talent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Talento Destacado por Competencias Blandas</CardTitle>
                <CardDescription>
                  Estudiantes con alto desempeño en soft skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                          👩‍💼
                        </div>
                        <div>
                          <h4 className="font-medium">{mockPortfolio.studentName}</h4>
                          <p className="text-sm text-gray-600">
                            {mockPortfolio.validatedRole}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Score: {assessment.softSkillsScore}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium">Competencias Destacadas:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {mockPortfolio.skills.soft.slice(0, 4).map((skill) => (
                          <div key={skill.name} className="text-sm">
                            <div className="flex items-center justify-between mb-1">
                              <span>{skill.name}</span>
                              <span className="text-gray-600">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-1.5" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Ver Portafolio Completo
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contactar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="briefs">
            <Card>
              <CardHeader>
                <CardTitle>Briefs de Talento y Solicitudes Fast-track</CardTitle>
                <CardDescription>
                  Resumen ejecutivo para reclutadores basado en evidencia técnica, observación conductual y consentimiento del candidato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPortfolio.recommendations
                    .filter((rec) => rec.from === 'Isabel Ramírez')
                    .map((rec, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{mockPortfolio.studentName}</h4>
                            <p className="text-sm text-gray-600">
                              Fecha: {rec.date}
                            </p>
                          </div>
                          <Badge className="bg-purple-100 text-purple-800">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Verificable
                          </Badge>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                          <p className="text-sm text-gray-700 italic">
                            &ldquo;{rec.text}&rdquo;
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Info Card */}
        <Card className="mt-8 bg-gradient-to-br from-purple-600 to-purple-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl">Tu Rol en el Assessment Center</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">👁️ Observación de Soft Skills</h4>
                <p className="text-sm text-purple-100">
                  Evalúas liderazgo, comunicación, trabajo en equipo, manejo de presión y
                  adaptabilidad durante la sesión en vivo
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">📋 Generación de Evidencia</h4>
                <p className="text-sm text-purple-100">
                  Tus observaciones se convierten en evidencia laboral verificable para los
                  estudiantes
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">✅ Recomendaciones Trazables</h4>
                <p className="text-sm text-purple-100">
                  Emites recomendaciones respaldadas por evidencia observable, no impresiones
                  subjetivas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
