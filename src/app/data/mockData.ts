// Mock data for the BCP Talent Evidence Lab

export interface Challenge {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  area: string;
  description: string;
  objectives: string[];
  requirements: string[];
  duration: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  skills: string[];
  status: 'open' | 'in-progress' | 'completed';
  teams: number;
  maxTeams: number;
  phase: 'preselección' | 'selección' | 'assessment' | 'finalizado';
  phaseScope: 'pilot_bcp' | 'credicorp_phase_2' | 'partners_phase_3';
  availabilityLabel: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  level: 'avanzado' | 'desarrollo';
}

export interface Team {
  id: string;
  name: string;
  challengeId: string;
  challengeTitle: string;
  members: TeamMember[];
  phase: 'preselección' | 'selección' | 'assessment' | 'validación' | 'finalizado';
  progress: number;
  seniorValidator: string;
  hrObserver?: string;
  deliverables: Deliverable[];
}

export interface Deliverable {
  id: string;
  name: string;
  type: 'documento' | 'código' | 'presentación' | 'prototipo';
  uploadDate: string;
  status: 'pendiente' | 'en-revisión' | 'validado' | 'requiere-cambios';
  feedback?: string;
}

export interface Assessment {
  id: string;
  studentId: string;
  challengeId: string;
  technicalScore: number;
  softSkillsScore: number;
  technicalFeedback: string;
  softSkillsFeedback: string;
  validator: string;
  hrObserver: string;
  competencies: {
    name: string;
    score: number;
    observations: string;
  }[];
  date: string;
}

export interface ActiveChallenge {
  challengeId: string;
  challengeTitle: string;
  company: string;
  phase: 'preselección' | 'selección' | 'assessment' | 'validación' | 'finalizado';
  canApplyToOtherChallenges: boolean;
}

export interface Portfolio {
  studentId: string;
  studentName: string;
  studentEmail: string;
  validatedRole: string;
  completedChallenges: {
    challengeId: string;
    challengeTitle: string;
    company: string;
    role: string;
    deliverable: string;
    technicalScore: number;
    softSkillsScore: number;
    date: string;
    resultStatus: 'finalist' | 'solution_sent_to_company';
    resultLabel: string;
    solutionSentToCompany: boolean;
    routesActive: boolean;
    isLatestEligibleChallenge?: boolean;
  }[];
  activeChallenge?: ActiveChallenge;
  skills: {
    technical: { name: string; level: number; validated: boolean }[];
    soft: { name: string; level: number; validated: boolean }[];
  };
  recommendations: {
    from: string;
    role: string;
    company: string;
    text: string;
    date: string;
  }[];
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
  assessmentPassport?: {
    status: 'not_generated' | 'generated' | 'shared';
    issued?: string;
    validUntil?: string;
    passportId?: string;
    consentGiven: boolean;
    sharedWith?: string[];
  };
}

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

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'Tiempo completo' | 'Medio tiempo' | 'Práctica';
  matchScore: number;
  requiredRole: string;
  description: string;
  requirements: string[];
  benefits: string[];
  fastTrackEligible: boolean;
  recruiterId: string;
}

// Mock Challenges from BCP and Credicorp
export const mockChallenges: Challenge[] = [
  {
    id: 'ch-001',
    title: 'Automatización de Flujo de Aprobación de Créditos',
    company: 'BCP',
    companyLogo: '🏦',
    area: 'Operaciones',
    description: 'Diseñar e implementar un sistema de automatización para el proceso de aprobación de créditos personales, reduciendo tiempos de respuesta y mejorando la experiencia del cliente.',
    objectives: [
      'Reducir tiempo de aprobación en 40%',
      'Minimizar errores manuales',
      'Mejorar trazabilidad del proceso',
      'Integrar validaciones automatizadas'
    ],
    requirements: [
      'Conocimientos de automatización de procesos (RPA o similar)',
      'Experiencia básica con APIs',
      'Capacidad de análisis de procesos',
      'Trabajo en equipo'
    ],
    duration: '3 semanas',
    difficulty: 'Intermedio',
    skills: ['Python', 'APIs', 'Automatización', 'Análisis de Procesos'],
    status: 'open',
    teams: 3,
    maxTeams: 5,
    phase: 'preselección',
    phaseScope: 'pilot_bcp',
    availabilityLabel: 'Disponible piloto'
  },
  {
    id: 'ch-002',
    title: 'Dashboard de Análisis de Comportamiento de Cliente',
    company: 'BCP',
    companyLogo: '🏦',
    area: 'Analítica Comercial',
    description: 'Crear un dashboard interactivo que permita visualizar patrones de comportamiento de clientes usando datos anonimizados para identificar oportunidades de cross-selling.',
    objectives: [
      'Visualizar patrones de transacciones',
      'Identificar segmentos de clientes',
      'Generar insights accionables',
      'Presentar datos de forma intuitiva'
    ],
    requirements: [
      'Conocimientos de visualización de datos',
      'Experiencia con Power BI, Tableau o similar',
      'SQL básico',
      'Pensamiento analítico'
    ],
    duration: '2 semanas',
    difficulty: 'Básico',
    skills: ['Power BI', 'SQL', 'Análisis de Datos', 'Visualización'],
    status: 'in-progress',
    teams: 5,
    maxTeams: 5,
    phase: 'selección',
    phaseScope: 'pilot_bcp',
    availabilityLabel: 'Disponible piloto'
  },
  {
    id: 'ch-003',
    title: 'Optimización de Sistema de Detección de Fraude',
    company: 'BCP',
    companyLogo: '🏦',
    area: 'Riesgos',
    description: 'Mejorar el modelo de detección de transacciones fraudulentas utilizando técnicas de machine learning sobre datos históricos anonimizados.',
    objectives: [
      'Incrementar tasa de detección de fraude',
      'Reducir falsos positivos',
      'Optimizar tiempo de respuesta del modelo',
      'Documentar metodología aplicada'
    ],
    requirements: [
      'Conocimientos de Machine Learning',
      'Python y librerías de ML',
      'Estadística aplicada',
      'Capacidad de interpretación de modelos'
    ],
    duration: '4 semanas',
    difficulty: 'Avanzado',
    skills: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Estadística'],
    status: 'open',
    teams: 2,
    maxTeams: 3,
    phase: 'preselección',
    phaseScope: 'pilot_bcp',
    availabilityLabel: 'Disponible piloto'
  },
  {
    id: 'ch-004',
    title: 'Rediseño de Experiencia de Onboarding Digital',
    company: 'Yape',
    companyLogo: '💜',
    area: 'Experiencia de Cliente',
    description: 'Rediseñar el flujo de onboarding de nuevos usuarios para mejorar la tasa de conversión y reducir abandonos en el proceso de registro.',
    objectives: [
      'Incrementar tasa de conversión en 25%',
      'Reducir tiempo de onboarding',
      'Mejorar claridad de información',
      'Optimizar para móvil'
    ],
    requirements: [
      'Experiencia en UX/UI',
      'Conocimientos de research de usuarios',
      'Herramientas de prototipado (Figma, Adobe XD)',
      'Pensamiento centrado en el usuario'
    ],
    duration: '3 semanas',
    difficulty: 'Intermedio',
    skills: ['UX/UI', 'Figma', 'User Research', 'Prototipado'],
    status: 'open',
    teams: 4,
    maxTeams: 5,
    phase: 'preselección',
    phaseScope: 'credicorp_phase_2',
    availabilityLabel: 'Próximamente fase 2'
  },
  {
    id: 'ch-005',
    title: 'Chatbot para Atención al Cliente',
    company: 'Mibanco',
    companyLogo: '🏪',
    area: 'Atención al Cliente',
    description: 'Desarrollar un chatbot inteligente para resolver consultas frecuentes de clientes, reduciendo carga en centros de atención telefónica.',
    objectives: [
      'Resolver 60% de consultas frecuentes',
      'Reducir tiempo de espera',
      'Mejorar satisfacción del cliente',
      'Integrar con sistemas existentes'
    ],
    requirements: [
      'Conocimientos de NLP básico',
      'Desarrollo de chatbots',
      'APIs de mensajería',
      'Análisis de conversaciones'
    ],
    duration: '3 semanas',
    difficulty: 'Intermedio',
    skills: ['NLP', 'Python', 'APIs', 'Chatbot Development'],
    status: 'open',
    teams: 1,
    maxTeams: 4,
    phase: 'preselección',
    phaseScope: 'credicorp_phase_2',
    availabilityLabel: 'Próximamente fase 2'
  },
  {
    id: 'ch-006',
    title: 'Sistema de Recomendación de Productos Financieros',
    company: 'Pacífico Seguros',
    companyLogo: '🛡️',
    area: 'Analítica Comercial',
    description: 'Crear un motor de recomendación que sugiera productos de seguros personalizados basándose en perfil del cliente y comportamiento histórico.',
    objectives: [
      'Personalizar ofertas de productos',
      'Aumentar conversión en ventas',
      'Mejorar relevancia de recomendaciones',
      'Implementar modelo escalable'
    ],
    requirements: [
      'Machine Learning y sistemas de recomendación',
      'Análisis de datos',
      'Python',
      'Comprensión de productos financieros'
    ],
    duration: '4 semanas',
    difficulty: 'Avanzado',
    skills: ['Machine Learning', 'Python', 'Recommendation Systems', 'Data Analysis'],
    status: 'open',
    teams: 0,
    maxTeams: 3,
    phase: 'preselección',
    phaseScope: 'credicorp_phase_2',
    availabilityLabel: 'Próximamente fase 2'
  }
];

// Mock Teams
export const mockTeams: Team[] = [
  {
    id: 'team-001',
    name: 'Equipo Alpha',
    challengeId: 'ch-002',
    challengeTitle: 'Dashboard de Análisis de Comportamiento de Cliente',
    members: [
      {
        id: 'u-001',
        name: 'María González',
        role: 'Líder Técnico',
        avatar: '👩‍💼',
        skills: ['Power BI', 'SQL', 'Análisis'],
        level: 'avanzado'
      },
      {
        id: 'u-002',
        name: 'Carlos Méndez',
        role: 'Analista de Datos',
        avatar: '👨‍💻',
        skills: ['SQL', 'Excel', 'Python'],
        level: 'desarrollo'
      },
      {
        id: 'u-003',
        name: 'Ana Torres',
        role: 'Diseñadora de Visualización',
        avatar: '👩‍🎨',
        skills: ['Power BI', 'Tableau', 'UX'],
        level: 'desarrollo'
      }
    ],
    phase: 'selección',
    progress: 60,
    seniorValidator: 'Rodrigo Santillán (Senior Data Architect)',
    hrObserver: 'Isabel Ramírez (HR Manager)',
    deliverables: [
      {
        id: 'del-001',
        name: 'Propuesta Inicial de Dashboard',
        type: 'presentación',
        uploadDate: '2026-05-15',
        status: 'validado',
        feedback: 'Excelente estructura inicial. Considera agregar métricas de tendencia temporal.'
      },
      {
        id: 'del-002',
        name: 'Dashboard v1.0',
        type: 'prototipo',
        uploadDate: '2026-05-20',
        status: 'en-revisión'
      }
    ]
  },
  {
    id: 'team-002',
    name: 'Equipo Beta',
    challengeId: 'ch-001',
    challengeTitle: 'Automatización de Flujo de Aprobación de Créditos',
    members: [
      {
        id: 'u-004',
        name: 'Jorge Paredes',
        role: 'Desarrollador Backend',
        avatar: '👨‍💼',
        skills: ['Python', 'APIs', 'Automatización'],
        level: 'avanzado'
      },
      {
        id: 'u-005',
        name: 'Lucía Campos',
        role: 'Analista de Procesos',
        avatar: '👩‍💼',
        skills: ['BPM', 'Análisis', 'Documentación'],
        level: 'desarrollo'
      },
      {
        id: 'u-006',
        name: 'Roberto Silva',
        role: 'QA Tester',
        avatar: '👨‍🔧',
        skills: ['Testing', 'Python', 'Automatización'],
        level: 'desarrollo'
      }
    ],
    phase: 'preselección',
    progress: 35,
    seniorValidator: 'Patricia Vega (Senior Solutions Architect)',
    deliverables: [
      {
        id: 'del-003',
        name: 'Análisis de Proceso Actual',
        type: 'documento',
        uploadDate: '2026-05-18',
        status: 'validado',
        feedback: 'Buen mapeo del proceso. Sugiero profundizar en puntos de fricción identificados.'
      }
    ]
  }
];

// Mock Portfolio
export const mockPortfolio: Portfolio = {
  studentId: 'u-001',
  studentName: 'María González',
  studentEmail: 'maria.gonzalez@universidad.edu.pe',
  validatedRole: 'Data Analyst',
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
  ],
  activeChallenge: {
    challengeId: 'ch-003',
    challengeTitle: 'Optimización de Sistema de Detección de Fraude',
    company: 'BCP',
    phase: 'preselección',
    canApplyToOtherChallenges: false
  },
  skills: {
    technical: [
      { name: 'Power BI', level: 90, validated: true },
      { name: 'SQL', level: 85, validated: true },
      { name: 'Python', level: 75, validated: true },
      { name: 'Tableau', level: 70, validated: false },
      { name: 'Excel Avanzado', level: 88, validated: true }
    ],
    soft: [
      { name: 'Liderazgo', level: 85, validated: true },
      { name: 'Comunicación', level: 90, validated: true },
      { name: 'Trabajo en Equipo', level: 92, validated: true },
      { name: 'Gestión de Tiempo', level: 80, validated: true },
      { name: 'Adaptabilidad', level: 88, validated: true }
    ]
  },
  recommendations: [
    {
      from: 'Rodrigo Santillán',
      role: 'Senior Data Architect',
      company: 'BCP',
      text: 'María demostró excelente capacidad técnica en el desarrollo del dashboard. Su habilidad para traducir requisitos de negocio en visualizaciones efectivas es destacable. Recomendada para roles de Data Analyst o Business Intelligence.',
      date: '2026-04-12'
    },
    {
      from: 'Isabel Ramírez',
      role: 'HR Manager',
      company: 'BCP',
      text: 'Durante el Assessment Center, María mostró excepcionales habilidades de liderazgo y comunicación. Gestionó bien la presión y mantuvo al equipo enfocado en los objetivos. Su capacidad de escucha activa y colaboración fueron evidentes.',
      date: '2026-04-11'
    }
  ],
  evidencePortfolio: {
    portfolioId: 'TEL-PORT-2026-001-MGO',
    status: 'solution_sent_to_company',
    evidenceSummary: 'Finalista evaluada con solución enviada al área solicitante de BCP.',
    experienceRecord: {
      company: 'BCP',
      challengeTitle: 'Dashboard de Análisis de Comportamiento de Cliente',
      rolePerformed: 'Líder Técnico',
      deliverableSent: true,
      validationSource: 'Especialista técnico senior + área solicitante',
      date: '2026-04-10'
    }
  },
  assessmentPassport: {
    status: 'not_generated',
    consentGiven: false
  }
};

// Mock Senior Referral Requests
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

// Mock Job Opportunities
export const mockJobOpportunities: JobOpportunity[] = [
  {
    id: 'job-001',
    title: 'Data Analyst Junior',
    company: 'BCP',
    companyLogo: '🏦',
    location: 'Lima, Perú',
    type: 'Tiempo completo',
    matchScore: 95,
    requiredRole: 'Data Analyst',
    description: 'Buscamos un Data Analyst Junior para unirse a nuestro equipo de Analítica Comercial. Trabajarás en proyectos de análisis de comportamiento de clientes y generación de insights para estrategias comerciales.',
    requirements: [
      'Dominio de Power BI o Tableau',
      'SQL intermedio',
      'Experiencia con Python (deseable)',
      'Capacidad analítica y comunicación efectiva'
    ],
    benefits: [
      'Seguro de salud completo',
      'Bono por desempeño',
      'Capacitaciones continuas',
      'Ambiente de trabajo colaborativo'
    ],
    fastTrackEligible: true,
    recruiterId: 'rec-001'
  },
  {
    id: 'job-002',
    title: 'Business Intelligence Analyst',
    company: 'Credicorp Capital',
    companyLogo: '📊',
    location: 'Lima, Perú',
    type: 'Tiempo completo',
    matchScore: 88,
    requiredRole: 'Data Analyst',
    description: 'Únete a nuestro equipo de BI para desarrollar soluciones de análisis y reporting que soporten la toma de decisiones estratégicas.',
    requirements: [
      'Power BI avanzado',
      'SQL avanzado',
      'Experiencia en modelado de datos',
      'Habilidades de comunicación'
    ],
    benefits: [
      'Seguro de salud premium',
      'Bonos trimestrales',
      'Horario flexible',
      'Trabajo remoto híbrido'
    ],
    fastTrackEligible: true,
    recruiterId: 'rec-002'
  },
  {
    id: 'job-003',
    title: 'Práctica Profesional - Analítica',
    company: 'Pacífico Seguros',
    companyLogo: '🛡️',
    location: 'Lima, Perú',
    type: 'Práctica',
    matchScore: 92,
    requiredRole: 'Data Analyst',
    description: 'Práctica profesional de 6 meses en el área de Analítica y Business Intelligence. Oportunidad de aprender y contribuir en proyectos reales.',
    requirements: [
      'Estudiante de últimos ciclos o egresado',
      'Conocimientos de Power BI o Tableau',
      'SQL básico',
      'Proactividad y ganas de aprender'
    ],
    benefits: [
      'Remuneración competitiva',
      'Posibilidad de contratación',
      'Mentoría senior',
      'Certificación al finalizar'
    ],
    fastTrackEligible: true,
    recruiterId: 'rec-003'
  },
  {
    id: 'job-004',
    title: 'UX/UI Designer Junior',
    company: 'Yape',
    companyLogo: '💜',
    location: 'Lima, Perú',
    type: 'Tiempo completo',
    matchScore: 72,
    requiredRole: 'UX Designer',
    description: 'Buscamos diseñador UX/UI para mejorar la experiencia de nuestros usuarios en la app móvil más usada del Perú.',
    requirements: [
      'Experiencia con Figma',
      'Portfolio de proyectos',
      'User research',
      'Diseño de interfaces móviles'
    ],
    benefits: [
      'Ambiente startup',
      'Equipos de última generación',
      'Presupuesto para conferencias',
      'Stock options'
    ],
    fastTrackEligible: false,
    recruiterId: 'rec-004'
  }
];

export const mockAssessments: Assessment[] = [
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
  },
  {
    id: 'ass-001',
    studentId: 'u-001',
    challengeId: 'ch-002',
    technicalScore: 92,
    softSkillsScore: 88,
    technicalFeedback: 'Excelente dominio técnico de Power BI. La arquitectura del dashboard es sólida y las visualizaciones son claras y efectivas. Mostró gran capacidad para optimizar queries SQL.',
    softSkillsFeedback: 'Liderazgo natural, comunicación clara y efectiva. Manejó muy bien la presión durante el assessment en vivo. Excelente colaboración con el equipo.',
    validator: 'Rodrigo Santillán',
    hrObserver: 'Isabel Ramírez',
    competencies: [
      { name: 'Liderazgo', score: 85, observations: 'Tomó iniciativa y guió al equipo efectivamente' },
      { name: 'Comunicación', score: 90, observations: 'Explicó conceptos técnicos de forma clara' },
      { name: 'Trabajo en Equipo', score: 92, observations: 'Excelente colaboración y apoyo a compañeros' },
      { name: 'Manejo de Presión', score: 85, observations: 'Mantuvo calma y enfoque bajo tiempo limitado' },
      { name: 'Adaptabilidad', score: 88, observations: 'Ajustó enfoque rápidamente ante feedback' },
      { name: 'Pensamiento Analítico', score: 94, observations: 'Excelente capacidad de análisis y síntesis' }
    ],
    date: '2026-04-10'
  }
];
