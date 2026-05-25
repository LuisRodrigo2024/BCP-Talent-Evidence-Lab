Sí. Con el último ajuste, el prototipo necesita correcciones estructurales, no solo quirúrgicas. El problema central es que ahora el producto está demasiado sesgado a que el Assessment Passport existe siempre, cuando en realidad debe existir solo si el usuario activa la Ruta 3: Fast-track vía Buk/ATS.

La arquitectura correcta debe ser:

Portafolio de evidencia laboral = entregable base.
Registro de experiencia aplicada = si la solución fue enviada a empresa.
Solicitud de recomendación senior = Ruta 2 activable por el usuario.
Assessment Passport = credencial opcional para Ruta 3 fast-track.

Corrección estructural principal
Cambiar la jerarquía de salidas

Actualmente el prototipo está diciendo, en varias pantallas:

“Portafolio + Assessment Passport”

Eso debe cambiarse porque comunica que todos reciben automáticamente el Assessment Passport.

Debe quedar así:

Antes	Después
Portafolio + Assessment Passport	Portafolio de evidencia laboral
ID de Passport	ID de portafolio / ID de evidencia
Passport activo	Fast-track no activado / Fast-track disponible
Ver Passport completo	Ver portafolio completo
Assessment Passport actualizado	Portafolio actualizado
Rutas Fast-Track	Rutas verificables de salida laboral

El Assessment Passport debe aparecer solo dentro de la página o flujo de Fast-track vía Buk/ATS.

1. Home.tsx
Corrección 1: Hero principal
Ubicación aproximada

Home.tsx, líneas 39–47.

Texto actual problemático

“Al finalizar, reciben un portafolio de habilidades técnicas y blandas, experiencia verificable basada en reto real, un Assessment Passport y rutas trazables…”

Reemplazar por

BCP Talent Evidence Lab convierte retos reales de BCP y, progresivamente, de empresas seleccionadas del grupo Credicorp en experiencias aplicadas verificables. Los estudiantes y egresados trabajan en células, resuelven problemas empresariales dentro de entornos virtuales seguros, reciben validación técnica senior en las fases de preselección, selección y Assessment Center, y durante el Assessment Center son observados por RR. HH. Al finalizar, los finalistas reciben un portafolio de habilidades técnicas y blandas, una ficha de desempeño y rutas verificables hacia oportunidades laborales. Si su solución es seleccionada para ser enviada a la empresa, obtienen además un registro de experiencia aplicada verificable. Si deciden activar la ruta fast-track, el sistema genera un Assessment Passport bajo consentimiento para conectar su evidencia con Buk o un ATS equivalente.

Corrección 2: Tarjeta “Portafolio + Assessment Passport”
Ubicación aproximada

Home.tsx, líneas 132–141.

Cambiar título

Antes:

Portafolio + Assessment Passport

Después:

Portafolio de Evidencia Laboral

Cambiar descripción

Antes:

“Recibe un portafolio completo con credencial validada…”

Después:

Recibe un portafolio con habilidades técnicas y blandas, ficha de desempeño, evidencias del reto y brechas detectadas. El Assessment Passport solo se genera si activas la ruta fast-track.

Corrección 3: Tarjeta “Rutas Fast-Track”
Ubicación aproximada

Home.tsx, líneas 145–154.

Cambiar título

Antes:

Rutas Fast-Track

Después:

Rutas Verificables de Salida Laboral

Cambiar descripción

Antes:

“Accede a oportunidades laborales mediante postulación acelerada…”

Después:

Puedes acceder a tres rutas: conversión directa con la empresa del reto, evaluación para recomendación senior y fast-track vía Buk/ATS bajo consentimiento.

Corrección 4: Fase final del proceso
Ubicación aproximada

Home.tsx, líneas 240–258.

Cambiar donde dice:

“Al finalizar, se genera tu portafolio laboral, Assessment Passport y tres rutas verificables…”

Por:

Al finalizar, los finalistas reciben un portafolio de evidencia laboral y una ficha de desempeño. Si la solución del equipo es enviada a la empresa, se registra como experiencia aplicada verificable. Luego el participante puede activar cualquiera de las tres rutas verificables: conversión directa con la empresa del reto, solicitud de evaluación para recomendación senior o fast-track vía Buk/ATS.

Badges corregidos

Reemplazar:

Assessment Passport
Rutas Fast-Track

Por:

Portafolio de Evidencia
Ficha de Desempeño
Registro de Experiencia Aplicada
3 Rutas Verificables
Corrección 5: Título de las tres rutas
Ubicación aproximada

Home.tsx, línea 270.

Antes:

Tres Rutas Trazables de Recomendación

Después:

Tres Rutas Verificables de Salida Laboral

Porque no todas son recomendaciones. La ruta 1 es conversión directa, la ruta 2 sí es recomendación senior, la ruta 3 es fast-track vía ATS.

Corrección 6: Ruta 2 en Home
Ubicación aproximada

Home.tsx, líneas 301–310.

Texto actual:

“El especialista senior emite una recomendación…”

Eso suena automático.

Reemplazar por:

El participante puede manifestar interés en ser recomendado por el especialista técnico senior. El senior recibe su portafolio, ficha de desempeño y registro de experiencia aplicada, y decide si corresponde emitir una recomendación técnica hacia empresas de su red profesional, MYPEs o empresas aliadas.

Frase inferior:

La recomendación no es automática: se solicita, se evalúa y solo se emite si el senior decide respaldarla con evidencia.

Corrección 7: Ruta 3 en Home
Ubicación aproximada

Home.tsx, líneas 320–328.

Reemplazar por:

Si el participante decide activar la ruta fast-track, el sistema genera un Assessment Passport bajo consentimiento para enviar evidencia estructurada hacia Buk o un ATS equivalente.

Frase inferior:

El Assessment Passport no reemplaza el proceso de selección; permite entrar con evidencia previa y solicitar revisión prioritaria.

2. StudentDashboard.tsx
Corrección 1: Acciones rápidas
Ubicación aproximada

StudentDashboard.tsx, líneas 309–332.

Agregar una acción nueva entre “Ver Mi Portafolio” y “Oportunidades Fast-Track”:

Botón:

Solicitar evaluación para recomendación senior

Ruta sugerida:

<Link to="/senior-referral">
  <Award className="mr-2 w-4 h-4" />
  Solicitar evaluación senior
</Link>

Esto hace visible la Ruta 2 desde el dashboard del estudiante.

Corrección 2: Tarjeta “Portafolio + Assessment Passport”
Ubicación aproximada

StudentDashboard.tsx, líneas 363–390.

Eliminar esta tarjeta como está ahora.

Reemplazar por una tarjeta titulada:

Mis salidas laborales verificables

Contenido recomendado:

Portafolio de evidencia laboral
Disponible · Incluye habilidades técnicas, blandas, ficha de desempeño y brechas detectadas.

Ruta 1: Conversión directa
Estado: Disponible si la empresa del reto solicita continuar el proceso.

Ruta 2: Recomendación senior
Estado: Disponible para solicitar evaluación del senior.

Ruta 3: Fast-track vía ATS/Buk
Estado: No activado · Requiere consentimiento para generar Assessment Passport.

Botones:

Ver portafolio
Solicitar evaluación senior
Activar fast-track
3. Portfolio.tsx

Esta página necesita la corrección más importante.

Corrección estructural

La página Portfolio.tsx no debe abrir con una tarjeta azul de Assessment Passport. Debe abrir con el Portafolio de Evidencia Laboral.

Corrección 1: Header principal
Ubicación aproximada

Portfolio.tsx, líneas 56–96.

Reemplazar toda la tarjeta actual de “Portafolio + Assessment Passport” por:

Título

Portafolio de Evidencia Laboral

Subtítulo

Evidencia verificable generada a partir de retos reales, evaluación técnica senior y observación de RR. HH.

Campos principales
ID de portafolio: TEL-PORT-2026-001-MGO
Rol validado: Data Analyst
Estado: Finalista evaluada
Experiencia aplicada: Solución enviada a empresa o Finalista con evidencia generada
Fast-track: No activado
Mensaje clave

Este portafolio es el entregable base del programa. El Assessment Passport solo se genera si decides activar la ruta fast-track vía Buk o ATS.

Corrección 2: Botones del portafolio
Ubicación aproximada

Portfolio.tsx, líneas 333–345.

Actualmente solo impulsa Fast-track.

Debe mostrar tres acciones:

[Solicitar evaluación senior]
[Activar fast-track vía ATS/Buk]
[Compartir portafolio]

Orden recomendado:

Solicitar evaluación senior
Activar fast-track
Compartir portafolio

Esto evita que la ruta Buk parezca la salida principal.

Corrección 3: Tab de recomendaciones
Ubicación aproximada

Portfolio.tsx, líneas 294–330.

Cambiar el enfoque de “recomendaciones emitidas” por estados.

Debe mostrar tres tipos:

Tipo	Estado	Descripción
Empresa del reto	Pendiente / Disponible / Emitida	Depende de si la empresa decide continuar con el participante
Senior técnico	No solicitada / En evaluación / Emitida	Se activa por solicitud del estudiante
RR. HH. / ATS	No activado / Fast-track solicitado / En revisión	Se activa con Assessment Passport

Ejemplo de texto:

Recomendación senior: No solicitada. Puedes pedir que el especialista revise tu evidencia y evalúe si corresponde recomendarte a empresas de su red.

Botón:

Solicitar evaluación para recomendación senior

4. Crear nueva página: SeniorReferralRequest.tsx

Esta es la corrección estructural más importante. La Ruta 2 necesita una pantalla propia.

Nueva ruta sugerida

En routes.tsx, agregar:

import SeniorReferralRequest from "./pages/SeniorReferralRequest";

Y en children:

{ path: "senior-referral", Component: SeniorReferralRequest },
Contenido de la nueva página
Título

Solicitud de evaluación para recomendación senior

Subtítulo

Esta ruta permite manifestar interés en ser recomendado por el especialista técnico senior. La recomendación no es automática: el senior revisa tu evidencia y decide si puede respaldarte profesionalmente.

Estructura de pantalla
Card 1: Senior asignado
Especialista técnico senior:
Rodrigo Santillán
Rol: Senior Data Architect
Reto evaluado: Dashboard de Análisis de Comportamiento de Cliente
Relación con tu evidencia: validó entregables y observó desempeño técnico.
Card 2: Evidencia que se compartirá con el senior
- Portafolio de habilidades técnicas y blandas
- Ficha de desempeño individual
- Rol desempeñado dentro de la célula
- Entregable del reto
- Brechas detectadas
- Registro de experiencia aplicada, si la solución fue enviada a empresa

Nota:

No se genera Assessment Passport para esta ruta. Esta solicitud usa el portafolio y la ficha de desempeño como evidencia.

Card 3: Preferencia del participante

Campos:

Rol objetivo:
[Data Analyst Jr.]

Tipo de empresas de interés:
[ ] MYPEs
[ ] Empresas de analítica / datos
[ ] Empresas financieras
[ ] Startups / tecnología
[ ] Empresas de la red del senior

Mensaje opcional al senior:
“Me gustaría ser considerado para oportunidades donde pueda aportar en análisis de datos, visualización y comunicación de hallazgos.”
Card 4: Botón principal

Botón:

Manifestar interés y notificar al senior

Texto inferior:

El senior recibirá una notificación con tu evidencia y podrá decidir entre recomendar, recomendar con condiciones, solicitar mejoras o no recomendar por ahora.

5. ValidatorDashboard.tsx

El dashboard del senior debe tener una sección nueva. Ahora solo valida entregables, pero no gestiona solicitudes de recomendación.

Corrección 1: Agregar tab nuevo
Ubicación aproximada

ValidatorDashboard.tsx, líneas 81–86.

Agregar:

<TabsTrigger value="referrals">Solicitudes de Recomendación</TabsTrigger>
Corrección 2: Crear contenido del tab referrals

Agregar una card así:

Card: Solicitud recibida
María González ha manifestado interés en ser considerada para una recomendación técnica senior.

Rol objetivo:
Data Analyst Jr.

Evidencia disponible:
- Portafolio de habilidades técnicas y blandas
- Ficha de desempeño individual
- Entregable validado
- Registro de experiencia aplicada
- Brechas detectadas

Motivo:
Busca oportunidades en empresas de analítica, MYPEs o empresas de la red profesional del senior.
Opciones del senior

Botones:

Recomendar
Recomendar con condiciones
Solicitar mejora previa
No recomendar por ahora
Campo de texto

Justificación técnica de la decisión

Placeholder:

“Indica para qué roles, contextos o niveles recomiendas a esta persona. Ejemplo: recomendada para Data Analyst Jr. con autonomía media en análisis exploratorio y visualización.”

Corrección 3: Info Card inferior
Ubicación aproximada

ValidatorDashboard.tsx, líneas 305–330.

Agregar una cuarta columna o reemplazar una de las actuales con:

Título

Recomendación senior trazable

Texto

Puedes emitir recomendaciones solo cuando exista evidencia suficiente. Tu recomendación queda asociada al portafolio del participante, no al Assessment Passport.

6. FastTrackApplications.tsx

Esta página debe cambiar porque ahora asume que el Assessment Passport ya está activo. Pero conceptualmente debe ser una pantalla de activación de Ruta 3.

Corrección 1: Header
Ubicación aproximada

FastTrackApplications.tsx, líneas 25–29.

Antes:

“Postula con tu portafolio y Assessment Passport…”

Después:

Activa la ruta fast-track para compartir tu evidencia con empresas compatibles vía Buk o un ATS equivalente. El Assessment Passport solo se genera si das consentimiento explícito.

Corrección 2: Banner principal
Ubicación aproximada

FastTrackApplications.tsx, líneas 40–48.

Antes:

“Como tienes un Assessment Passport activo…”

Después:

Aún no tienes un Assessment Passport activo. Puedes generarlo si decides usar la ruta fast-track. Esta credencial estructura tu evidencia para que pueda ser enviada a Buk o un ATS equivalente bajo consentimiento.

Corrección 3: Stats
Ubicación aproximada

FastTrackApplications.tsx, líneas 120–128.

Cambiar:

Passport Activo

Por:

Fast-track

Estado:

No activado

Subtexto:

Requiere consentimiento

Corrección 4: Botón por oportunidad
Ubicación aproximada

FastTrackApplications.tsx, líneas 223–240.

Cambiar título:

Antes:

Solicitud de Entrevista Fast-Track con Consentimiento

Después:

Activar Assessment Passport y solicitar revisión fast-track

Cambiar descripción:

Al activar esta ruta, autorizas generar un Assessment Passport y compartir tu portafolio, ficha de desempeño y evaluación con esta empresa para este proceso.

Botón:

Generar Assessment Passport y solicitar revisión

Corrección 5: Filtro de oportunidades
Ubicación aproximada

FastTrackApplications.tsx, línea 19.

Actualmente:

const eligibleOpportunities = mockJobOpportunities.filter((job) => job.fastTrackEligible);

Debe ser:

const eligibleOpportunities = mockJobOpportunities.filter(
  (job) =>
    job.fastTrackEligible &&
    job.requiredRole === mockPortfolio.validatedRole
);

Luego, si agregan consultoras/reclutadoras asociadas, la lógica debería ser:

job.fastTrackEligible &&
job.requiredRole === mockPortfolio.validatedRole &&
job.recruiterId === mockPortfolio.assignedRecruiterId
7. ChallengeDetailPage.tsx
Corrección en beneficios esperados
Ubicación aproximada

ChallengeDetailPage.tsx, líneas 253–273.

Cambiar:

Recomendación respaldada por el senior

Por:

Posibilidad de solicitar evaluación para recomendación senior

Cambiar:

Assessment Passport actualizado

Por:

Portafolio de evidencia laboral actualizado

Cambiar:

Acceso a rutas fast-track laborales

Por:

Opción de activar ruta fast-track bajo consentimiento

Esto evita hacer parecer que el senior recomienda automáticamente o que el Assessment Passport existe siempre.

8. AssessmentCenter.tsx
Corrección de resultados
Ubicación aproximada

AssessmentCenter.tsx, líneas 269–285.

Cambiar:

Assessment Passport actualizado

Por:

Portafolio de evidencia laboral actualizado

Agregar:

Ficha de desempeño individual generada

Agregar:

Posibilidad de solicitar evaluación para recomendación senior

Agregar:

Assessment Passport solo si activas fast-track vía Buk/ATS

9. HRDashboard.tsx

El rol de RR. HH. debe quedar más preciso. RR. HH. no debe aparecer como quien “recomienda” de forma genérica; su ruta principal es observación conductual + gestión fast-track / brief para reclutadores.

Corrección 1: Título general
Ubicación aproximada

HRDashboard.tsx, línea 25.

Cambiar:

Dashboard de RR.HH.

Por:

Dashboard de RR. HH.

Corrección 2: Tab “Recomendaciones”
Ubicación aproximada

HRDashboard.tsx, líneas 76–81 y 266–303.

Cambiar tab:

Antes:

Recomendaciones

Después:

Briefs y Fast-track

Cambiar título:

Antes:

Recomendaciones Emitidas

Después:

Briefs de talento y solicitudes fast-track

Cambiar descripción:

Antes:

“Recomendaciones basadas en observación de competencias blandas”

Después:

Resumen ejecutivo para reclutadores basado en evidencia técnica, observación conductual y consentimiento del candidato.

Esto alinea HR con la Ruta 3, no con la Ruta 2.

10. mockData.ts

Necesita ajustes estructurales.

Corrección 1: assessmentPassport debe ser opcional o tener estado

Actualmente está dentro de Portfolio como si siempre existiera.

Cambiar:

assessmentPassport: {
  issued: string;
  validUntil: string;
  passportId: string;
};

Por:

assessmentPassport?: {
  status: 'not_generated' | 'generated' | 'shared';
  issued?: string;
  validUntil?: string;
  passportId?: string;
  consentGiven: boolean;
  sharedWith?: string[];
};

En el mock inicial:

assessmentPassport: {
  status: 'not_generated',
  consentGiven: false
}
Corrección 2: Agregar evidencePortfolio

Agregar al Portfolio:

evidencePortfolio: {
  portfolioId: string;
  status: 'finalist' | 'solution_sent_to_company' | 'completed';
  evidenceSummary: string;
  experienceRecord?: {
    company: string;
    challengeTitle: string;
    rolePerformed: string;
    deliverableSent: boolean;
    validationSource: string;
    date: string;
  };
};

Ejemplo:

evidencePortfolio: {
  portfolioId: 'TEL-PORT-2026-001-MGO',
  status: 'solution_sent_to_company',
  evidenceSummary: 'Finalista evaluada con solución enviada al área solicitante de BCP.',
  experienceRecord: {
    company: 'BCP',
    challengeTitle: 'Dashboard de Análisis de Comportamiento de Cliente',
    rolePerformed: 'Líder Técnico',
    deliverableSent: true,
    validationSource: 'Senior técnico + área solicitante',
    date: '2026-04-10'
  }
}
Corrección 3: Agregar solicitudes senior

Crear interfaz:

export interface SeniorReferralRequest {
  id: string;
  studentId: string;
  studentName: string;
  seniorValidator: string;
  targetRole: string;
  targetCompanyTypes: string[];
  evidenceShared: string[];
  status: 'not_requested' | 'requested' | 'recommended' | 'recommended_with_conditions' | 'needs_improvement' | 'not_recommended';
  studentMessage?: string;
  seniorDecision?: string;
}

Mock:

export const mockSeniorReferralRequests: SeniorReferralRequest[] = [
  {
    id: 'sr-001',
    studentId: 'u-001',
    studentName: 'María González',
    seniorValidator: 'Rodrigo Santillán',
    targetRole: 'Data Analyst Jr.',
    targetCompanyTypes: ['MYPEs', 'Empresas de analítica', 'Empresas financieras'],
    evidenceShared: [
      'Portafolio de habilidades técnicas y blandas',
      'Ficha de desempeño individual',
      'Entregable validado',
      'Registro de experiencia aplicada',
      'Brechas detectadas'
    ],
    status: 'requested',
    studentMessage: 'Me gustaría ser considerada para oportunidades donde pueda aportar en análisis de datos y visualización.'
  }
];
Corrección 4: Agregar phaseScope en retos

Para que Credicorp no parezca activo desde el piloto.

Agregar a Challenge:

phaseScope: 'pilot_bcp' | 'credicorp_phase_2' | 'partners_phase_3';
availabilityLabel: 'Disponible piloto' | 'Próximamente fase 2' | 'Roadmap fase 3';

Para BCP:

phaseScope: 'pilot_bcp',
availabilityLabel: 'Disponible piloto'

Para Yape, Mibanco, Pacífico:

phaseScope: 'credicorp_phase_2',
availabilityLabel: 'Próximamente fase 2'
11. routes.tsx

Agregar ruta para senior:

import SeniorReferralRequest from "./pages/SeniorReferralRequest";

Y:

{ path: "senior-referral", Component: SeniorReferralRequest },
12. Navegación Root.tsx
Corrección de etiquetas

Cambiar todos los RR.HH. por RR. HH..

Agregar en navegación o dropdown:

Ruta Senior

O dentro del menú del estudiante:

<Link to="/senior-referral">
  Solicitud Recomendación Senior
</Link>

No es necesario ponerlo en el menú principal si se ve desde el dashboard y portafolio, pero sí debe ser accesible.