import type { Lesson } from '../types';
import { keyedVisuals, lessonVisuals, moduleVisuals } from './visuals';
import { modules } from './course';

export type PresentationMoment = {
  id: string;
  title: string;
  subtitle: string;
  visibleSentence: string;
  visual:
    | { type: 'image'; src: string; alt: string }
    | { type: 'diagram'; title: string; steps: string[] };
  reflectionQuestion: string;
  quote?: string;
  analogy?: string;
  presenterNotes: {
    timing: string;
    speakingPoints: string[];
    facilitatorReminder: string;
    expectedAnswers?: string[];
    transition: string;
  };
};

export type ManualLesson = {
  fullExplanation: string;
  whyItMatters: string;
  goodExample: string;
  badExample: string;
  bestPractices: string[];
  commonMistakes: string[];
  advancedRecommendations: string[];
  faq: Array<{ question: string; answer: string }>;
  references: string[];
  relatedLessons: string[];
};

const short = (text: string, fallback: string) => text || fallback;

const fitScreen = (text: string, maxWords = 38) => {
  const words = text.split(/\s+/);
  return words.length <= maxWords ? text : `${words.slice(0, maxWords).join(' ')}...`;
};

const getVisual = (lesson: Lesson): { src: string; alt: string } => {
  const module = modules.find((item) => item.id === lesson.moduleId);
  const visual = lessonVisuals[lesson.id] ?? (module ? moduleVisuals[module.id] : undefined);
  return visual ?? moduleVisuals['modulo-1'];
};

export function getPresentationMoments(lesson: Lesson): PresentationMoment[] {
  if (lesson.id === 'prompt-engineering') {
    return [
      {
        id: 'prompt-contextualizado',
        title: 'Prompt contextualizado',
        subtitle: lesson.title,
        visibleSentence: '',
        visual: {
          type: 'image',
          src: keyedVisuals['prompt-contextualizado'].src,
          alt: keyedVisuals['prompt-contextualizado'].alt
        },
        reflectionQuestion: '',
        presenterNotes: {
          timing: '6 min',
          speakingPoints: [],
          facilitatorReminder: '',
          transition: ''
        }
      },
      {
        id: 'plantilla-prompt',
        title: 'Plantilla de prompt profesional',
        subtitle: lesson.title,
        visibleSentence: '',
        visual: {
          type: 'image',
          src: keyedVisuals['plantilla-prompt'].src,
          alt: keyedVisuals['plantilla-prompt'].alt
        },
        reflectionQuestion: '',
        presenterNotes: {
          timing: '7 min',
          speakingPoints: [],
          facilitatorReminder: '',
          transition: ''
        }
      }
    ];
  }

  if (lesson.id === 'notebooklm-studio') {
    return [
      {
        id: 'studio-productos',
        title: 'Studio',
        subtitle: lesson.title,
        visibleSentence: '',
        visual: {
          type: 'image',
          src: keyedVisuals['studio-productos'].src,
          alt: keyedVisuals['studio-productos'].alt
        },
        reflectionQuestion: '',
        presenterNotes: {
          timing: '7 min',
          speakingPoints: [],
          facilitatorReminder: '',
          transition: ''
        }
      },
      {
        id: 'chat-productos-docentes',
        title: 'Chat',
        subtitle: lesson.title,
        visibleSentence: '',
        visual: {
          type: 'image',
          src: keyedVisuals['chat-productos-docentes'].src,
          alt: keyedVisuals['chat-productos-docentes'].alt
        },
        reflectionQuestion: '',
        presenterNotes: {
          timing: '7 min',
          speakingPoints: [],
          facilitatorReminder: '',
          transition: ''
        }
      }
    ];
  }

  const visual = getVisual(lesson);
  const reflection = lesson.reflection[0] ?? '¿Qué decisión docente cambia después de esta idea?';
  const activitySentence =
    lesson.activity.deliverable.length > 130
      ? 'Construye una evidencia breve que puedas llevar a tu aula esta semana.'
      : lesson.activity.deliverable;

  const contentSections = lesson.contentSections;

  if (contentSections?.length) {
    return contentSections.map((section, index) => {
      const keyedVisual = section.imageKey ? keyedVisuals[section.imageKey] : null;

      return {
        id: `section-${index + 1}`,
        title: section.title,
        subtitle: lesson.title,
        visibleSentence: fitScreen(section.keyIdea, 30),
        visual: keyedVisual
          ? { type: 'image' as const, src: keyedVisual.src, alt: keyedVisual.alt }
          : { type: 'diagram' as const, title: section.title, steps: section.points },
        reflectionQuestion: section.reflectionQuestion,
        presenterNotes: {
          timing: index === 0 ? '2 min' : '2–3 min',
          speakingPoints: [
            'Mantén una sola idea visible y desarrolla el resto oralmente.',
            'Conecta el punto con una situación real de secundaria pública.',
            'Evita definiciones largas; pregunta primero y explica después.'
          ],
          facilitatorReminder:
            index === contentSections.length - 1
              ? 'Cierra preparando la demostración en vivo.'
              : 'Haz una pausa breve antes de avanzar.',
          expectedAnswers: section.points,
          transition:
            index === contentSections.length - 1
              ? 'Ahora vamos a comprobarlo comparando buscador, Gemini y NotebookLM.'
              : 'El siguiente momento muestra otra parte del cambio.'
        }
      };
    });
  }

  return [
    {
      id: 'hook',
      title: 'Un problema real',
      subtitle: lesson.title,
      visibleSentence: fitScreen(short(
        lesson.hookQuestion ?? lesson.realCase?.teacherProblem ?? lesson.summary,
        'La IA debe resolver una necesidad docente real, no solo producir texto.'
      )),
      visual: { type: 'image', src: visual.src, alt: visual.alt },
      reflectionQuestion: reflection,
      presenterNotes: {
        timing: '2 min',
        speakingPoints: [
          'Inicia desde una situación cotidiana del aula o del trabajo administrativo.',
          'Pide que cada docente piense en una tarea real antes de mencionar funciones.',
          'Mantén la pantalla breve: la explicación vive en tu voz, no en el texto.'
        ],
        facilitatorReminder: 'No abras NotebookLM todavía. Primero instala la necesidad.',
        expectedAnswers: ['Buscar recursos', 'Adaptar materiales', 'Evaluar', 'Organizar evidencias'],
        transition: 'Ahora que el problema está claro, vamos a nombrar la idea clave.'
      }
    },
    {
      id: 'key-concept',
      title: 'La idea clave',
      subtitle: 'Una decisión pedagógica',
      visibleSentence: fitScreen(lesson.takeaway),
      visual: { type: 'image', src: visual.src, alt: visual.alt },
      reflectionQuestion: lesson.reflection[1] ?? reflection,
      quote: 'La IA propone; el docente decide.',
      presenterNotes: {
        timing: '2 min',
        speakingPoints: [
          'Señala una sola idea. Evita definiciones largas.',
          'Conecta la idea con NEM: contexto, inclusión, evaluación formativa y comunidad.',
          'Pregunta qué parte de la decisión no se debe delegar.'
        ],
        facilitatorReminder: 'Usa lenguaje conversacional, no académico.',
        transition: 'Para decidir bien, necesitamos ver el mapa completo.'
      }
    },
    {
      id: 'visual-comparison',
      title: lesson.comparisonCards ? 'Comparar para decidir' : 'Mapa de trabajo',
      subtitle: 'Ver antes de explicar',
      visibleSentence: fitScreen(lesson.comparisonCards
        ? 'Cada herramienta tiene valor cuando el docente sabe qué necesita resolver.'
        : 'El proceso funciona cuando fuentes, propósito y evidencia permanecen conectados.'),
      visual: lesson.comparisonCards
        ? { type: 'diagram', title: 'Criterio de uso', steps: lesson.comparisonCards.map((card) => card.title) }
        : { type: 'diagram', title: lesson.diagram.title, steps: lesson.diagram.steps },
      reflectionQuestion: '¿Dónde se rompe este flujo en mi práctica actual?',
      presenterNotes: {
        timing: '3 min',
        speakingPoints: [
          'Usa el diagrama como señalización visual: no leas cada parte.',
          'Pide al grupo ubicar una tarea propia dentro del mapa.',
          'Aterriza la comparación en una decisión docente concreta.'
        ],
        facilitatorReminder: 'Si hay comparación, evita convertirla en tabla larga.',
        expectedAnswers: ['Me faltan fuentes', 'Me falta criterio de evaluación', 'Uso la herramienta incorrecta'],
        transition: 'Vamos a verlo en acción con una demostración breve.'
      }
    },
    {
      id: 'live-demo',
      title: 'Demostración en vivo',
      subtitle: 'Mirar el proceso',
      visibleSentence: fitScreen(lesson.demo.objective),
      visual: { type: 'diagram', title: 'Demo', steps: lesson.demo.workflow.slice(0, 4) },
      reflectionQuestion: lesson.demo.questions[0] ?? reflection,
      presenterNotes: {
        timing: '4 min',
        speakingPoints: [
          'Modela el pensamiento docente mientras haces la demo.',
          'Nombra qué fuente usas y por qué.',
          'Después de la respuesta, revisa antes de celebrar.'
        ],
        facilitatorReminder: 'No improvises con demasiadas pestañas. Una demo corta enseña más.',
        expectedAnswers: lesson.demo.expectedResults,
        transition: 'Ya vimos el proceso. Ahora cada docente lo prueba en pequeño.'
      }
    },
    {
      id: 'mini-activity',
      title: 'Actividad de 5 minutos',
      subtitle: lesson.activity.title,
      visibleSentence: fitScreen(activitySentence),
      visual: { type: 'diagram', title: 'Trabajo breve', steps: lesson.activity.steps.slice(0, 4) },
      reflectionQuestion: '¿Qué producto puedo terminar hoy, aunque sea en versión mínima?',
      presenterNotes: {
        timing: '5 min',
        speakingPoints: [
          'Da instrucciones simples y visibles.',
          'Pide trabajo en pareja o tríos para reducir bloqueo.',
          'Cierra con una evidencia concreta, no con participación general.'
        ],
        facilitatorReminder: 'Cronometra. La actividad debe sentirse posible.',
        transition: 'Cerramos con la idea que debe viajar al aula.'
      }
    },
    {
      id: 'takeaway',
      title: 'Para llevar al aula',
      subtitle: 'Transferencia',
      visibleSentence: fitScreen(lesson.nextLessonBridge ?? lesson.takeaway),
      visual: { type: 'image', src: visual.src, alt: visual.alt },
      reflectionQuestion: lesson.reflection[2] ?? reflection,
      analogy: lesson.analogy,
      presenterNotes: {
        timing: '2 min',
        speakingPoints: [
          'Cierra con una acción pequeña y realista.',
          'Conecta con la siguiente lección o módulo.',
          'Pide que escriban una decisión, no una intención vaga.'
        ],
        facilitatorReminder: 'La transferencia vale más que una conclusión elegante.',
        transition: 'Avanza a la siguiente lección cuando el grupo tenga claro qué hará.'
      }
    }
  ];
}

export function getManualLesson(lesson: Lesson): ManualLesson {
  return {
    fullExplanation: lesson.summary,
    whyItMatters: lesson.takeaway,
    goodExample:
      lesson.prompts[0]?.text ??
      'Una buena consigna integra propósito, contexto del grupo, fuentes confiables, producto esperado y criterio de evaluación.',
    badExample: 'Hazme una clase sobre este tema.',
    bestPractices: [
      'Partir de una necesidad docente real.',
      'Usar fuentes pertinentes y verificables.',
      'Pedir evidencia de aprendizaje, no solo actividad.',
      'Revisar sesgos, lenguaje e inclusión antes de usar.'
    ],
    commonMistakes: lesson.commonMistakes ?? [
      'Aceptar la primera respuesta sin revisión.',
      'No incluir contexto del grupo.',
      'Pedir demasiados productos en una sola consigna.'
    ],
    advancedRecommendations: [
      'Pide una versión alternativa para estudiantes con distintos ritmos.',
      'Solicita que la IA separe evidencia, interpretación y recomendación.',
      'Incluye una pregunta metacognitiva al final de cada actividad.'
    ],
    faq: [
      {
        question: '¿Puedo usar esto directamente en clase?',
        answer: 'Sí, siempre que revises fuentes, lenguaje, pertinencia para tu grupo y criterios de evaluación formativa.'
      },
      {
        question: '¿Qué debo evitar?',
        answer: 'Evita compartir respuestas generadas sin validación docente o sin ajuste al contexto escolar.'
      }
    ],
    references: lesson.resources,
    relatedLessons: [lesson.nextLessonBridge ?? 'Continúa con la siguiente lección para transferir esta idea a una práctica concreta.']
  };
}
