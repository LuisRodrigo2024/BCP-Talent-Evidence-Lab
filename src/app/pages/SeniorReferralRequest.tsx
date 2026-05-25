import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Checkbox } from '../components/ui/checkbox';
import {
  Shield,
  Award,
  FileCheck,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { mockPortfolio, mockTeams } from '../data/mockData';

export default function SeniorReferralRequest() {
  const currentTeam = mockTeams[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Solicitud de Evaluación para Recomendación Senior</h1>
          <p className="text-gray-600">
            Esta ruta permite manifestar interés en ser recomendado por el especialista técnico senior. La recomendación no es automática: el senior revisa tu evidencia y decide si puede respaldarte profesionalmente.
          </p>
        </div>

        {/* Senior Asignado */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Especialista Técnico Senior Asignado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{currentTeam.seniorValidator}</h3>
                <p className="text-sm text-gray-600 mb-2">Senior Data Architect</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><strong>Reto evaluado:</strong> Dashboard de Análisis de Comportamiento de Cliente</p>
                  <p><strong>Relación con tu evidencia:</strong> Validó entregables y observó desempeño técnico</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evidencia que se compartirá */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-green-600" />
              Evidencia que se Compartirá con el Senior
            </CardTitle>
            <CardDescription>
              El senior tendrá acceso a la siguiente información para evaluar tu solicitud
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                'Portafolio de habilidades técnicas y blandas',
                'Ficha de desempeño individual',
                'Rol desempeñado dentro de la célula',
                'Entregable del reto',
                'Brechas detectadas',
                'Registro de experiencia aplicada (si la solución fue enviada a empresa)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-900">
                  <strong>Nota:</strong> No se genera Assessment Passport para esta ruta. Esta solicitud usa el portafolio y la ficha de desempeño como evidencia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferencias */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600" />
              Preferencia del Participante
            </CardTitle>
            <CardDescription>
              Indica el tipo de oportunidades que te interesan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Rol objetivo
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                defaultValue={mockPortfolio.validatedRole}
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                Tipo de empresas de interés
              </label>
              <div className="space-y-2">
                {[
                  'MYPEs',
                  'Empresas de analítica / datos',
                  'Empresas financieras',
                  'Startups / tecnología',
                  'Empresas de la red del senior',
                ].map((type, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Checkbox id={`type-${idx}`} />
                    <label htmlFor={`type-${idx}`} className="text-sm cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mensaje opcional al senior
              </label>
              <textarea
                className="w-full p-3 border rounded-lg"
                rows={4}
                placeholder="Me gustaría ser considerado para oportunidades donde pueda aportar en análisis de datos, visualización y comunicación de hallazgos."
              />
            </div>
          </CardContent>
        </Card>

        {/* Botón principal */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Confirmar Solicitud de Evaluación</h3>
                <p className="text-sm text-gray-700 mb-4">
                  El senior recibirá una notificación con tu evidencia y podrá decidir entre:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    Recomendar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    Recomendar con condiciones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    Solicitar mejoras
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    No recomendar por ahora
                  </li>
                </ul>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Manifestar interés y notificar al senior
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
