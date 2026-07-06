import type { SvgIconComponent } from '@mui/icons-material';

export type Difficulty = 'Básico' | 'Intermedio' | 'Avanzado';

export type Prompt = {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  usefulness: number;
  text: string;
};

export type Demo = {
  objective: string;
  workflow: string[];
  questions: string[];
  expectedResults: string[];
  presenterTips: string[];
};

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  duration: string;
  hookQuestion?: string;
  realCase?: {
    title: string;
    situation: string;
    teacherProblem?: string;
  };
  learningCycle?: {
    why: string;
    what: string;
    how: string;
    demo: string;
    practice: string;
    reflection: string;
    transfer: string;
  };
  comparisonCards?: Array<{
    title: string;
    purpose: string;
    bestFor: string[];
  }>;
  contentSections?: Array<{
    title: string;
    keyIdea: string;
    points: string[];
    visualType: 'timeline' | 'comparison' | 'decision-tree' | 'workflow' | 'cards';
    imageKey?:
      | 'gemini-vs-notebooklm'
      | 'docente-aumentado'
      | 'arquitectura-notebook'
      | 'ciclo-docente'
      | 'reto-actual-docente'
      | 'gestion-conocimiento'
      | 'cambia-ia'
      | 'elegir-herramienta'
      | 'docente-notebooklm-fuentes'
      | 'regla-oro'
      | 'fuentes-importan'
      | 'distintas-fuentes'
      | 'prompt-contextualizado'
      | 'plantilla-prompt'
      | 'studio-productos'
      | 'chat-productos-docentes'
      | 'actividades-posibilidades'
      | 'una-fuente-multiples-actividades'
      | 'planeacion-transformacion'
      | 'planeaciones-tipos'
      | 'evaluacion-reto'
      | 'evaluacion-catalogo'
      | 'notebooklm-logros'
      | 'catalogo-profesional'
      | 'flujo-trabajo-docente'
      | 'notebook-colegiado'
      | 'docente-decide'
      | 'proteccion-datos-pensamiento-critico'
      | 'plan-implementacion';
    pointDetails?: Array<{
      label: string;
      detail: string;
    }>;
    reflectionQuestion: string;
  }>;
  objectives: string[];
  keyIdeas: string[];
  analogy: string;
  diagram: {
    title: string;
    steps: string[];
  };
  prompts: Prompt[];
  demo: Demo;
  activity: {
    title: string;
    steps: string[];
    deliverable: string;
  };
  reflection: string[];
  commonMistakes?: string[];
  microAssessment?: {
    reflectionQuestion: string;
    practicalQuestion: string;
    knowledgeCheck: {
      question: string;
      options: string[];
      correctAnswer: string;
      feedback: string;
    };
  };
  facilitatorTips?: string[];
  nextLessonBridge?: string;
  summary: string;
  takeaway: string;
  resources: string[];
};

export type Module = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  icon: SvgIconComponent;
  lessons: Lesson[];
};

export type Resource = {
  id: string;
  title: string;
  category: string;
  description: string;
  url?: string;
};


export type SearchItem = {
  id: string;
  title: string;
  type: 'Lección' | 'Prompt' | 'Recurso' | 'Actividad' | 'Página';
  description: string;
  path: string;
};
