El problema actual es este:

La pantalla de “Oportunidades” está funcionando como si solo existiera la Ruta 3: Fast-track vía Buk/ATS.
Pero en realidad “Oportunidades” debe mostrar las 3 rutas verificables generadas por el último reto superado.

Pásale esto a Figma:

Corrección estructural: Portafolio + Oportunidades
1. Cambiar la lógica general

La plataforma debe tener esta lógica:

Retos disponibles
↓
Participación en un reto
↓
Reto superado
↓
Portafolio actualizado
↓
Oportunidades generadas por el último reto superado
↓
3 rutas verificables:
1. Conversión directa con empresa del reto
2. Solicitud de evaluación para recomendación senior
3. Fast-track vía Buk/ATS

Importante:

Un estudiante no puede realizar dos retos en simultáneo.
Puede tener varios retos históricos en su portafolio, pero solo puede tener un reto activo a la vez.

2. Corregir Portfolio.tsx

Actualmente el portafolio no muestra todos los retos/proyectos. Para ejemplificar, debe mostrar 2 retos superados.

Cambiar sección “Retos Completados”

Debe llamarse:

Retos superados / experiencias aplicadas

Y debe mostrar dos cards:

Card 1 — Reto histórico
Reto: Automatización de Flujo de Aprobación de Créditos
Empresa: BCP
Rol desempeñado: Analista de procesos
Estado: Finalista evaluado
Resultado: Llegó a los 5 equipos finalistas
Evidencia generada:
- Primer entregable validado
- Evaluación técnica senior
- Observación de RR. HH.
- Ficha de desempeño
Rutas laborales:
Histórico / no activo para nuevas solicitudes
Card 2 — Último reto superado
Reto: Dashboard de Análisis de Comportamiento de Cliente
Empresa: BCP
Rol desempeñado: Líder técnico / Data Analyst
Estado: Solución enviada a empresa
Resultado: Solución destacada entregada al área solicitante
Evidencia generada:
- Entregable validado
- Portafolio actualizado
- Evaluación técnica senior
- Observación de RR. HH.
- Registro de experiencia aplicada verificable
Rutas laborales:
Activas

El segundo debe tener un badge visible:

Último reto superado

Y otro badge:

Rutas laborales disponibles

3. Cambiar el CTA del portafolio

Actualmente el CTA empuja demasiado a Fast-track.

Cambiar esto:

“Explorar Oportunidades Fast-Track”

Por:

Ver oportunidades generadas por mi último reto

Ese botón debe llevar a:

/oportunidades

No a /fast-track.

4. Crear o renombrar página: OpportunitiesHub.tsx

La pantalla actual FastTrackApplications.tsx debe dejar de ser una página solo de fast-track.

Renombrar conceptualmente a:

Oportunidades

Título de página:

Oportunidades generadas por tu último reto superado

Subtítulo:

Estas rutas se generan a partir del último reto que superaste en BCP Talent Evidence Lab. No dependen solo del CV, sino de evidencia real de desempeño.

Debajo debe aparecer una card base:

Último reto superado:
Dashboard de Análisis de Comportamiento de Cliente

Empresa del reto:
BCP

Estado:
Solución enviada a empresa

Rol validado:
Data Analyst

Evidencia disponible:
Portafolio de habilidades técnicas y blandas
Ficha de desempeño
Registro de experiencia aplicada
Evaluación senior
Observación de RR. HH.
5. En “Oportunidades” deben verse las 3 rutas, no solo Fast-track

La pantalla debe tener 3 cards grandes, una por ruta.

Ruta 1: Conversión directa con la empresa del reto

Título:

Ruta 1: Conversión directa con BCP

Descripción:

BCP ya observó tu desempeño resolviendo un problema real de su organización. Si el área solicitante identifica ajuste con una vacante, puede considerarte para práctica, trainee, entrevista o contacto directo.

Estado:

Disponible por solución enviada a empresa

Evidencia usada:

- Reto resuelto
- Entregable validado
- Desempeño observado
- Feedback técnico senior
- Observación de RR. HH.

Botón:

Ver estado con empresa del reto

No prometer contratación.

No decir:

“Serás contratado.”

Decir:

“BCP puede considerarte con evidencia previa.”

Ruta 2: Solicitud de evaluación para recomendación senior

Título:

Ruta 2: Recomendación técnica senior

Descripción:

Puedes manifestar interés en ser recomendado por el especialista técnico senior. El senior recibirá tu portafolio, ficha de desempeño y registro de experiencia aplicada, y decidirá si puede recomendarte ante empresas de su red profesional, MYPEs o empresas que le soliciten perfiles compatibles.

Estado inicial:

No solicitada

Evidencia usada:

- Portafolio de habilidades técnicas y blandas
- Ficha de desempeño individual
- Rol desempeñado en la célula
- Entregable validado
- Brechas detectadas
- Registro de experiencia aplicada

Botón:

Solicitar evaluación para recomendación senior

Al hacer clic, mostrar modal o pantalla con:

Rol objetivo:
Data Analyst Jr.

Tipo de empresas de interés:
[ ] MYPEs
[ ] Empresas financieras
[ ] Empresas de analítica / datos
[ ] Startups tecnológicas
[ ] Empresas de la red del senior

Mensaje opcional:
Me gustaría ser considerado para oportunidades donde pueda aportar en análisis de datos, visualización y comunicación de hallazgos.

Botón final:

Manifestar interés y notificar al senior

Mensaje importante:

La recomendación no es automática. El senior puede recomendar, recomendar con condiciones, solicitar mejoras o no recomendar por ahora.

Ruta 3: Fast-track vía Buk/ATS

Título:

Ruta 3: Fast-track vía Buk/ATS

Descripción:

Puedes activar una postulación fast-track con empresas compatibles. Para esta ruta sí se genera un Assessment Passport bajo consentimiento, porque la evidencia debe viajar de forma estructurada hacia Buk o un ATS equivalente.

Estado inicial:

No activado

Evidencia usada:

- Assessment Passport
- Rol validado
- Portafolio
- Ficha de desempeño
- Consentimiento explícito

Botón:

Activar Assessment Passport y ver vacantes compatibles

Al hacer clic, recién mostrar las vacantes compatibles:

Data Analyst Junior — BCP
Business Intelligence Analyst — Credicorp Capital
Práctica Profesional Analítica — Pacífico Seguros

No mostrar esas vacantes como la pantalla principal. Deben estar dentro de la Ruta 3.

6. Regla visual: no puede hacer dos retos a la vez

Agregar esta lógica en ChallengeBankPage.tsx y ChallengeDetailPage.tsx.

Si el estudiante tiene un reto activo, mostrar banner:

Ya tienes un reto activo

Actualmente estás participando en:
Optimización de Sistema de Detección de Fraude — BCP

Para mantener la calidad del trabajo en célula, no puedes postular a otro reto hasta finalizar o retirarte del reto actual.

Botones de otros retos:

Postulación bloqueada temporalmente

Tooltip o texto pequeño:

No puedes participar en dos retos simultáneamente.

En el dashboard del estudiante, agregar card:

Reto activo actual
Optimización de Sistema de Detección de Fraude

Estado:
Preselección

Acción:
Continuar en workspace

Nota:
Mientras este reto esté activo, no podrás postular a nuevos retos.
7. Ajustar mockData.ts

Agregar dos retos superados al portafolio.

Ejemplo:

completedChallenges: [
  {
    challengeId: 'ch-001',
    challengeTitle: 'Automatización de Flujo de Aprobación de Créditos',
    company: 'BCP',
    role: 'Analista de procesos',
    deliverable: 'Propuesta de automatización y mapa de flujo operativo',
    technicalScore: 84,
    softSkillsScore: 81,
    date: '2026-03-18',
    resultStatus: 'finalist',
    resultLabel: 'Llegó a los 5 equipos finalistas',
    solutionSentToCompany: false,
    routesActive: false
  },
  {
    challengeId: 'ch-002',
    challengeTitle: 'Dashboard de Análisis de Comportamiento de Cliente',
    company: 'BCP',
    role: 'Líder técnico / Data Analyst',
    deliverable: 'Dashboard interactivo con métricas clave de comportamiento de cliente',
    technicalScore: 92,
    softSkillsScore: 88,
    date: '2026-04-10',
    resultStatus: 'solution_sent_to_company',
    resultLabel: 'Solución enviada al área solicitante',
    solutionSentToCompany: true,
    routesActive: true,
    isLatestEligibleChallenge: true
  }
]

Agregar también:

activeChallenge: {
  challengeId: 'ch-003',
  challengeTitle: 'Optimización de Sistema de Detección de Fraude',
  company: 'BCP',
  phase: 'preselección',
  canApplyToOtherChallenges: false
}
8. Cambiar nombres en navegación

En Root.tsx, cambiar:

Fast-Track

Por:

Oportunidades

Ruta sugerida:

/oportunidades

O si se mantiene /fast-track por simplicidad técnica, al menos el label visible debe ser:

Oportunidades

No:

Fast-Track

Porque Fast-track es solo una de las tres rutas.

9. Resumen visual esperado

La plataforma debe entenderse así sin explicación adicional:

Portafolio
├── Reto 1: Finalista evaluado
├── Reto 2: Solución enviada a empresa
│      └── Último reto superado
│             └── Ver oportunidades
│
Oportunidades
├── Ruta 1: Conversión directa con empresa del reto
├── Ruta 2: Solicitud de recomendación senior
└── Ruta 3: Fast-track vía Buk/ATS
       └── Assessment Passport solo si se activa esta ruta