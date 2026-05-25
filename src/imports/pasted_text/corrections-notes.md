Correcciones críticas
Archivo / línea	Problema	Corrección recomendada
src/app/pages/AssessmentCenter.tsx:45	Dice: “En esta fase final…”. Ya aclaraste que no conviene decir “fase final”.	Cambiar por: “Durante el Assessment Center, afinas tu solución con retroalimentación especializada mientras eres evaluado en tiempo real.”
src/app/pages/ValidatorDashboard.tsx:270	Dice: “Assessment Center en Vivo - Fase Final”. Mismo problema.	Cambiar por: “Assessment Center en vivo - Afinamiento de solución” o “Assessment Center en vivo - Evaluación técnica”.
src/app/pages/Home.tsx:83-84	Dice que escala a Credicorp “según tu progreso”. No depende del progreso del estudiante, sino del roadmap del sistema.	Cambiar por: “Inicia con retos de BCP y escala hacia empresas seleccionadas del grupo Credicorp según la fase de implementación del programa.”
src/app/pages/ChallengeBankPage.tsx:79	Presenta desde ya “problemas reales de BCP y empresas del grupo Credicorp”. Puede parecer que todo Credicorp está activo desde el piloto.	Cambiar por: “Retos reales de BCP y, progresivamente, de empresas seleccionadas del grupo Credicorp.”
src/app/data/mockData.ts:203-281	Yape, Mibanco y Pacífico aparecen como retos abiertos desde el inicio. Eso contradice el enfoque piloto BCP primero.	Agregar una propiedad tipo `phaseScope: 'piloto-bcp'
Correcciones sobre seguridad
Archivo / línea	Problema	Corrección recomendada
src/app/pages/ChallengeDetailPage.tsx:202-208	Dice “No puedes descargar ni copiar información…”. Es demasiado absoluto.	Cambiar por: “El entorno restringe descargas, copiado y transferencia de información fuera del sistema.”
src/app/pages/TeamWorkspace.tsx:68-70	También usa una promesa absoluta: “No puedes descargar, copiar o transferir…”.	Cambiar por: “El entorno aplica controles para restringir descargas, copiado, transferencia de archivos y otras vías de salida de información.”
src/app/pages/Home.tsx:346-356	“No puedes llevarte información fuera del entorno” suena absoluto.	Cambiar por: “El sistema reduce las vías de fuga mediante bloqueo de descargas, restricción de dispositivos, watermark dinámico, datos anonimizados y trazabilidad.”
src/app/pages/TeamWorkspace.tsx:110	“Bloqueo de descargas y clipboard” está bien, pero falta precisión.	Cambiar por: “Restricción de descargas, portapapeles y unidades locales.”

También agregaría en el prototipo una tarjeta de seguridad con estos puntos:

NDA o acuerdo de confidencialidad antes de abrir el workspace.
Datos anonimizados, sintéticos o enmascarados.
Watermark dinámico con usuario, hora y sesión.
Logs de actividad.
Entorno temporal que se cierra al terminar el sprint.
Clasificación del reto por nivel de riesgo: bajo, medio, alto.
Correcciones sobre la ruta Fast-Track
Archivo / línea	Problema	Corrección recomendada
src/app/pages/FastTrackApplications.tsx:44-45	Dice “puedes solicitar entrevista directa”. Está bien conceptualmente, pero puede sonar como garantía.	Cambiar por: “puedes solicitar una revisión prioritaria o entrevista sugerida basada en evidencia validada.”
src/app/pages/FastTrackApplications.tsx:239	Botón: “Autorizar y Solicitar Entrevista Fast-Track”. Correcto, pero puede ser más preciso.	Cambiar por: “Autorizar y solicitar revisión fast-track” o “Autorizar y solicitar entrevista sugerida”.
src/app/pages/FastTrackApplications.tsx:284-285	Dice que RR. HH. decide si te mueve directamente a entrevista. Está bien, pero reforzaría que no es automático.	Cambiar por: “RR. HH. revisa tu evidencia y decide si corresponde avanzar a entrevista.”
src/app/pages/Root.tsx:186	Dice “Contratación Fast-Track”. Puede sonar como contratación acelerada garantizada.	Cambiar por: “Precalificación Fast-Track” o “Selección Fast-Track”.

La idea correcta es:

El fast-track no garantiza entrevista ni contratación; convierte el assessment previo en una preselección reutilizable y revisable por RR. HH.

Inconsistencias de datos mock
Archivo / línea	Problema	Corrección recomendada
src/app/data/mockData.ts:395	El portafolio usa challengeId: 'ch-007', pero no existe ningún reto ch-007 en mockChallenges.	Cambiar a ch-002 o crear un reto real ch-007.
src/app/data/mockData.ts:552	El assessment también usa challengeId: 'ch-007'.	Igual: cambiar a ch-002 o crear el reto faltante.
src/app/pages/AssessmentCenter.tsx:298	Como ch-007 no existe, el sistema usa fallback: “Optimización de Dashboard de Ventas”.	Solucionar el ID para que el dato sea consistente.
src/app/pages/Home.tsx:429-438	Los números están hardcodeados: 6 retos, 8 equipos, 5 empresas Credicorp. Pero el mock tiene 6 retos, 15 equipos acumulados y 4 empresas listadas.	Calcular dinámicamente o ajustar manualmente. Por ejemplo: 6 retos prototipo, 15 equipos simulados, 4 empresas en roadmap.
src/app/pages/FastTrackApplications.tsx:113-116	Cuenta empresas usando todas las oportunidades, incluso las no elegibles.	Cambiar a: contar solo empresas dentro de eligibleOpportunities.
src/app/pages/FastTrackApplications.tsx:19	Filtra solo por fastTrackEligible, pero debería filtrar también por rol validado.	Usar: job.fastTrackEligible && job.requiredRole === mockPortfolio.validatedRole.
Terminología que conviene estandarizar
Dónde aparece	Problema	Corrección
Varias páginas	Se usa RR.HH. sin espacio.	Estandarizar como RR. HH.
Home.tsx:97	Dice “assessment center” en minúsculas.	Cambiar a Assessment Center.
Varias páginas	“seniors técnicos” suena informal.	Usar especialistas técnicos senior.
FastTrackApplications.tsx:273	Dice “scores”.	Cambiar por puntajes.
Varias páginas	“experiencia laboral validada” puede sonar a contrato laboral formal.	Usar experiencia aplicada verificable en contexto empresarial real o experiencia laboral verificable basada en reto real.
Botones sin acción clara
Archivo / línea	Problema	Corrección recomendada
src/app/pages/ChallengeDetailPage.tsx:141	Botón “Postular Ahora” no navega ni ejecuta acción.	En prototipo, cambiar a “Postulación simulada”, abrir modal o redirigir a /student.
src/app/pages/ChallengeDetailPage.tsx:347	“Postular a Este Reto” tampoco tiene acción.	Mismo ajuste.
src/app/pages/Portfolio.tsx:40	“Descargar PDF” no tiene función.	Si no implementarán descarga, cambiar a “Vista de portafolio” o dejarlo deshabilitado.
src/app/pages/Portfolio.tsx:342-343	“Explorar Oportunidades Fast-Track” parece botón, pero no está enlazado.	Envolver con Link to="/fast-track" y usar asChild.
src/app/pages/CompanyDashboard.tsx:32-35	“Publicar Nuevo Reto” no tiene acción.	Puede abrir modal mock o decir “Publicar reto — prototipo”.
Correcciones técnicas
Archivo / línea	Problema	Corrección recomendada
package.json:73-76	react y react-dom están como peerDependencies opcionales. Para una app Vite deberían estar en dependencies.	Mover react y react-dom a dependencies.
src/main.tsx:2-6	Hay indentación extra al inicio. No rompe, pero se ve generado/desprolijo.	Quitar espacios iniciales.
src/app/pages/ChallengeDetailPage.tsx:5,14	Separator y TrendingUp están importados pero no se usan.	Eliminar imports.
src/app/pages/FastTrackApplications.tsx:1,2	Link y CardDescription parecen no usarse.	Eliminar si no se usan.
src/app/pages/AssessmentCenter.tsx:4,14	Button y MessageSquare parecen no usarse.	Eliminar si no se usan.
src/app/pages/StudentDashboard.tsx	AlertCircle parece importado pero no usado.	Eliminar import.
src/app/pages/HRDashboard.tsx	Users parece importado pero no usado.	Eliminar import.

Intenté verificar el build, pero el entorno no llegó a tener vite disponible en node_modules/.bin, así que no puedo afirmar que compile sin correr instalación completa. A nivel estático, lo más importante es mover react y react-dom a dependencies.

Corrección conceptual principal

El prototipo debe dejar claro este orden:

Piloto BCP → expansión selectiva Credicorp → MYPEs/socios.

Ahora algunas pantallas ya muestran todo Credicorp como si estuviera activo. Eso debilita la credibilidad. La solución es simple: mantener visualmente a Yape, Mibanco, Pacífico y Credicorp Capital, pero etiquetarlos como:

Fase 2: expansión Credicorp
Próximamente
No disponible en piloto
Reto en roadmap
Texto corregido para la landing

En Home.tsx, usaría este bloque:

BCP Talent Evidence Lab convierte retos reales de BCP y, progresivamente, de empresas seleccionadas del grupo Credicorp en experiencias aplicadas verificables. Los estudiantes y egresados trabajan en células, resuelven problemas empresariales dentro de entornos virtuales seguros, reciben validación técnica senior en las fases de preselección, selección y Assessment Center, y durante el Assessment Center son observados por RR. HH. Al finalizar, reciben un portafolio de habilidades técnicas y blandas, experiencia verificable basada en reto real, un Assessment Passport y rutas trazables hacia oportunidades laborales.