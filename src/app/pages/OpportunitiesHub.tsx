import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import {
  Rocket,
  Building2,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Zap,
  Shield,
  FileCheck,
  Award,
  UserCheck,
} from 'lucide-react';
import { mockJobOpportunities, mockPortfolio } from '../data/mockData';

export default function OpportunitiesHub() {
  const eligibleOpportunities = mockJobOpportunities.filter((job) => job.fastTrackEligible);
  const latestChallenge = mockPortfolio.completedChallenges.find((c) => c.isLatestEligibleChallenge);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Oportunidades generadas por tu último reto superado</h1>
          <p className="text-gray-600">
            Estas rutas se generan a partir del último reto que superaste en Cela AIpa. No dependen solo del CV, sino de evidencia real de desempeño.
          </p>
        </div>

        {/* Latest Challenge Card */}
        {latestChallenge && (
          <Card className="mb-8 border-2 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" />
                Último Reto Superado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Reto</p>
                  <p className="font-medium">{latestChallenge.challengeTitle}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Empresa del reto</p>
                  <p className="font-medium">{latestChallenge.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estado</p>
                  <p className="font-medium">{latestChallenge.resultLabel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rol validado</p>
                  <p className="font-medium">{latestChallenge.role}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-medium text-gray-700 mb-2">Evidencia disponible:</p>
                <div className="grid md:grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm text-gray-600">• Portafolio de habilidades técnicas y blandas</p>
                  <p className="text-sm text-gray-600">• Ficha de desempeño</p>
                  <p className="text-sm text-gray-600">• Registro de experiencia aplicada</p>
                  <p className="text-sm text-gray-600">• Evaluación senior</p>
                  <p className="text-sm text-gray-600">• Observación de RR. HH.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 3 Routes */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Las 3 Rutas Verificables</h2>

          {/* Ruta 1: Conversión directa */}
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-green-600" />
                    Ruta 1: Conversión directa con {latestChallenge?.company || 'BCP'}
                  </CardTitle>
                  <CardDescription>
                    {latestChallenge?.company || 'BCP'} ya observó tu desempeño resolviendo un problema real de su organización. Si el área solicitante identifica ajuste con una vacante, puede considerarte para práctica, trainee, entrevista o contacto directo.
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 whitespace-nowrap">
                  Disponible por solución enviada a empresa
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Evidencia usada:</p>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Reto resuelto</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Entregable validado</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Desempeño observado</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Feedback técnico senior</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Observación de RR. HH.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <p className="text-sm text-green-900">
                  <strong>Nota importante:</strong> {latestChallenge?.company || 'BCP'} puede considerarte con evidencia previa. No se garantiza contratación, pero tienes ventaja por haber resuelto un problema real de la empresa.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Ver estado con empresa del reto
              </Button>
            </CardContent>
          </Card>

          {/* Ruta 2: Recomendación senior */}
          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Award className="w-6 h-6 text-purple-600" />
                    Ruta 2: Recomendación técnica senior
                  </CardTitle>
                  <CardDescription>
                    Puedes manifestar interés en ser recomendado por el especialista técnico senior. El senior recibirá tu portafolio, ficha de desempeño y registro de experiencia aplicada, y decidirá si puede recomendarte ante empresas de su red profesional, MYPEs o empresas que le soliciten perfiles compatibles.
                  </CardDescription>
                </div>
                <Badge variant="outline">No solicitada</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Evidencia usada:</p>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Portafolio de habilidades técnicas y blandas</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Ficha de desempeño individual</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Rol desempeñado en la célula</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Entregable validado</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Brechas detectadas</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Registro de experiencia aplicada</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                <p className="text-sm text-purple-900">
                  <strong>Nota importante:</strong> La recomendación no es automática. El senior puede recomendar, recomendar con condiciones, solicitar mejoras o no recomendar por ahora.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/senior-referral">Solicitar evaluación para recomendación senior</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Ruta 3: Fast-track */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-blue-600" />
                    Ruta 3: Fast-track vía Buk/ATS
                  </CardTitle>
                  <CardDescription>
                    Puedes activar una postulación fast-track con empresas compatibles. Para esta ruta sí se genera un Assessment Passport bajo consentimiento, porque la evidencia debe viajar de forma estructurada hacia Buk o un ATS equivalente.
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  No activado
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Evidencia usada:</p>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Assessment Passport</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Rol validado</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Portafolio</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Ficha de desempeño</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Consentimiento explícito</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="text-sm text-blue-900 mb-3">
                  <strong>Al activar esta ruta:</strong> Autorizas generar un Assessment Passport y compartir tu evidencia con empresas compatibles vía Buk o ATS.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Activar Assessment Passport y ver vacantes compatibles
                </Button>
              </div>

              {/* Vacantes Fast-track (shown only when route is conceptually active) */}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
                  Vista previa de vacantes compatibles ({eligibleOpportunities.length})
                </summary>
                <div className="mt-4 space-y-4">
                  {eligibleOpportunities.slice(0, 3).map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 bg-white">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                            {job.companyLogo}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{job.title}</h4>
                            <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3 h-3" />
                                {job.company}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600 mb-1">Compatibilidad</div>
                          <div className="flex items-center gap-2">
                            <Progress value={job.matchScore} className="w-16 h-2" />
                            <span className="font-bold text-sm text-blue-600">
                              {job.matchScore}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl">¿Por qué 3 rutas independientes?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Ruta 1: Conversión directa</h4>
                <p className="text-sm text-blue-100">
                  La empresa del reto ya te conoce por tu trabajo real. Si hay vacante compatible, tienes ventaja.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Ruta 2: Recomendación senior</h4>
                <p className="text-sm text-blue-100">
                  El especialista senior puede recomendarte en su red profesional, MYPEs o empresas que le consulten.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Ruta 3: Fast-track vía ATS</h4>
                <p className="text-sm text-blue-100">
                  Tu evidencia viaja estructurada a Buk/ATS bajo consentimiento para revisión prioritaria.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
