La sección “Evaluaciones” como está ahora genera confusión porque parece un consolidado general, pero visualmente está mostrando el detalle de un solo Assessment Center.

La corrección conceptual sería esta:

“Habilidades” puede ser el consolidado acumulado del estudiante.
“Evaluaciones” debe ser el historial de evaluaciones por reto superado.

Es decir: si el portafolio ya muestra 2 retos superados, entonces debe haber 2 registros de evaluación, uno por cada reto.

Razonamiento del ajuste

Actualmente la plataforma tiene esta lógica visual:

Portafolio
├── Habilidades
├── Retos superados / experiencias aplicadas
├── Evaluaciones
└── Recomendaciones

Pero en “Evaluaciones” aparece:

Detalle de Assessment Center
Evaluación técnica: 92
Competencias blandas: 88
Validador técnico: Rodrigo Santillán
Observador RR. HH.: Isabel Ramírez

El problema: no se entiende si ese 92 y 88 pertenecen al último reto, al promedio general o a una evaluación específica.

Lo correcto es:

Evaluaciones por reto
├── Evaluación del reto histórico
└── Evaluación del último reto superado

Y dentro de cada evaluación recién mostrar:

puntaje técnico;
puntaje conductual;
validador técnico;
observador RR. HH.;
feedback técnico;
feedback conductual;
competencias observadas.
Corrección estructural para Figma
1. Cambiar el nombre del tab

En Portfolio.tsx, cambiar:

Evaluaciones

Por:

Evaluaciones por reto

O, si quieren algo más claro:

Historial de evaluaciones

Mi recomendación: Evaluaciones por reto.

Porque deja claro que no es un consolidado.

2. Agregar texto aclaratorio arriba de la sección

Debajo del título, agregar:

Cada evaluación corresponde a un Assessment Center asociado a un reto superado. Los puntajes no son un promedio general: reflejan el desempeño observado en un reto específico.

Esto resuelve la ambigüedad sin necesidad de explicación externa.

3. Estructura visual correcta

La sección debe mostrar primero una lista de cards, no un único detalle.

Card 1 — Evaluación histórica
Reto:
Automatización de Flujo de Aprobación de Créditos

Empresa:
BCP

Resultado:
Llegó a los 5 equipos finalistas

Fecha:
18/03/2026

Estado:
Histórico

Evaluación técnica:
84 / 100

Competencias blandas:
81 / 100

Validador técnico:
Rodrigo Santillán

Observador RR. HH.:
Isabel Ramírez

Botón:
Ver detalle de evaluación
Card 2 — Última evaluación
Reto:
Dashboard de Análisis de Comportamiento de Cliente

Empresa:
BCP

Resultado:
Solución enviada al área solicitante

Fecha:
10/04/2026

Estado:
Último reto superado · Rutas laborales activas

Evaluación técnica:
92 / 100

Competencias blandas:
88 / 100

Validador técnico:
Rodrigo Santillán

Observador RR. HH.:
Isabel Ramírez

Botón:
Ver detalle de evaluación

Esta segunda card debe tener badges visibles:

Último reto superado
Rutas laborales activas
Solución enviada a empresa
4. Cómo debe verse el detalle de cada evaluación

Cuando el usuario abre “Ver detalle de evaluación”, ahí sí aparece el contenido que ahora ya existe:

Detalle de Assessment Center

Reto evaluado:
Dashboard de Análisis de Comportamiento de Cliente

Tipo de evaluación:
Assessment Center en vivo

Evaluador técnico:
Rodrigo Santillán

Observador RR. HH.:
Isabel Ramírez

Luego:

Evaluación técnica
92 / 100

Feedback técnico:
Excelente dominio técnico de Power BI. La arquitectura del dashboard es sólida...

Y al lado:

Competencias blandas
88 / 100

Feedback RR. HH.:
Liderazgo natural, comunicación clara y efectiva...

Después:

Competencias observadas en detalle

Liderazgo — 85%
Comunicación — 90%
Trabajo en equipo — 92%
Manejo de presión — 85%
Adaptabilidad — 88%
Pensamiento analítico — 94%

Esto ya no parece consolidado. Parece correctamente un registro de evaluación asociado a un reto.

5. Qué pasa con el consolidado

El consolidado no debería estar en “Evaluaciones”. Debe estar en Habilidades.

La sección “Habilidades” sí puede decir:

Consolidado acumulado del portafolio
Basado en 2 retos superados y 2 evaluaciones de Assessment Center.

Ahí puedes mostrar:

Power BI — 90%
SQL — 85%
Python — 75%
Liderazgo — 85%
Comunicación — 90%
Trabajo en equipo — 92%

Pero debe quedar claro:

Habilidades = consolidado acumulado.
Evaluaciones = registros específicos por reto.

6. Corrección en mockData.ts

Ahora mismo hay 2 retos en completedChallenges, pero solo 1 evaluación en mockAssessments.

Debe haber 2 evaluaciones.

Agregar una evaluación para ch-001:

{
  id: 'ass-000',
  studentId: 'u-001',
  challengeId: 'ch-001',
  technicalScore: 84,
  softSkillsScore: 81,
  technicalFeedback: 'Buen entendimiento del flujo operativo y capacidad para mapear procesos. La propuesta de automatización fue clara, aunque requería mayor profundidad técnica para pasar a implementación.',
  softSkillsFeedback: 'Buena colaboración y disposición para asumir tareas. Mostró comunicación adecuada, aunque con margen de mejora en liderazgo bajo presión.',
  validator: 'Rodrigo Santillán',
  hrObserver: 'Isabel Ramírez',
  competencies: [
    { name: 'Liderazgo', score: 78, observations: 'Participó activamente, aunque no lideró la dinámica principal' },
    { name: 'Comunicación', score: 82, observations: 'Explicó ideas de forma clara, con oportunidad de mayor síntesis' },
    { name: 'Trabajo en Equipo', score: 86, observations: 'Colaboró bien con el equipo y apoyó en la organización del entregable' },
    { name: 'Manejo de Presión', score: 76, observations: 'Respondió adecuadamente, aunque mostró dudas ante cambios de alcance' },
    { name: 'Adaptabilidad', score: 80, observations: 'Ajustó su propuesta después del feedback técnico' },
    { name: 'Pensamiento Analítico', score: 84, observations: 'Identificó cuellos de botella relevantes en el proceso' }
  ],
  date: '2026-03-18'
}

Y mantener la evaluación actual para ch-002.

7. Corrección en Portfolio.tsx

Actualmente está usando algo parecido a:

const assessment = mockAssessments[0];

Eso debe cambiar porque solo toma una evaluación.

Reemplazar por una lógica tipo:

const assessmentsWithChallenge = mockAssessments.map((assessment) => {
  const challenge = mockPortfolio.completedChallenges.find(
    (c) => c.challengeId === assessment.challengeId
  );

  return {
    ...assessment,
    challenge,
  };
});

Luego, en el tab de evaluaciones, renderizar:

assessmentsWithChallenge.map((assessment) => ...)

Así cada evaluación aparece ligada a su reto correspondiente.

8. Diseño recomendado para la sección

En Figma, la sección debería verse así:

Evaluaciones por reto

Cada evaluación corresponde a un Assessment Center asociado a un reto superado.
Los puntajes no son un promedio general.

[Card Evaluación 1]
Automatización de Flujo de Aprobación de Créditos
BCP · 18/03/2026
Finalista evaluada
Técnico: 84    Competencias blandas: 81
Validador: Rodrigo Santillán
Observador RR. HH.: Isabel Ramírez
[Ver detalle]

[Card Evaluación 2]
Dashboard de Análisis de Comportamiento de Cliente
BCP · 10/04/2026
Último reto superado · Solución enviada a empresa
Técnico: 92    Competencias blandas: 88
Validador: Rodrigo Santillán
Observador RR. HH.: Isabel Ramírez
[Ver detalle]

Al abrir detalle:

Detalle de evaluación del Assessment Center

Reto evaluado:
Dashboard de Análisis de Comportamiento de Cliente

Evaluación técnica:
92 / 100

Feedback técnico:
...

Competencias blandas:
88 / 100

Feedback RR. HH.:
...

Competencias observadas:
Liderazgo, comunicación, trabajo en equipo, presión, adaptabilidad, pensamiento analítico.
9. Ajuste en lenguaje

Cambiar en varias partes:

Actual	Mejor
Detalle de Assessment Center	Detalle de evaluación del Assessment Center
Evaluación técnica y de competencias blandas observadas	Registro de evaluación asociado a un reto superado
Observador RR.HH.	Observador RR. HH.
Competencias Blandas	Competencias blandas observadas
10. Prompt directo para Figma

Puedes pasarle esto:

Corregir la sección “Evaluaciones” del portafolio. Actualmente parece un consolidado general, pero debe funcionar como historial de evaluaciones por reto superado. Cambiar el tab a “Evaluaciones por reto”. Mostrar 2 cards de evaluación, una por cada reto superado del portafolio:

“Automatización de Flujo de Aprobación de Créditos” — BCP — resultado: llegó a los 5 equipos finalistas — evaluación técnica 84 — competencias blandas 81 — fecha 18/03/2026 — estado histórico.
“Dashboard de Análisis de Comportamiento de Cliente” — BCP — resultado: solución enviada al área solicitante — evaluación técnica 92 — competencias blandas 88 — fecha 10/04/2026 — estado: último reto superado, rutas laborales activas.

Agregar un texto aclaratorio: “Cada evaluación corresponde a un Assessment Center asociado a un reto superado. Los puntajes no son un promedio general: reflejan el desempeño observado en un reto específico.”

Cada card debe tener botón “Ver detalle de evaluación”. Al abrir detalle, mostrar validador técnico, observador RR. HH., feedback técnico, feedback conductual y competencias observadas.

Mantener la sección “Habilidades” como consolidado acumulado del portafolio. La lógica visual debe ser: Habilidades = consolidado acumulado; Retos superados = historial de experiencias aplicadas; Evaluaciones por reto = registros específicos de Assessment Center; Oportunidades = 3 rutas generadas por el último reto superado.

Conclusión

Tu intuición es correcta: no debe haber una sola evaluación suelta. Si hay dos retos superados en el portafolio, debe haber dos evaluaciones asociadas.

La arquitectura final queda más clara así:

Portafolio
├── Habilidades
│   └── Consolidado acumulado
├── Retos superados / experiencias aplicadas
│   └── Historial de retos
├── Evaluaciones por reto
│   └── Un Assessment Center por reto superado
└── Recomendaciones
    └── Estados y respaldos trazables

Oportunidades
└── 3 rutas activas solo desde el último reto superado