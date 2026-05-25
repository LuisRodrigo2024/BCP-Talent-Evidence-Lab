import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import {
  Eye,
  Shield,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  Video,
  MessageSquare,
} from 'lucide-react';
import { mockAssessments, mockTeams } from '../data/mockData';

export default function AssessmentCenter() {
  const assessment = mockAssessments[0];
  const currentTeam = mockTeams[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Assessment Center</h1>
          <p className="text-gray-600">
            Evaluación técnica y de competencias blandas en vivo
          </p>
        </div>

        {/* Status Banner */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">
                  Fase de Assessment: Evaluación en Vivo
                </h3>
                <p className="text-gray-700 mb-4">
                  Durante el Assessment Center, afinas tu solución con retroalimentación
                  especializada mientras eres evaluado en tiempo real. El validador técnico
                  senior observa tu desempeño técnico y RR. HH. evalúa tus competencias
                  blandas: comunicación, liderazgo, colaboración y manejo de presión.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Evaluación Técnica Senior</p>
                      <p className="text-xs text-gray-600">
                        Calidad de código, arquitectura, optimización y resolución
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Observación de RR.HH.</p>
                      <p className="text-xs text-gray-600">
                        Liderazgo, comunicación, trabajo en equipo y adaptabilidad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Live Session */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Sesión en Vivo</CardTitle>
                    <CardDescription>Assessment Center del {currentTeam.name}</CardDescription>
                  </div>
                  <Badge className="bg-red-100 text-red-800 animate-pulse">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                    En Vivo
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-400">Sesión de Assessment en Vivo</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Tiempo Restante</p>
                      <p className="text-sm text-gray-600">45 minutos de 90 minutos</p>
                    </div>
                  </div>
                  <Progress value={50} className="w-32" />
                </div>
              </CardContent>
            </Card>

            {/* Evaluators Present */}
            <Card>
              <CardHeader>
                <CardTitle>Evaluadores Presentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{currentTeam.seniorValidator}</p>
                      <p className="text-sm text-gray-600">Validador Técnico Senior</p>
                    </div>
                    <Badge variant="outline" className="bg-white">
                      Evaluando
                    </Badge>
                  </div>

                  {currentTeam.hrObserver && (
                    <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{currentTeam.hrObserver}</p>
                        <p className="text-sm text-gray-600">Observador RR.HH.</p>
                      </div>
                      <Badge variant="outline" className="bg-white">
                        Observando
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white">
                      👔
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Representante de BCP</p>
                      <p className="text-sm text-gray-600">Empresa Solicitante del Reto</p>
                    </div>
                    <Badge variant="outline">Observando</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Comentarios en Tiempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
                        <p className="font-medium text-sm text-blue-900 mb-1">
                          Rodrigo Santillán
                        </p>
                        <p className="text-sm text-blue-800">
                          Excelente optimización del query. La lógica de agregación está bien
                          pensada.
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Hace 5 minutos</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-600">
                        <p className="font-medium text-sm text-purple-900 mb-1">
                          Isabel Ramírez
                        </p>
                        <p className="text-sm text-purple-800">
                          Buena comunicación al explicar tu enfoque. Mantén esa claridad.
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Hace 8 minutos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Current Scores */}
            <Card>
              <CardHeader>
                <CardTitle>Evaluación en Progreso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Desempeño Técnico</span>
                  </div>
                  <Progress value={85} className="mb-1" />
                  <p className="text-xs text-gray-600">Evaluación en curso...</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium">Competencias Blandas</span>
                  </div>
                  <Progress value={88} className="mb-1" />
                  <p className="text-xs text-gray-600">Observación en curso...</p>
                </div>
              </CardContent>
            </Card>

            {/* Competencies Being Observed */}
            <Card>
              <CardHeader>
                <CardTitle>Competencias Observadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Liderazgo', icon: '👑' },
                    { name: 'Comunicación', icon: '💬' },
                    { name: 'Trabajo en Equipo', icon: '🤝' },
                    { name: 'Manejo de Presión', icon: '⚡' },
                    { name: 'Adaptabilidad', icon: '🔄' },
                    { name: 'Pensamiento Analítico', icon: '🧠' },
                  ].map((competency) => (
                    <div key={competency.name} className="flex items-center gap-3">
                      <span className="text-2xl">{competency.icon}</span>
                      <span className="text-sm font-medium flex-1">{competency.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardHeader>
                <CardTitle>Después del Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Recibirás validación técnica final</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Evaluación de competencias blandas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Portafolio de evidencia laboral actualizado</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Ficha de desempeño individual generada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Posibilidad de solicitar evaluación para recomendación senior</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Assessment Passport solo si activas fast-track vía Buk/ATS</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Previous Assessment Results */}
        {assessment && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Resultado de Assessment Anterior</CardTitle>
              <CardDescription>
                Reto: {mockTeams.find((t) => t.challengeId === assessment.challengeId)?.challengeTitle || 'Optimización de Dashboard de Ventas'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Evaluación Técnica: {assessment.technicalScore}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">{assessment.technicalFeedback}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Competencias Blandas: {assessment.softSkillsScore}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {assessment.softSkillsFeedback}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
