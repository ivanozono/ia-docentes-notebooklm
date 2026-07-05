import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import type { Demo, Lesson, Module, Prompt, Resource, SearchItem, StudioProduct } from '../types';

const prompt = (
  id: string,
  title: string,
  category: string,
  difficulty: Prompt['difficulty'],
  usefulness: number,
  text: string
): Prompt => ({ id, title, category, difficulty, usefulness, text });

const lesson = (
  id: string,
  moduleId: string,
  title: string,
  duration: string,
  focus: string,
  promptCategory: string
): Lesson => ({
  id,
  moduleId,
  title,
  duration,
  objectives: [
    `Reconocer cómo ${focus.toLowerCase()} fortalece el codiseño didáctico en secundaria pública.`,
    'Traducir una necesidad del grupo en una consigna clara para NotebookLM, con fuentes, contexto, criterio y producto esperado.',
    'Diseñar una evidencia breve de evaluación formativa vinculada con un PDA, un campo formativo y un eje articulador.'
  ],
  keyIdeas: [
    'La IA es más útil cuando el colectivo docente define propósito, fuentes confiables, contexto del grupo y criterios de revisión.',
    'NotebookLM no sustituye el juicio pedagógico: ayuda a leer, organizar, contrastar y convertir fuentes en experiencias de aprendizaje.',
    'La Nueva Escuela Mexicana pide propuestas situadas, inclusivas, colaborativas y vinculadas con la comunidad.'
  ],
  analogy: `Usa NotebookLM como una mesa de codiseño: el docente coloca programas, materiales y evidencias; la IA propone; el docente valida, ajusta y decide con mirada pedagógica.`,
  diagram: {
    title: `Flujo NEM para ${title.toLowerCase()}`,
    steps: ['Grupo y territorio', 'PDA y campo formativo', 'Fuentes en NotebookLM', 'Consigna docente', 'Evidencia formativa']
  },
  prompts: [
    prompt(
      `${id}-diagnostico`,
      `Diagnóstico situado: ${title}`,
      promptCategory,
      'Básico',
      88,
      `Actúa como asesor pedagógico de secundaria pública mexicana. Con base únicamente en mis fuentes de NotebookLM, identifica 5 oportunidades para trabajar "${title}" desde la Nueva Escuela Mexicana. Para cada oportunidad incluye: campo formativo, PDA posible, eje articulador, situación del contexto, actividad breve, evidencia formativa, ajuste razonable para inclusión y cuidado ético.`
    ),
    prompt(
      `${id}-secuencia`,
      `Secuencia didáctica NEM: ${title}`,
      promptCategory,
      'Intermedio',
      94,
      `Diseña una secuencia de 50 minutos sobre "${title}" para secundaria pública. Alinea la propuesta con la Nueva Escuela Mexicana: campo formativo, PDA, eje articulador, problema o situación comunitaria, aprendizaje colaborativo, evaluación formativa y cierre metacognitivo. Entrega pasos concretos, materiales mínimos y criterios de logro observables.`
    ),
    prompt(
      `${id}-revisión`,
      'Revisión colegiada antes de aula',
      promptCategory,
      'Avanzado',
      91,
      `Revisa la secuencia anterior como si fueras parte del Consejo Técnico Escolar. Señala supuestos débiles, sesgos, riesgos de exclusión, barreras para la participación, ajustes para distintos ritmos de aprendizaje y mejoras para fortalecer el vínculo aula-escuela-comunidad. Devuelve una versión corregida y lista para pilotear.`
    )
  ],
  demo: {
    objective: `Mostrar cómo convertir fuentes escolares en una experiencia situada sobre ${title.toLowerCase()}.`,
    workflow: [
      'Abrir un cuaderno de NotebookLM organizado por campo formativo o proyecto.',
      'Agregar programa sintético, planeación, lectura, diagnóstico del grupo o evidencia de estudiantes como fuente.',
      'Pedir una síntesis orientada al codiseño didáctico, no una respuesta genérica.',
      'Convertir la respuesta en actividad, rúbrica, guía de trabajo o producto de Studio.',
      'Verificar contra las fuentes, ajustar lenguaje para secundaria y decidir qué se lleva al aula.'
    ],
    questions: [
      `¿Qué ideas de mis fuentes ayudan a trabajar "${title}" desde un PDA?`,
      '¿Qué actividad colaborativa puede realizarse en 20 minutos con materiales disponibles?',
      '¿Qué evidencia rápida permitiría valorar avances sin reducir la evaluación a una calificación?'
    ],
    expectedResults: [
      'Una decisión didáctica justificada con fuentes del notebook.',
      'Una actividad viable para secundaria pública y adaptable al contexto.',
      'Un criterio de evaluación formativa claro, observable e inclusivo.'
    ],
    presenterTips: [
      'Explica por qué cada fuente entra al cuaderno de NotebookLM y qué decisión docente apoya.',
      'Modela la verificación crítica: una respuesta bonita no siempre es una respuesta correcta.',
      'Conecta el ejemplo con una situación real del grupo, la escuela o la comunidad.'
    ]
  },
  activity: {
    title: `Laboratorio: prototipo situado de ${title.toLowerCase()}`,
    steps: [
      'Elegir un contenido o PDA de su asignatura o campo formativo.',
      'Redactar una consigna para IA con contexto, fuente, producto, criterio y cuidado ético.',
      'Comparar dos respuestas de NotebookLM y justificar cuál sirve mejor para el grupo.',
      'Ajustar la propuesta para una barrera de participación o necesidad específica del aula.'
    ],
    deliverable: 'Una actividad de aula de una página con PDA, eje articulador, consigna para IA, evidencia y criterio de logro.'
  },
  reflection: [
    '¿Qué decisión pedagógica mejoró gracias al uso de fuentes?',
    '¿Qué parte de la respuesta requiere validación docente o diálogo colegiado?',
    '¿Cómo explicaría esta actividad en Consejo Técnico Escolar o a una familia?'
  ],
  summary: `${title} ayuda a pasar de pedir respuestas rápidas a codiseñar experiencias de aprendizaje verificables, situadas e inclusivas.`,
  takeaway: 'La calidad de la experiencia depende del criterio docente, las fuentes y la pertinencia para el grupo, no solo de la herramienta.',
  resources: ['Programa sintético NEM', 'Planeación didáctica', 'Diagnóstico del grupo', 'Evidencias de aprendizaje']
});

const module1Lessons: Lesson[] = [
  {
    id: 'nueva-generacion-ia',
    moduleId: 'modulo-1',
    title: '¿Por qué la IA está transformando la educación?',
    duration: '15 min',
    hookQuestion: '¿Dónde se va realmente nuestro tiempo docente?',
    realCase: {
      title: 'La jornada invisible del docente',
      situation:
        'Además de enseñar, el docente busca recursos, revisa documentos, adapta materiales, prepara evidencias, responde mensajes y organiza información que muchas veces queda dispersa.',
      teacherProblem: 'El reto ya no es tener acceso a información; el reto es convertirla en conocimiento útil para decidir mejor.'
    },
    learningCycle: {
      why: 'El docente no necesita más información; necesita convertir información en decisiones pedagógicas.',
      what: 'La IA puede apoyar tareas intelectuales si se usa con fuentes, contexto y criterio docente.',
      how: 'Distinguiendo cuándo conviene buscar, generar ideas o trabajar con documentos propios.',
      demo: 'Resolver una misma necesidad con buscador, Gemini y NotebookLM para comparar utilidad pedagógica.',
      practice: 'Clasificar tareas docentes según la herramienta que mejor las apoya.',
      reflection: 'Distinguir qué puede apoyar la IA y qué debe seguir bajo juicio profesional.',
      transfer: 'Elegir una tarea repetitiva de la semana para trabajarla con NotebookLM.'
    },
    objectives: [
      'Comprender por qué la IA representa un cambio de paradigma para la práctica docente.',
      'Identificar el problema que NotebookLM ayuda a resolver.',
      'Diferenciar el papel del docente y el de la IA.'
    ],
    keyIdeas: [
      'La IA no empieza en la consigna: empieza cuando el docente define el problema pedagógico.',
      'Gemini ayuda a explorar ideas; NotebookLM ayuda a pensar con fuentes propias.',
      'En la NEM, el valor docente está en codiseñar experiencias situadas, no en repetir información.'
    ],
    contentSections: [
      {
        title: 'El reto actual del docente',
        keyIdea: 'La jornada invisible consume tiempo que podría volver al aula.',
        points: [
          'La jornada invisible del docente.',
          'Sobrecarga de información.',
          '¿Dónde se va realmente nuestro tiempo?'
        ],
        visualType: 'cards',
        imageKey: 'reto-actual-docente',
        pointDetails: [
          {
            label: 'La jornada invisible del docente.',
            detail: 'Son las tareas que casi nadie ve: mensajes, reportes, búsqueda de materiales, ajustes de planeación y preparación de evidencias.'
          },
          {
            label: 'Sobrecarga de información.',
            detail: 'No falta información; sobran documentos, enlaces, versiones y pendientes que compiten por la atención docente.'
          },
          {
            label: '¿Dónde se va realmente nuestro tiempo?',
            detail: 'La pregunta abre el taller: identificar qué consume tiempo permite decidir dónde la IA puede apoyar sin reemplazar al docente.'
          }
        ],
        reflectionQuestion: '¿Qué tarea invisible te quita más energía cada semana?'
      },
      {
        title: 'Del acceso a la gestión del conocimiento',
        keyIdea: 'El reto dejó de ser encontrar información; ahora es organizarla para decidir.',
        points: [
          'Antes: buscar información.',
          'Hoy: organizar información.',
          'Mañana: tomar mejores decisiones pedagógicas.'
        ],
        visualType: 'timeline',
        imageKey: 'gestion-conocimiento',
        pointDetails: [
          {
            label: 'Antes: buscar información.',
            detail: 'El valor estaba en localizar datos, materiales o referencias entre muchas fuentes abiertas.'
          },
          {
            label: 'Hoy: organizar información.',
            detail: 'La dificultad está en ordenar lo que ya tenemos para que sea útil, confiable y fácil de transformar.'
          },
          {
            label: 'Mañana: tomar mejores decisiones pedagógicas.',
            detail: 'La meta no es acumular recursos; es convertirlos en decisiones claras para el aula, la evaluación y la inclusión.'
          }
        ],
        reflectionQuestion: '¿Qué información ya tienes, pero todavía no usas bien?'
      },
      {
        title: '¿Qué cambia con la Inteligencia Artificial?',
        keyIdea: 'La IA puede apoyar el trabajo intelectual, pero no reemplaza el juicio docente.',
        points: [
          'La IA como apoyo al trabajo intelectual.',
          'Lo que la IA sí puede hacer.',
          'Lo que sigue siendo responsabilidad del docente.'
        ],
        visualType: 'decision-tree',
        imageKey: 'cambia-ia',
        pointDetails: [
          {
            label: 'La IA como apoyo al trabajo intelectual.',
            detail: 'Puede ayudar a resumir, comparar, generar opciones, detectar patrones y preparar materiales revisables.'
          },
          {
            label: 'Lo que la IA sí puede hacer.',
            detail: 'Puede acelerar borradores, organizar fuentes, proponer actividades y apoyar la planeación o la evaluación formativa.'
          },
          {
            label: 'Lo que sigue siendo responsabilidad del docente.',
            detail: 'Comprender al grupo, cuidar la relación pedagógica, decidir con contexto, acompañar y valorar con criterio humano.'
          }
        ],
        reflectionQuestion: '¿Qué decisión de aula nunca delegarías a una IA?'
      },
      {
        title: 'No toda la IA sirve para lo mismo',
        keyIdea: 'Elegir bien la herramienta es una decisión pedagógica.',
        points: [
          'Buscadores.',
          'Gemini.',
          'NotebookLM.',
          'Elegir la herramienta adecuada según la necesidad.'
        ],
        visualType: 'comparison',
        imageKey: 'elegir-herramienta',
        pointDetails: [
          {
            label: 'Buscadores.',
            detail: 'Sirven para encontrar información abierta, actualizada o externa a tus documentos.'
          },
          {
            label: 'Gemini.',
            detail: 'Sirve para explorar ideas, redactar alternativas y obtener explicaciones generales.'
          },
          {
            label: 'NotebookLM.',
            detail: 'Sirve para trabajar con tus propias fuentes: programas, libros, planeaciones, rúbricas y evidencias.'
          },
          {
            label: 'Elegir la herramienta adecuada según la necesidad.',
            detail: 'La pregunta central es: ¿necesito buscar, crear ideas o trabajar con documentos propios?'
          }
        ],
        reflectionQuestion: '¿Qué herramienta usarías para revisar tus propios documentos?'
      },
      {
        title: 'Gemini vs NotebookLM',
        keyIdea: 'Gemini explora; NotebookLM trabaja con tus fuentes.',
        points: [
          'IA general vs IA basada en tus fuentes.',
          '¿Cuándo utilizar cada una?',
          'Casos prácticos para un docente de secundaria.'
        ],
        visualType: 'comparison',
        imageKey: 'gemini-vs-notebooklm',
        pointDetails: [
          {
            label: 'IA general vs IA basada en tus fuentes.',
            detail: 'Gemini responde desde conocimiento general; NotebookLM trabaja con los documentos que tú decides cargar.'
          },
          {
            label: '¿Cuándo utilizar cada una?',
            detail: 'Usa Gemini para explorar posibilidades y NotebookLM cuando necesitas fidelidad a tus fuentes escolares.'
          },
          {
            label: 'Casos prácticos para un docente de secundaria.',
            detail: 'Gemini puede ayudar a generar ideas; NotebookLM puede analizar tu programa, libro, rúbrica o diagnóstico del grupo.'
          }
        ],
        reflectionQuestion: '¿En qué caso necesitas creatividad y en cuál necesitas fidelidad a fuentes?'
      },
      {
        title: 'La IA como asistente pedagógico',
        keyIdea: 'La IA debe potenciar al docente, no reemplazarlo.',
        points: [
          'Recuperar tiempo para enseñar.',
          'Organizar documentos.',
          'Apoyar la planeación y evaluación.',
          'Potenciar, no reemplazar, al docente.'
        ],
        visualType: 'workflow',
        pointDetails: [
          {
            label: 'Recuperar tiempo para enseñar.',
            detail: 'La IA debe liberar tiempo de tareas repetitivas para devolverlo a la interacción con estudiantes.'
          },
          {
            label: 'Organizar documentos.',
            detail: 'NotebookLM ayuda cuando las fuentes están seleccionadas y tienen un propósito pedagógico claro.'
          },
          {
            label: 'Apoyar la planeación y evaluación.',
            detail: 'Puede proponer borradores, criterios, preguntas y recursos que el docente revisa y adapta.'
          },
          {
            label: 'Potenciar, no reemplazar, al docente.',
            detail: 'La decisión final, el acompañamiento y el sentido humano del aprendizaje siguen siendo docentes.'
          }
        ],
        reflectionQuestion: '¿Qué tiempo te gustaría recuperar para dedicarlo a tus estudiantes?'
      }
    ],
    comparisonCards: [
      {
        title: 'Buscador',
        purpose: 'Encontrar información abierta o actual.',
        bestFor: ['Localizar fuentes', 'Verificar datos', 'Explorar referencias externas']
      },
      {
        title: 'Gemini',
        purpose: 'Generar ideas y explicaciones generales.',
        bestFor: ['Lluvia de ideas', 'Creatividad', 'Redacción inicial']
      },
      {
        title: 'NotebookLM',
        purpose: 'Trabajar con documentos propios y fuentes cargadas.',
        bestFor: ['Planeación', 'Evaluación', 'Libros de texto', 'Programa analítico']
      }
    ],
    analogy:
      'Gemini se parece a invitar a una persona experta que sabe de muchos temas. NotebookLM se parece a sentarla dentro de tu biblioteca profesional: conoce tus programas, lecturas, evidencias y acuerdos. El docente sigue siendo quien decide.',
    diagram: {
      title: 'De información dispersa a decisión pedagógica',
      steps: ['Tarea docente real', 'Herramienta adecuada', 'Fuentes pertinentes', 'Criterio docente', 'Decisión para el aula']
    },
    prompts: [
      prompt(
        'nueva-generacion-ia-tareas',
        'Mapa de tareas docentes apoyadas por IA',
        'Fundamentos NEM',
        'Básico',
        90,
        'Actúa como asesor pedagógico de secundaria pública mexicana. Ayúdame a clasificar estas tareas docentes en tres grupos: puede apoyar la IA, puede apoyar con revisión docente, no conviene delegar. Para cada tarea explica el riesgo, el beneficio y la herramienta más adecuada: buscador, Gemini o NotebookLM.'
      ),
      prompt(
        'nueva-generacion-ia-decision',
        'Elegir herramienta según propósito',
        'Fundamentos NEM',
        'Intermedio',
        88,
        'Tengo esta necesidad docente: [describe la necesidad]. Recomiéndame si conviene usar buscador, Gemini o NotebookLM. Justifica la decisión con base en fuentes, contexto del grupo, evaluación formativa y cuidado ético.'
      )
    ],
    demo: {
      objective: 'Resolver una misma necesidad docente con buscador, Gemini y NotebookLM para comparar los resultados.',
      workflow: [
        'Plantear una necesidad real de secundaria: preparar una actividad breve a partir de un contenido.',
        'Buscar información con un buscador y observar cantidad, dispersión y tiempo de revisión.',
        'Pedir una propuesta a Gemini y valorar creatividad, utilidad y límites.',
        'Pedir apoyo a NotebookLM usando fuentes cargadas y valorar fidelidad al contexto.',
        'Comparar los resultados con una pregunta: ¿cuál ayuda mejor a decidir para mi aula?'
      ],
      questions: [
        '¿Qué herramienta me ayuda a explorar?',
        '¿Qué herramienta me ayuda a trabajar con mis documentos?',
        '¿Qué decisión sigue siendo responsabilidad del docente?'
      ],
      expectedResults: [
        'Una distinción clara entre buscar, generar y trabajar con fuentes.',
        'Una tarea docente prioritaria para probar con NotebookLM.',
        'Un criterio inicial de uso responsable.'
      ],
      presenterTips: [
        'No presentes la IA como solución mágica; parte del problema real del tiempo docente.',
        'Haz visible que una respuesta bonita no siempre es una respuesta pertinente.',
        'Conecta con la NEM: el docente codiseña experiencias situadas.'
      ]
    },
    activity: {
      title: 'Elegir la herramienta adecuada',
      steps: [
        'Identificar una tarea repetitiva de la práctica docente.',
        'Definir si la tarea requiere buscar, crear ideas o trabajar con documentos propios.',
        'Elegir buscador, Gemini o NotebookLM.',
        'Compartir con una pareja por qué esa herramienta es la más adecuada.',
        'Criterio de logro observable: la tarea queda clasificada con herramienta elegida y justificación docente clara.'
      ],
      deliverable: 'Una tarea repetitiva y una herramienta elegida con justificación pedagógica.'
    },
    reflection: [
      '¿Qué tarea me gustaría reducir para dedicar más energía a enseñar?',
      '¿Qué parte de mi trabajo requiere presencia, relación pedagógica y criterio humano?',
      '¿Cómo explicaría a mi colectivo docente el uso responsable de IA en esta tarea?'
    ],
    commonMistakes: [
      'Creer que IA significa copiar y pegar respuestas.',
      'Pedir planeaciones sin contexto del grupo.',
      'Usar NotebookLM sin fuentes pertinentes.'
    ],
    microAssessment: {
      reflectionQuestion: '¿Qué actividad administrativa me gustaría reducir sin perder control pedagógico?',
      practicalQuestion: 'Para revisar un programa analítico propio, ¿usarías Gemini o NotebookLM? Explica por qué.',
      knowledgeCheck: {
        question: '¿Cuál es la diferencia central entre Gemini y NotebookLM en este taller?',
        options: [
          'Gemini solo funciona en celular y NotebookLM solo en computadora.',
          'Gemini es general; NotebookLM trabaja con fuentes que tú cargas.',
          'NotebookLM reemplaza la planeación docente.',
          'Ambas herramientas hacen exactamente lo mismo.'
        ],
        correctAnswer: 'Gemini es general; NotebookLM trabaja con fuentes que tú cargas.',
        feedback: 'La diferencia clave no es la dificultad técnica, sino el tipo de contexto que usa cada herramienta.'
      }
    },
    facilitatorTips: [
      'Inicia con experiencias reales de sobrecarga docente.',
      'Evita explicar funciones antes de que el grupo identifique el problema.',
      'Repite la idea: la IA propone, el docente decide.'
    ],
    nextLessonBridge:
      'Si NotebookLM funciona mejor con fuentes propias, la siguiente pregunta es inevitable: ¿qué documentos debe contener un cuaderno profesional para que realmente piense con nosotros?',
    summary:
      'Esta lección explica por qué la IA transforma la práctica docente: no porque encuentre más información, sino porque ayuda a organizarla, compararla y convertirla en mejores decisiones pedagógicas.',
    takeaway: 'No falta información; falta convertirla en conocimiento útil para decidir mejor en el aula.',
    resources: ['Programa sintético NEM', 'Programa analítico', 'Libro de texto', 'Diagnóstico del grupo']
  },
  {
    id: 'notebook-perfecto',
    moduleId: 'modulo-1',
    title: '¿Qué documentos debe conocer mi asistente?',
    duration: '15 min',
    hookQuestion: 'Si NotebookLM fuera un nuevo compañero docente, ¿qué tendría que leer primero para ayudarte?',
    realCase: {
      title: 'Primero le enseñamos nuestro contexto',
      situation:
        'Un docente quiere pedirle a NotebookLM una actividad, pero antes necesita que conozca su programa, libro, planeación y criterios de evaluación.',
      teacherProblem: 'Antes de pedirle que genere algo, necesitamos darle contexto.'
    },
    learningCycle: {
      why: 'NotebookLM responde mejor cuando entiende el contexto docente.',
      what: 'Un Notebook útil reúne fuentes valiosas alrededor de un propósito.',
      how: 'Agrupando fuentes de currículo, aula, evaluación y evidencias.',
      demo: 'Crear Ciencias 2° — Ecosistemas con cuatro fuentes y una pregunta.',
      practice: 'Diseñar una tarjeta del primer Notebook.',
      reflection: 'Distinguir qué contexto necesita conocer el asistente.',
      transfer: 'Salir con propósito, primeras fuentes y una pregunta inicial.'
    },
    objectives: [
      'Construir el primer Notebook profesional definiendo un propósito claro.',
      'Seleccionar fuentes valiosas que ayuden a NotebookLM a comprender el contexto docente.',
      'Reconocer que la mejor respuesta depende del contexto que el docente proporciona.'
    ],
    keyIdeas: [
      'No subimos archivos. Compartimos contexto.',
      'Un Notebook debe responder a un propósito claro.',
      'La mejor respuesta no depende de la IA; depende del contexto que tú le proporcionas.'
    ],
    contentSections: [
      {
        title: 'La pregunta correcta',
        keyIdea: 'Si NotebookLM fuera un nuevo compañero docente, ¿qué tendría que leer primero para ayudarte?',
        points: ['Docente', 'NotebookLM', 'Fuentes'],
        visualType: 'workflow',
        imageKey: 'docente-notebooklm-fuentes',
        pointDetails: [
          {
            label: 'Docente',
            detail: 'El docente define el propósito, el contexto del grupo y la decisión pedagógica que quiere mejorar.'
          },
          {
            label: 'NotebookLM',
            detail: 'NotebookLM funciona como asistente cuando puede leer fuentes que explican tu contexto escolar.'
          },
          {
            label: 'Fuentes',
            detail: 'Las fuentes son lo que tu asistente necesita conocer antes de responder con pertinencia.'
          }
        ],
        reflectionQuestion: '¿Qué tendría que leer primero tu asistente para ayudarte de verdad?'
      },
      {
        title: 'La regla de oro',
        keyIdea: 'Un Notebook = un propósito.',
        points: ['📘 Historia 2°', '🧮 Matemáticas 2°', '🧪 Ciencias 2°', '👥 Tutoría', '📋 Consejo Técnico'],
        visualType: 'cards',
        imageKey: 'regla-oro',
        pointDetails: [
          {
            label: '📘 Historia 2°',
            detail: 'Notebook para planear, explicar, evaluar o preparar materiales de una asignatura y grado específicos.'
          },
          {
            label: '🧮 Matemáticas 2°',
            detail: 'Notebook centrado en un grupo o secuencia para mantener claro el propósito de trabajo.'
          },
          {
            label: '🧪 Ciencias 2°',
            detail: 'Notebook para trabajar un tema concreto con programa, libro, planeación y rúbrica.'
          },
          {
            label: '👥 Tutoría',
            detail: 'Notebook para seguimiento, actividades, instrumentos y proyecto de vida, cuidando privacidad y pertinencia.'
          },
          {
            label: '📋 Consejo Técnico',
            detail: 'Notebook para acuerdos, minutas, PEMC, protocolos y seguimiento colegiado de la escuela.'
          }
        ],
        reflectionQuestion: '¿Qué propósito tendría tu primer Notebook?'
      },
      {
        title: 'Las fuentes que realmente importan',
        keyIdea: 'No subimos archivos. Compartimos contexto.',
        points: ['📚 Currículo', '🏫 Aula', '📊 Evaluación', '📝 Evidencias'],
        visualType: 'cards',
        imageKey: 'fuentes-importan',
        pointDetails: [
          {
            label: '📚 Currículo',
            detail: 'Programa Analítico, Programa Sintético y Libro CONALITEG. Ayudan a mantener el trabajo alineado con la NEM.'
          },
          {
            label: '🏫 Aula',
            detail: 'Planeaciones y presentaciones. Muestran cómo aterrizas el currículo en tu grupo real.'
          },
          {
            label: '📊 Evaluación',
            detail: 'Rúbricas, listas de cotejo e instrumentos. Ayudan a valorar avances con criterios claros.'
          },
          {
            label: '📝 Evidencias',
            detail: 'Proyectos y productos del alumnado. Permiten revisar avances reales sin perder el contexto del grupo.'
          }
        ],
        reflectionQuestion: '¿Qué tipo de contexto le falta conocer primero a tu asistente?'
      },
      {
        title: '¿Qué puedo agregar a un Notebook?',
        keyIdea: 'NotebookLM puede integrar distintas fuentes y convertirlas en un único contexto de trabajo.',
        points: [
          '📄 PDF',
          '📝 Google Docs',
          '📊 Google Slides',
          '🌐 Sitios web',
          '📺 YouTube',
          '🎵 Audio',
          '📋 Texto copiado',
          '📁 Google Drive'
        ],
        visualType: 'cards',
        imageKey: 'distintas-fuentes',
        pointDetails: [
          {
            label: '📄 PDF',
            detail: 'Útil para programas, lecturas, rúbricas, guías, acuerdos o documentos institucionales.'
          },
          {
            label: '📝 Google Docs',
            detail: 'Sirve para planeaciones, acuerdos, guías de trabajo o documentos vivos del colectivo docente.'
          },
          {
            label: '📊 Google Slides',
            detail: 'Permite integrar presentaciones que ya usas en clase.'
          },
          {
            label: '🌐 Sitios web',
            detail: 'Puede sumar páginas web pertinentes cuando aportan información confiable.'
          },
          {
            label: '📺 YouTube',
            detail: 'Ayuda a trabajar con videos como fuente de explicación o análisis.'
          },
          {
            label: '🎵 Audio',
            detail: 'Permite integrar recursos orales cuando aportan contexto o contenido.'
          },
          {
            label: '📋 Texto copiado',
            detail: 'Sirve para pegar acuerdos, fragmentos, instrucciones o textos breves.'
          },
          {
            label: '📁 Google Drive',
            detail: 'Facilita trabajar con archivos que ya forman parte de tu ecosistema escolar.'
          }
        ],
        reflectionQuestion: '¿Qué tipo de fuente usas más en tu trabajo docente?'
      },
      {
        title: 'Diseña tu primer Notebook',
        keyIdea: 'Completa una tarjeta simple: propósito del Notebook y primeras fuentes.',
        points: ['Propósito del Notebook', 'Primeras fuentes', 'Primera pregunta'],
        visualType: 'workflow',
        pointDetails: [
          {
            label: 'Propósito del Notebook',
            detail: 'Ejemplo: Ciencias 2° — Ecosistemas. El nombre debe decir para qué servirá.'
          },
          {
            label: 'Primeras fuentes',
            detail: 'Elige pocas fuentes valiosas: programa, libro, planeación, rúbrica o evidencias pertinentes.'
          },
          {
            label: 'Primera pregunta',
            detail: 'Haz una pregunta sencilla para verificar que NotebookLM ya entiende tu contexto.'
          }
        ],
        reflectionQuestion: '¿Cuál sería el propósito de tu primer Notebook y sus primeras fuentes?'
      }
    ],
    analogy:
      'NotebookLM se parece a un compañero nuevo que llega a la escuela: antes de pedirle ayuda, necesita leer los documentos que explican cómo trabajas y qué necesita tu grupo.',
    diagram: {
      title: 'Mi primer Notebook',
      steps: ['Propósito', 'Currículo', 'Aula', 'Evaluación', 'Evidencias']
    },
    prompts: [
      prompt(
        'notebook-perfecto-fuentes',
        'Elegir primeras fuentes para mi asistente',
        'NotebookLM',
        'Básico',
        91,
        'Actúa como asesor pedagógico de secundaria pública mexicana. Ayúdame a definir el propósito de mi primer Notebook y seleccionar sus primeras fuentes. Organiza las fuentes en currículo, aula, evaluación y evidencias. Termina con una primera pregunta sencilla para verificar que NotebookLM entiende mi contexto.'
      ),
      prompt(
        'notebook-perfecto-auditoria',
        'Tarjeta de primer Notebook',
        'NotebookLM',
        'Intermedio',
        89,
        'Ayúdame a completar esta tarjeta: propósito del Notebook, primeras fuentes, tipo de fuente de cada una y primera pregunta para NotebookLM. Mantén la propuesta breve, práctica y útil para secundaria pública.'
      )
    ],
    demo: {
      objective: 'Construir el primer Notebook profesional: Ciencias 2° — Ecosistemas.',
      workflow: [
        'Crear un Notebook nuevo: Ciencias 2° — Ecosistemas.',
        'Agregar únicamente cuatro fuentes: Programa Analítico, Libro CONALITEG, Planeación y Rúbrica.',
        'Mostrar que NotebookLM terminó de indexarlas.',
        'Hacer una sola pregunta: ¿Qué aprendizajes esperados debo desarrollar en este tema?'
      ],
      questions: [
        '¿Qué aprendizajes esperados debo desarrollar en este tema?',
        '¿La respuesta usa las fuentes que acabamos de agregar?',
        '¿Qué contexto entendió NotebookLM antes de pedirle que genere algo?'
      ],
      expectedResults: [
        'Un Notebook profesional mínimo.',
        'Cuatro fuentes iniciales cargadas.',
        'Una respuesta basada en las fuentes, sin prompts avanzados.'
      ],
      presenterTips: [
        'No expliques detalles técnicos de indexación; solo muestra que ya terminó.',
        'No pidas todavía que cree actividades o materiales.',
        'Di al grupo: ¿Notaron que aún no le pedimos que creara nada? Primero le enseñamos a conocer nuestro contexto.'
      ]
    },
    activity: {
      title: 'Diseña tu primer Notebook',
      steps: [
        'Escribir el propósito del Notebook.',
        'Anotar las primeras fuentes que debe conocer.',
        'Marcar cuáles pertenecen a currículo, aula, evaluación o evidencias.',
        'Escribir una primera pregunta sencilla para comprobar que entiende el contexto.',
        'Criterio de logro observable: la tarjeta incluye propósito, fuentes clasificadas y una pregunta inicial verificable.'
      ],
      deliverable: 'Una tarjeta con propósito del Notebook, primeras fuentes y primera pregunta.'
    },
    reflection: [
      '¿Qué Notebook me serviría más para mi trabajo de mañana?',
      '¿Qué contexto necesita conocer mi asistente antes de ayudarme?',
      '¿Qué pregunta sencilla usaré para comprobar que entendió mis fuentes?'
    ],
    commonMistakes: [
      'Subir todo “por si acaso”.',
      'Subir versiones duplicadas o contradictorias.',
      'Usar documentos viejos, incompletos o ilegibles.'
    ],
    microAssessment: {
      reflectionQuestion: '¿Qué contexto debe conocer primero mi asistente?',
      practicalQuestion: 'Escribe el nombre de tu primer Notebook y sus primeras fuentes.',
      knowledgeCheck: {
        question: '¿Qué mejora más la calidad de las respuestas de NotebookLM?',
        options: [
          'Pedir respuestas más largas.',
          'Darle fuentes valiosas y contexto claro antes de pedir productos.',
          'Usarlo solo con archivos PDF.',
          'Empezar con prompts avanzados.'
        ],
        correctAnswer: 'Darle fuentes valiosas y contexto claro antes de pedir productos.',
        feedback: 'La mejor respuesta depende del contexto que el docente proporciona.'
      }
    },
    facilitatorTips: [
      'Haz que el grupo piense en contexto real, no solo en archivos.',
      'Repite la regla: un Notebook = un propósito.',
      'Presenta los tipos de fuente como una sorpresa práctica: NotebookLM no solo sirve para PDFs.'
    ],
    nextLessonBridge:
      'Ahora que nuestro Notebook ya tiene información útil, la siguiente pregunta es: ¿cómo hacemos buenas preguntas para obtener mejores respuestas?',
    summary:
      'Esta lección ayuda a construir el primer Notebook profesional definiendo propósito, primeras fuentes y una pregunta inicial para que NotebookLM entienda el contexto docente.',
    takeaway: 'La mejor respuesta no depende de la IA. Depende del contexto que tú le proporcionas.',
    resources: ['Programa analítico', 'Programa sintético', 'Libro CONALITEG', 'Planeaciones', 'Rúbricas', 'Evidencias']
  },
  {
    id: 'prompt-engineering',
    moduleId: 'modulo-1',
    title: 'Cómo pedir exactamente lo que necesitas a NotebookLM',
    duration: '15 min',
    hookQuestion: '¿Cómo pedir exactamente lo que necesitas para tu práctica docente?',
    realCase: {
      title: '“Hazme una actividad sobre fracciones”',
      situation:
        'La IA puede responder algo correcto, pero demasiado general. Cuando el docente agrega tema, grado, tipo de actividad e intención pedagógica, la respuesta se vuelve mucho más útil.',
      teacherProblem: 'La IA no adivina el contexto de tu grupo.'
    },
    learningCycle: {
      why: 'La IA no adivina el contexto de tu grupo.',
      what: 'Una plantilla de prompt ayuda a pedir con claridad sin empezar desde cero.',
      how: 'Personalizando solo cuatro elementos: tema, grado, tipo de actividad e intención pedagógica.',
      demo: 'Comparar el mismo tema con un prompt genérico y una plantilla de prompt.',
      practice: 'Elegir una plantilla, personalizar cuatro campos y probarla en NotebookLM.',
      reflection: 'Identificar qué contexto cambió la calidad de la respuesta.',
      transfer: 'Guardar una plantilla reutilizable para la práctica diaria.'
    },
    objectives: [
      'Aprender una estructura sencilla para crear plantillas de prompt reutilizables profesionales.',
      'Utilizar una biblioteca de plantillas listas para copiar, adaptar y reutilizar.',
      'Personalizar únicamente tema, grado, tipo de actividad e intención pedagógica.'
    ],
    keyIdeas: [
      'Un buen prompt no es el más largo; es el que proporciona el contexto adecuado.',
      'Las plantillas de prompt reutilizables ahorran tiempo porque se reutilizan todos los días.',
      'El docente define la intención pedagógica; NotebookLM ayuda a desarrollar la respuesta.'
    ],
    contentSections: [
      {
        title: 'Prompt contextualizado',
        keyIdea: 'La IA no adivina el contexto de tu grupo.',
        points: ['Prompt genérico', 'Contexto del grupo', 'Prompt contextualizado'],
        visualType: 'comparison',
        imageKey: 'prompt-contextualizado',
        pointDetails: [
          {
            label: 'Prompt genérico',
            detail: 'Es una instrucción sin grupo, propósito, fuentes ni producto esperado. Puede producir algo correcto, pero suele ser demasiado general para llevarlo al aula.'
          },
          {
            label: 'Contexto del grupo',
            detail: 'El docente agrega lo que NotebookLM no puede adivinar: grado, asignatura, propósito, tiempo disponible, características del grupo y decisión pedagógica que quiere mejorar.'
          },
          {
            label: 'Prompt contextualizado',
            detail: 'Es un prompt que combina fuentes del notebook con variables docentes. Ayuda a obtener una respuesta más útil, revisable y cercana a la realidad del grupo.'
          }
        ],
        reflectionQuestion: '¿Qué dato del grupo debe aparecer para que la respuesta sea útil?'
      },
      {
        title: 'Plantilla de prompt profesional',
        keyIdea: 'No empieces desde cero: personaliza una plantilla.',
        points: ['Tema', 'Grado y asignatura', 'Producto a generar', 'Intención pedagógica', 'Criterio profesional'],
        visualType: 'cards',
        imageKey: 'plantilla-prompt',
        pointDetails: [
          {
            label: 'Tema',
            detail: 'Es el contenido o situación que quieres trabajar. Ejemplos: ecosistemas, fracciones, Revolución Mexicana, energía o funciones lineales.'
          },
          {
            label: 'Grado y asignatura',
            detail: 'Indica el nivel real del grupo para ajustar lenguaje, dificultad y producto. Ejemplos: 1° Español, 2° Matemáticas, 2° Ciencias o 3° Historia.'
          },
          {
            label: 'Producto a generar',
            detail: 'Define qué necesitas que NotebookLM produzca: actividad, planeación, secuencia, presentación, guía, cuestionario, rúbrica, lista de cotejo o retroalimentación.'
          },
          {
            label: 'Intención pedagógica',
            detail: 'Aclara para qué quieres el producto: comprender, aplicar, resolver problemas, argumentar, investigar, crear, colaborar, evaluar o adaptar para inclusión.'
          },
          {
            label: 'Criterio profesional',
            detail: 'NotebookLM genera borradores útiles, pero el docente revisa, adapta y valida antes de usar cualquier recurso con estudiantes.'
          }
        ],
        reflectionQuestion: '¿Qué variable necesitas precisar mejor antes de pedir apoyo a NotebookLM?'
      }
    ],
    analogy:
      'Una plantilla de prompt se parece a un formato docente bien diseñado: no hace el trabajo por ti, pero evita empezar desde cero y te recuerda qué información importa.',
    diagram: {
      title: 'Estructura de una plantilla de prompt',
      steps: ['Tema', 'Grado y asignatura', 'Tipo de actividad', 'Intención pedagógica']
    },
    prompts: [
      prompt(
        'plantilla-inteligente-maestra',
        'Plantilla de prompt maestra',
        'plantillas de prompt reutilizables',
        'Intermedio',
        95,
        'Con base en las fuentes de este Notebook, diseña una actividad sobre [TEMA] para [GRADO Y ASIGNATURA]. La actividad debe ser de tipo [TIPO DE ACTIVIDAD] y tener como intención pedagógica [INTENCIÓN]. Incluye propósito, pasos, materiales mínimos, evidencia esperada y criterio de logro observable.'
      ),
      prompt(
        'plantilla-inteligente-ajuste',
        'Ajuste de plantilla de prompt',
        'plantillas de prompt reutilizables',
        'Avanzado',
        92,
        'Toma esta plantilla de prompt y ayúdame a personalizarla para [TEMA], [GRADO Y ASIGNATURA], [TIPO DE ACTIVIDAD] e [INTENCIÓN]. Mantén la propuesta breve, viable para secundaria pública y alineada con la NEM.'
      )
    ],
    demo: {
      objective: 'Comparar el mismo tema con un prompt genérico y una plantilla de prompt.',
      workflow: [
        'Pedir: “Hazme una actividad sobre fracciones”.',
        'Observar qué falta para usarla mañana.',
        'Usar la plantilla de prompt con tema, grado, tipo de actividad e intención.',
        'Comparar las dos respuestas.',
        'Preguntar al grupo cuál usaría en clase.'
      ],
      questions: [
        '¿Cuál utilizarías mañana en tu clase?',
        '¿Qué dato cambió más la calidad de la respuesta?',
        '¿Qué parte sigue necesitando revisión docente?'
      ],
      expectedResults: [
        'Una diferencia clara entre pedir de forma general y pedir con contexto.',
        'Una plantilla de prompt reutilizable.',
        'Una primera versión lista para revisar y adaptar.'
      ],
      presenterTips: [
        'No conviertas la demo en teoría de prompts.',
        'Haz que el grupo compare utilidad, no solo redacción bonita.',
        'Repite la idea: el docente cambia cuatro campos, no reinventa la instrucción.'
      ]
    },
    activity: {
      title: 'Personaliza una plantilla de prompt',
      steps: [
        'Elegir una categoría de la biblioteca.',
        'Personalizar tema.',
        'Personalizar grado y asignatura.',
        'Seleccionar tipo de actividad.',
        'Definir intención pedagógica.',
        'Probar la plantilla en NotebookLM.',
        'Criterio de logro observable: el prompt conserva variables claras y produce una respuesta que se puede revisar para una clase real.'
      ],
      deliverable: 'Una plantilla de prompt personalizada y probada en NotebookLM.'
    },
    reflection: [
      '¿Qué plantilla puedo reutilizar todos los días?',
      '¿Qué campo me cuesta más definir: tema, grado, actividad o intención?',
      '¿Qué respuesta de NotebookLM usaría mañana después de revisarla?'
    ],
    commonMistakes: [
      'Pedir algo sin grado ni asignatura.',
      'Confundir una respuesta larga con una respuesta útil.',
      'No explicar la intención pedagógica.',
      'Aceptar la primera respuesta sin revisión docente.'
    ],
    microAssessment: {
      reflectionQuestion: '¿Qué campo necesito precisar mejor en mis plantillas de prompt reutilizables?',
      practicalQuestion: 'Completa una plantilla con tema, grado, tipo de actividad e intención pedagógica.',
      knowledgeCheck: {
        question: '¿Qué hace útil a una plantilla de prompt?',
        options: [
          'Que sea muy larga.',
          'Que incluya tema, grado, tipo de actividad e intención pedagógica.',
          'Que use muchas palabras técnicas.',
          'Que pida muchas actividades al mismo tiempo.'
        ],
        correctAnswer: 'Que incluya tema, grado, tipo de actividad e intención pedagógica.',
        feedback: 'La estructura simple da contexto suficiente para obtener una respuesta útil.'
      }
    },
    facilitatorTips: [
      'Usa el término plantillas de prompt reutilizables durante toda la lección.',
      'Evita explicar prompt engineering como concepto técnico.',
      'Haz que cada docente termine con una plantilla que pueda reutilizar.'
    ],
    nextLessonBridge:
      'Ya sabemos cómo organizar nuestras fuentes y cómo conversar con NotebookLM. Ahora descubriremos cómo transformar ese conocimiento en presentaciones, cuestionarios, audios, infografías y otros recursos usando NotebookLM Studio.',
    summary:
      'Esta lección enseña una estructura sencilla para pedir exactamente lo que necesitas a NotebookLM mediante plantillas de prompt reutilizables.',
    takeaway: 'Un buen prompt no es el más largo; es el que proporciona el contexto adecuado para obtener una respuesta útil.',
    resources: ['Biblioteca de plantillas de prompt reutilizables', 'NotebookLM', 'Programa analítico', 'PDA', 'Diagnóstico del grupo']
  },
  {
    id: 'notebooklm-studio',
    moduleId: 'modulo-1',
    title: '¿Cómo convierto documentos en recursos listos para clase?',
    duration: '15 min',
    hookQuestion: '¿Qué pasaría si tus documentos escolares pudieran convertirse en una guía, un audio o un cuestionario sin perder el contexto de tus fuentes?',
    realCase: {
      title: 'Un recurso atractivo no siempre es un recurso útil',
      situation:
        'Un docente genera una presentación muy vistosa, pero al revisarla nota que no conecta con el propósito, no deja evidencia y usa lenguaje poco adecuado para su grupo.',
      teacherProblem: 'La producción rápida necesita revisión pedagógica para convertirse en aprendizaje.'
    },
    learningCycle: {
      why: 'Los documentos oficiales no siempre llegan al aula en formatos accesibles para estudiantes.',
      what: 'Studio transforma fuentes en productos de estudio y apoyo docente.',
      how: 'Eligiendo el producto según propósito: explicar, repasar, evaluar, sintetizar o comunicar.',
      demo: 'Generar un recurso Studio desde fuentes del cuaderno.',
      practice: 'Crear un primer recurso y revisarlo con un compañero.',
      reflection: 'Distinguir producto atractivo de producto pedagógicamente útil.',
      transfer: 'Seleccionar un producto Studio para una clase real de la próxima semana.'
    },
    objectives: [
      'Crear un recurso de Studio útil para una clase real y revisarlo antes de compartirlo.'
    ],
    keyIdeas: [
      'Un recurso generado solo sirve si tiene propósito, evidencia y revisión docente.'
    ],
    contentSections: [
      {
        title: 'Studio',
        keyIdea: 'Un mismo notebook puede convertirse en muchos productos diferentes.',
        points: ['Para preparar una clase', 'Para los estudiantes', 'Para el docente', 'Para compartir', 'Elegir producto'],
        visualType: 'cards',
        imageKey: 'studio-productos',
        pointDetails: [
          {
            label: 'Para preparar una clase',
            detail: 'Studio puede generar presentaciones, resúmenes, guías de estudio y Audio Overview para preparar o abrir una sesión.'
          },
          {
            label: 'Para los estudiantes',
            detail: 'Permite crear cuestionarios, tarjetas didácticas, infografías y materiales de repaso para apoyar estudio y recuperación.'
          },
          {
            label: 'Para el docente',
            detail: 'Ayuda a producir informes, síntesis, comparación de documentos y preguntas clave desde las fuentes del notebook.'
          },
          {
            label: 'Para compartir',
            detail: 'Sirve para convertir información en recursos comunicables: resumen ejecutivo, material de exposición o insumos para trabajo colaborativo.'
          },
          {
            label: 'Elegir producto',
            detail: 'El formato se elige por propósito: explicar, repasar, evaluar, memorizar o comunicar información importante.'
          }
        ],
        reflectionQuestion: '¿Qué producto de Studio resuelve una necesidad real de tu próxima clase?'
      },
      {
        title: 'Chat',
        keyIdea: 'El chat transforma con flexibilidad lo que necesitas para tu función docente.',
        points: [
          'Planeación docente',
          'Actividades de aprendizaje',
          'Evaluación',
          'Materiales para estudiantes',
          'Nueva Escuela Mexicana',
          'Inclusión',
          'Comunicación',
          'Gestión escolar',
          'Análisis inteligente',
          'Tutor pedagógico'
        ],
        visualType: 'cards',
        imageKey: 'chat-productos-docentes',
        pointDetails: [
          {
            label: 'Planeación docente',
            detail: 'Puede redactar planeaciones diarias, semanales, mensuales, secuencias, situaciones problema, rutas de aprendizaje y proyectos.'
          },
          {
            label: 'Actividades de aprendizaje',
            detail: 'Puede diseñar actividades individuales, colaborativas, ABP, proyectos, debates, casos, experimentos, talleres, estaciones, aula invertida, gamificación y retos STEAM.'
          },
          {
            label: 'Evaluación',
            detail: 'Puede crear rúbricas, listas de cotejo, escalas, guías de observación, evaluaciones diagnósticas, formativas, sumativas, autoevaluaciones, coevaluaciones y retroalimentación.'
          },
          {
            label: 'Materiales para estudiantes',
            detail: 'Puede producir guías de estudio, repasos, resúmenes simplificados, glosarios, líneas del tiempo, cuadros comparativos, organizadores gráficos, preguntas de reflexión y lecturas adaptadas.'
          },
          {
            label: 'Nueva Escuela Mexicana',
            detail: 'Puede ayudar a integrar PDA, relacionar campos formativos, integrar ejes articuladores y conectar Programa Analítico con CONALITEG.'
          },
          {
            label: 'Inclusión',
            detail: 'Puede generar adecuaciones, actividades multinivel, estrategias DUA, instrucciones simplificadas y variantes para distintos ritmos.'
          },
          {
            label: 'Comunicación',
            detail: 'Puede redactar avisos para familias, informes, reportes de desempeño, oficios, correos institucionales y mensajes para Classroom.'
          },
          {
            label: 'Gestión escolar',
            detail: 'Puede apoyar Consejo Técnico, academias, PEMC, minutas, planes de mejora, cronogramas y organización documental.'
          },
          {
            label: 'Análisis inteligente',
            detail: 'Puede comparar documentos, detectar diferencias, encontrar inconsistencias, extraer acuerdos, identificar temas recurrentes y resumir grandes fuentes citando fuentes utilizadas.'
          },
          {
            label: 'Tutor pedagógico',
            detail: 'Puedes pedirle que actúe como asesor pedagógico, diseñador instruccional, experto en evaluación, docente de secundaria, especialista NEM, experto en inclusión o revisor crítico.'
          }
        ],
        reflectionQuestion: '¿Qué producto pedirías por chat porque necesita más flexibilidad que un botón de Studio?'
      }
    ],
    analogy:
      'Studio es como una imprenta pedagógica rápida: puede convertir tus fuentes en distintos formatos, pero el docente sigue siendo editor, curador y responsable de cómo se usa en clase.',
    diagram: {
      title: 'De fuentes a experiencia de aula',
      steps: ['Fuentes', 'Cuaderno', 'Studio', 'Recurso', 'Uso en clase', 'Evidencia']
    },
    prompts: [
      prompt(
        'studio-selector',
        'Elegir producto Studio según propósito',
        'Studio',
        'Básico',
        90,
        'Con base en mis fuentes y este propósito de aprendizaje: [propósito], recomiéndame qué producto de NotebookLM Studio conviene generar. Compara resumen en audio, presentación, tarjetas, cuestionario, infografía y reporte. Incluye ventajas, límites y evidencia esperada.'
      ),
      prompt(
        'studio-revisión',
        'Revisión docente de recurso Studio',
        'Studio',
        'Intermedio',
        93,
        'Revisa este recurso generado con Studio. Evalúa fidelidad a las fuentes, claridad para secundaria, vínculo con PDA, inclusión, evaluación formativa y pertinencia para el contexto. Propón ajustes concretos antes de compartirlo con estudiantes.'
      )
    ],
    demo: {
      objective: 'Mostrar cómo Studio convierte fuentes en materiales revisables y adaptables.',
      workflow: [
        'Seleccionar un cuaderno con fuentes ya cargadas.',
        'Elegir un producto Studio según propósito de aprendizaje.',
        'Generar el recurso.',
        'Revisar fidelidad a fuentes y lenguaje para secundaria.',
        'Ajustar con una consigna adicional si hace falta.'
      ],
      questions: [
        '¿Qué producto conviene para activar saberes previos?',
        '¿Qué producto conviene para evaluar comprensión?',
        '¿Qué tendría que ajustar antes de compartirlo?'
      ],
      expectedResults: [
        'Un recurso Studio revisado.',
        'Una nota docente sobre cómo usarlo en clase.',
        'Un criterio para no confundir diseño visual con aprendizaje.'
      ],
      presenterTips: [
        'Pregunta qué producto conviene antes de generarlo.',
        'Modela revisión crítica después de generar.',
        'Cierra con cómo se usará en clase, no con el recurso en sí.'
      ]
    },
    activity: {
      title: 'Recurso Studio con revisión docente',
      steps: [
        'Elegir un propósito de aprendizaje real.',
        'Seleccionar el producto Studio más adecuado.',
        'Generar el recurso.',
        'Revisarlo con una pareja usando tres preguntas: ¿es fiel?, ¿sirve?, ¿qué ajuste necesita?',
        'Escribir una nota breve de uso en clase.',
        'Criterio de logro observable: el recurso queda vinculado con una fuente, una evidencia estudiantil y un ajuste docente antes de compartir.'
      ],
      deliverable: 'Un recurso Studio revisado con una nota docente de implementación.'
    },
    reflection: [
      '¿Qué producto Studio puede ayudar a mis estudiantes sin aumentar carga innecesaria?',
      '¿Qué evidencia dejará el uso de este recurso?',
      '¿Qué debo revisar antes de compartirlo con estudiantes o familias?'
    ],
    commonMistakes: [
      'Compartir un recurso sin revisar fidelidad a las fuentes.',
      'Elegir formatos por novedad y no por propósito.',
      'Usar recursos Studio como sustituto de interacción docente.'
    ],
    microAssessment: {
      reflectionQuestion: '¿Qué producto Studio tiene más sentido para mi próxima clase?',
      practicalQuestion: 'Elige un producto Studio y explica qué evidencia producirán los estudiantes.',
      knowledgeCheck: {
        question: '¿Cuál es la mejor forma de elegir un producto Studio?',
        options: [
          'Elegir el formato más llamativo.',
          'Elegir según propósito de aprendizaje, fuente y evidencia esperada.',
          'Usar siempre presentaciones.',
          'Generar todos los productos posibles.'
        ],
        correctAnswer: 'Elegir según propósito de aprendizaje, fuente y evidencia esperada.',
        feedback: 'La herramienta se elige desde la intención pedagógica, no desde la novedad visual.'
      }
    },
    facilitatorTips: [
      'Modela la diferencia entre generar y enseñar.',
      'Pide que expliquen cómo usarán el recurso, no solo que lo muestren.',
      'Subraya privacidad, fuentes, sesgos y revisión humana.'
    ],
    nextLessonBridge:
      'Ya tenemos asistente, fuentes, consignas y recursos. El siguiente módulo responde la pregunta central: ¿cómo convertimos todo esto en experiencias de aprendizaje activas, situadas e inclusivas?',
    summary:
      'Esta lección muestra cómo NotebookLM Studio convierte fuentes en materiales útiles, siempre que el docente elija el formato por propósito y revise antes de usar.',
    takeaway: 'Un recurso generado solo se vuelve pedagógico cuando tiene propósito, evidencia y revisión docente.',
    resources: ['NotebookLM Studio', 'Fuentes del cuaderno', 'PDA', 'Criterios de evaluación formativa']
  }
];

type PracticalLessonConfig = {
  id: string;
  moduleId: string;
  title: string;
  duration: string;
  objective: string[];
  teacherProblem: string;
  keyIdea: string;
  visual: {
    title: string;
    steps: string[];
    type?: NonNullable<Lesson['contentSections']>[number]['visualType'];
  };
  demo: Demo;
  activity: Lesson['activity'];
  takeaway: string;
  transition: string;
  promptTemplate: Prompt;
  resources: string[];
  caseTitle?: string;
  caseSituation?: string;
  commonMistakes?: string[];
  successCriterion?: string;
  contentSections?: Lesson['contentSections'];
};

const activityCriterion = (config: PracticalLessonConfig) =>
  `Criterio de logro observable: ${config.successCriterion ?? config.activity.deliverable}`;

const activityStepsWithCriterion = (config: PracticalLessonConfig) => [
  ...config.activity.steps,
  activityCriterion(config)
];

const practicalLesson = (config: PracticalLessonConfig): Lesson => ({
  id: config.id,
  moduleId: config.moduleId,
  title: config.title,
  duration: config.duration,
  hookQuestion: config.teacherProblem,
  realCase: {
    title: config.caseTitle ?? config.title,
    situation: config.caseSituation ?? config.teacherProblem,
    teacherProblem: config.teacherProblem
  },
  learningCycle: {
    why: config.teacherProblem,
    what: config.keyIdea,
    how: config.visual.steps.join(' -> '),
    demo: config.demo.objective,
    practice: config.activity.deliverable,
    reflection: config.takeaway,
    transfer: config.transition
  },
  objectives: config.objective,
  keyIdeas: [config.keyIdea],
  contentSections: config.contentSections ?? [
    {
      title: 'El problema real',
      keyIdea: config.teacherProblem,
      points: ['Lo que pasa en la escuela', 'Lo que queremos cambiar', 'Lo que se lleva el docente'],
      visualType: 'cards',
      pointDetails: [
        { label: 'Lo que pasa en la escuela', detail: config.caseSituation ?? config.teacherProblem },
        { label: 'Lo que queremos cambiar', detail: config.keyIdea },
        { label: 'Lo que se lleva el docente', detail: config.activity.deliverable }
      ],
      reflectionQuestion: '¿Dónde aparece esto en mi semana docente?'
    },
    {
      title: 'Idea clave',
      keyIdea: config.keyIdea,
      points: [config.keyIdea],
      visualType: 'cards',
      pointDetails: [{ label: 'Una sola idea', detail: config.keyIdea }],
      reflectionQuestion: '¿Qué cambia si trabajo desde esta idea?'
    },
    {
      title: 'Explicación visual',
      keyIdea: config.visual.title,
      points: config.visual.steps,
      visualType: config.visual.type ?? 'workflow',
      pointDetails: config.visual.steps.map((step) => ({ label: step, detail: step })),
      reflectionQuestion: '¿En qué paso necesito más apoyo?'
    },
    {
      title: 'Demostración en vivo',
      keyIdea: config.demo.objective,
      points: config.demo.workflow.slice(0, 5),
      visualType: 'workflow',
      pointDetails: config.demo.workflow.slice(0, 5).map((step) => ({ label: step, detail: step })),
      reflectionQuestion: config.demo.questions[0] ?? '¿Qué parte de la demo usaría mañana?'
    },
    {
      title: 'Actividad de 5 minutos',
      keyIdea: config.activity.title,
      points: activityStepsWithCriterion(config).slice(0, 6),
      visualType: 'workflow',
      pointDetails: activityStepsWithCriterion(config).slice(0, 6).map((step) => ({ label: step, detail: step })),
      reflectionQuestion: '¿Qué producto puedo terminar en versión mínima?'
    },
    {
      title: 'Para llevar al aula',
      keyIdea: config.takeaway,
      points: [config.activity.deliverable, config.takeaway],
      visualType: 'cards',
      pointDetails: [
        { label: 'Producto', detail: config.activity.deliverable },
        { label: 'Frase clave', detail: config.takeaway }
      ],
      reflectionQuestion: '¿Dónde lo aplicaré primero?'
    },
    {
      title: 'Siguiente paso',
      keyIdea: config.transition,
      points: [config.transition],
      visualType: 'cards',
      pointDetails: [{ label: 'Transición', detail: config.transition }],
      reflectionQuestion: '¿Qué necesito resolver ahora?'
    }
  ],
  analogy: config.keyIdea,
  diagram: config.visual,
  prompts: [config.promptTemplate],
  demo: config.demo,
  activity: {
    ...config.activity,
    steps: activityStepsWithCriterion(config)
  },
  reflection: [
    '¿Qué problema real resuelve esta lección?',
    '¿Qué necesito revisar antes de usarlo con mi grupo?',
    '¿Qué haré primero el lunes?'
  ],
  commonMistakes: config.commonMistakes,
  nextLessonBridge: config.transition,
  summary: `${config.teacherProblem} ${config.keyIdea}`,
  takeaway: config.takeaway,
  resources: config.resources
});

const module2Lessons: Lesson[] = [
  practicalLesson({
    id: 'notebooklm-actividades',
    moduleId: 'modulo-2',
    title: '¿Qué actividad puede crear NotebookLM para mi clase?',
    duration: '20 min',
    objective: ['Crear una actividad lista para clase usando fuentes del notebook.'],
    teacherProblem: 'El docente necesita actividades útiles para mañana, no una explicación de metodologías.',
    keyIdea: 'NotebookLM puede convertir tus fuentes en actividades distintas si le dices producto, tiempo, grupo e intención.',
    visual: {
      title: 'Catálogo de actividades',
      type: 'cards',
      steps: ['Individual', 'Colaborativa', 'Debate', 'Caso', 'Investigación', 'Experimento', 'Juego', 'Estaciones']
    },
    contentSections: [
      {
        title: 'Un tema, muchas posibilidades',
        keyIdea: 'NotebookLM puede convertir un mismo tema en actividades individuales, colaborativas, basadas en proyectos o creativas.',
        points: ['Individuales', 'Colaborativas', 'Basadas en proyectos', 'Creativas'],
        visualType: 'cards',
        imageKey: 'actividades-posibilidades',
        pointDetails: [
          {
            label: 'Individuales',
            detail: 'Útiles cuando necesitas que cada estudiante practique, investigue, lea con guía, organice ideas o compare información por cuenta propia.'
          },
          {
            label: 'Colaborativas',
            detail: 'Sirven para trabajo en equipo, debates, aprendizaje entre pares, estaciones y talleres donde el grupo construye una respuesta compartida.'
          },
          {
            label: 'Basadas en proyectos',
            detail: 'Ayudan a convertir el tema en ABP, problema real, proyecto comunitario, estudio de caso o reto STEAM con producto y evidencia.'
          },
          {
            label: 'Creativas',
            detail: 'Permiten pedir juegos, escape room, podcast, video, infografía o presentación para comunicar lo aprendido de otra forma.'
          }
        ],
        reflectionQuestion: '¿Qué tipo de actividad resolvería mejor tu próxima clase?'
      },
      {
        title: 'Una fuente, múltiples experiencias',
        keyIdea: 'La fuente no cambia; cambia la experiencia que le pides a NotebookLM crear.',
        points: ['Tema', 'NotebookLM', 'Actividad individual', 'Debate', 'Proyecto', 'Juego', 'Experimento'],
        visualType: 'workflow',
        imageKey: 'una-fuente-multiples-actividades',
        pointDetails: [
          {
            label: 'Tema',
            detail: 'Empieza con un contenido concreto de tus fuentes: por ejemplo, ecosistemas, fracciones, Revolución Mexicana o comprensión lectora.'
          },
          {
            label: 'NotebookLM',
            detail: 'NotebookLM usa las fuentes del docente como base para proponer actividades conectadas con el material real del curso.'
          },
          {
            label: 'Actividad individual',
            detail: 'Conviene para practicar, responder, leer, resolver o demostrar comprensión sin depender del equipo.'
          },
          {
            label: 'Debate',
            detail: 'Conviene cuando quieres que el grupo argumente, compare posturas y use información de las fuentes para justificar.'
          },
          {
            label: 'Proyecto',
            detail: 'Conviene cuando el aprendizaje debe terminar en un producto con pasos, roles, evidencia y conexión con el contexto.'
          },
          {
            label: 'Juego',
            detail: 'Conviene para repasar, recuperar conocimientos previos o aumentar participación sin perder el propósito de aprendizaje.'
          },
          {
            label: 'Experimento',
            detail: 'Conviene cuando el tema permite observar, probar hipótesis, registrar datos y explicar resultados.'
          }
        ],
        reflectionQuestion: '¿Qué experiencia pedirías a partir de una fuente que ya tienes?'
      }
    ],
    demo: {
      objective: 'Generar una actividad sobre el mismo tema usando tres enfoques diferentes.',
      workflow: [
        'Abrir un notebook con programa, libro CONALITEG y planeación.',
        'Elegir un solo tema y grado.',
        'Pedir tres versiones: individual, colaborativa y debate.',
        'Comparar cuál se puede usar mañana y qué evidencia deja.',
        'Ajustar la mejor versión con tiempo disponible y materiales reales.'
      ],
      questions: ['¿Cuál versión usarías mañana y por qué?'],
      expectedResults: ['Tres actividades distintas desde el mismo notebook.', 'Una actividad elegida y ajustada para clase.'],
      presenterTips: ['No expliques metodologías. Muestra productos y decisiones docentes.']
    },
    activity: {
      title: 'Crea una actividad para mañana',
      steps: [
        'Elige [TEMA], [GRADO] y [ASIGNATURA].',
        'Selecciona un tipo de actividad.',
        'Define [TIEMPO DISPONIBLE] y [PRODUCTO ESPERADO].',
        'Genera la actividad en NotebookLM.',
        'Marca un ajuste antes de usarla.'
      ],
      deliverable: 'Una actividad lista para revisar y llevar al aula.'
    },
    successCriterion: 'La actividad incluye tema, grado, tipo de actividad, tiempo, producto esperado y un criterio observable de revisión.',
    takeaway: 'NotebookLM no enseña metodologías; te ayuda a producir actividades útiles desde tus fuentes.',
    transition: 'Después de crear actividades, el siguiente producto docente es una planeación completa que las ordene.',
    promptTemplate: prompt(
      'm2-actividad-producto',
      'Actividad de clase desde fuentes',
      'Actividades de aprendizaje',
      'Básico',
      96,
      'Con base en las fuentes de este notebook, crea una actividad de tipo [TIPO DE ACTIVIDAD] sobre [TEMA] para [GRADO] en [ASIGNATURA]. La intención puede incluir: [INTENCION PEDAGOGICA]. Considera [TIEMPO DISPONIBLE], materiales disponibles y [PRODUCTO ESPERADO]. Entrega instrucciones para estudiantes, pasos, evidencia y criterio rápido de revisión.'
    ),
    resources: ['Programa Analítico', 'Libro CONALITEG', 'Planeación', 'NotebookLM']
  }),
  practicalLesson({
    id: 'notebooklm-planeacion',
    moduleId: 'modulo-2',
    title: '¿Cómo crea NotebookLM una planeación completa?',
    duration: '20 min',
    objective: ['Generar una secuencia didáctica usando fuentes oficiales y contexto del grupo.'],
    teacherProblem: 'La planeación toma tiempo porque hay que conectar Programa Analítico, Programa Sintético, PDA, campos, ejes y libro de texto.',
    keyIdea: 'NotebookLM puede armar documentos de planeación cuando las fuentes oficiales ya están dentro del notebook.',
    visual: {
      title: 'Fuentes a planeación',
      steps: ['Programa Analítico', 'Programa Sintético', 'PDA', 'Campo formativo', 'Libro CONALITEG', 'Secuencia']
    },
    contentSections: [
      {
        title: 'La mejor planeación empieza con fuentes correctas',
        keyIdea: 'NotebookLM puede crear distintos documentos de planeación cuando tiene las fuentes docentes adecuadas.',
        points: [
          'Planeación diaria',
          'Planeación semanal',
          'Planeación mensual',
          'Secuencia didáctica',
          'Situación de aprendizaje',
          'Proyecto comunitario',
          'Proyecto interdisciplinario',
          'Ruta de aprendizaje',
          'Fuentes correctas'
        ],
        visualType: 'cards',
        imageKey: 'planeaciones-tipos',
        pointDetails: [
          {
            label: 'Planeación diaria',
            detail: 'Sirve para organizar una sola sesión con inicio, desarrollo, cierre, recursos, producto y evidencia.'
          },
          {
            label: 'Planeación semanal',
            detail: 'Sirve para ordenar varias clases sin perder continuidad entre actividades, productos y evaluación.'
          },
          {
            label: 'Planeación mensual',
            detail: 'Sirve para dar seguimiento a una unidad, distribuir tiempos y anticipar evidencias importantes.'
          },
          {
            label: 'Secuencia didáctica',
            detail: 'Sirve para desarrollar un aprendizaje paso a paso, con sesiones conectadas y criterios claros.'
          },
          {
            label: 'Situación de aprendizaje',
            detail: 'Sirve para contextualizar el contenido en un problema, reto o situación cercana al grupo.'
          },
          {
            label: 'Proyecto comunitario',
            detail: 'Sirve para conectar contenidos con el entorno, la escuela o una necesidad de la comunidad.'
          },
          {
            label: 'Proyecto interdisciplinario',
            detail: 'Sirve para relacionar varias asignaturas alrededor de un producto o problema común.'
          },
          {
            label: 'Ruta de aprendizaje',
            detail: 'Sirve para organizar el recorrido del estudiante: qué hará primero, qué evidencia deja y cómo avanza.'
          },
          {
            label: 'Fuentes correctas',
            detail: 'El resultado mejora cuando el notebook incluye Programa Analítico, Programa Sintético, libro CONALITEG, tus planeaciones y contexto del grupo.'
          }
        ],
        reflectionQuestion: '¿Qué tipo de planeación elaboras con más frecuencia?'
      },
      {
        title: 'Una planeación puede transformarse',
        keyIdea: 'NotebookLM puede reutilizar tu trabajo y convertir una planeación en otros documentos sin empezar desde cero.',
        points: [
          'Planeación diaria',
          'Secuencia didáctica',
          'Proyecto',
          'Ruta de aprendizaje',
          'Planeación semanal',
          'Planeación mensual',
          'Mismo tema y fuentes'
        ],
        visualType: 'workflow',
        imageKey: 'planeacion-transformacion',
        pointDetails: [
          {
            label: 'Planeación diaria',
            detail: 'Puedes partir de una planeación sencilla que ya tenga tema, aprendizajes esperados, actividades, recursos y evaluación.'
          },
          {
            label: 'Secuencia didáctica',
            detail: 'Pídele que la convierta en varias sesiones manteniendo el mismo tema, fuentes y propósito de aprendizaje.'
          },
          {
            label: 'Proyecto',
            detail: 'Pídele que transforme la planeación en un proyecto con producto final, pasos, roles, recursos y evidencia.'
          },
          {
            label: 'Ruta de aprendizaje',
            detail: 'Pídele que organice el recorrido del estudiante en pasos claros, con avances y productos intermedios.'
          },
          {
            label: 'Planeación semanal',
            detail: 'Pídele que distribuya la misma intención en varios días, cuidando tiempos reales y continuidad.'
          },
          {
            label: 'Planeación mensual',
            detail: 'Pídele que amplíe la organización para una unidad completa, con sesiones, evidencias y seguimiento.'
          },
          {
            label: 'Mismo tema y fuentes',
            detail: 'La clave es pedir que conserve tema, aprendizajes, PDA y fuentes del notebook para no perder coherencia.'
          }
        ],
        reflectionQuestion: '¿Qué planeación tuya podrías transformar hoy en otro formato útil?'
      }
    ],
    demo: {
      objective: 'Generar una secuencia didáctica completa desde fuentes curriculares.',
      workflow: [
        'Abrir un notebook con Programa Analítico, Programa Sintético y libro CONALITEG.',
        'Pedir una secuencia para [TEMA], [GRADO] y [TIEMPO].',
        'Solicitar PDA, campo formativo y eje articulador desde las fuentes.',
        'Revisar sesiones, productos, recursos y evidencia.',
        'Pedir una versión breve para agenda de clase.'
      ],
      questions: ['¿Qué parte de la planeación salió de las fuentes y qué debo ajustar yo?'],
      expectedResults: ['Una secuencia didáctica completa.', 'Una agenda breve para el aula.'],
      presenterTips: ['Modela verificación contra fuentes oficiales antes de celebrar el resultado.']
    },
    activity: {
      title: 'Genera tu documento de planeación',
      steps: [
        'Elige el producto: diaria, semanal, secuencia o proyecto.',
        'Completa [TEMA], [GRADO], [ASIGNATURA] y [TIEMPO DISPONIBLE].',
        'Incluye PDA, campo y eje si ya los tienes.',
        'Genera el documento en NotebookLM.',
        'Subraya qué revisarás antes de entregarlo o usarlo.'
      ],
      deliverable: 'Un borrador de planeación creado desde fuentes del notebook.'
    },
    successCriterion: 'El borrador incluye fuentes oficiales, sesiones, producto esperado, evidencia y al menos un ajuste que el docente revisará.',
    takeaway: 'Una planeación generada vale cuando conecta fuentes oficiales con una clase posible.',
    transition: 'Con la planeación lista, necesitamos instrumentos para saber si los estudiantes aprendieron.',
    promptTemplate: prompt(
      'm2-planeacion-secuencia',
      'Secuencia didáctica con fuentes oficiales',
      'Planeación',
      'Intermedio',
      97,
      'Con base en mis fuentes, crea [PRODUCTO DE PLANEACION] para [GRADO] en [ASIGNATURA] sobre [TEMA]. Integra [PDA], [CAMPO FORMATIVO], [EJE ARTICULADOR], Programa Analítico, Programa Sintético y libro CONALITEG cuando estén disponibles. Incluye propósito, sesiones, actividades, materiales, producto esperado, evaluación y ajustes necesarios.'
    ),
    resources: ['Programa Analítico', 'Programa Sintético', 'PDA', 'Campos Formativos', 'Ejes Articuladores', 'CONALITEG']
  }),
  practicalLesson({
    id: 'notebooklm-evaluacion',
    moduleId: 'modulo-2',
    title: '¿Cómo crea NotebookLM instrumentos de evaluación?',
    duration: '20 min',
    objective: ['Crear una rúbrica y una lista de cotejo a partir de una actividad.'],
    teacherProblem: 'Después de diseñar una actividad, todavía falta evaluar sin perder horas redactando criterios.',
    keyIdea: 'NotebookLM puede convertir una actividad en instrumentos de evaluación claros y editables.',
    visual: {
      title: 'Actividad a evaluación',
      steps: ['Actividad', 'Producto esperado', 'Criterios', 'Rúbrica', 'Lista de cotejo', 'Retroalimentación']
    },
    contentSections: [
      {
        title: 'El reto del docente',
        keyIdea: 'Evaluar no debería empezar desde una hoja en blanco.',
        points: [
          '¿Rúbrica?',
          '¿Lista de cotejo?',
          '¿Escala estimativa?',
          '¿Qué evalúo realmente?'
        ],
        visualType: 'decision-tree',
        imageKey: 'evaluacion-reto',
        pointDetails: [
          {
            label: '¿Rúbrica?',
            detail: 'Es la primera duda cuando hay que valorar niveles de desempeño en un producto complejo.'
          },
          {
            label: '¿Lista de cotejo?',
            detail: 'Aparece cuando solo se necesita verificar si se cumplió o no un criterio puntual.'
          },
          {
            label: '¿Escala estimativa?',
            detail: 'Surge cuando el logro no es binario y conviene valorar un grado o nivel intermedio.'
          },
          {
            label: '¿Qué evalúo realmente?',
            detail: 'La pregunta de fondo: el instrumento correcto depende de lo que el producto esperado permite observar.'
          }
        ],
        reflectionQuestion: '¿Qué instrumento de evaluación utilizas con mayor frecuencia y por qué?'
      },
      {
        title: '¿Qué puede crear NotebookLM?',
        keyIdea: 'NotebookLM ofrece un catálogo de instrumentos de evaluación, no una sola plantilla fija.',
        points: [
          'Rúbrica',
          'Lista de cotejo',
          'Escala estimativa',
          'Guía de observación',
          'Evaluación diagnóstica',
          'Evaluación formativa',
          'Evaluación sumativa',
          'Autoevaluación',
          'Coevaluación',
          'Retroalimentación personalizada'
        ],
        visualType: 'cards',
        imageKey: 'evaluacion-catalogo',
        pointDetails: [
          {
            label: 'Rúbrica',
            detail: 'Evalúa niveles de desempeño con criterios descritos para cada nivel.'
          },
          {
            label: 'Lista de cotejo',
            detail: 'Verifica el cumplimiento de criterios puntuales, presentes o ausentes.'
          },
          {
            label: 'Escala estimativa',
            detail: 'Valora el grado de logro en una escala intermedia entre el cumplimiento total y nulo.'
          },
          {
            label: 'Guía de observación',
            detail: 'Registra evidencias durante la actividad, sin interrumpir el proceso del grupo.'
          },
          {
            label: 'Evaluación diagnóstica',
            detail: 'Identifica conocimientos previos antes de iniciar un tema o proyecto.'
          },
          {
            label: 'Evaluación formativa',
            detail: 'Da seguimiento al aprendizaje durante el proceso, no solo al final.'
          },
          {
            label: 'Evaluación sumativa',
            detail: 'Ofrece una valoración final del aprendizaje logrado.'
          },
          {
            label: 'Autoevaluación',
            detail: 'El estudiante reflexiona sobre su propio aprendizaje con criterios claros.'
          },
          {
            label: 'Coevaluación',
            detail: 'Los estudiantes evalúan entre pares con criterios acordados previamente.'
          },
          {
            label: 'Retroalimentación personalizada',
            detail: 'Genera comentarios adaptados al nivel de desempeño de cada estudiante.'
          }
        ],
        reflectionQuestion: '¿Qué instrumento del catálogo usarías para tu próxima evaluación?'
      }
    ],
    demo: {
      objective: 'Generar una rúbrica y una lista de cotejo desde una misma actividad.',
      workflow: [
        'Usar la actividad creada en la lección 1.',
        'Pedir una rúbrica con criterios observables.',
        'Pedir una lista de cotejo para revisión rápida.',
        'Agregar retroalimentación personalizada para tres niveles de desempeño.',
        'Revisar que los criterios correspondan al producto esperado.'
      ],
      questions: ['¿El instrumento evalúa lo que la actividad realmente pide producir?'],
      expectedResults: ['Una rúbrica breve.', 'Una lista de cotejo.', 'Frases de retroalimentación editables.'],
      presenterTips: ['Usa la misma actividad para no abrir otro tema ni otra demo.']
    },
    activity: {
      title: 'Crea tu instrumento',
      steps: [
        'Elige una actividad o producto esperado.',
        'Selecciona [TIPO DE EVALUACION].',
        'Genera rúbrica, lista o preguntas.',
        'Agrega una frase de retroalimentación.',
        'Elimina un criterio que no puedas observar.'
      ],
      deliverable: 'Un instrumento de evaluación listo para ajustar.'
    },
    successCriterion: 'El instrumento incluye criterios observables alineados con el producto esperado y una retroalimentación breve.',
    takeaway: 'Evaluar es más rápido cuando NotebookLM parte del producto real que pedirás al grupo.',
    transition: 'Ya vimos actividades, planeación y evaluación; ahora abriremos el catálogo completo de productos que NotebookLM puede crear.',
    promptTemplate: prompt(
      'm2-evaluacion-instrumento',
      'Instrumento de evaluación desde una actividad',
      'Evaluación',
      'Intermedio',
      96,
      'A partir de esta actividad: [TIPO DE ACTIVIDAD] sobre [TEMA] para [GRADO] en [ASIGNATURA], crea [TIPO DE EVALUACION]. Incluye criterios observables, niveles o indicadores, instrucciones para estudiantes, espacio para retroalimentación y una versión breve para revisión rápida.'
    ),
    resources: ['Actividad generada', 'Producto esperado', 'PDA', 'Evidencias de aprendizaje']
  }),
  practicalLesson({
    id: 'catalogo-productos-notebooklm',
    moduleId: 'modulo-2',
    title: '¿Qué más puede crear NotebookLM para mi trabajo docente?',
    duration: '20 min',
    objective: ['Construir un catálogo personal de productos que NotebookLM puede crear para la práctica diaria.'],
    teacherProblem: 'Muchos docentes usan NotebookLM para una sola cosa y no ven todo lo que puede producir para clase, estudiantes y gestión escolar.',
    keyIdea: 'NotebookLM es más útil cuando lo pensamos como un catálogo de productos docentes, no como una caja de funciones.',
    visual: {
      title: 'Catálogo de productos',
      type: 'cards',
      steps: ['Recursos didácticos', 'Recursos para estudiantes', 'Gestión escolar', 'Análisis de información']
    },
    demo: {
      objective: 'Generar cinco productos completamente diferentes desde el mismo notebook.',
      workflow: [
        'Abrir el notebook usado durante el módulo.',
        'Generar una presentación breve.',
        'Generar una guía de estudio.',
        'Generar una comunicación para familias.',
        'Generar una comparación de fuentes.',
        'Generar preguntas de salida para clase.'
      ],
      questions: ['¿Qué producto resuelve una carga real de mi semana?'],
      expectedResults: ['Cinco productos distintos desde las mismas fuentes.', 'Un catálogo personal priorizado.'],
      presenterTips: ['La demo debe sentirse como descubrimiento: mismo notebook, muchos productos.']
    },
    activity: {
      title: 'Mi catálogo de productos',
      steps: [
        'Elige tres productos que sí usarías.',
        'Marca uno para enseñanza, uno para estudiantes y uno para gestión.',
        'Escribe qué fuente necesita cada producto.',
        'Genera el primero o deja la plantilla lista.',
        'Anota cuándo lo usarás.'
      ],
      deliverable: 'Un catálogo personal con tres productos NotebookLM priorizados.'
    },
    successCriterion: 'El catálogo incluye tres productos priorizados, la fuente necesaria para cada uno y cuándo se usará el primero.',
    takeaway: 'Cuando sabes qué producto necesitas, NotebookLM deja de ser curioso y se vuelve útil.',
    transition: 'El siguiente módulo organizará estos productos dentro de un flujo docente para trabajar con menos fricción cada semana.',
    promptTemplate: prompt(
      'm2-catalogo-productos',
      'Catálogo personal de productos NotebookLM',
      'Productividad con NotebookLM',
      'Básico',
      95,
      'Con base en las fuentes de este notebook y mi necesidad docente: [NECESIDAD DOCENTE], sugiere productos que puedo crear en estas categorías: recursos didácticos, recursos para estudiantes, gestión escolar y análisis de información. Para cada producto indica para qué sirve, fuente necesaria, tiempo de uso y primera plantilla con variables editables.'
    ),
    resources: ['Notebook del módulo', 'Fuentes curriculares', 'Evidencias', 'Acuerdos escolares']
  })
];

const module3Lessons: Lesson[] = [
  practicalLesson({
    id: 'flujo-diario',
    moduleId: 'modulo-3',
    title: '¿Cómo preparo mi semana sin empezar de cero?',
    duration: '15 min',
    objective: ['Crear un flujo semanal simple para reutilizar fuentes, plantillas y evidencias.'],
    teacherProblem: 'Cada semana parece comenzar desde cero aunque ya existen materiales, acuerdos y evidencias útiles.',
    caseSituation:
      'El domingo por la tarde, una docente vuelve a buscar la misma planeación, el mismo libro y la misma rúbrica. No necesita más herramientas: necesita un flujo que le ahorre repetir trabajo.',
    keyIdea: 'Un flujo docente ahorra tiempo cuando conecta entrada, producción y revisión en el mismo lugar.',
    visual: { title: 'Flujo semanal', steps: ['Revisar fuentes', 'Elegir prioridad', 'Generar borrador', 'Ajustar', 'Guardar evidencia'] },
    demo: {
      objective: 'Planear una semana usando un notebook existente y una plantilla guardada.',
      workflow: ['Abrir notebook del grupo.', 'Elegir una prioridad de la semana.', 'Usar una plantilla profesional.', 'Guardar producto y criterio en una nota.'],
      questions: ['¿Qué parte de mi semana no debería volver a empezar desde cero?'],
      expectedResults: ['Una mini ruta semanal de trabajo docente.'],
      presenterTips: ['Modela orden, no velocidad.']
    },
    activity: {
      title: 'Mi flujo de lunes',
      steps: ['Elige una tarea repetida.', 'Define fuente base.', 'Elige plantilla.', 'Decide dónde guardar el resultado.'],
      deliverable: 'Un flujo semanal de cuatro pasos.'
    },
    successCriterion: 'El flujo muestra una tarea repetida, una fuente base, una plantilla y un lugar claro para guardar el resultado.',
    takeaway: 'La IA ahorra tiempo cuando el docente también guarda el camino, no solo el resultado.',
    transition: 'El siguiente paso es conectar ese flujo con los documentos que ya viven en Google Workspace.',
    promptTemplate: prompt(
      'flujo-diario-semanal',
      'Flujo semanal docente',
      'Organización',
      'Básico',
      92,
      'Ayúdame a organizar un flujo semanal para [ASIGNATURA] con [GRADO]. Usa estas fuentes: [FUENTES]. Define prioridad de la semana, producto docente, evidencia estudiantil, criterio de revisión y lugar donde debo guardar cada resultado.'
    ),
    resources: ['Notebook del grupo', 'plantillas de prompt reutilizables', 'Planeación semanal']
  }),
  practicalLesson({
    id: 'google-workspace',
    moduleId: 'modulo-3',
    title: '¿Cómo uso mis Docs, Slides y Classroom con NotebookLM?',
    duration: '15 min',
    objective: ['Decidir qué archivo de Google Workspace usar como fuente, producto o entrega.'],
    teacherProblem: 'Los archivos están en Drive, las tareas en Classroom y las ideas en NotebookLM, pero no siempre trabajan juntos.',
    caseSituation:
      'Una guía está en Docs, la presentación está en Slides, la tarea está en Classroom y el programa está en Drive. El problema no es tener archivos; es saber qué papel cumple cada uno.',
    keyIdea: 'Google Workspace organiza el trabajo; NotebookLM ayuda a pensar con esos documentos.',
    visual: { title: 'Cada herramienta en su lugar', steps: ['Drive guarda', 'Docs desarrolla', 'Slides presenta', 'Classroom entrega', 'NotebookLM analiza'] },
    demo: {
      objective: 'Convertir un Google Doc en fuente y luego en una guía para Classroom.',
      workflow: ['Seleccionar un Doc de planeación.', 'Usarlo como fuente en NotebookLM.', 'Pedir una guía de estudiante.', 'Definir cómo publicarla en Classroom.'],
      questions: ['¿Este archivo es fuente, producto o tarea?'],
      expectedResults: ['Una decisión clara sobre el uso de cada archivo.'],
      presenterTips: ['Evita explicar todo Google Workspace; usa un flujo real.']
    },
    activity: {
      title: 'Mapa de mis archivos',
      steps: ['Elige un archivo.', 'Marca si es fuente, producto o entrega.', 'Define su siguiente uso.', 'Anota dónde vivirá.'],
      deliverable: 'Un mapa simple de archivos para una clase.'
    },
    successCriterion: 'El mapa clasifica cada archivo como fuente, producto o entrega, y define su siguiente uso.',
    takeaway: 'No todo archivo debe subirse a NotebookLM; cada archivo necesita un papel claro.',
    transition: 'Cuando los archivos tienen papel claro, necesitamos una biblioteca de notebooks igual de ordenada.',
    promptTemplate: prompt(
      'workspace-mapa',
      'Mapa de archivos Google Workspace',
      'Google Workspace',
      'Intermedio',
      90,
      'Organiza estos archivos: [LISTA DE ARCHIVOS] para [PROYECTO O CLASE]. Clasifica cada uno como fuente, producto docente, material para estudiantes o entrega en Classroom. Sugiere el siguiente paso para cada archivo.'
    ),
    resources: ['Google Drive', 'Google Docs', 'Google Slides', 'Google Classroom']
  }),
  practicalLesson({
    id: 'perfect-notebook-ecosystem',
    moduleId: 'modulo-3',
    title: '¿Cómo organizo mis notebooks para no perderme?',
    duration: '15 min',
    objective: ['Diseñar una biblioteca de notebooks por propósito, grupo o proyecto.'],
    teacherProblem: 'Después de crear varios notebooks, cuesta recordar cuál sirve para qué.',
    caseSituation:
      'Después de varias semanas, aparecen notebooks llamados “Historia”, “Historia 2”, “Proyecto” y “Nuevo notebook”. Si el nombre no dice el propósito, el docente vuelve a perder tiempo.',
    keyIdea: 'Una biblioteca funciona cuando los nombres muestran propósito, grupo y uso.',
    visual: { title: 'Biblioteca docente', steps: ['Asignatura', 'Grupo', 'Proyecto', 'Evaluación', 'Consejo Técnico'] },
    demo: {
      objective: 'Renombrar y ordenar notebooks con una convención simple.',
      workflow: ['Mostrar nombres confusos.', 'Proponer una convención.', 'Clasificar notebooks por propósito.', 'Decidir qué se archiva o actualiza.'],
      questions: ['¿El nombre me dice para qué sirve?'],
      expectedResults: ['Una convención de nombres y categorías.'],
      presenterTips: ['Usa ejemplos de nombres reales y breves.']
    },
    activity: {
      title: 'Nombra para encontrar',
      steps: ['Elige tres notebooks posibles.', 'Renómbralos con grupo y propósito.', 'Marca prioridad.', 'Decide fuente inicial.'],
      deliverable: 'Una mini biblioteca de tres notebooks nombrados con propósito.'
    },
    successCriterion: 'Cada notebook tiene nombre con grupo o propósito, fuente inicial y prioridad de uso.',
    takeaway: 'Un buen nombre evita volver a pensar dónde dejaste tu trabajo.',
    transition: 'Ahora veremos cómo esta organización puede servir también al colectivo docente de la escuela.',
    promptTemplate: prompt(
      'biblioteca-notebooks',
      'Biblioteca de notebooks',
      'Organización',
      'Básico',
      91,
      'Ayúdame a diseñar una biblioteca de notebooks para [ASIGNATURAS O GRUPOS]. Propón nombres claros, propósito de cada notebook, fuentes iniciales, frecuencia de actualización y cuándo conviene archivarlo.'
    ),
    resources: ['Lista de grupos', 'Proyectos del ciclo', 'Fuentes curriculares']
  }),
  practicalLesson({
    id: 'school-notebook',
    moduleId: 'modulo-3',
    title: '¿Cómo construimos memoria del colectivo docente?',
    duration: '15 min',
    objective: ['Diseñar un notebook escolar para acuerdos, seguimiento y mejora colegiada.'],
    teacherProblem: 'Los acuerdos de reuniones se pierden entre minutas, mensajes y archivos sueltos.',
    caseSituation:
      'En Consejo Técnico se acuerdan acciones importantes, pero un mes después nadie recuerda qué quedó pendiente, quién daba seguimiento o dónde estaba la minuta.',
    keyIdea: 'Un notebook escolar ayuda cuando reúne acuerdos útiles, no información sensible innecesaria.',
    visual: { title: 'Memoria colegiada', steps: ['Acuerdos', 'PEMC', 'Protocolos', 'Seguimiento', 'Próximas acciones'] },
    demo: {
      objective: 'Crear una consulta de acuerdos desde minutas no sensibles.',
      workflow: ['Abrir fuentes institucionales permitidas.', 'Pedir resumen de acuerdos vigentes.', 'Identificar responsables y fechas.', 'Generar lista de seguimiento.'],
      questions: ['¿Qué acuerdo sigue vivo y quién lo atiende?'],
      expectedResults: ['Una lista de seguimiento para colectivo docente.'],
      presenterTips: ['Subraya privacidad: no usar datos personales de estudiantes.']
    },
    activity: {
      title: 'Acuerdo que no se pierde',
      steps: ['Elige un acuerdo escolar.', 'Define fuente permitida.', 'Anota responsable.', 'Escribe siguiente acción.'],
      deliverable: 'Una ficha de seguimiento de acuerdo escolar.'
    },
    successCriterion: 'La ficha identifica acuerdo, fuente permitida, responsable y próxima acción sin datos sensibles.',
    takeaway: 'La memoria escolar vale cuando convierte acuerdos en acciones visibles.',
    transition: 'Para sostener esta práctica, necesitamos un sistema sencillo de mejora continua.',
    promptTemplate: prompt(
      'school-notebook-seguimiento',
      'Seguimiento de acuerdos escolares',
      'Trabajo colegiado',
      'Intermedio',
      89,
      'Con base en estas fuentes institucionales permitidas: [FUENTES], resume acuerdos vigentes, responsables, fechas, evidencias de avance y próximas acciones. No incluyas datos personales sensibles.'
    ),
    resources: ['Minutas', 'PEMC', 'Protocolos escolares', 'Calendario escolar']
  }),
  practicalLesson({
    id: 'organizacion-profesional',
    moduleId: 'modulo-3',
    title: '¿Cómo mantengo esto vivo sin que sea otra carga?',
    duration: '15 min',
    objective: ['Crear una rutina ligera para actualizar fuentes, plantillas y productos.'],
    teacherProblem: 'Muchas herramientas empiezan con entusiasmo y después se abandonan porque requieren mantenimiento pesado.',
    caseSituation:
      'El docente crea buenos notebooks, pero si nunca elimina duplicados, actualiza fuentes o archiva lo viejo, el sistema se vuelve otra carga.',
    keyIdea: 'La organización se sostiene con una rutina pequeña, repetible y fácil de cumplir.',
    visual: { title: 'Rutina de mantenimiento', steps: ['Eliminar duplicados', 'Actualizar fuente clave', 'Guardar plantilla', 'Registrar mejora', 'Archivar lo viejo'] },
    demo: {
      objective: 'Hacer una limpieza de 10 minutos en una biblioteca docente.',
      workflow: ['Identificar una fuente vencida.', 'Actualizar una fuente clave.', 'Guardar una plantilla útil.', 'Archivar un producto viejo.'],
      questions: ['¿Qué puedo limpiar sin reorganizar todo?'],
      expectedResults: ['Una rutina mensual ligera.'],
      presenterTips: ['La demo debe sentirse pequeña y posible.']
    },
    activity: {
      title: 'Mi rutina mínima',
      steps: ['Elige día o momento.', 'Define tres acciones.', 'Elige un lugar de guardado.', 'Escribe señal de revisión.'],
      deliverable: 'Una rutina mensual de mantenimiento en tres acciones.'
    },
    successCriterion: 'La rutina contiene tres acciones sostenibles y una señal clara para saber cuándo actualizar o archivar.',
    takeaway: 'Un sistema docente útil es el que puedes mantener en semanas difíciles.',
    transition: 'Con el ecosistema armado, pasamos al último módulo: usar IA con responsabilidad y criterio profesional.',
    promptTemplate: prompt(
      'organizacion-rutina',
      'Rutina minima de mantenimiento',
      'Mejora continua',
      'Básico',
      90,
      'Diseña una rutina mensual de 10 minutos para mantener mi biblioteca de NotebookLM sobre [ASIGNATURA O PROYECTO]. Incluye qué actualizar, qué archivar, qué plantilla guardar y cómo saber si el sistema sigue siendo útil.'
    ),
    resources: ['Biblioteca de notebooks', 'Plantillas', 'Productos generados']
  })
];

const module4Lessons: Lesson[] = [
  practicalLesson({
    id: 'etica',
    moduleId: 'modulo-4',
    title: '¿Qué decisiones no debo delegar a la IA?',
    duration: '15 min',
    objective: ['Distinguir tareas que la IA puede apoyar de decisiones que requieren juicio docente.'],
    teacherProblem: 'La IA puede proponer mucho, pero no debe decidir por el docente ni por la escuela.',
    caseSituation:
      'NotebookLM puede ayudar a redactar un borrador de retroalimentación, pero no debe decidir calificaciones, sanciones, diagnósticos ni acciones que afecten directamente a estudiantes.',
    keyIdea: 'La IA apoya borradores; el juicio profesional decide lo que afecta a estudiantes.',
    visual: { title: 'Semáforo de decisión', steps: ['Verde: apoyo', 'Amarillo: revisar', 'Rojo: no delegar'] },
    demo: {
      objective: 'Clasificar decisiones docentes en un semáforo ético.',
      workflow: ['Listar cinco tareas docentes.', 'Pedir clasificación verde, amarillo o rojo.', 'Revisar riesgos.', 'Definir revisión humana obligatoria.'],
      questions: ['¿Qué decisión afecta directamente a un estudiante?'],
      expectedResults: ['Un semáforo ético de uso docente.'],
      presenterTips: ['Usa casos cotidianos, no dilemas abstractos.']
    },
    activity: {
      title: 'Mi semáforo de IA',
      steps: ['Escribe tres tareas.', 'Clasifica cada una.', 'Anota el riesgo.', 'Define revisión docente.'],
      deliverable: 'Un semáforo personal de decisiones con IA.'
    },
    successCriterion: 'El semáforo clasifica tres tareas con beneficio, riesgo y revisión humana necesaria.',
    takeaway: 'La IA puede sugerir; la responsabilidad sigue teniendo nombre y apellido docente.',
    transition: 'Además de decidir bien, necesitamos proteger información y revisar sesgos.',
    promptTemplate: prompt(
      'etica-semaforo',
      'Semáforo ético de tareas docentes',
      'Ética',
      'Básico',
      93,
      'Clasifica estas tareas docentes: [TAREAS] en verde, amarillo o rojo según el nivel de riesgo al usar IA. Explica beneficio, riesgo, dato sensible posible y revisión humana necesaria.'
    ),
    resources: ['Acuerdos escolares', 'Lineamientos de privacidad', 'Tareas docentes']
  }),
  practicalLesson({
    id: 'ia-responsable',
    moduleId: 'modulo-4',
    title: '¿Cómo protejo datos y reduzco sesgos?',
    duration: '20 min',
    objective: [
      'Aplicar una revisión rápida de privacidad, sesgos y lenguaje antes de usar una respuesta.',
      'Decidir qué información debe eliminarse, generalizarse o verificarse.'
    ],
    teacherProblem: 'Una respuesta puede parecer útil y aun así exponer datos, simplificar contextos, repetir prejuicios o sonar justa sin serlo.',
    keyIdea: 'Antes de compartir, revisa datos personales, fuentes, supuestos, sesgos y trato digno.',
    caseSituation:
      'Una maestra pide apoyo para redactar un reporte de grupo. La respuesta incluye nombres, interpreta conducta como falta de interés y recomienda acciones iguales para todos. Antes de usarla, necesita limpiar datos, revisar supuestos y ajustar el lenguaje.',
    visual: { title: 'Filtro antes de usar', steps: ['Datos personales', 'Fuente usada', 'Supuesto oculto', 'Sesgo posible', 'Acción segura'] },
    demo: {
      objective: 'Auditar una respuesta generada antes de llevarla al aula.',
      workflow: [
        'Tomar una respuesta ficticia de IA con un reporte de grupo.',
        'Marcar datos personales, nombres, diagnósticos o información sensible.',
        'Subrayar frases que hacen suposiciones sobre estudiantes o familias.',
        'Detectar si la recomendación trata igual situaciones distintas.',
        'Reescribir una versión segura, general y verificable.'
      ],
      questions: ['¿Qué tendría que quitar antes de compartir?'],
      expectedResults: [
        'Una versión sin datos personales innecesarios.',
        'Una lista de supuestos por verificar.',
        'Una recomendación escrita con lenguaje respetuoso y accionable.'
      ],
      presenterTips: [
        'No uses casos sensibles reales; trabaja con ejemplos ficticios.',
        'Distingue dato, interpretación y recomendación.',
        'Subraya que privacidad y sesgos se revisan antes de compartir, no después.'
      ]
    },
    activity: {
      title: 'Filtro de seguridad',
      steps: [
        'Revisa un texto ficticio generado por IA.',
        'Marca un dato sensible.',
        'Detecta un supuesto o posible sesgo.',
        'Cambia una frase para que sea más respetuosa.',
        'Escribe una acción segura antes de compartir.'
      ],
      deliverable: 'Una mini auditoría de privacidad y sesgo.'
    },
    successCriterion: 'La auditoría identifica un dato sensible, un supuesto o sesgo, una frase corregida y una acción segura antes de compartir.',
    takeaway: 'Usar IA responsablemente es revisar antes de compartir.',
    transition: 'Con ese cuidado, podemos enfocarnos en el mejor uso de la IA: liberar tiempo para estar más presentes como docentes.',
    promptTemplate: prompt(
      'responsable-filtro',
      'Filtro de privacidad y sesgos',
      'Responsabilidad digital',
      'Intermedio',
      94,
      'Revisa este texto generado por IA: [TEXTO]. Identifica datos personales, supuestos, sesgos, lenguaje poco adecuado y riesgos de uso. Devuelve una versión segura, clara y respetuosa para [AUDIENCIA].'
    ),
    resources: ['Respuesta generada', 'Acuerdos de privacidad', 'Ejemplos ficticios']
  }),
  practicalLesson({
    id: 'teacher-augmentation',
    moduleId: 'modulo-4',
    title: '¿Cómo uso IA para tener más presencia docente?',
    duration: '15 min',
    objective: ['Elegir tareas que la IA puede aliviar para recuperar tiempo de acompañamiento.'],
    teacherProblem: 'El riesgo no es usar IA, sino usarla para producir más trabajo en vez de recuperar presencia con estudiantes.',
    caseSituation:
      'Un docente usa IA para generar más materiales, pero sigue sin tiempo para revisar cuadernos, conversar con estudiantes o dar retroalimentación breve.',
    keyIdea: 'La docencia aumentada libera tiempo de preparación para invertirlo en conversación, observación y retroalimentación.',
    visual: { title: 'Tiempo recuperado', steps: ['Tarea repetitiva', 'Apoyo IA', 'Revision docente', 'Tiempo liberado', 'Interaccion con estudiantes'] },
    demo: {
      objective: 'Convertir una tarea administrativa repetitiva en tiempo de retroalimentación.',
      workflow: ['Elegir una tarea que consume tiempo.', 'Pedir un borrador o formato.', 'Revisar y ajustar.', 'Definir qué interacción docente gana tiempo.'],
      questions: ['¿Qué haré con el tiempo que recupero?'],
      expectedResults: ['Una decisión concreta de tiempo recuperado.'],
      presenterTips: ['Cierra siempre con la acción humana recuperada.']
    },
    activity: {
      title: 'Recuperar 20 minutos',
      steps: ['Identifica una tarea repetitiva.', 'Define apoyo de IA.', 'Escribe revisión necesaria.', 'Decide uso del tiempo ganado.'],
      deliverable: 'Un intercambio: tarea que delego parcialmente y presencia que recupero.'
    },
    successCriterion: 'La decisión muestra qué tarea se aligera, qué revisión hará el docente y qué interacción con estudiantes se recupera.',
    takeaway: 'La mejor IA no te aleja del grupo; te devuelve tiempo para mirarlo mejor.',
    transition: 'Para mejorar con honestidad, ahora revisaremos qué funcionó y qué necesita ajuste.',
    promptTemplate: prompt(
      'docencia-aumentada-tiempo',
      'Recuperar tiempo docente',
      'Docencia aumentada',
      'Básico',
      92,
      'Analiza esta tarea repetitiva: [TAREA]. Propón cómo la IA puede apoyar sin reemplazar mi juicio docente, qué debo revisar y cómo puedo usar el tiempo recuperado para acompañar mejor a [GRUPO].'
    ),
    resources: ['Lista de tareas semanales', 'Planeación', 'Evidencias de estudiantes']
  }),
  practicalLesson({
    id: 'reflexion',
    moduleId: 'modulo-4',
    title: '¿Cómo reviso lo que funcionó y lo que no?',
    duration: '15 min',
    objective: ['Usar una evidencia de clase para decidir un ajuste concreto.'],
    teacherProblem: 'Después de una actividad, muchas veces sabemos que algo pasó, pero no dejamos una decisión clara para mejorar.',
    caseSituation:
      'La actividad salió “más o menos”: hubo participación, pero varios productos quedaron incompletos. Si no se registra una decisión, la siguiente clase repite el mismo problema.',
    keyIdea: 'Reflexionar sirve cuando termina en un ajuste pequeño para la próxima clase.',
    visual: { title: 'Evidencia a ajuste', steps: ['Qué vi', 'Qué evidencia tengo', 'Qué funcionó', 'Qué ajustaré', 'Próxima acción'] },
    demo: {
      objective: 'Convertir notas de clase en una decisión de mejora.',
      workflow: ['Pegar notas no sensibles de una clase.', 'Pedir patrones observables.', 'Elegir una mejora pequeña.', 'Redactar próxima acción.'],
      questions: ['¿Qué ajuste puedo probar la próxima clase?'],
      expectedResults: ['Una decisión de mejora basada en evidencia.'],
      presenterTips: ['No uses reflexión larga; una decisión basta.']
    },
    activity: {
      title: 'Una mejora para mañana',
      steps: ['Escribe una evidencia.', 'Anota qué funcionó.', 'Anota qué no.', 'Define un ajuste.'],
      deliverable: 'Una nota de mejora con próxima acción.'
    },
    successCriterion: 'La nota incluye una evidencia observada, algo que funcionó, algo que se ajustará y una próxima acción concreta.',
    takeaway: 'La reflexión docente vale cuando cambia la siguiente clase.',
    transition: 'Con esa mirada, construiremos una ruta de 30 días realista.',
    promptTemplate: prompt(
      'reflexion-ajuste',
      'Reflexion breve de clase',
      'Mejora continua',
      'Básico',
      91,
      'Con base en estas notas de clase no sensibles: [NOTAS], identifica qué funcionó, qué evidencia lo muestra, qué necesita ajuste y una acción pequeña para la próxima clase de [GRADO Y ASIGNATURA].'
    ),
    resources: ['Notas de clase', 'Evidencias no sensibles', 'Planeación']
  }),
  practicalLesson({
    id: 'roadmap-30-dias',
    moduleId: 'modulo-4',
    title: '¿Qué haré durante los próximos 30 días?',
    duration: '15 min',
    objective: ['Crear un plan de adopción de IA pequeño, medible y realista.'],
    teacherProblem: 'Después del taller, es fácil querer aplicarlo todo y terminar sin sostener nada.',
    caseSituation:
      'Al salir del taller, un docente quiere crear notebooks, rúbricas, audios y proyectos. Dos semanas después, la carga normal de trabajo vuelve. Necesita una ruta pequeña y sostenible.',
    keyIdea: 'La adopción funciona mejor con una práctica pequeña por semana.',
    visual: { title: '30 días realistas', steps: ['Semana 1: fuentes', 'Semana 2: plantilla', 'Semana 3: actividad', 'Semana 4: evidencia'] },
    demo: {
      objective: 'Construir una ruta de 30 días para una asignatura y un grupo.',
      workflow: ['Elegir un grupo real.', 'Definir una práctica por semana.', 'Agregar evidencia de avance.', 'Identificar apoyo necesario.'],
      questions: ['¿Qué puedo sostener incluso en una semana pesada?'],
      expectedResults: ['Una ruta de 30 días lista para probar.'],
      presenterTips: ['Evita planes ambiciosos; privilegia continuidad.']
    },
    activity: {
      title: 'Mi ruta de 30 días',
      steps: ['Elige grupo.', 'Define semana 1.', 'Define semana 2.', 'Define evidencia final.'],
      deliverable: 'Un plan de 30 días con cuatro acciones pequeñas.'
    },
    successCriterion: 'La ruta incluye una acción por semana, evidencia de avance y un riesgo probable con forma de mantenerlo simple.',
    takeaway: 'Un cambio pequeño sostenido vale más que diez ideas que no llegan al aula.',
    transition: 'La última lección convierte esa ruta en un proyecto integrador listo para presentar y usar.',
    promptTemplate: prompt(
      'roadmap-30-dias-plan',
      'Plan de 30 días',
      'Implementación',
      'Básico',
      93,
      'Diseña una ruta de 30 días para usar NotebookLM en [ASIGNATURA] con [GRADO]. Incluye una acción pequeña por semana, producto docente, evidencia estudiantil, riesgo probable y forma de mantenerlo simple.'
    ),
    resources: ['Calendario escolar', 'Grupo elegido', 'Notebook inicial']
  }),
  practicalLesson({
    id: 'proyecto-final-leccion',
    moduleId: 'modulo-4',
    title: '¿Qué me llevo listo para usar el lunes?',
    duration: '15 min',
    objective: ['Integrar fuentes, plantilla, actividad, evaluación y plan de uso en un producto final.'],
    teacherProblem: 'Un taller sirve poco si termina en ideas sueltas y no en algo que el docente pueda abrir el lunes.',
    caseSituation:
      'El cierre no debe ser “aprendí muchas funciones”, sino “tengo un paquete listo: fuente, prompt, actividad, criterio y primer paso de aplicación”.',
    keyIdea: 'El producto final debe ser pequeño, completo y usable en una clase real.',
    visual: { title: 'Paquete listo para clase', steps: ['Notebook', 'Plantilla', 'Actividad', 'Criterio', 'Ruta de uso'] },
    demo: {
      objective: 'Mostrar el paquete final de una clase real construido durante el taller.',
      workflow: ['Abrir notebook del ejemplo.', 'Mostrar fuente y plantilla.', 'Mostrar actividad y criterio.', 'Explicar cómo se usará el lunes.'],
      questions: ['¿Esto se puede abrir y usar en una clase real?'],
      expectedResults: ['Un paquete final claro y presentable.'],
      presenterTips: ['Cierra con aplicación, no con celebración de funciones.']
    },
    activity: {
      title: 'Mi paquete de lunes',
      steps: ['Reúne notebook y fuente.', 'Pega plantilla usada.', 'Incluye actividad.', 'Agrega criterio y primer paso.'],
      deliverable: 'Un paquete de clase listo para usar el lunes.'
    },
    successCriterion: 'El paquete contiene fuente, plantilla, actividad, criterio de evaluación y primer paso para aplicarlo el lunes.',
    takeaway: 'El taller termina cuando el docente tiene una acción lista, no cuando conoce una herramienta más.',
    transition: 'Cierre del taller: cada docente comparte qué usará primero y qué apoyo necesita para sostenerlo.',
    promptTemplate: prompt(
      'proyecto-final-paquete',
      'Paquete final listo para clase',
      'Proyecto integrador',
      'Intermedio',
      95,
      'Organiza mi producto final para [GRADO Y ASIGNATURA]: fuentes usadas, plantilla profesional, actividad de clase, evidencia, criterio de evaluacion y primer paso para aplicarlo el lunes.'
    ),
    resources: ['Notebook creado', 'Plantilla usada', 'Actividad', 'Rúbrica corta', 'Ruta de 30 días']
  })
];

export const modules: Module[] = [
  {
    id: 'modulo-1',
    number: 1,
    title: 'De la información al conocimiento',
    subtitle: 'Construyendo tu asistente pedagógico inteligente con NotebookLM.',
    color: '#0ea5e9',
    icon: AutoAwesomeRoundedIcon,
    lessons: module1Lessons
  },
  {
    id: 'modulo-2',
    number: 2,
    title: 'Crear experiencias de aprendizaje con NotebookLM',
    subtitle: 'Aprender a utilizar NotebookLM para crear actividades, planeaciones, evaluaciones y materiales didácticos alineados con la Nueva Escuela Mexicana, utilizando las fuentes del propio docente.',
    color: '#16a34a',
    icon: DesignServicesRoundedIcon,
    lessons: module2Lessons
  },
  {
    id: 'modulo-3',
    number: 3,
    title: 'Ecosistema docente inteligente',
    subtitle: 'Integrar IA al trabajo cotidiano, colegiado y escolar sin perder organización profesional.',
    color: '#7c3aed',
    icon: HubRoundedIcon,
    lessons: module3Lessons
  },
  {
    id: 'modulo-4',
    number: 4,
    title: 'Docencia aumentada y responsable',
    subtitle: 'Usar IA con ética, pensamiento crítico, inclusión y una ruta realista de implementación.',
    color: '#f59e0b',
    icon: RocketLaunchRoundedIcon,
    lessons: module4Lessons
  }
];

export const allLessons = modules.flatMap((module) => module.lessons);

export const pedagogicalIntentions = [
  'Comprender un concepto',
  'Aprender contenido nuevo',
  'Profundizar la comprensión',
  'Analizar información',
  'Comparar ideas',
  'Aplicar conocimientos',
  'Resolver un problema real',
  'Desarrollar pensamiento crítico',
  'Generar hipótesis',
  'Argumentar una postura',
  'Investigar',
  'Trabajar colaborativamente',
  'Comunicar ideas',
  'Presentar hallazgos',
  'Crear un producto',
  'Reflexionar',
  'Visualizar un proceso',
  'Evaluar aprendizajes',
  'Autoevaluarse',
  'Coevaluar',
  'Adaptar para inclusión',
  'Reducir barreras de aprendizaje',
  'Fortalecer la comunicación',
  'Promover creatividad',
  'Promover autonomía',
  'Conectar con la vida cotidiana'
];

const professionalTeacherToolkitPrompts: Prompt[] = [
  prompt('toolkit-daily-plan', 'Planeación diaria', 'Planeación', 'Básico', 96, 'Con base en mis fuentes de NotebookLM, crea una planeación diaria sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [OBJETIVO DE APRENDIZAJE], [INTENCION PEDAGOGICA], [TIEMPO DISPONIBLE], inicio, desarrollo, cierre, materiales, [PRODUCTO ESPERADO] y revisión rápida.'),
  prompt('toolkit-weekly-plan', 'Planeación semanal', 'Planeación', 'Intermedio', 94, 'Con base en mis fuentes, crea una planeación semanal para [GRADO] en [ASIGNATURA] sobre [TEMA]. Integra [OBJETIVO DE APRENDIZAJE], [INTENCION PEDAGOGICA], [TIEMPO DISPONIBLE], actividades por día, productos, evidencias y ajustes para el grupo.'),
  prompt('toolkit-didactic-sequence', 'Secuencia didáctica', 'Planeación', 'Intermedio', 97, 'Con base en Programa Analítico, Programa Sintético, PDA y libro CONALITEG del notebook, crea una secuencia didáctica sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye sesiones, [INTENCION PEDAGOGICA], campo formativo, eje articulador, [PRODUCTO ESPERADO] y evaluación.'),
  prompt('toolkit-learning-situation', 'Situación de aprendizaje', 'Planeación', 'Intermedio', 92, 'Diseña una situación de aprendizaje para [GRADO] en [ASIGNATURA] sobre [TEMA]. Usa mis fuentes para conectar [OBJETIVO DE APRENDIZAJE], contexto del grupo, [INTENCION PEDAGOGICA], actividades, [PRODUCTO ESPERADO] y evidencia.'),
  prompt('toolkit-community-project', 'Proyecto comunitario', 'Planeación', 'Intermedio', 95, 'Convierte [TEMA] en un proyecto comunitario para [GRADO] en [ASIGNATURA]. Usa mis fuentes para proponer problema cercano, pregunta guía, [INTENCION PEDAGOGICA], producto comunitario, ruta de trabajo, evidencias y evaluación.'),
  prompt('toolkit-interdisciplinary-project', 'Proyecto interdisciplinario', 'Planeación', 'Avanzado', 91, 'Crea un proyecto interdisciplinario sobre [TEMA] para [GRADO]. Integra [ASIGNATURAS], [OBJETIVO DE APRENDIZAJE], [INTENCION PEDAGOGICA], aportes de cada asignatura, [PRODUCTO ESPERADO], calendario y forma de evaluación.'),

  prompt('toolkit-individual-activity', 'Actividad individual', 'Actividades de aprendizaje', 'Básico', 94, 'Crea una actividad individual sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCION PEDAGOGICA], [TIEMPO DISPONIBLE], instrucciones para estudiantes, apoyo visual, [PRODUCTO ESPERADO] y criterio rápido de revisión.'),
  prompt('toolkit-collaborative-activity', 'Actividad colaborativa', 'Actividades de aprendizaje', 'Básico', 95, 'Crea una actividad colaborativa sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define equipos, roles, [INTENCION PEDAGOGICA], [TIEMPO DISPONIBLE], [PRODUCTO ESPERADO], evidencia individual y evidencia grupal.'),
  prompt('toolkit-debate', 'Debate', 'Actividades de aprendizaje', 'Intermedio', 91, 'Diseña un debate de aula sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye postura A, postura B, fuentes del notebook, [INTENCION PEDAGOGICA], reglas, tiempos, preguntas detonadoras y rúbrica breve.'),
  prompt('toolkit-case-study', 'Estudio de caso', 'Actividades de aprendizaje', 'Intermedio', 90, 'Crea un estudio de caso sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye contexto, dilema o problema, datos del caso, [INTENCION PEDAGOGICA], preguntas de análisis, [PRODUCTO ESPERADO] y criterios.'),
  prompt('toolkit-guided-research', 'Investigación guiada', 'Actividades de aprendizaje', 'Intermedio', 92, 'Diseña una investigación guiada sobre [TEMA] para [GRADO] en [ASIGNATURA]. Usa mis fuentes para crear pregunta de investigación, pasos, fuentes permitidas, [INTENCION PEDAGOGICA], producto y lista de cotejo.'),
  prompt('toolkit-experiment', 'Experimento', 'Actividades de aprendizaje', 'Intermedio', 89, 'Diseña un experimento seguro y viable sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye hipótesis, materiales accesibles, procedimiento, registro de datos, [INTENCION PEDAGOGICA], [PRODUCTO ESPERADO] y cuidados.'),
  prompt('toolkit-gamification', 'Reto gamificado', 'Actividades de aprendizaje', 'Básico', 90, 'Convierte [TEMA] en un reto gamificado para [GRADO] en [ASIGNATURA]. Incluye misión, reglas simples, [TIEMPO DISPONIBLE], [INTENCION PEDAGOGICA], evidencia individual, puntos o insignias y cierre de aprendizaje.'),
  prompt('toolkit-flipped-classroom', 'Aula invertida', 'Actividades de aprendizaje', 'Básico', 88, 'Crea una actividad de aula invertida sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye recurso previo, preguntas de preparación, [INTENCION PEDAGOGICA], evidencia previa y actividad presencial.'),
  prompt('toolkit-learning-stations', 'Estaciones de aprendizaje', 'Actividades de aprendizaje', 'Intermedio', 90, 'Diseña estaciones de aprendizaje sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye número de estaciones, instrucciones, [TIEMPO DISPONIBLE], [INTENCION PEDAGOGICA], producto por estación y cierre común.'),
  prompt('toolkit-steam-challenge', 'Reto STEAM', 'Actividades de aprendizaje', 'Avanzado', 87, 'Crea un reto STEAM sobre [TEMA] para [GRADO]. Integra [ASIGNATURAS], problema real, materiales disponibles, [INTENCION PEDAGOGICA], prototipo o producto, prueba, mejora y rúbrica breve.'),

  prompt('toolkit-rubric', 'Rúbrica', 'Evaluación', 'Básico', 97, 'Crea una rúbrica para evaluar [PRODUCTO ESPERADO] sobre [TEMA] en [GRADO] y [ASIGNATURA]. Incluye [TIPO DE EVALUACION], criterios observables, niveles claros, lenguaje para estudiantes y retroalimentación sugerida.'),
  prompt('toolkit-checklist', 'Lista de cotejo', 'Evaluación', 'Básico', 96, 'Crea una lista de cotejo para revisar [PRODUCTO ESPERADO] sobre [TEMA] en [GRADO] y [ASIGNATURA]. Incluye indicadores observables, espacio de evidencia, [TIPO DE EVALUACION] y recomendación de mejora.'),
  prompt('toolkit-observation-guide', 'Guía de observación', 'Evaluación', 'Intermedio', 90, 'Crea una guía de observación para [TIPO DE ACTIVIDAD] sobre [TEMA] en [GRADO]. Incluye conductas observables, [INTENCION PEDAGOGICA], momentos de observación, notas y decisiones docentes.'),
  prompt('toolkit-diagnostic', 'Evaluación diagnóstica', 'Evaluación', 'Básico', 92, 'Crea una evaluación diagnóstica sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye preguntas abiertas, opción múltiple, actividad breve, criterios de interpretación y próximos pasos.'),
  prompt('toolkit-formative', 'Evaluación formativa', 'Evaluación', 'Intermedio', 94, 'Diseña una evaluación formativa para [TIPO DE ACTIVIDAD] sobre [TEMA]. Incluye evidencia durante la clase, preguntas de seguimiento, retroalimentación rápida y ajuste para la siguiente sesión.'),
  prompt('toolkit-summative', 'Evaluación sumativa', 'Evaluación', 'Intermedio', 89, 'Crea una evaluación sumativa sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [OBJETIVO DE APRENDIZAJE], reactivos variados, tarea de desempeño, criterios y tabla de calificación clara.'),
  prompt('toolkit-feedback', 'Retroalimentación', 'Evaluación', 'Básico', 95, 'Genera retroalimentación personalizada para [PRODUCTO ESPERADO] de [GRADO] sobre [TEMA]. Incluye fortalezas, mejora prioritaria, siguiente paso, tono respetuoso y versión breve para estudiante.'),
  prompt('toolkit-multiple-choice', 'Examen de opción múltiple', 'Evaluación', 'Básico', 91, 'Crea un examen de opción múltiple sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye niveles de dificultad, respuesta correcta, explicación, distractores plausibles y relación con [OBJETIVO DE APRENDIZAJE].'),
  prompt('toolkit-open-questions', 'Preguntas abiertas', 'Evaluación', 'Básico', 90, 'Crea preguntas abiertas sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCION PEDAGOGICA], criterios para valorar respuestas, ejemplo de respuesta esperada y pregunta de reflexión.')
];

professionalTeacherToolkitPrompts.push(
  prompt('toolkit-presentation', 'Presentación', 'Materiales didácticos', 'Básico', 94, 'Crea una presentación de [NUMERO DE DIAPOSITIVAS] diapositivas sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye una idea por diapositiva, pregunta al grupo, actividad breve, [INTENCION PEDAGOGICA] y cierre con [PRODUCTO ESPERADO].'),
  prompt('toolkit-study-guide', 'Guía de estudio', 'Materiales didácticos', 'Básico', 93, 'Crea una guía de estudio sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye conceptos clave, ejemplos, preguntas de práctica, [INTENCION PEDAGOGICA], autoevaluación y recomendaciones de estudio.'),
  prompt('toolkit-summary', 'Resumen para estudiantes', 'Materiales didácticos', 'Básico', 90, 'Resume mis fuentes sobre [TEMA] para estudiantes de [GRADO] en [ASIGNATURA]. Usa lenguaje claro, ideas clave, vocabulario, ejemplo cotidiano, pregunta de comprensión y advertencia de errores comunes.'),
  prompt('toolkit-infographic', 'Infografía', 'Materiales didácticos', 'Intermedio', 88, 'Diseña el contenido de una infografía sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye título, bloques visuales, datos clave, iconos sugeridos, texto breve, [INTENCION PEDAGOGICA] y pregunta final.'),
  prompt('toolkit-flashcards', 'Tarjetas de estudio', 'Materiales didácticos', 'Básico', 89, 'Crea tarjetas de estudio sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye pregunta, respuesta, ejemplo, error común, aplicación y una dinámica de repaso de [TIEMPO DISPONIBLE].'),
  prompt('toolkit-podcast', 'Podcast', 'Materiales didácticos', 'Intermedio', 87, 'Crea un guion de podcast breve sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye introducción, diálogo, ejemplos, [INTENCION PEDAGOGICA], preguntas para escuchar y actividad posterior.'),
  prompt('toolkit-audio-overview', 'Audio Overview', 'Materiales didácticos', 'Básico', 91, 'Prepara una guía para usar un Audio Overview sobre [TEMA] con [GRADO]. Incluye propósito, preguntas antes, durante y después, vocabulario, evidencia y ajuste para estudiantes que necesitan apoyo.'),

  prompt('toolkit-adapt-activity', 'Adaptar una actividad', 'Educación inclusiva', 'Básico', 96, 'Adapta esta actividad: [TIPO DE ACTIVIDAD] sobre [TEMA] para [GRADO] en [ASIGNATURA]. Identifica barreras posibles, apoyos simples, opciones de producto, lenguaje claro y forma de mantener [OBJETIVO DE APRENDIZAJE].'),
  prompt('toolkit-differentiate', 'Diferenciar la enseñanza', 'Educación inclusiva', 'Intermedio', 91, 'Diferencia la enseñanza de [TEMA] para [GRADO] en [ASIGNATURA]. Propón tres niveles de apoyo, opciones de [PRODUCTO ESPERADO], tiempos, agrupamientos y criterios comunes.'),
  prompt('toolkit-inclusive-assessment', 'Evaluación inclusiva', 'Educación inclusiva', 'Intermedio', 92, 'Crea una evaluación inclusiva para [PRODUCTO ESPERADO] sobre [TEMA]. Incluye criterios comunes, opciones de respuesta, apoyos permitidos, lenguaje claro y retroalimentación respetuosa.'),
  prompt('toolkit-reduce-barriers', 'Reducir barreras de aprendizaje', 'Educación inclusiva', 'Básico', 94, 'Revisa esta planeación o actividad: [ACTIVIDAD O PLANEACION]. Detecta barreras de lectura, lenguaje, ritmo, materiales y participación. Propón ajustes de bajo costo para [GRADO] sin bajar la meta de aprendizaje.'),

  prompt('toolkit-integrate-pda', 'Integrar PDA', 'Nueva Escuela Mexicana', 'Básico', 94, 'Con base en mis fuentes, conecta [TEMA] para [GRADO] en [ASIGNATURA] con [PDA]. Explica qué actividad lo trabaja, qué evidencia lo muestra y qué criterio permite revisarlo.'),
  prompt('toolkit-campos-formativos', 'Integrar campos formativos', 'Nueva Escuela Mexicana', 'Intermedio', 90, 'Ubica [TEMA] dentro de [CAMPO FORMATIVO] para [GRADO]. Propón una actividad, [INTENCION PEDAGOGICA], evidencia, producto y conexión con el contexto del grupo.'),
  prompt('toolkit-ejes-articuladores', 'Integrar ejes articuladores', 'Nueva Escuela Mexicana', 'Intermedio', 89, 'Integra [EJE ARTICULADOR] en una actividad sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye propósito, desarrollo, pregunta crítica, evidencia y cuidado para no forzar la conexión.'),
  prompt('toolkit-analitico-conaliteg', 'Conectar Programa Analítico con CONALITEG', 'Nueva Escuela Mexicana', 'Avanzado', 93, 'Compara el Programa Analítico y el libro CONALITEG sobre [TEMA] para [GRADO] en [ASIGNATURA]. Extrae coincidencias, vacíos, páginas útiles, actividad sugerida y evidencia alineada con [PDA].'),

  prompt('toolkit-parent-communication', 'Comunicación a familias', 'Comunicación', 'Básico', 92, 'Redacta una comunicación para familias sobre [TEMA O SITUACION] de [GRADO]. Usa tono claro y respetuoso, propósito, acción solicitada, fecha, cuidado de datos personales y versión breve para mensaje.'),
  prompt('toolkit-student-report', 'Reporte de estudiante o grupo', 'Comunicación', 'Intermedio', 90, 'Crea un reporte de avance para [ESTUDIANTE O GRUPO] sobre [TEMA O PERIODO]. Incluye logros, áreas de mejora, evidencia, recomendación concreta, tono cuidadoso y omite datos sensibles innecesarios.'),
  prompt('toolkit-official-letter', 'Oficio escolar', 'Comunicación', 'Intermedio', 88, 'Redacta un oficio escolar sobre [PROPOSITO] dirigido a [DESTINATARIO]. Incluye asunto, contexto, solicitud, fechas, responsables, tono institucional y revisión de privacidad.'),
  prompt('toolkit-classroom-announcement', 'Aviso de aula', 'Comunicación', 'Básico', 89, 'Redacta un aviso de aula para [DESTINATARIO] sobre [TEMA O ACTIVIDAD]. Incluye qué se hará, cuándo, qué deben llevar, [PRODUCTO ESPERADO], tono claro y versión corta.'),

  prompt('toolkit-pemc', 'PEMC', 'Gestión escolar', 'Avanzado', 89, 'Con base en mis fuentes escolares, organiza información para PEMC sobre [PRIORIDAD]. Incluye diagnóstico breve, objetivo, acciones, responsables, evidencias, calendario e indicadores de seguimiento.'),
  prompt('toolkit-meeting-minutes', 'Minuta de reunión', 'Gestión escolar', 'Básico', 91, 'Convierte estas notas: [NOTAS DE REUNION] en una minuta clara. Incluye acuerdos, responsables, fechas, pendientes, evidencias y una lista de seguimiento sin datos personales innecesarios.'),
  prompt('toolkit-academic-meetings', 'Reunión académica', 'Gestión escolar', 'Intermedio', 87, 'Prepara una agenda para reunión académica sobre [TEMA]. Incluye objetivo, tiempos, fuentes a revisar, decisiones esperadas, acuerdos, responsables y producto final.'),
  prompt('toolkit-improvement-plan', 'Plan de mejora', 'Gestión escolar', 'Intermedio', 90, 'Crea un plan de mejora para [NECESIDAD O PROBLEMA] en [ESCUELA O GRUPO]. Incluye causa probable, acciones de bajo costo, responsables, evidencias, calendario y revisión en 30 días.'),

  prompt('toolkit-summarize-documents', 'Resumir documentos', 'Productividad con NotebookLM', 'Básico', 95, 'Resume estas fuentes del notebook sobre [TEMA]. Separa ideas clave, datos importantes, decisiones útiles para clase, dudas por verificar y posibles productos docentes que puedo crear.'),
  prompt('toolkit-compare-versions', 'Comparar versiones', 'Productividad con NotebookLM', 'Intermedio', 91, 'Compara estas versiones o documentos: [DOCUMENTOS]. Identifica cambios, coincidencias, contradicciones, información faltante, impacto para [PROPOSITO] y recomendación docente.'),
  prompt('toolkit-analyze-evidence', 'Analizar evidencias', 'Productividad con NotebookLM', 'Avanzado', 92, 'Analiza estas evidencias no sensibles de estudiantes sobre [TEMA]. Identifica patrones, logros, dificultades, posibles causas, próximos pasos y una actividad de refuerzo para [GRADO].'),
  prompt('toolkit-find-inconsistencies', 'Detectar inconsistencias', 'Productividad con NotebookLM', 'Intermedio', 90, 'Revisa mis fuentes sobre [TEMA] y detecta inconsistencias, duplicados, información desactualizada, vacíos y preguntas que debo resolver antes de usar el material.'),
  prompt('toolkit-extract-key-ideas', 'Extraer ideas clave', 'Productividad con NotebookLM', 'Básico', 93, 'Extrae ideas clave de mis fuentes sobre [TEMA] para [GRADO] en [ASIGNATURA]. Organiza conceptos, ejemplos, vocabulario, conexiones con [OBJETIVO DE APRENDIZAJE] y posibles actividades.'),
  prompt('toolkit-generate-questions', 'Generar preguntas', 'Productividad con NotebookLM', 'Básico', 92, 'Genera preguntas sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye preguntas diagnósticas, de comprensión, aplicación, análisis, reflexión y salida de clase, con respuestas esperadas.')
);

professionalTeacherToolkitPrompts.push(
  prompt('toolkit-studio-selector-profesional', 'Elegir producto de Studio', 'Studio de NotebookLM', 'Básico', 97, 'Con base en las fuentes de este notebook y mi necesidad docente: [NECESIDAD DOCENTE], recomienda el producto de Studio más adecuado: presentación, Audio Overview, resumen, cuestionario, tarjetas didácticas, infografía o informe. Para cada opción viable explica propósito, momento de uso, evidencia estudiantil, límite del producto y revisión docente necesaria.'),
  prompt('toolkit-studio-presentacion-clase', 'Presentación de Studio para clase', 'Studio de NotebookLM', 'Básico', 95, 'Prepara instrucciones para generar y revisar una presentación de Studio sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define propósito, ideas clave, preguntas al grupo, actividad breve por bloque, evidencia final, ajustes de lenguaje y checklist de revisión antes de compartir.'),
  prompt('toolkit-studio-audio-overview-clase', 'Audio Overview con guía de escucha', 'Studio de NotebookLM', 'Básico', 96, 'A partir de un Audio Overview sobre [TEMA], crea una guía de escucha para [GRADO] en [ASIGNATURA]. Incluye antes, durante y después, vocabulario clave, preguntas de comprensión, pregunta crítica, evidencia breve, adaptación para inclusión y advertencias de conceptos que debo verificar en las fuentes.'),
  prompt('toolkit-studio-cuestionario-repaso', 'Cuestionario de Studio para repaso', 'Studio de NotebookLM', 'Básico', 94, 'Diseña cómo usar un cuestionario de Studio sobre [TEMA] para [GRADO]. Incluye objetivo, tipo de evaluación [TIPO DE EVALUACION], tres usos posibles, criterios para interpretar resultados, retroalimentación inmediata y ajuste para la siguiente clase.'),
  prompt('toolkit-studio-tarjetas-repaso', 'Tarjetas didácticas para estudiar', 'Studio de NotebookLM', 'Básico', 93, 'Convierte tarjetas didácticas de Studio sobre [TEMA] en una dinámica de repaso de [TIEMPO DISPONIBLE] para [GRADO]. Incluye organización, reglas, evidencias, variaciones para distintos ritmos y cierre de aprendizaje.'),
  prompt('toolkit-studio-informe-docente', 'Informe de Studio para decisiones docentes', 'Studio de NotebookLM', 'Intermedio', 95, 'A partir de un informe de Studio sobre [TEMA O FUENTES], crea una versión accionable para el docente. Separa hallazgos, citas o fuentes relevantes, decisiones para clase, riesgos de interpretación, preguntas pendientes y próximas acciones.'),
  prompt('toolkit-studio-infografia-aula', 'Infografía de Studio para aula', 'Studio de NotebookLM', 'Intermedio', 92, 'Diseña una ruta para usar una infografía de Studio sobre [TEMA] con [GRADO]. Incluye propósito visual, lectura guiada, preguntas de interpretación, actividad breve, evidencia y revisión de claridad antes de imprimir o proyectar.'),

  prompt('toolkit-chat-planeacion-docente-ultra', 'Planeación docente por chat', 'Chat docente de NotebookLM', 'Intermedio', 98, 'Actúa como asesor pedagógico de secundaria pública mexicana. Con base solo en mis fuentes de NotebookLM, crea [PRODUCTO DE PLANEACION] para [GRADO] en [ASIGNATURA] sobre [TEMA]. Integra [PDA], [CAMPO FORMATIVO], [EJE ARTICULADOR], tiempos reales, materiales disponibles, producto esperado, criterio observable, barreras posibles y revisión docente final.'),
  prompt('toolkit-chat-actividades-ultra', 'Actividades de aprendizaje por chat', 'Chat docente de NotebookLM', 'Básico', 98, 'Con base solo en mis fuentes, diseña [TIPO DE ACTIVIDAD] sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCION PEDAGOGICA], instrucciones para estudiantes, pasos, roles si aplica, materiales, [PRODUCTO ESPERADO], criterio de logro observable, variante de refuerzo y ajuste de inclusión.'),
  prompt('toolkit-chat-evaluacion-ultra', 'Evaluación por chat', 'Chat docente de NotebookLM', 'Intermedio', 97, 'A partir de [PRODUCTO ESPERADO] y [OBJETIVO DE APRENDIZAJE], crea [TIPO DE EVALUACION] para [GRADO] en [ASIGNATURA]. Incluye instrumento principal, criterios observables, niveles o indicadores, instrucciones, retroalimentación por nivel, autoevaluación o coevaluación opcional y advertencias para evitar sesgos.'),
  prompt('toolkit-chat-materiales-estudiantes-ultra', 'Materiales para estudiantes por chat', 'Chat docente de NotebookLM', 'Básico', 96, 'Crea [TIPO DE MATERIAL] para estudiantes de [GRADO] sobre [TEMA] en [ASIGNATURA]. Puede ser guía de estudio, resumen, glosario, línea del tiempo, cuadro comparativo, lectura adaptada u organizador gráfico. Usa lenguaje claro, ejemplos cercanos, actividad de uso, evidencia y adaptación para [BARRERAS EDUCATIVAS].'),
  prompt('toolkit-chat-nem-ultra', 'Integración NEM por chat', 'Chat docente de NotebookLM', 'Avanzado', 96, 'Con base en Programa Analítico, Programa Sintético y CONALITEG cargados en el notebook, conecta [TEMA] con [PDA], [CAMPO FORMATIVO] y [EJE ARTICULADOR]. Propón actividad, producto, evidencia, criterio observable, vínculo con contexto comunitario y advertencia de conexiones forzadas.'),
  prompt('toolkit-chat-inclusion-ultra', 'Inclusión por chat', 'Chat docente de NotebookLM', 'Intermedio', 97, 'Revisa esta actividad o planeación: [ACTIVIDAD O PLANEACION]. Identifica [BARRERAS EDUCATIVAS], propone ajustes DUA, variantes por ritmo, apoyos de lenguaje, opciones de producto, evaluación inclusiva y una versión simplificada de instrucciones para estudiantes.'),
  prompt('toolkit-chat-comunicacion-ultra', 'Comunicación escolar por chat', 'Chat docente de NotebookLM', 'Básico', 94, 'Redacta [TIPO DE COMUNICACION] para [DESTINATARIO] sobre [TEMA O SITUACION]. Incluye propósito, mensaje principal, acción solicitada, tono respetuoso, versión breve, versión formal y revisión de privacidad para evitar datos personales innecesarios.'),
  prompt('toolkit-chat-gestion-escolar-ultra', 'Gestión escolar por chat', 'Chat docente de NotebookLM', 'Intermedio', 94, 'Con base en estas fuentes escolares permitidas: [FUENTES], crea [PRODUCTO DE GESTION] para [PROPOSITO]. Puede ser minuta, PEMC, plan de mejora, agenda, cronograma u organización documental. Incluye acuerdos, responsables, fechas, evidencias, riesgos y seguimiento.'),
  prompt('toolkit-chat-analisis-inteligente-ultra', 'Análisis inteligente por chat', 'Chat docente de NotebookLM', 'Avanzado', 96, 'Analiza estas fuentes: [FUENTES O DOCUMENTOS] para [PROPOSITO DOCENTE]. Compara documentos, detecta diferencias, inconsistencias, temas recurrentes, acuerdos, vacíos, preguntas pendientes y recomendaciones citando o señalando la fuente utilizada.'),
  prompt('toolkit-chat-tutor-pedagogico-ultra', 'Tutor pedagógico por chat', 'Chat docente de NotebookLM', 'Intermedio', 95, 'Actúa como [ROL DEL TUTOR] para secundaria pública mexicana: asesor pedagógico, experto en evaluación, especialista NEM, experto en inclusión o revisor crítico. Revisa [PRODUCTO DOCENTE] sobre [TEMA], identifica fortalezas, riesgos, mejoras, preguntas de verificación y una versión corregida lista para pilotear.')
);

export const allPrompts = professionalTeacherToolkitPrompts;

export const studioProducts: StudioProduct[] = [
  {
    id: 'audio-overview',
    title: 'Resumen en audio',
    description: 'Conversación sintetizada para repasar fuentes, preparar escucha activa y abrir diálogo en clase.',
    uses: ['Repaso previo', 'Accesibilidad auditiva', 'Detonador para diálogo y pensamiento crítico'],
    examples: ['Resumen de una lectura histórica local', 'Diálogo sobre un proyecto comunitario'],
    prompts: [
      prompt('studio-audio-1', 'Guía de escucha activa', 'Studio', 'Intermedio', 92, 'Genera una guía de escucha para un resumen en audio. Organízala en tres momentos: antes, durante y después. Incluye propósito, vocabulario clave, preguntas de comprensión, pregunta crítica, vínculo con un eje articulador y evidencia breve de evaluación formativa.')
    ],
    bestPractices: ['Acompañarlo con preguntas y una evidencia', 'Verificar conceptos contra las fuentes', 'Usarlo como entrada para el diálogo, no como sustituto de lectura'],
    limitations: ['Puede simplificar matices', 'Requiere revisión docente antes de compartir']
  },
  {
    id: 'video-summary',
    title: 'Resumen en video',
    description: 'Síntesis visual para introducir, recuperar o cerrar un tema con claridad.',
    uses: ['Activación de saberes previos', 'Repaso autónomo', 'Cierre de secuencia didáctica'],
    examples: ['Resumen sobre ecosistemas de la comunidad', 'Cápsula de lectura literaria'],
    prompts: [
      prompt('studio-video-1', 'Guion visual situado', 'Studio', 'Intermedio', 89, 'Crea un guion de 6 escenas para un resumen en video dirigido a secundaria pública. Incluye concepto central, visual sugerido, pregunta detonadora, vínculo con el contexto, ajuste de inclusión y riesgo de malinterpretación.')
    ],
    bestPractices: ['Mantener un propósito concreto', 'Complementar con actividad activa', 'Evitar saturar con texto o datos sin contexto'],
    limitations: ['No reemplaza el acompañamiento docente', 'Puede requerir ajuste de lenguaje para el grupo']
  },
  {
    id: 'presentation',
    title: 'Presentación',
    description: 'Estructura visual para explicar conceptos, organizar diálogo y acompañar una actividad.',
    uses: ['Mini clase dialogada', 'Exposición estudiantil', 'Socialización de proyectos comunitarios'],
    examples: ['Presentación sobre energía en la escuela', 'Secuencia para debate cívico'],
    prompts: [
      prompt('studio-presentation-1', 'Presentación activa NEM', 'Studio', 'Básico', 91, 'Convierte mis fuentes en una presentación de 8 diapositivas para secundaria. Cada diapositiva debe incluir propósito, idea central, pregunta al grupo, actividad de 2 minutos, relación con PDA y una nota para evaluación formativa.')
    ],
    bestPractices: ['Pocas ideas por pantalla', 'Intercalar participación', 'Cerrar con evidencia o reflexión'],
    limitations: ['Puede volverse expositiva si no se diseña interacción']
  },
  {
    id: 'flashcards',
    title: 'Tarjetas de estudio',
    description: 'Tarjetas para recuperación activa de conceptos, vocabulario y relaciones.',
    uses: ['Recuperación espaciada', 'Glosario activo', 'Trabajo por parejas o equipos'],
    examples: ['Conceptos de química', 'Vocabulario en inglés con situaciones del entorno'],
    prompts: [
      prompt('studio-flashcards-1', 'Tarjetas con transferencia', 'Studio', 'Básico', 88, 'Crea 20 tarjetas de estudio con pregunta, respuesta breve, ejemplo situado y una tarjeta de transferencia por cada 5 conceptos. Incluye advertencias de errores comunes y una dinámica cooperativa de 10 minutos.')
    ],
    bestPractices: ['Mezclar definición, ejemplo y aplicación', 'Usarlas en pares o equipos', 'Revisar dificultad y lenguaje'],
    limitations: ['No basta para aprendizajes complejos', 'Puede fomentar memorización aislada si no hay transferencia']
  },
  {
    id: 'quiz',
    title: 'Cuestionario',
    description: 'Preguntas para valorar comprensión y dar retroalimentación rápida.',
    uses: ['Diagnóstico', 'Salida de clase', 'Práctica formativa'],
    examples: ['Cuestionario de lectura', 'Revisión de procedimiento matemático'],
    prompts: [
      prompt('studio-quiz-1', 'Cuestionario formativo NEM', 'Studio', 'Intermedio', 94, 'Genera un cuestionario de 10 reactivos con niveles de dificultad, retroalimentación para cada respuesta, una pregunta abierta de aplicación comunitaria y una recomendación docente para ajustar la siguiente clase.')
    ],
    bestPractices: ['Usarlo para ajustar la enseñanza', 'Incluir explicaciones, no solo aciertos', 'Combinar preguntas cerradas y abiertas'],
    limitations: ['No mide el desempeño completo', 'Necesita revisión de respuestas correctas']
  },
  {
    id: 'infographic',
    title: 'Infografía',
    description: 'Representación visual de ideas, procesos, datos y relaciones clave.',
    uses: ['Síntesis colaborativa', 'Mural de aula', 'Producto de proyecto comunitario'],
    examples: ['Ciclo del agua en la localidad', 'Mapa de causas y consecuencias'],
    prompts: [
      prompt('studio-infographic-1', 'Guía para infografía', 'Studio', 'Intermedio', 87, 'Propón una infografía basada en mis fuentes: título, jerarquía visual, datos clave, iconos sugeridos, texto máximo por bloque, cita de fuentes y pregunta de interpretación para estudiantes de secundaria.')
    ],
    bestPractices: ['Priorizar claridad', 'Citar fuentes', 'Pedir interpretación, no solo decoración'],
    limitations: ['Puede perder profundidad', 'Requiere acompañar alfabetización visual']
  },
  {
    id: 'reports',
    title: 'Reporte',
    description: 'Documento analítico para organizar hallazgos, decisiones y recomendaciones.',
    uses: ['Planeación docente', 'Informe de proyecto', 'Análisis de evidencias'],
    examples: ['Reporte de diagnóstico grupal', 'Informe para trabajo colegiado'],
    prompts: [
      prompt('studio-report-1', 'Reporte accionable para CTE', 'Studio', 'Avanzado', 95, 'Elabora un reporte ejecutivo para docentes con hallazgos, implicaciones didácticas, riesgos, acciones de bajo costo, ajustes de inclusión y una tabla de seguimiento de 30 días para Consejo Técnico Escolar.')
    ],
    bestPractices: ['Pedir recomendaciones accionables', 'Separar evidencia de opinión', 'Validar contra fuentes'],
    limitations: ['Puede sonar convincente sin ser correcto', 'Debe revisarse antes de decisiones escolares']
  }
];

export const resources: Resource[] = [
  {
    id: 'nem-programas',
    title: 'Programas sintéticos NEM',
    category: 'Referentes curriculares',
    description: 'Base para alinear campos formativos, PDA, ejes articuladores y proyectos situados.'
  },
  {
    id: 'notebooklm-ayuda',
    title: 'Centro de ayuda de NotebookLM',
    category: 'Recursos de NotebookLM',
    description: 'Referencia para funciones, fuentes, notebooks y opciones de Studio.',
    url: 'https://support.google.com/notebooklm/'
  },
  {
    id: 'workspace-edu',
    title: 'Google Workspace for Education',
    category: 'Recursos de Google',
    description: 'Ideas para integrar documentos, presentaciones, Classroom y colaboración docente.'
  },
  {
    id: 'politica-ia',
    title: 'Acuerdos escolares para uso responsable de IA',
    category: 'Política y cuidado digital',
    description: 'Plantilla de acuerdos sobre privacidad, autoría, verificación, uso estudiantil y comunicación con familias.'
  },
  {
    id: 'banco-prompts',
    title: 'Kit profesional docente',
    category: 'Plantillas de productos',
    description: 'Plantillas reutilizables para crear planeaciones, actividades, evaluaciones, materiales, comunicación escolar y análisis con NotebookLM.'
  },
  {
    id: 'descargables',
    title: 'Plantillas descargables',
    category: 'Materiales de trabajo',
    description: 'Lista de verificación de notebook, rúbrica de actividad, bitácora de implementación y guía de reflexión docente.'
  }
];

export const finalProjectChecklist = [
  'Cuaderno de NotebookLM con fuentes curadas, verificables y organizadas',
  'Kit de plantillas profesionales para productos docentes',
  'Planeación didáctica alineada con campo formativo, PDA y eje articulador',
  'Producto visual o material de apoyo para estudiantes',
  'Instrumento de evaluación formativa',
  'Rúbrica clara, inclusiva y compartible',
  'Resumen en audio o producto Studio equivalente',
  'Ruta de implementación de 30 días',
  'Indicador de seguimiento para el colectivo docente'
];

export const makeSearchIndex = (): SearchItem[] => [
  { id: 'home', title: 'Inicio', type: 'Página', description: 'Panel principal del taller', path: '/' },
  { id: 'overview', title: 'Ruta del taller', type: 'Página', description: 'Mapa completo del trayecto formativo', path: '/overview' },
  { id: 'prompts', title: 'Kit profesional docente', type: 'Página', description: 'Plantillas por producto para NotebookLM', path: '/prompts' },
  { id: 'studio', title: 'Galería Studio', type: 'Página', description: 'Productos de NotebookLM Studio para el aula', path: '/studio' },
  { id: 'resources', title: 'Recursos', type: 'Página', description: 'Referentes y materiales de apoyo', path: '/resources' },
  ...modules.map((module) => ({
    id: module.id,
    title: module.title,
    type: 'Página' as const,
    description: module.subtitle,
    path: `/module/${module.id}`
  })),
  ...allLessons.map((item) => ({
    id: item.id,
    title: item.title,
    type: 'Lección' as const,
    description: item.takeaway,
    path: `/lesson/${item.id}`
  })),
  ...allPrompts.map((item) => ({
    id: item.id,
    title: item.title,
    type: 'Consigna' as const,
    description: item.category,
    path: '/prompts'
  })),
  ...resources.map((item) => ({
    id: item.id,
    title: item.title,
    type: 'Recurso' as const,
    description: item.description,
    path: '/resources'
  })),
  ...allLessons.map((item) => ({
    id: `${item.id}-activity`,
    title: item.activity.title,
    type: 'Actividad' as const,
    description: item.activity.deliverable,
    path: `/lesson/${item.id}#actividad`
  }))
];

export const studioIcons = {
  'audio-overview': AudiotrackRoundedIcon,
  'video-summary': SlideshowRoundedIcon,
  presentation: SlideshowRoundedIcon,
  flashcards: StyleRoundedIcon,
  quiz: QuizRoundedIcon,
  infographic: ImageRoundedIcon,
  reports: AssessmentRoundedIcon
};
