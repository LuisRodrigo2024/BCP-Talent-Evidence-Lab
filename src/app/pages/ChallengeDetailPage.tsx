import { useParams, Link, useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import {
  ArrowLeft,
  Target,
  Clock,
  Users,
  CheckCircle2,
  Building2,
  Lock,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { mockChallenges, mockPortfolio, type Challenge } from '../data/mockData';

export default function ChallengeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = mockChallenges.find((c) => c.id === id);

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Card className="p-12">
            <div className="text-center">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Reto no encontrado</h3>
              <Button asChild className="mt-4">
                <Link to="/challenges">Volver a Retos</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'Básico':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
    }
  };

  const hasActiveChallenge = mockPortfolio.activeChallenge !== undefined;
  const canApply = challenge.teams < challenge.maxTeams && challenge.status === 'open' && !hasActiveChallenge;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate('/challenges')} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Volver a Retos
        </Button>

        {/* Active Challenge Banner */}
        {hasActiveChallenge && mockPortfolio.activeChallenge && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-orange-900 mb-2">Ya tienes un reto activo</h3>
                  <p className="text-sm text-orange-800 mb-3">
                    Actualmente estás participando en:{' '}
                    <strong>
                      {mockPortfolio.activeChallenge.challengeTitle} — {mockPortfolio.activeChallenge.company}
                    </strong>
                  </p>
                  <p className="text-sm text-orange-800">
                    Para mantener la calidad del trabajo en célula, no puedes postular a otro reto hasta finalizar o retirarte del reto actual.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Header Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-3xl">
                  {challenge.companyLogo}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{challenge.company}</p>
                  <p className="text-sm text-gray-500">{challenge.area}</p>
                </div>
              </div>
              <Badge className={getDifficultyColor(challenge.difficulty)}>
                {challenge.difficulty}
              </Badge>
            </div>

            <CardTitle className="text-3xl mb-2">{challenge.title}</CardTitle>
            <CardDescription className="text-base">{challenge.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duración</p>
                  <p className="font-medium">{challenge.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Equipos</p>
                  <p className="font-medium">
                    {challenge.teams}/{challenge.maxTeams}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fase Actual</p>
                  <p className="font-medium capitalize">{challenge.phase}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Origen</p>
                  <p className="font-medium">Credicorp</p>
                </div>
              </div>
            </div>

            {canApply && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-blue-900 mb-1">
                      ✅ Este reto está abierto para postulaciones
                    </p>
                    <p className="text-sm text-blue-700">
                      Quedan {challenge.maxTeams - challenge.teams} cupos disponibles
                    </p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Postular Ahora</Button>
                </div>
              </div>
            )}

            {!canApply && hasActiveChallenge && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="font-medium text-orange-900 mb-1">
                  Postulación bloqueada temporalmente
                </p>
                <p className="text-sm text-orange-700">
                  No puedes participar en dos retos simultáneamente. Finaliza tu reto actual para poder postular a este.
                </p>
              </div>
            )}

            {!canApply && !hasActiveChallenge && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-700">
                  Este reto está en progreso o ha alcanzado el máximo de equipos
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Objectives */}
            <Card>
              <CardHeader>
                <CardTitle>Objetivos del Reto</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenge.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requisitos y Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenge.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  <CardTitle className="text-red-900">Entorno Seguro de Trabajo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-red-800">
                <p className="mb-3">
                  Trabajarás en un entorno virtual seguro (Azure Virtual Desktop o Citrix)
                  donde:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>El entorno restringe descargas, copiado y transferencia de información fuera del sistema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Toda actividad queda registrada en logs de auditoría</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Trabajas con datos anonimizados o sintéticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Watermark dinámico con tu usuario y sesión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {challenge.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What You'll Get */}
            <Card>
              <CardHeader>
                <CardTitle>Qué Recibirás</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Validación técnica de especialista senior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Evaluación de competencias blandas por RR. HH.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Portafolio de evidencia laboral actualizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Posibilidad de solicitar evaluación para recomendación senior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Opción de activar ruta fast-track bajo consentimiento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Workflow */}
            <Card>
              <CardHeader>
                <CardTitle>Proceso de Trabajo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <p className="font-medium text-sm">Preselección</p>
                    </div>
                    <p className="text-xs text-gray-600 ml-8">
                      Formación de célula y propuesta inicial
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p className="font-medium text-sm">Selección</p>
                    </div>
                    <p className="text-xs text-gray-600 ml-8">
                      Capacitaciones y mejora de solución
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p className="font-medium text-sm">Assessment Center</p>
                    </div>
                    <p className="text-xs text-gray-600 ml-8">
                      Evaluación en vivo por senior + RR.HH.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <p className="font-medium text-sm">Validación Final</p>
                    </div>
                    <p className="text-xs text-gray-600 ml-8">
                      Evidencia laboral y rutas de salida
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {canApply && (
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <CardHeader>
                  <CardTitle>¿Listo para el reto?</CardTitle>
                  <CardDescription className="text-blue-100">
                    Demuestra tu talento en un problema real
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Postular a Este Reto
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
