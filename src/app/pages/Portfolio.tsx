import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Award,
  Download,
  Share2,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Quote,
  Calendar,
  Building2,
} from 'lucide-react';
import { mockPortfolio, mockAssessments } from '../data/mockData';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Mi Portafolio de Experiencia Verificable</h1>
              <p className="text-gray-600">{mockPortfolio.studentName}</p>
              <p className="text-sm text-gray-500">{mockPortfolio.studentEmail}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Share2 className="mr-2 w-4 h-4" />
                Compartir
              </Button>
              <Button>
                <Download className="mr-2 w-4 h-4" />
                Descargar PDF
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-blue-600 text-white">
              Rol Validado: {mockPortfolio.validatedRole}
            </Badge>
            <Badge variant="outline">
              {mockPortfolio.completedChallenges.length} Retos Completados
            </Badge>
          </div>
        </div>

        {/* Portafolio de Evidencia Laboral Card */}
        <Card className="mb-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">Portafolio de Evidencia Laboral</CardTitle>
                <CardDescription className="text-blue-100">
                  Evidencia verificable generada a partir de retos reales, evaluación técnica senior y observación de RR. HH.
                </CardDescription>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FileCheck className="w-8 h-8" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-blue-100 mb-1">ID de Portafolio</p>
                <p className="font-mono font-bold text-lg">
                  TEL-PORT-2026-001-MGO
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-100 mb-1">Rol Validado</p>
                <p className="font-medium">{mockPortfolio.validatedRole}</p>
              </div>
              <div>
                <p className="text-sm text-blue-100 mb-1">Estado</p>
                <p className="font-medium">Finalista evaluada</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-100 mb-1">Experiencia Aplicada</p>
                <p className="font-medium">Solución enviada a empresa</p>
              </div>
              <div>
                <p className="text-sm text-blue-100 mb-1">Fast-track</p>
                <p className="font-medium">No activado</p>
              </div>
            </div>
            <div className="pt-4 border-t border-white border-opacity-20">
              <p className="text-sm text-blue-100">
                Este portafolio es el entregable base del programa. El Assessment Passport solo se genera si decides activar la ruta fast-track vía Buk o ATS.
              </p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="challenges">Retos superados / experiencias aplicadas</TabsTrigger>
            <TabsTrigger value="assessments">Evaluaciones por reto</TabsTrigger>
            <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-blue-900">
                <strong>Consolidado acumulado del portafolio:</strong> Basado en {mockPortfolio.completedChallenges.length} retos superados y {mockAssessments.length} evaluaciones de Assessment Center.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Habilidades Técnicas</CardTitle>
                  <CardDescription>Validadas por especialistas senior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockPortfolio.skills.technical.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.validated && (
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Competencias Blandas</CardTitle>
                  <CardDescription>Observadas por RR.HH. en Assessment Center</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockPortfolio.skills.soft.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.validated && (
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges">
            <div className="space-y-4">
              {mockPortfolio.completedChallenges.map((challenge) => (
                <Card key={challenge.challengeId} className={challenge.isLatestEligibleChallenge ? 'border-2 border-blue-500' : ''}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          {challenge.isLatestEligibleChallenge && (
                            <>
                              <Badge className="bg-green-600 text-white">
                                Último reto superado
                              </Badge>
                              <Badge className="bg-blue-600 text-white">
                                Rutas laborales disponibles
                              </Badge>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-600">
                            Empresa: {challenge.company}
                          </span>
                        </div>
                        <CardTitle className="mb-2">Reto: {challenge.challengeTitle}</CardTitle>
                        <p className="text-sm text-gray-600">
                          <strong>Rol desempeñado:</strong> {challenge.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{challenge.date}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Estado</p>
                          <p className="text-gray-600">
                            {challenge.resultStatus === 'finalist' ? 'Finalista evaluado' : 'Solución enviada a empresa'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Resultado</p>
                          <p className="text-gray-600">{challenge.resultLabel}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Evidencia generada:</p>
                        <ul className="space-y-1">
                          <li className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{challenge.solutionSentToCompany ? 'Entregable validado' : 'Primer entregable validado'}</span>
                          </li>
                          <li className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>Evaluación técnica senior</span>
                          </li>
                          <li className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>Observación de RR. HH.</span>
                          </li>
                          <li className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>Ficha de desempeño</span>
                          </li>
                          {challenge.solutionSentToCompany && (
                            <>
                              <li className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <span>Portafolio actualizado</span>
                              </li>
                              <li className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <span>Registro de experiencia aplicada verificable</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-sm font-medium text-gray-700 mb-2">Rutas laborales:</p>
                        <Badge variant={challenge.routesActive ? 'default' : 'secondary'} className={challenge.routesActive ? 'bg-green-600' : ''}>
                          {challenge.routesActive ? 'Activas' : 'Histórico / no activo para nuevas solicitudes'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assessments Tab */}
          <TabsContent value="assessments">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-blue-900">
                Cada evaluación corresponde a un Assessment Center asociado a un reto superado. Los puntajes no son un promedio general: reflejan el desempeño observado en un reto específico.
              </p>
            </div>

            <div className="space-y-4">
              {mockAssessments.map((assessment) => {
                const challenge = mockPortfolio.completedChallenges.find(
                  (c) => c.challengeId === assessment.challengeId
                );
                if (!challenge) return null;

                return (
                  <Card key={assessment.id} className={challenge.isLatestEligibleChallenge ? 'border-2 border-blue-500' : ''}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {challenge.isLatestEligibleChallenge && (
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              <Badge className="bg-green-600 text-white">
                                Último reto superado
                              </Badge>
                              <Badge className="bg-blue-600 text-white">
                                Rutas laborales activas
                              </Badge>
                              {challenge.solutionSentToCompany && (
                                <Badge className="bg-purple-600 text-white">
                                  Solución enviada a empresa
                                </Badge>
                              )}
                            </div>
                          )}
                          <CardTitle className="mb-2">
                            {challenge.challengeTitle}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {challenge.company}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {challenge.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            <strong>Resultado:</strong> {challenge.resultLabel}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Estado:</strong> {challenge.isLatestEligibleChallenge ? 'Último reto superado · Rutas laborales activas' : 'Histórico'}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Evaluación técnica</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {assessment.technicalScore} <span className="text-sm text-gray-500">/ 100</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Competencias blandas observadas</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {assessment.softSkillsScore} <span className="text-sm text-gray-500">/ 100</span>
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Validador técnico:</p>
                          <p className="font-medium">{assessment.validator}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Observador RR. HH.:</p>
                          <p className="font-medium">{assessment.hrObserver}</p>
                        </div>
                      </div>

                      <details className="mt-4">
                        <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
                          Ver detalle de evaluación
                        </summary>

                        <div className="mt-4 space-y-6">
                          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                                <p className="font-medium">Evaluación técnica</p>
                              </div>
                              <div className="flex items-center gap-3 mb-3">
                                <Progress value={assessment.technicalScore} className="flex-1" />
                                <span className="font-bold text-xl">{assessment.technicalScore}</span>
                              </div>
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-900">{assessment.technicalFeedback}</p>
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-purple-600" />
                                <p className="font-medium">Competencias blandas observadas</p>
                              </div>
                              <div className="flex items-center gap-3 mb-3">
                                <Progress value={assessment.softSkillsScore} className="flex-1" />
                                <span className="font-bold text-xl">{assessment.softSkillsScore}</span>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-sm text-purple-900">
                                  {assessment.softSkillsFeedback}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <h4 className="font-medium mb-4">Competencias observadas en detalle</h4>
                            <div className="space-y-4">
                              {assessment.competencies.map((competency) => (
                                <div key={competency.name}>
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium">{competency.name}</span>
                                    <span className="text-sm text-gray-600">{competency.score}%</span>
                                  </div>
                                  <Progress value={competency.score} className="mb-2" />
                                  <p className="text-sm text-gray-600 italic">
                                    {competency.observations}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </details>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations">
            <div className="space-y-6">
              {mockPortfolio.recommendations.map((rec, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                        <Quote className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{rec.from}</CardTitle>
                        <CardDescription>
                          {rec.role} en {rec.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {rec.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-700 italic">&ldquo;{rec.text}&rdquo;</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">
                        Recomendación verificable y trazable
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <Card className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl">Oportunidades Laborales</CardTitle>
            <CardDescription className="text-blue-100">
              Tu último reto superado genera 3 rutas verificables de salida laboral
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
              <Link to="/oportunidades">Ver oportunidades generadas por mi último reto</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
