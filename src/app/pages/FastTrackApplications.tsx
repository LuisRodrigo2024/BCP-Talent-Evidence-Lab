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
} from 'lucide-react';
import { mockJobOpportunities, mockPortfolio } from '../data/mockData';

export default function FastTrackApplications() {
  const eligibleOpportunities = mockJobOpportunities.filter((job) => job.fastTrackEligible);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Oportunidades Fast-Track</h1>
          <p className="text-gray-600">
            Activa la ruta fast-track para compartir tu evidencia con empresas compatibles vía Buk o un ATS equivalente. El Assessment Passport solo se genera si das consentimiento explícito.
          </p>
        </div>

        {/* Fast-Track Info Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">
                  Ruta Fast-Track: Postulación Acelerada con Evidencia Validada
                </h3>
                <p className="text-gray-700 mb-4">
                  Aún no tienes un Assessment Passport activo. Puedes generarlo si decides usar la
                  ruta fast-track. Esta credencial estructura tu evidencia para que pueda ser
                  enviada a Buk o un ATS equivalente bajo consentimiento. Las empresas recibirán
                  tu paquete validado con reto resuelto, desempeño técnico, evaluación conductual
                  y recomendaciones verificables.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Evidencia Pre-Validada</p>
                      <p className="text-xs text-gray-600">
                        Ya pasaste assessment técnico y conductual
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Rol Verificado</p>
                      <p className="text-xs text-gray-600">
                        Tu rol validado: {mockPortfolio.validatedRole}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Entrevista Sugerida</p>
                      <p className="text-xs text-gray-600">
                        RR.HH. recibe solicitud prioritaria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Oportunidades Elegibles</CardTitle>
              <Rocket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{eligibleOpportunities.length}</div>
              <p className="text-xs text-muted-foreground">Para tu rol validado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compatibilidad Promedio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">Basado en tu perfil</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Empresas Asociadas</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(eligibleOpportunities.map((j) => j.company)).size}
              </div>
              <p className="text-xs text-muted-foreground">Del ecosistema Credicorp</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fast-track</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">No activado</div>
              <p className="text-xs text-muted-foreground">Requiere consentimiento</p>
            </CardContent>
          </Card>
        </div>

        {/* Job Opportunities */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Oportunidades Compatibles</h2>

          <div className="space-y-4">
            {eligibleOpportunities.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        {job.companyLogo}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-100 text-green-800">
                            <Zap className="w-3 h-3 mr-1" />
                            Fast-Track
                          </Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Compatibilidad</div>
                      <div className="flex items-center gap-2">
                        <Progress value={job.matchScore} className="w-24" />
                        <span className="font-bold text-lg text-blue-600">
                          {job.matchScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Requisitos
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        Beneficios
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t bg-blue-50 -mx-6 -mb-6 px-6 py-4 rounded-b-lg">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Rocket className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-blue-900">
                            Activar Assessment Passport y solicitar revisión fast-track
                          </p>
                          <p className="text-sm text-blue-700 mb-2">
                            Al activar esta ruta, autorizas generar un Assessment Passport y
                            compartir tu portafolio, ficha de desempeño y evaluación con esta
                            empresa para este proceso
                          </p>
                          <div className="flex items-start gap-2 text-xs text-blue-600 bg-white p-2 rounded border border-blue-200">
                            <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>
                              Tus datos solo se compartirán con la empresa seleccionada y
                              bajo tu consentimiento explícito
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Generar Assessment Passport y solicitar revisión
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>¿Cómo funciona el Fast-Track?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-medium mb-2">Autorizas y Solicitas</h4>
                <p className="text-sm text-gray-600">
                  Das consentimiento explícito para compartir tu portafolio, Assessment
                  Passport y evaluación con la empresa seleccionada
                </p>
              </div>

              <div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-green-600">2</span>
                </div>
                <h4 className="font-medium mb-2">RR. HH. Recibe tu Paquete</h4>
                <p className="text-sm text-gray-600">
                  La empresa recibe tu experiencia verificable: reto resuelto, puntajes,
                  competencias y recomendaciones trazables
                </p>
              </div>

              <div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-medium mb-2">Entrevista Prioritaria</h4>
                <p className="text-sm text-gray-600">
                  RR. HH. revisa tu evidencia y decide si corresponde avanzar a entrevista
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
