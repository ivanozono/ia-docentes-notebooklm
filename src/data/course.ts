import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import type { Demo, Lesson, Module, Prompt, Resource, SearchItem } from '../types';

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
    contentSections: [
      {
        title: 'Ya puedes utilizar NotebookLM para...',
        keyIdea: 'Lo que ya usaste en actividades, planeaciones y evaluación es solo parte de un catálogo más amplio.',
        points: [
          'Crear actividades',
          'Crear planeaciones',
          'Crear evaluaciones',
          'Crear materiales',
          'Analizar documentos',
          'Organizar información',
          'Comunicar',
          'Apoyar la inclusión'
        ],
        visualType: 'cards',
        imageKey: 'notebooklm-logros',
        pointDetails: [
          {
            label: 'Crear actividades',
            detail: 'Diseña actividades dinámicas y alineadas a tus objetivos.'
          },
          {
            label: 'Crear planeaciones',
            detail: 'Planeaciones diarias, semanales, secuencias y proyectos.'
          },
          {
            label: 'Crear evaluaciones',
            detail: 'Rúbricas, listas de cotejo, escalas, autoevaluaciones y coevaluaciones.'
          },
          {
            label: 'Crear materiales',
            detail: 'Guías, presentaciones, infografías, resúmenes y más.'
          },
          {
            label: 'Analizar documentos',
            detail: 'Compara, detecta diferencias, extrae acuerdos, resume y encuentra evidencias.'
          },
          {
            label: 'Organizar información',
            detail: 'Estructura tus fuentes y convierte la información en conocimiento útil.'
          },
          {
            label: 'Comunicar',
            detail: 'Redacta informes, oficios, comunicados, avisos y mensajes efectivos.'
          },
          {
            label: 'Apoyar la inclusión',
            detail: 'Adecuaciones, materiales adaptados y estrategias para todos.'
          }
        ],
        reflectionQuestion: '¿Cuál de estas ocho posibilidades ya usaste y cuál todavía no has probado?'
      },
      {
        title: 'El catálogo profesional NotebookLM',
        keyIdea: 'Un asistente para cada área de tu trabajo docente: la misma información puede convertirse en muchos productos.',
        points: [
          'Para la práctica docente',
          'Para promover la inclusión',
          'Para evaluar',
          'Para la gestión docente',
          'Para analizar información',
          'Para funciones directivas'
        ],
        visualType: 'cards',
        imageKey: 'catalogo-profesional',
        pointDetails: [
          {
            label: 'Para la práctica docente',
            detail: 'Puede generar planeaciones, secuencias didácticas, actividades, presentaciones, guías de estudio, cuestionarios, resúmenes e infografías.'
          },
          {
            label: 'Para promover la inclusión',
            detail: 'Puede ayudarte a crear adecuaciones curriculares, actividades multinivel, material adaptado, estrategias DUA, simplificación de textos y variantes para distintos ritmos de aprendizaje.'
          },
          {
            label: 'Para evaluar',
            detail: 'Puede crear rúbricas, listas de cotejo, escalas estimativas, autoevaluaciones, coevaluaciones y retroalimentación personalizada.'
          },
          {
            label: 'Para la gestión docente',
            detail: 'Puede redactar informes, reportes, oficios, comunicados, minutas, actas, avisos para familias y mensajes para Classroom.'
          },
          {
            label: 'Para analizar información',
            detail: 'Puede ayudarte a comparar documentos, detectar diferencias, extraer acuerdos, identificar cambios entre versiones, resumir información extensa y encontrar evidencias.'
          },
          {
            label: 'Para funciones directivas',
            detail: 'Puede apoyar en Consejo Técnico Escolar, academias, PEMC, planes de mejora, seguimiento de acuerdos, organización documental, informes institucionales y cronogramas.'
          }
        ],
        reflectionQuestion: '¿Qué área de tu trabajo docente necesita más apoyo ahora mismo?'
      }
    ],
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
    id: 'flujo-trabajo-docente',
    moduleId: 'modulo-3',
    title: 'Construye tu flujo de trabajo docente con NotebookLM',
    duration: '25 min',
    objective: [
      'Diseñar un flujo de trabajo personal que conecte notebooks bien nombrados, archivos de Google Workspace, NotebookLM y una rutina de mantenimiento.'
    ],
    teacherProblem:
      'Cada semana el docente vuelve a buscar los mismos archivos, no sabe qué papel cumple cada documento entre Drive, Docs, Slides y Classroom, acumula notebooks mal nombrados y termina abandonando el sistema por falta de mantenimiento.',
    caseSituation:
      'Un domingo por la tarde, una docente busca otra vez la misma planeación, decide en qué carpeta vive cada archivo y no recuerda cuál de sus cinco notebooks sirve para el proyecto de este mes. No necesita más herramientas: necesita un flujo de trabajo conectado.',
    keyIdea:
      'NotebookLM no sustituye tus herramientas: las conecta en un flujo de trabajo que se organiza, se integra con Google Workspace y se mantiene con una rutina ligera.',
    visual: {
      title: 'Flujo de trabajo docente',
      type: 'workflow',
      steps: ['Google Drive', 'NotebookLM', 'Chat', 'Studio', 'Google Docs', 'Google Slides', 'Classroom']
    },
    contentSections: [
      {
        title: 'Organiza tus notebooks por propósito',
        keyIdea: 'Una biblioteca de notebooks funciona cuando los nombres muestran propósito, grupo o proyecto.',
        points: ['Por asignatura', 'Por grado', 'Por proyecto', 'Por Consejo Técnico', 'Por academia', 'Por ciclo escolar'],
        visualType: 'cards',
        pointDetails: [
          { label: 'Por asignatura', detail: 'Un notebook por materia evita mezclar fuentes de asignaturas distintas.' },
          { label: 'Por grado', detail: 'Útil cuando el mismo tema se trabaja distinto según el grado del grupo.' },
          { label: 'Por proyecto', detail: 'Reúne fuentes, evidencias y productos de un proyecto específico en un solo lugar.' },
          { label: 'Por Consejo Técnico', detail: 'Concentra minutas, acuerdos y seguimiento de las sesiones colegiadas.' },
          { label: 'Por academia', detail: 'Agrupa acuerdos, planeaciones compartidas y buenas prácticas del colectivo.' },
          { label: 'Por ciclo escolar', detail: 'Ayuda a archivar lo que ya cerró y mantener activo solo lo vigente.' }
        ],
        reflectionQuestion: '¿Tus notebooks actuales tienen un nombre que dice para qué sirven?'
      },
      {
        title: 'Decide qué papel cumple cada archivo',
        keyIdea: 'Google Workspace organiza el trabajo; NotebookLM ayuda a pensar con esos documentos.',
        points: ['Google Drive', 'Google Docs', 'Google Slides', 'Google Sheets', 'Classroom', 'Sitios web', 'YouTube'],
        visualType: 'cards',
        pointDetails: [
          { label: 'Google Drive', detail: 'Guarda y organiza todos tus archivos antes de convertirlos en fuente.' },
          { label: 'Google Docs', detail: 'Sirve para desarrollar planeaciones, guías y documentos de trabajo.' },
          { label: 'Google Slides', detail: 'Sirve para presentar un producto ya revisado ante el grupo.' },
          { label: 'Google Sheets', detail: 'Útil para llevar registros, seguimiento y datos organizados por grupo.' },
          { label: 'Classroom', detail: 'Es el lugar de entrega para estudiantes: tareas, materiales y avisos.' },
          { label: 'Sitios web', detail: 'Pueden sumarse como fuente cuando aportan información confiable y actual.' },
          { label: 'YouTube', detail: 'Un video también puede ser fuente cuando su contenido es pertinente para el tema.' }
        ],
        reflectionQuestion: '¿Qué archivo de tu próxima clase todavía no tiene un papel claro: fuente, producto o entrega?'
      },
      {
        title: 'Tu flujo de trabajo docente',
        keyIdea: 'Un flujo simple conecta Drive, NotebookLM, Chat, Studio, Docs, Slides y Classroom en un solo camino de trabajo.',
        points: ['Google Drive', 'NotebookLM', 'Chat', 'Studio', 'Google Docs', 'Google Slides', 'Classroom'],
        visualType: 'workflow',
        imageKey: 'flujo-trabajo-docente',
        pointDetails: [
          { label: 'Google Drive', detail: 'Punto de partida: ahí viven tus fuentes antes de cargarlas al notebook.' },
          { label: 'NotebookLM', detail: 'Recibe las fuentes y las convierte en un contexto de trabajo confiable.' },
          { label: 'Chat', detail: 'Permite preguntar y pedir productos conversando directamente con tus fuentes.' },
          { label: 'Studio', detail: 'Convierte el contexto en formatos listos: guías, resúmenes, presentaciones.' },
          { label: 'Google Docs', detail: 'Recibe el producto para revisarlo, ajustarlo y darle formato final.' },
          { label: 'Google Slides', detail: 'Aloja la versión lista para presentar en clase o en junta.' },
          { label: 'Classroom', detail: 'Es el destino final cuando el producto ya está listo para el grupo.' }
        ],
        reflectionQuestion: '¿En qué paso de este flujo pierdes más tiempo actualmente?'
      },
      {
        title: 'Sostén tu sistema con tips de productividad',
        keyIdea: 'La organización se sostiene con hábitos pequeños y repetibles, no con un sistema perfecto.',
        points: ['Un Notebook por materia', 'Un Notebook por proyecto', 'Reutilizar fuentes', 'Reutilizar prompts', 'Reutilizar productos'],
        visualType: 'cards',
        pointDetails: [
          { label: 'Un Notebook por materia', detail: 'Evita mezclar temas y facilita encontrar lo que necesitas en segundos.' },
          { label: 'Un Notebook por proyecto', detail: 'Mantiene fuentes y evidencias juntas mientras dura el proyecto.' },
          { label: 'Reutilizar fuentes', detail: 'Las mismas fuentes pueden servir para varios productos distintos.' },
          { label: 'Reutilizar prompts', detail: 'Guarda las consignas que funcionaron para no redactarlas de nuevo.' },
          { label: 'Reutilizar productos', detail: 'Un producto ya generado puede adaptarse a otro grupo o momento del ciclo.' }
        ],
        reflectionQuestion: '¿Qué hábito de esta lista podrías mantener incluso en una semana difícil?'
      }
    ],
    demo: {
      objective:
        'Construir un mini flujo de trabajo: notebook nombrado con propósito, un archivo de Workspace conectado y una plantilla reutilizable.',
      workflow: [
        'Nombrar un notebook con grupo y propósito claro.',
        'Elegir un archivo de Drive y decidir si es fuente, producto o entrega.',
        'Usarlo como fuente en NotebookLM y generar un producto con Chat o Studio.',
        'Publicarlo o guardarlo en Docs, Slides o Classroom.',
        'Guardar una plantilla o prompt para reutilizar la próxima semana.'
      ],
      questions: ['¿Qué parte de este flujo ya tengo y cuál me falta organizar?'],
      expectedResults: [
        'Un notebook bien nombrado.',
        'Un archivo de Workspace con papel claro.',
        'Una plantilla lista para reutilizar.'
      ],
      presenterTips: ['Modela el flujo completo una sola vez, de principio a fin, sin saltos.']
    },
    activity: {
      title: 'Mi flujo de trabajo docente',
      steps: [
        'Nombra o renombra un notebook con grupo y propósito.',
        'Elige un archivo y decide si es fuente, producto o entrega.',
        'Genera un producto con NotebookLM y decide dónde vivirá: Docs, Slides o Classroom.',
        'Guarda una plantilla o prompt que reutilizarás la próxima semana.',
        'Define un día y una acción de mantenimiento mensual.'
      ],
      deliverable: 'Un flujo de trabajo docente documentado con notebook, archivo, producto y rutina de mantenimiento.'
    },
    successCriterion:
      'El flujo muestra un notebook con propósito claro, un archivo con papel definido, un producto generado y una acción de mantenimiento programada.',
    takeaway: 'NotebookLM rinde más cuando vive dentro de un flujo organizado, no como una herramienta aislada.',
    transition:
      'Con tu flujo personal listo, el siguiente paso es llevar esta misma organización al trabajo colegiado y escolar.',
    promptTemplate: prompt(
      'm3-flujo-trabajo-docente',
      'Flujo de trabajo docente con NotebookLM',
      'Organización',
      'Básico',
      92,
      'Ayúdame a organizar mi flujo de trabajo para [ASIGNATURA] con [GRADO]. Indica cómo nombrar mi notebook, qué archivos de Google Workspace usar como fuente, producto o entrega, qué puedo generar con NotebookLM y qué rutina de mantenimiento mensual debo seguir.'
    ),
    resources: ['Google Drive', 'Google Docs', 'Google Slides', 'Google Classroom', 'Plantillas de prompt reutilizables']
  }),
  practicalLesson({
    id: 'notebook-colegiado',
    moduleId: 'modulo-3',
    title: 'Integrar IA al trabajo colegiado y escolar sin perder organización profesional',
    duration: '15 min',
    objective: [
      'Diseñar un notebook escolar que concentre el conocimiento del colectivo docente sin perder organización ni cuidado de datos sensibles.'
    ],
    teacherProblem:
      'Los acuerdos de academia, Consejo Técnico, proyectos escolares y tutorías se pierden entre minutas, mensajes y archivos sueltos, y las funciones directivas no siempre tienen apoyo para dar seguimiento.',
    caseSituation:
      'En Consejo Técnico se acuerdan acciones importantes, pero un mes después nadie recuerda qué quedó pendiente, quién daba seguimiento o dónde estaba la minuta. Lo mismo pasa con acuerdos de academia, proyectos escolares y tutorías.',
    keyIdea:
      'Un mismo Notebook puede concentrar el conocimiento del colectivo docente: academia, Consejo Técnico, proyecto escolar, tutorías y funciones directivas.',
    visual: {
      title: 'Flujo del trabajo colegiado',
      type: 'workflow',
      steps: ['Reunión', 'Documentos', 'NotebookLM', 'Resumen', 'Acuerdos', 'Responsables', 'Seguimiento']
    },
    contentSections: [
      {
        title: 'NotebookLM como memoria institucional',
        keyIdea: 'Un mismo Notebook puede concentrar el conocimiento del colectivo docente.',
        points: ['Academia', 'Consejo Técnico Escolar', 'Proyecto escolar', 'Tutorías'],
        visualType: 'cards',
        imageKey: 'notebook-colegiado',
        pointDetails: [
          { label: 'Academia', detail: 'Acuerdos, planeaciones compartidas, materiales, evaluaciones y buenas prácticas.' },
          { label: 'Consejo Técnico Escolar', detail: 'Minutas, acuerdos, PEMC, seguimiento y evidencias.' },
          { label: 'Proyecto escolar', detail: 'Cronograma, responsables, evidencias, informes y productos.' },
          { label: 'Tutorías', detail: 'Seguimiento de estudiantes, estrategias, acuerdos y evidencias.' }
        ],
        reflectionQuestion: '¿Cuál de estas cuatro memorias colegiadas necesita más orden en tu escuela?'
      },
      {
        title: 'El flujo del trabajo colegiado',
        keyIdea: 'Una reunión bien documentada puede convertirse en mucho conocimiento y decisiones que se cumplen.',
        points: ['Reunión', 'Documentos', 'NotebookLM', 'Resumen', 'Acuerdos', 'Responsables', 'Seguimiento'],
        visualType: 'workflow',
        pointDetails: [
          { label: 'Reunión', detail: 'Academia, Consejo Técnico, proyecto o tutoría: el punto de partida siempre es un encuentro colegiado.' },
          { label: 'Documentos', detail: 'Minutas, acuerdos previos y evidencias que sostienen la reunión.' },
          { label: 'NotebookLM', detail: 'Recibe los documentos permitidos y los convierte en un contexto consultable.' },
          { label: 'Resumen', detail: 'Sintetiza lo tratado sin perder los puntos que importan al colectivo.' },
          { label: 'Acuerdos', detail: 'Identifica qué se decidió y qué queda pendiente de la sesión.' },
          { label: 'Responsables', detail: 'Deja claro quién da seguimiento a cada acuerdo.' },
          { label: 'Seguimiento', detail: 'Convierte el acuerdo en una acción visible que se puede revisar después.' }
        ],
        reflectionQuestion: '¿En qué paso se pierden actualmente los acuerdos de tus reuniones?'
      },
      {
        title: 'Apoyo también a funciones directivas',
        keyIdea: 'NotebookLM puede apoyar a coordinadores y directivos generando documentos institucionales sin duplicar esfuerzos.',
        points: [
          'Minutas',
          'Informes',
          'Planes de mejora',
          'Cronogramas',
          'Seguimiento de acuerdos',
          'Organización documental',
          'PEMC',
          'Reportes institucionales'
        ],
        visualType: 'cards',
        pointDetails: [
          { label: 'Minutas', detail: 'Redacta minutas claras a partir de notas o grabaciones permitidas de la reunión.' },
          { label: 'Informes', detail: 'Convierte evidencias dispersas en un informe legible para el colectivo.' },
          { label: 'Planes de mejora', detail: 'Apoya la redacción y actualización de planes de mejora escolar.' },
          { label: 'Cronogramas', detail: 'Organiza fechas y responsables de un proyecto o ciclo escolar.' },
          { label: 'Seguimiento de acuerdos', detail: 'Mantiene visible qué acuerdo sigue vivo y quién lo atiende.' },
          { label: 'Organización documental', detail: 'Ordena minutas, actas y evidencias por tema o periodo.' },
          { label: 'PEMC', detail: 'Ayuda a estructurar y dar seguimiento al Programa Escolar de Mejora Continua.' },
          { label: 'Reportes institucionales', detail: 'Genera reportes para supervisión con base en evidencias reales.' }
        ],
        reflectionQuestion: '¿Qué documento directivo te ahorraría más tiempo si NotebookLM te ayudara a generarlo?'
      }
    ],
    demo: {
      objective: 'Generar un resumen de acuerdos institucionales y una consulta de seguimiento desde minutas no sensibles.',
      workflow: [
        'Abrir un notebook escolar con minutas, PEMC y protocolos permitidos.',
        'Pedir un resumen de acuerdos vigentes por área: academia, Consejo Técnico, proyecto o tutorías.',
        'Identificar responsables, fechas y evidencias de seguimiento.',
        'Generar un informe breve para funciones directivas.'
      ],
      questions: ['¿Qué acuerdo sigue vivo y quién lo atiende?'],
      expectedResults: ['Un resumen de acuerdos institucionales.', 'Una lista de seguimiento para el colectivo docente.'],
      presenterTips: ['Subraya privacidad: nunca subir datos personales sensibles de estudiantes o docentes.']
    },
    activity: {
      title: 'Memoria colegiada que no se pierde',
      steps: [
        'Elige un espacio colegiado: academia, Consejo Técnico, proyecto escolar o tutorías.',
        'Define qué fuentes institucionales permitidas puede contener su notebook.',
        'Anota responsable y próxima acción de un acuerdo vigente.',
        'Decide qué documento directivo generarías primero.'
      ],
      deliverable: 'Una ficha de memoria colegiada con espacio, fuente permitida, responsable y próxima acción.'
    },
    successCriterion:
      'La ficha identifica el espacio colegiado, la fuente permitida, el responsable, la próxima acción y evita datos personales sensibles.',
    takeaway: 'La memoria institucional vale cuando convierte reuniones y acuerdos en acciones visibles para todo el colectivo.',
    transition:
      'Con el flujo personal y colegiado organizados, el siguiente módulo aborda el uso ético y responsable de la IA en la práctica docente.',
    promptTemplate: prompt(
      'm3-notebook-colegiado',
      'Memoria institucional del colectivo docente',
      'Trabajo colegiado',
      'Intermedio',
      89,
      'Con base en estas fuentes institucionales permitidas: [FUENTES], resume los acuerdos vigentes de [ACADEMIA, CONSEJO TÉCNICO, PROYECTO O TUTORÍAS], identifica responsables, fechas, evidencias de avance y próximas acciones. No incluyas datos personales sensibles.'
    ),
    resources: ['Minutas', 'PEMC', 'Protocolos escolares', 'Calendario escolar', 'Proyecto escolar', 'Registro de tutorías']
  })
];

const module4Lessons: Lesson[] = [
  practicalLesson({
    id: 'docente-decide',
    moduleId: 'modulo-4',
    title: 'El docente sigue tomando las decisiones',
    duration: '25 min',
    objective: [
      'Distinguir qué puede apoyar NotebookLM y qué decisiones siguen siendo responsabilidad exclusiva del docente.',
      'Aplicar una revisión de protección de datos y pensamiento crítico antes de usar una respuesta generada por IA.'
    ],
    teacherProblem:
      'La IA puede proponer materiales, resúmenes y borradores útiles, pero no debe decidir calificaciones, diagnósticos ni sanciones, ni exponer datos sensibles o repetir sesgos sin que el docente lo note.',
    caseSituation:
      'NotebookLM puede ayudar a redactar un borrador de retroalimentación o un reporte de grupo. Antes de usarlo, el docente debe verificar que no exponga datos personales, que esté sustentado, actualizado, adaptado al grupo y coherente con la NEM.',
    keyIdea:
      'La IA propone; el docente decide. Revisar, adaptar, verificar y contextualizar es lo que convierte una propuesta de IA en una decisión profesional responsable.',
    visual: {
      title: 'IA propone, docente decide',
      type: 'decision-tree',
      steps: ['IA propone', 'Revisar', 'Adaptar', 'Verificar', 'Contextualizar', 'Docente decide']
    },
    contentSections: [
      {
        title: 'Qué sí puede hacer NotebookLM y qué nunca debe delegar el docente',
        keyIdea: 'La IA propone; el docente decide qué usar, ajustar o descartar.',
        points: [
          'Organizar información',
          'Resumir documentos',
          'Crear materiales',
          'Generar actividades',
          'Proponer evaluaciones',
          'Comparar documentos',
          'Detectar patrones',
          'La evaluación profesional',
          'Las decisiones pedagógicas',
          'El trato humano',
          'La relación con el estudiante',
          'La comunicación sensible',
          'La responsabilidad ética'
        ],
        visualType: 'decision-tree',
        imageKey: 'docente-decide',
        pointDetails: [
          { label: 'Organizar información', detail: 'Sí puede: ordenar fuentes, documentos y evidencias para que sean fáciles de consultar.' },
          { label: 'Resumir documentos', detail: 'Sí puede: sintetizar textos extensos en versiones breves y claras.' },
          { label: 'Crear materiales', detail: 'Sí puede: generar guías, presentaciones e infografías a partir de tus fuentes.' },
          { label: 'Generar actividades', detail: 'Sí puede: proponer actividades alineadas a un tema, grado y tiempo disponible.' },
          { label: 'Proponer evaluaciones', detail: 'Sí puede: sugerir rúbricas, listas de cotejo o preguntas de evaluación.' },
          { label: 'Comparar documentos', detail: 'Sí puede: detectar diferencias, acuerdos o cambios entre versiones de un texto.' },
          { label: 'Detectar patrones', detail: 'Sí puede: identificar tendencias en evidencias o respuestas de un grupo.' },
          { label: 'La evaluación profesional', detail: 'Nunca debe delegarse: calificar, diagnosticar o sancionar es responsabilidad exclusiva del docente.' },
          { label: 'Las decisiones pedagógicas', detail: 'Nunca debe delegarse: decidir qué enseñar, cómo y cuándo, requiere juicio profesional.' },
          { label: 'El trato humano', detail: 'Nunca debe delegarse: acompañar, escuchar y sostener la relación pedagógica.' },
          { label: 'La relación con el estudiante', detail: 'Nunca debe delegarse: conocer y responder al contexto real de cada estudiante.' },
          { label: 'La comunicación sensible', detail: 'Nunca debe delegarse: conversaciones difíciles con estudiantes o familias.' },
          { label: 'La responsabilidad ética', detail: 'Nunca debe delegarse: la responsabilidad final de cualquier decisión sigue teniendo nombre y apellido docente.' }
        ],
        reflectionQuestion: '¿Qué tarea de tu lista delegarías a NotebookLM y cuál nunca delegarías?'
      },
      {
        title: 'Protección de datos y pensamiento crítico antes de compartir',
        keyIdea: 'Antes de usar una respuesta, revisa qué datos expone y si realmente está sustentada, actualizada, adaptada y alineada a la NEM.',
        points: [
          'Datos personales',
          'Información sensible',
          'Calificaciones identificables',
          'Expedientes completos',
          '¿Está sustentado?',
          '¿Está actualizado?',
          '¿Se adapta a mi grupo?',
          '¿Es coherente con la NEM?'
        ],
        visualType: 'comparison',
        imageKey: 'proteccion-datos-pensamiento-critico',
        pointDetails: [
          { label: 'Datos personales', detail: 'No compartir: nombres, contactos o cualquier dato que identifique a una persona.' },
          { label: 'Información sensible', detail: 'No compartir: situaciones familiares, de salud o socioeconómicas de estudiantes.' },
          { label: 'Calificaciones identificables', detail: 'No compartir: notas o resultados asociados a un nombre o matrícula reconocible.' },
          { label: 'Expedientes completos', detail: 'No compartir: documentos completos con historial académico o personal del estudiante.' },
          { label: '¿Está sustentado?', detail: 'Verifica que la respuesta tenga fuentes confiables que la respalden.' },
          { label: '¿Está actualizado?', detail: 'Verifica que la información sea reciente y siga vigente.' },
          { label: '¿Se adapta a mi grupo?', detail: 'Verifica que sea adecuada para el contexto, edad y necesidades de tus estudiantes.' },
          { label: '¿Es coherente con la NEM?', detail: 'Verifica que esté alineada al plan de estudios y a los principios de la Nueva Escuela Mexicana.' }
        ],
        reflectionQuestion: '¿Qué pregunta de pensamiento crítico te falta hacerte más seguido antes de usar una respuesta de IA?'
      },
      {
        title: 'Usa la IA para tener más presencia docente',
        keyIdea: 'La docencia aumentada libera tiempo de preparación para invertirlo en conversación, observación y retroalimentación.',
        points: ['Tarea repetitiva', 'Apoyo de IA', 'Revisión docente', 'Tiempo liberado', 'Interacción con estudiantes'],
        visualType: 'workflow',
        pointDetails: [
          { label: 'Tarea repetitiva', detail: 'Identifica una tarea administrativa o de preparación que consume tiempo cada semana.' },
          { label: 'Apoyo de IA', detail: 'Pide un borrador o formato inicial en lugar de empezar desde cero.' },
          { label: 'Revisión docente', detail: 'Ajusta el resultado con tu criterio, contexto y conocimiento del grupo.' },
          { label: 'Tiempo liberado', detail: 'El tiempo que ya no usas en producir desde cero queda disponible.' },
          { label: 'Interacción con estudiantes', detail: 'Ese tiempo se invierte en revisar cuadernos, conversar o dar retroalimentación breve.' }
        ],
        reflectionQuestion: '¿Qué harás con el tiempo que recuperes esta semana?'
      }
    ],
    demo: {
      objective: 'Auditar una respuesta de IA aplicando el semáforo ético y el filtro de privacidad antes de usarla.',
      workflow: [
        'Tomar una respuesta ficticia de IA con un reporte de grupo.',
        'Clasificarla en un semáforo: verde (apoyo), amarillo (revisar), rojo (no delegar).',
        'Marcar datos personales, sesgos o supuestos ocultos.',
        'Reescribir una versión segura, sustentada y coherente con la NEM.',
        'Decidir en qué interacción con estudiantes se invertirá el tiempo recuperado.'
      ],
      questions: ['¿Qué parte de esta respuesta nunca debería decidir la IA?'],
      expectedResults: [
        'Un semáforo ético de la respuesta.',
        'Una versión segura y verificada.',
        'Una decisión de tiempo recuperado.'
      ],
      presenterTips: ['Usa ejemplos ficticios; nunca datos reales de estudiantes.']
    },
    activity: {
      title: 'Mi filtro de decisiones',
      steps: [
        'Elige una tarea o respuesta generada por IA.',
        'Clasifícala en verde, amarillo o rojo.',
        'Revisa datos personales, sesgos y coherencia con la NEM.',
        'Define qué decisión final toma el docente.',
        'Anota qué interacción con estudiantes ganarás con el tiempo recuperado.'
      ],
      deliverable: 'Un filtro de decisión con clasificación ética, revisión de datos y tiempo recuperado.'
    },
    successCriterion:
      'El filtro clasifica la tarea, identifica un riesgo de datos o sesgo, y define qué decisión final toma el docente y qué tiempo recupera.',
    takeaway: 'La IA puede sugerir con datos y velocidad; el docente decide con contexto, ética y presencia humana.',
    transition:
      'Con las decisiones bien delimitadas, el siguiente paso es convertir todo lo aprendido en un plan de implementación real.',
    promptTemplate: prompt(
      'm4-docente-decide',
      'Filtro de decisión docente',
      'Ética y responsabilidad',
      'Intermedio',
      94,
      'Revisa esta tarea o respuesta generada por IA: [TAREA O TEXTO]. Clasifícala en verde, amarillo o rojo según el riesgo. Identifica datos personales, sesgos, si está sustentada, actualizada, adaptada a mi grupo y coherente con la NEM. Indica qué decisión final debo tomar como docente.'
    ),
    resources: ['Acuerdos escolares', 'Lineamientos de privacidad', 'Tareas docentes', 'Evidencias de estudiantes']
  }),
  practicalLesson({
    id: 'plan-implementacion',
    moduleId: 'modulo-4',
    title: 'Plan de Implementación',
    duration: '20 min',
    objective: [
      'Convertir una reflexión breve sobre lo que funcionó en una ruta de 30 días y un paquete final listo para usar el lunes.'
    ],
    teacherProblem:
      'Después del taller es fácil querer aplicarlo todo, no dejar una decisión clara de mejora y terminar sin nada listo para usar en una clase real.',
    caseSituation:
      'Un docente sale entusiasmado y quiere crear notebooks, rúbricas, audios y proyectos al mismo tiempo. Sin una decisión de mejora, una ruta pequeña y un paquete concreto, la carga normal de trabajo regresa y el taller se queda en ideas sueltas.',
    keyIdea:
      'Construyo hoy, transformo mi aula mañana: un plan pequeño, medible y con producto listo vale más que diez ideas sin aplicar.',
    visual: {
      title: 'Mi plan de implementación',
      type: 'workflow',
      steps: ['Crear mi Notebook', 'Crear actividades', 'Crear planeaciones y evaluación', 'Integrarlo a mi flujo de trabajo']
    },
    contentSections: [
      {
        title: 'Mi plan de implementación',
        keyIdea: 'Construyo hoy, transformo mi aula mañana.',
        points: ['Crear mi Notebook', 'Crear actividades', 'Crear planeaciones y evaluación', 'Integrarlo a mi flujo de trabajo'],
        visualType: 'workflow',
        imageKey: 'plan-implementacion',
        pointDetails: [
          { label: 'Crear mi Notebook', detail: 'El primer paso: reunir tus fuentes y darle un propósito claro a tu notebook.' },
          { label: 'Crear actividades', detail: 'Convertir esas fuentes en una actividad lista para tu próxima clase.' },
          { label: 'Crear planeaciones y evaluación', detail: 'Completar el ciclo con una planeación y un instrumento de evaluación alineados.' },
          { label: 'Integrarlo a mi flujo de trabajo', detail: 'Conectar notebook, Workspace y rutina para que el sistema se sostenga.' }
        ],
        reflectionQuestion: '¿En qué paso de este plan estás hoy?'
      },
      {
        title: 'La idea central del taller',
        keyIdea:
          'Pasar de usar IA para buscar respuestas a utilizar IA para construir experiencias de aprendizaje apoyadas en documentos y contexto educativo.',
        points: ['Pasar de usar IA para buscar respuestas', 'NotebookLM', 'A construir experiencias de aprendizaje'],
        visualType: 'workflow',
        pointDetails: [
          { label: 'Pasar de usar IA para buscar respuestas', detail: 'El punto de partida de muchos docentes: usar IA como buscador general.' },
          { label: 'NotebookLM', detail: 'El puente: un asistente que trabaja con tus propias fuentes, no con conocimiento genérico.' },
          { label: 'A construir experiencias de aprendizaje', detail: 'El destino del taller: actividades, planeaciones y evaluaciones apoyadas en documentos y contexto real.' }
        ],
        reflectionQuestion: '¿Qué cambió en tu forma de pedirle apoyo a la IA durante este taller?'
      },
      {
        title: 'Como docentes',
        keyIdea: 'La calidad y la validación pedagógica siguen siendo responsabilidad del docente.',
        points: [
          'La IA ayuda a reducir trabajo repetitivo',
          'La validación pedagógica sigue siendo responsabilidad del docente',
          'La calidad del resultado depende del contexto y materiales proporcionados',
          'El objetivo no es usar más herramientas, sino mejorar el proceso educativo',
          'NotebookLM funciona mejor cuando trabaja con materiales reales del aula'
        ],
        visualType: 'cards',
        pointDetails: [
          { label: 'La IA ayuda a reducir trabajo repetitivo', detail: 'Libera tiempo de tareas mecánicas para invertirlo en el aula.' },
          { label: 'La validación pedagógica sigue siendo responsabilidad del docente', detail: 'Ningún resultado se usa sin revisión y criterio profesional.' },
          { label: 'La calidad del resultado depende del contexto y materiales proporcionados', detail: 'Fuentes claras y pertinentes producen mejores resultados.' },
          { label: 'El objetivo no es usar más herramientas, sino mejorar el proceso educativo', detail: 'La meta es un mejor aprendizaje, no acumular funciones.' },
          { label: 'NotebookLM funciona mejor cuando trabaja con materiales reales del aula', detail: 'Programas, libros, planeaciones y evidencias propias, no ejemplos genéricos.' }
        ],
        reflectionQuestion: '¿Cuál de estas cinco ideas es la que más te gustaría recordar dentro de un mes?'
      },
      {
        title: 'Pensando en el próximo ciclo escolar',
        keyIdea: 'Un plan de 30 días funciona mejor cuando ya piensas también en el siguiente ciclo escolar.',
        points: [
          '¿Qué actividad docente me gustaría rediseñar o fortalecer utilizando IA?',
          '¿Qué material puedo empezar a preparar desde ahora?',
          'Semana 1: fuentes',
          'Semana 2: plantilla',
          'Semana 3: actividad',
          'Semana 4: evidencia'
        ],
        visualType: 'timeline',
        pointDetails: [
          { label: '¿Qué actividad docente me gustaría rediseñar o fortalecer utilizando IA?', detail: 'Elige una actividad real de tu práctica, no una idea abstracta.' },
          { label: '¿Qué material puedo empezar a preparar desde ahora?', detail: 'Adelanta lo que facilitará tu trabajo al inicio del próximo ciclo.' },
          { label: 'Semana 1: fuentes', detail: 'Reúne y organiza las fuentes de tu notebook principal.' },
          { label: 'Semana 2: plantilla', detail: 'Guarda una plantilla de prompt que puedas reutilizar.' },
          { label: 'Semana 3: actividad', detail: 'Genera y aplica una actividad completa con esa plantilla.' },
          { label: 'Semana 4: evidencia', detail: 'Registra evidencia de avance y decide si el hábito se sostiene.' }
        ],
        reflectionQuestion: '¿Qué acción sostendrás incluso en una semana pesada?'
      }
    ],
    demo: {
      objective: 'Construir el paquete final del taller: notebook, actividad, evaluación y ruta de 30 días lista para usar el lunes.',
      workflow: [
        'Abrir el notebook construido durante el taller.',
        'Confirmar que ya existan actividad, planeación y evaluación desde ese notebook.',
        'Definir el primer paso para integrarlo al flujo de trabajo semanal.',
        'Elegir una acción por semana para las próximas 4 semanas.',
        'Anotar qué actividad se rediseñará pensando en el próximo ciclo escolar.'
      ],
      questions: ['¿Esto se puede abrir y usar en una clase real el lunes?'],
      expectedResults: ['Un paquete final claro y presentable.', 'Una ruta de 30 días con una acción por semana.'],
      presenterTips: ['Cierra con aplicación real, no con celebración de funciones.']
    },
    activity: {
      title: 'Mi plan de implementación',
      steps: [
        'Reúne tu notebook, fuente y plantilla usada.',
        'Confirma actividad, criterio de evaluación y evidencia.',
        'Define una acción por semana durante 30 días.',
        'Anota qué prepararás desde ahora para el próximo ciclo escolar.',
        'Decide qué usarás primero el lunes.'
      ],
      deliverable: 'Un plan de implementación con paquete de clase, ruta de 30 días y una decisión para el próximo ciclo escolar.'
    },
    successCriterion:
      'El plan incluye un paquete listo para clase, una acción semanal durante 30 días y una decisión concreta para el próximo ciclo escolar.',
    takeaway: 'El taller termina cuando el docente tiene una acción lista, no cuando conoce una herramienta más.',
    transition: 'Cierre del taller: cada docente comparte qué usará primero y qué apoyo necesita para sostenerlo.',
    promptTemplate: prompt(
      'm4-plan-implementacion',
      'Plan de implementación de NotebookLM',
      'Implementación',
      'Básico',
      95,
      'Organiza mi plan de implementación para [GRADO Y ASIGNATURA]: notebook, fuentes, plantilla, actividad, evaluación, una acción por semana durante 30 días y qué prepararé desde ahora para el próximo ciclo escolar.'
    ),
    resources: ['Notebook creado', 'Plantilla usada', 'Actividad', 'Rúbrica corta', 'Calendario escolar']
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
    title: 'NotebookLM en mi trabajo diario',
    subtitle:
      'Construir un flujo de trabajo personal con NotebookLM y llevarlo al trabajo colegiado y escolar sin perder organización profesional.',
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

export const productExamplesByCategory: Record<string, string[]> = {
  'Planeación': [
    'Planeación diaria',
    'Planeación semanal',
    'Planeación mensual',
    'Secuencia didáctica',
    'Situación de aprendizaje',
    'Proyecto comunitario',
    'Proyecto interdisciplinario',
    'Plan de unidad',
    'Ruta de aprendizaje',
    'Guion de clase',
    'Plan de recuperación',
    'Plan de repaso',
    'Adecuación curricular de planeación',
    'Cronograma de secuencia'
  ],
  'Actividades de Aprendizaje': [
    'Actividad individual',
    'Actividad colaborativa',
    'Debate estructurado',
    'Estudio de caso',
    'Investigación guiada',
    'Experimento',
    'Reto gamificado',
    'Aula invertida',
    'Estaciones de aprendizaje',
    'Reto STEAM',
    'Simulación o juego de roles',
    'Galería de aprendizaje',
    'Círculo de lectura',
    'Línea del tiempo colaborativa',
    'Mapa mental grupal',
    'Podcast estudiantil',
    'Rally de preguntas',
    'Mini proyecto comunitario',
    'Guía de escucha para Audio Overview',
    'Ticket de salida'
  ],
  'Evaluación': [
    'Rúbrica',
    'Lista de cotejo',
    'Escala estimativa',
    'Guía de observación',
    'Evaluación diagnóstica',
    'Evaluación formativa',
    'Evaluación sumativa',
    'Portafolio de evidencias',
    'Autoevaluación',
    'Coevaluación',
    'Examen de opción múltiple',
    'Preguntas abiertas',
    'Retroalimentación personalizada',
    'Diario de evaluación'
  ],
  'Inclusión': [
    'Adecuación curricular',
    'Material didáctico adaptado',
    'Actividad multinivel',
    'Apoyo visual u organizador gráfico',
    'Texto simplificado o lectura fácil',
    'Estrategia de Diseño Universal para el Aprendizaje',
    'Plan de apoyo individual',
    'Evaluación diferenciada',
    'Glosario visual',
    'Actividad multisensorial',
    'Ajuste razonable de evaluación',
    'Ficha de seguimiento de estudiante con NEE',
    'Apoyos de comunicación aumentativa',
    'Comunicación accesible a familias',
    'Guía de lenguaje claro',
    'Variante de instrucciones simplificadas'
  ],
  'Gestión Escolar': [
    'Minuta de reunión',
    'Oficio escolar',
    'Aviso o circular para familias',
    'Reporte de avance de grupo',
    'Convocatoria escolar',
    'Agenda de trabajo colegiado',
    'PEMC',
    'Plan de mejora',
    'Formato de seguimiento',
    'Comunicado institucional',
    'Bitácora de gestión',
    'Organización documental del notebook'
  ],
  'Liderazgo': [
    'Informe para Consejo Técnico Escolar',
    'Análisis comparativo de documentos',
    'Agenda de academia',
    'Asesoría pedagógica experta',
    'Seguimiento de acuerdos del colectivo',
    'Diagnóstico institucional',
    'Plan de acompañamiento pedagógico',
    'Reporte para supervisión escolar'
  ]
};

const professionalTeacherToolkitPrompts: Prompt[] = [
  // 📚 Planeación
  prompt('plan-diaria', 'Planeación diaria con fuentes propias', 'Planeación', 'Básico', 97, 'Con base en las fuentes de este notebook, crea una planeación diaria sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCIÓN PEDAGÓGICA], [TIEMPO DISPONIBLE], inicio, desarrollo, cierre, materiales, [PRODUCTO A GENERAR] y un criterio rápido de revisión ajustado a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-secuencia', 'Secuencia didáctica alineada al PDA', 'Planeación', 'Intermedio', 96, 'Con base en el Programa Analítico, el Programa Sintético y el libro CONALITEG cargados en este notebook, diseña una secuencia didáctica sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye sesiones, [INTENCIÓN PEDAGÓGICA], campo formativo, eje articulador, [PRODUCTO A GENERAR] y una forma de evaluarlo en [TIEMPO DISPONIBLE].'),
  prompt('plan-semanal', 'Planeación semanal reutilizable', 'Planeación', 'Básico', 93, 'A partir de mis fuentes de NotebookLM, organiza una planeación semanal para [GRADO] en [ASIGNATURA] sobre [TEMA]. Distribuye [TIEMPO DISPONIBLE] entre las sesiones, define [PRODUCTO A GENERAR] por día y ajusta la propuesta a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-proyecto-comunitario', 'Proyecto comunitario situado', 'Planeación', 'Intermedio', 94, 'Convierte [TEMA] en un proyecto comunitario para [GRADO] en [ASIGNATURA], usando solo las fuentes de este notebook. Incluye una pregunta guía, [INTENCIÓN PEDAGÓGICA], ruta de trabajo, [PRODUCTO A GENERAR] y vínculo con la comunidad, considerando [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-interdisciplinario', 'Proyecto interdisciplinario', 'Planeación', 'Avanzado', 90, 'Diseña un proyecto interdisciplinario sobre [TEMA] para [GRADO], integrando [ASIGNATURA] con otras materias afines. Incluye [INTENCIÓN PEDAGÓGICA], [PRODUCTO A GENERAR], calendario en [TIEMPO DISPONIBLE] y forma de evaluación, con base en mis fuentes del notebook.'),
  prompt('plan-conaliteg', 'Conectar Programa Analítico con CONALITEG', 'Planeación', 'Avanzado', 92, 'Compara el Programa Analítico y el libro CONALITEG de este notebook sobre [TEMA] para [GRADO] en [ASIGNATURA]. Señala coincidencias, vacíos, páginas útiles y sugiere [PRODUCTO A GENERAR] alineado con [INTENCIÓN PEDAGÓGICA] para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-mensual', 'Planeación mensual por semanas', 'Planeación', 'Intermedio', 91, 'Con base en las fuentes de este notebook, organiza una planeación mensual para [GRADO] en [ASIGNATURA] sobre [TEMA]. Distribuye [TIEMPO DISPONIBLE] en semanas, define [PRODUCTO A GENERAR] por semana y ajusta la carga a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-situacion-aprendizaje', 'Situación de aprendizaje contextualizada', 'Planeación', 'Intermedio', 92, 'Diseña una situación de aprendizaje sobre [TEMA] para [GRADO] en [ASIGNATURA], usando solo las fuentes de este notebook. Conecta [INTENCIÓN PEDAGÓGICA] con el contexto de [CARACTERÍSTICAS DEL GRUPO], y define [PRODUCTO A GENERAR] y evidencia de cierre.'),
  prompt('plan-unidad', 'Plan de unidad completo', 'Planeación', 'Avanzado', 90, 'Con base en el Programa Analítico de este notebook, organiza un plan de unidad sobre [TEMA] para [GRADO] en [ASIGNATURA]. Distribuye [TIEMPO DISPONIBLE] en sesiones, define [PRODUCTO A GENERAR] final y ajusta el ritmo a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-ruta-aprendizaje', 'Ruta de aprendizaje del estudiante', 'Planeación', 'Intermedio', 89, 'Diseña una ruta de aprendizaje sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define pasos, [INTENCIÓN PEDAGÓGICA], [PRODUCTO A GENERAR] intermedio y final, y ajusta el avance a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-guion-clase', 'Guion de clase paso a paso', 'Planeación', 'Básico', 93, 'Con base en mis fuentes, crea un guion de clase minuto a minuto sobre [TEMA] para [GRADO] en [ASIGNATURA]. Ajusta a [TIEMPO DISPONIBLE], incluye [INTENCIÓN PEDAGÓGICA], [PRODUCTO A GENERAR] y notas para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-recuperacion', 'Plan de recuperación de aprendizajes', 'Planeación', 'Intermedio', 88, 'Diseña un plan de recuperación sobre [TEMA] para [GRADO] en [ASIGNATURA], pensado en [CARACTERÍSTICAS DEL GRUPO]. Define [INTENCIÓN PEDAGÓGICA], actividades breves, [PRODUCTO A GENERAR] y forma de verificar el avance en [TIEMPO DISPONIBLE].'),
  prompt('plan-repaso', 'Plan de repaso previo a evaluación', 'Planeación', 'Básico', 90, 'Con base en mis fuentes, organiza un plan de repaso sobre [TEMA] para [GRADO] en [ASIGNATURA] antes de una evaluación. Define [PRODUCTO A GENERAR], [TIEMPO DISPONIBLE] y ajusta las actividades a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('plan-adecuacion-curricular', 'Adecuación curricular de una planeación', 'Planeación', 'Intermedio', 87, 'Adapta esta planeación sobre [TEMA] para [GRADO] en [ASIGNATURA] a [CARACTERÍSTICAS DEL GRUPO]. Ajusta [INTENCIÓN PEDAGÓGICA], tiempos y [PRODUCTO A GENERAR] sin perder el propósito original en [TIEMPO DISPONIBLE].'),

  // 🎯 Actividades de Aprendizaje
  prompt('actividad-individual', 'Actividad individual desde fuentes propias', 'Actividades de Aprendizaje', 'Básico', 96, 'Con base en las fuentes de este notebook, crea una actividad individual sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCIÓN PEDAGÓGICA], [TIEMPO DISPONIBLE], instrucciones claras, [PRODUCTO A GENERAR] y un criterio rápido de revisión para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('actividad-colaborativa', 'Actividad colaborativa con roles', 'Actividades de Aprendizaje', 'Básico', 95, 'Diseña una actividad colaborativa sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define equipos, roles, [INTENCIÓN PEDAGÓGICA], [TIEMPO DISPONIBLE] y [PRODUCTO A GENERAR], considerando [CARACTERÍSTICAS DEL GRUPO] para repartir responsabilidades.'),
  prompt('actividad-reto-investigacion', 'Reto de investigación guiada o STEAM', 'Actividades de Aprendizaje', 'Intermedio', 92, 'A partir de mis fuentes, crea un reto de investigación guiada o STEAM sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCIÓN PEDAGÓGICA], materiales accesibles para [CARACTERÍSTICAS DEL GRUPO], pasos, [PRODUCTO A GENERAR] y evidencia en [TIEMPO DISPONIBLE].'),
  prompt('actividad-caso-debate', 'Estudio de caso o debate', 'Actividades de Aprendizaje', 'Intermedio', 91, 'Diseña un estudio de caso o debate sobre [TEMA] para [GRADO] en [ASIGNATURA], con base en las fuentes de este notebook. Incluye el dilema o las posturas, preguntas de análisis, [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] adecuado a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('actividad-material-estudio', 'Material de estudio para el aula', 'Actividades de Aprendizaje', 'Básico', 94, 'Convierte mis fuentes sobre [TEMA] en material de estudio para [GRADO] en [ASIGNATURA]: guía, resumen, infografía o tarjetas. Usa lenguaje claro, ejemplos cercanos a [CARACTERÍSTICAS DEL GRUPO] y cierra con [PRODUCTO A GENERAR] para practicar en [TIEMPO DISPONIBLE].'),
  prompt('actividad-audio-overview', 'Guía de escucha para un Audio Overview', 'Actividades de Aprendizaje', 'Intermedio', 93, 'A partir de un Audio Overview generado en Studio sobre [TEMA], crea una guía de escucha para [GRADO] en [ASIGNATURA]. Organiza antes, durante y después, incluye [INTENCIÓN PEDAGÓGICA], vocabulario clave y [PRODUCTO A GENERAR] como evidencia, ajustado a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('actividad-debate-estructurado', 'Debate estructurado con posturas', 'Actividades de Aprendizaje', 'Intermedio', 91, 'Diseña un debate estructurado sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define dos posturas, reglas, [TIEMPO DISPONIBLE], [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] como cierre, ajustado a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('actividad-experimento', 'Experimento seguro y viable', 'Actividades de Aprendizaje', 'Intermedio', 90, 'Diseña un experimento accesible sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye materiales para [CARACTERÍSTICAS DEL GRUPO], pasos, [INTENCIÓN PEDAGÓGICA], [PRODUCTO A GENERAR] y tiempo estimado en [TIEMPO DISPONIBLE].'),
  prompt('actividad-gamificada', 'Reto gamificado de repaso', 'Actividades de Aprendizaje', 'Básico', 92, 'Convierte [TEMA] en un reto gamificado para [GRADO] en [ASIGNATURA]. Define misión, reglas simples, [TIEMPO DISPONIBLE], [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] como evidencia final.'),
  prompt('actividad-aula-invertida', 'Actividad de aula invertida', 'Actividades de Aprendizaje', 'Básico', 88, 'Diseña una actividad de aula invertida sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define el recurso previo, preguntas de preparación, [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] para la sesión presencial.'),
  prompt('actividad-estaciones', 'Estaciones de aprendizaje', 'Actividades de Aprendizaje', 'Intermedio', 90, 'Diseña estaciones de aprendizaje sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define número de estaciones, [TIEMPO DISPONIBLE], [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] por estación, ajustado a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('actividad-steam', 'Reto STEAM interdisciplinario', 'Actividades de Aprendizaje', 'Avanzado', 87, 'Crea un reto STEAM sobre [TEMA] para [GRADO]. Integra [ASIGNATURA], un problema real, [INTENCIÓN PEDAGÓGICA], [PRODUCTO A GENERAR] como prototipo y tiempo de prueba en [TIEMPO DISPONIBLE].'),
  prompt('actividad-simulacion', 'Simulación o juego de roles', 'Actividades de Aprendizaje', 'Intermedio', 89, 'Diseña una simulación o juego de roles sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define roles, reglas, [INTENCIÓN PEDAGÓGICA], [TIEMPO DISPONIBLE] y [PRODUCTO A GENERAR] como cierre.'),
  prompt('actividad-galeria-aprendizaje', 'Galería de aprendizaje', 'Actividades de Aprendizaje', 'Intermedio', 86, 'Diseña una galería de aprendizaje sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define estaciones de exhibición, rol de visitantes y expositores, [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] final.'),
  prompt('actividad-circulo-lectura', 'Círculo de lectura guiado', 'Actividades de Aprendizaje', 'Básico', 88, 'Diseña un círculo de lectura sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define roles de lectura, preguntas guía, [INTENCIÓN PEDAGÓGICA], [TIEMPO DISPONIBLE] y [PRODUCTO A GENERAR] de cierre.'),
  prompt('actividad-linea-tiempo', 'Línea del tiempo colaborativa', 'Actividades de Aprendizaje', 'Básico', 87, 'Con base en mis fuentes, diseña una actividad de línea del tiempo colaborativa sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define [INTENCIÓN PEDAGÓGICA], roles de equipo y [PRODUCTO A GENERAR] final.'),
  prompt('actividad-mapa-mental-grupal', 'Mapa mental o conceptual grupal', 'Actividades de Aprendizaje', 'Básico', 89, 'Diseña una actividad de mapa mental grupal sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define [INTENCIÓN PEDAGÓGICA], organización de equipos, [TIEMPO DISPONIBLE] y [PRODUCTO A GENERAR] final.'),
  prompt('actividad-podcast-estudiantil', 'Podcast o audio estudiantil', 'Actividades de Aprendizaje', 'Intermedio', 88, 'Diseña una actividad para crear un podcast breve sobre [TEMA] con estudiantes de [GRADO] en [ASIGNATURA]. Define guion, [INTENCIÓN PEDAGÓGICA], [TIEMPO DISPONIBLE] y [PRODUCTO A GENERAR] final.'),
  prompt('actividad-rally-preguntas', 'Rally de preguntas por estaciones', 'Actividades de Aprendizaje', 'Básico', 86, 'Diseña un rally de preguntas sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define estaciones, tiempos, [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] como registro de respuestas, ajustado a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('actividad-proyecto-comunitario-aula', 'Mini proyecto comunitario de aula', 'Actividades de Aprendizaje', 'Intermedio', 90, 'Con base en mis fuentes, diseña un mini proyecto comunitario sobre [TEMA] para [GRADO] en [ASIGNATURA], realizable en [TIEMPO DISPONIBLE]. Define [INTENCIÓN PEDAGÓGICA], pasos y [PRODUCTO A GENERAR] final.'),

  // 📊 Evaluación
  prompt('eval-rubrica', 'Rúbrica de producto NEM', 'Evaluación', 'Básico', 97, 'Crea una rúbrica para evaluar [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO] y [ASIGNATURA]. Incluye criterios observables, niveles claros, lenguaje accesible para [CARACTERÍSTICAS DEL GRUPO] y retroalimentación alineada con [INTENCIÓN PEDAGÓGICA].'),
  prompt('eval-lista-cotejo', 'Lista de cotejo rápida', 'Evaluación', 'Básico', 96, 'Genera una lista de cotejo para revisar [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO] y [ASIGNATURA]. Incluye indicadores observables, espacio para evidencia y una recomendación de mejora en [TIEMPO DISPONIBLE].'),
  prompt('eval-diagnostica', 'Evaluación diagnóstica de grupo', 'Evaluación', 'Básico', 92, 'Diseña una evaluación diagnóstica sobre [TEMA] para [GRADO] en [ASIGNATURA], adecuada a [CARACTERÍSTICAS DEL GRUPO]. Incluye preguntas abiertas, una actividad breve y criterios para decidir el punto de partida hacia [INTENCIÓN PEDAGÓGICA].'),
  prompt('eval-formativa', 'Evaluación formativa de seguimiento', 'Evaluación', 'Intermedio', 94, 'Diseña una evaluación formativa para dar seguimiento a [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO]. Incluye evidencia durante la clase, preguntas de seguimiento y un ajuste sugerido para la siguiente sesión en [TIEMPO DISPONIBLE].'),
  prompt('eval-retroalimentacion', 'Retroalimentación personalizada por nivel', 'Evaluación', 'Básico', 95, 'Genera retroalimentación personalizada para [PRODUCTO A GENERAR] de [GRADO] sobre [TEMA]. Incluye una versión para nivel inicial, intermedio y avanzado, con fortaleza, mejora prioritaria y siguiente paso, en tono respetuoso para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('eval-guia-observacion', 'Guía de observación situada', 'Evaluación', 'Intermedio', 90, 'Crea una guía de observación para valorar [INTENCIÓN PEDAGÓGICA] durante [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO]. Incluye conductas observables, momentos de registro y decisiones docentes según [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('eval-escala-estimativa', 'Escala estimativa de desempeño', 'Evaluación', 'Básico', 91, 'Crea una escala estimativa para valorar [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO] y [ASIGNATURA]. Define niveles graduales, criterios observables y ajuste para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('eval-sumativa', 'Evaluación sumativa de cierre', 'Evaluación', 'Intermedio', 89, 'Crea una evaluación sumativa sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye reactivos variados, [PRODUCTO A GENERAR] como tarea de desempeño y una tabla de calificación clara.'),
  prompt('eval-portafolio', 'Portafolio de evidencias', 'Evaluación', 'Intermedio', 90, 'Diseña un portafolio de evidencias sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define qué [PRODUCTO A GENERAR] incluir, criterios de selección y una guía de reflexión final para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('eval-autoevaluacion', 'Autoevaluación guiada', 'Evaluación', 'Básico', 92, 'Crea una autoevaluación sobre [PRODUCTO A GENERAR] para [GRADO] en [ASIGNATURA] sobre [TEMA]. Incluye preguntas guía, criterios claros y un espacio de compromiso de mejora.'),
  prompt('eval-coevaluacion', 'Coevaluación entre pares', 'Evaluación', 'Intermedio', 90, 'Diseña una coevaluación entre pares para [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO]. Define criterios comunes, lenguaje respetuoso y ajuste a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('eval-opcion-multiple', 'Examen de opción múltiple', 'Evaluación', 'Básico', 89, 'Crea un examen de opción múltiple sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye niveles de dificultad, distractores plausibles y relación con [INTENCIÓN PEDAGÓGICA].'),
  prompt('eval-preguntas-abiertas', 'Preguntas abiertas de análisis', 'Evaluación', 'Básico', 88, 'Crea preguntas abiertas sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye [INTENCIÓN PEDAGÓGICA], criterios para valorar respuestas y una pregunta de reflexión final.'),
  prompt('eval-diario-evaluacion', 'Diario de evaluación docente', 'Evaluación', 'Intermedio', 86, 'Crea un formato de diario de evaluación para dar seguimiento a [PRODUCTO A GENERAR] sobre [TEMA] en [GRADO] durante [TIEMPO DISPONIBLE]. Define qué registrar y cómo ajustar según [CARACTERÍSTICAS DEL GRUPO].'),

  // 👥 Inclusión
  prompt('inclusion-adaptar-actividad', 'Adaptar una actividad existente', 'Inclusión', 'Básico', 96, 'Adapta esta actividad sobre [TEMA] para [GRADO] en [ASIGNATURA] considerando [CARACTERÍSTICAS DEL GRUPO]. Identifica barreras posibles, propone apoyos de bajo costo, opciones de [PRODUCTO A GENERAR] y mantiene [INTENCIÓN PEDAGÓGICA] original.'),
  prompt('inclusion-diferenciar', 'Diferenciar la enseñanza en tres niveles', 'Inclusión', 'Intermedio', 91, 'Diferencia la enseñanza de [TEMA] para [GRADO] en [ASIGNATURA] en tres niveles de apoyo, pensando en [CARACTERÍSTICAS DEL GRUPO]. Define opciones de [PRODUCTO A GENERAR], [TIEMPO DISPONIBLE] por nivel y un criterio común de logro.'),
  prompt('inclusion-evaluacion-inclusiva', 'Evaluación inclusiva', 'Inclusión', 'Intermedio', 92, 'Crea una evaluación inclusiva para [PRODUCTO A GENERAR] sobre [TEMA], adecuada a [CARACTERÍSTICAS DEL GRUPO]. Incluye criterios comunes, opciones de respuesta, apoyos permitidos y retroalimentación respetuosa alineada con [INTENCIÓN PEDAGÓGICA].'),
  prompt('inclusion-reducir-barreras', 'Reducir barreras de una planeación', 'Inclusión', 'Básico', 94, 'Revisa la planeación de [PRODUCTO A GENERAR] sobre [TEMA] para [GRADO]. Detecta barreras de lectura, lenguaje, ritmo y participación para [CARACTERÍSTICAS DEL GRUPO], y propón ajustes de bajo costo sin bajar la meta de [INTENCIÓN PEDAGÓGICA].'),
  prompt('inclusion-comunicacion-familias', 'Comunicación accesible a familias', 'Inclusión', 'Básico', 90, 'Redacta una comunicación para familias de [GRADO] sobre [TEMA]. Usa lenguaje claro y respetuoso, considera [CARACTERÍSTICAS DEL GRUPO], indica [PRODUCTO A GENERAR] esperado del estudiante y cuida los datos personales.'),
  prompt('inclusion-material-adaptado', 'Material didáctico adaptado', 'Inclusión', 'Básico', 93, 'Adapta este material sobre [TEMA] para [GRADO] en [ASIGNATURA] considerando [CARACTERÍSTICAS DEL GRUPO]. Simplifica lenguaje, ajusta formato y conserva [INTENCIÓN PEDAGÓGICA] con [PRODUCTO A GENERAR] accesible.'),
  prompt('inclusion-multinivel', 'Actividad multinivel', 'Inclusión', 'Intermedio', 92, 'Diseña una actividad multinivel sobre [TEMA] para [GRADO] en [ASIGNATURA]. Define tres niveles de reto, [PRODUCTO A GENERAR] por nivel y un criterio común de logro para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('inclusion-apoyo-visual', 'Apoyo visual y organizador gráfico', 'Inclusión', 'Básico', 91, 'Crea un apoyo visual u organizador gráfico sobre [TEMA] para [GRADO] en [ASIGNATURA]. Usa [INTENCIÓN PEDAGÓGICA] como guía y ajusta el diseño a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('inclusion-texto-simplificado', 'Texto simplificado o lectura fácil', 'Inclusión', 'Básico', 90, 'Convierte esta fuente sobre [TEMA] en un texto de lectura fácil para [GRADO] en [ASIGNATURA]. Ajusta vocabulario, oraciones cortas y [PRODUCTO A GENERAR] final para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('inclusion-dua', 'Estrategias de Diseño Universal para el Aprendizaje', 'Inclusión', 'Avanzado', 89, 'Aplica principios de Diseño Universal para el Aprendizaje a esta actividad sobre [TEMA] para [GRADO] en [ASIGNATURA]. Propón opciones de acceso, participación y [PRODUCTO A GENERAR] para [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('inclusion-plan-apoyo-individual', 'Plan de apoyo individual', 'Inclusión', 'Intermedio', 88, 'Diseña un plan de apoyo individual sobre [TEMA] para un estudiante de [GRADO] con [CARACTERÍSTICAS DEL GRUPO]. Define [INTENCIÓN PEDAGÓGICA], ajustes razonables y [PRODUCTO A GENERAR] de seguimiento.'),
  prompt('inclusion-glosario-visual', 'Glosario visual de vocabulario', 'Inclusión', 'Básico', 87, 'Crea un glosario visual sobre [TEMA] para [GRADO] en [ASIGNATURA]. Incluye término, definición simple, imagen sugerida y ejemplo cercano a [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('inclusion-actividad-multisensorial', 'Actividad multisensorial', 'Inclusión', 'Intermedio', 86, 'Diseña una actividad multisensorial sobre [TEMA] para [GRADO] en [ASIGNATURA]. Integra estímulos visuales, auditivos y manipulables, con [INTENCIÓN PEDAGÓGICA] y [PRODUCTO A GENERAR] final.'),
  prompt('inclusion-ajuste-razonable', 'Ajuste razonable de un producto de evaluación', 'Inclusión', 'Intermedio', 90, 'Propón un ajuste razonable para que un estudiante con [CARACTERÍSTICAS DEL GRUPO] pueda demostrar [PRODUCTO A GENERAR] sobre [TEMA] sin perder la meta de [INTENCIÓN PEDAGÓGICA].'),
  prompt('inclusion-seguimiento-nee', 'Ficha de seguimiento de estudiante con NEE', 'Inclusión', 'Intermedio', 85, 'Crea una ficha de seguimiento para un estudiante de [GRADO] con [CARACTERÍSTICAS DEL GRUPO] sobre [TEMA]. Incluye avances, apoyos usados, [PRODUCTO A GENERAR] y próxima acción.'),
  prompt('inclusion-comunicacion-aumentativa', 'Apoyos de comunicación aumentativa', 'Inclusión', 'Avanzado', 84, 'Sugiere apoyos de comunicación aumentativa para una actividad sobre [TEMA] con [GRADO] en [ASIGNATURA], pensando en [CARACTERÍSTICAS DEL GRUPO]. Incluye [PRODUCTO A GENERAR] con pictogramas o señales simples.'),

  // 🏫 Gestión Escolar
  prompt('gestion-minuta', 'Minuta de reunión colegiada', 'Gestión Escolar', 'Básico', 91, 'Convierte estas notas de una reunión sobre [TEMA] en una minuta clara. Incluye acuerdos, responsables, fechas, [PRODUCTO A GENERAR] como resultado y una lista de seguimiento sin datos personales innecesarios.'),
  prompt('gestion-oficio', 'Oficio o aviso escolar', 'Gestión Escolar', 'Básico', 89, 'Redacta un oficio escolar sobre [TEMA] pensando en [CARACTERÍSTICAS DEL GRUPO] al que va dirigido. Incluye asunto, contexto, solicitud, fecha, responsables, tono institucional y una versión breve como [PRODUCTO A GENERAR].'),
  prompt('gestion-reporte-avance', 'Reporte de avance de grupo', 'Gestión Escolar', 'Intermedio', 90, 'Crea un reporte de avance para [GRADO] sobre [TEMA]. Incluye logros, áreas de mejora, [PRODUCTO A GENERAR] como evidencia, una recomendación concreta y omite datos sensibles innecesarios.'),
  prompt('gestion-pemc', 'Organización para PEMC', 'Gestión Escolar', 'Avanzado', 89, 'Con base en mis fuentes escolares permitidas, organiza información para el PEMC sobre [TEMA]. Incluye diagnóstico breve, objetivo, acciones, responsables, [PRODUCTO A GENERAR] como evidencia y un calendario en [TIEMPO DISPONIBLE].'),
  prompt('gestion-plan-mejora', 'Plan de mejora de bajo costo', 'Gestión Escolar', 'Intermedio', 90, 'Crea un plan de mejora para [TEMA] en [GRADO] o en la escuela. Incluye causa probable, acciones de bajo costo, responsables, [PRODUCTO A GENERAR] como evidencia y revisión en [TIEMPO DISPONIBLE].'),
  prompt('gestion-organizacion-documental', 'Organización documental del notebook', 'Gestión Escolar', 'Básico', 87, 'Ayúdame a organizar los documentos de este notebook sobre [TEMA] para facilitar [PRODUCTO A GENERAR]. Sugiere cómo nombrar fuentes, qué conservar y qué archivar, pensando en [CARACTERÍSTICAS DEL GRUPO] de docentes que lo consultarán.'),
  prompt('gestion-aviso-familias', 'Aviso o circular para familias', 'Gestión Escolar', 'Básico', 89, 'Redacta un aviso escolar sobre [TEMA] para las familias de [GRADO]. Incluye fecha, acción solicitada, tono claro y una versión breve como [PRODUCTO A GENERAR].'),
  prompt('gestion-convocatoria', 'Convocatoria escolar', 'Gestión Escolar', 'Básico', 87, 'Redacta una convocatoria sobre [TEMA] dirigida a [CARACTERÍSTICAS DEL GRUPO]. Incluye requisitos, fechas, [PRODUCTO A GENERAR] esperado y tono institucional.'),
  prompt('gestion-agenda-colegiada', 'Agenda de trabajo colegiado', 'Gestión Escolar', 'Intermedio', 88, 'Prepara una agenda de trabajo colegiado sobre [TEMA]. Define objetivo, [TIEMPO DISPONIBLE], fuentes a revisar y [PRODUCTO A GENERAR] como resultado del encuentro.'),
  prompt('gestion-formato-seguimiento', 'Formato de seguimiento de actividades', 'Gestión Escolar', 'Básico', 86, 'Crea un formato de seguimiento para [TEMA] en [GRADO] o en la escuela. Incluye responsables, fechas, [PRODUCTO A GENERAR] como evidencia y una columna de estatus.'),
  prompt('gestion-comunicado-institucional', 'Comunicado institucional', 'Gestión Escolar', 'Intermedio', 85, 'Redacta un comunicado institucional sobre [TEMA] para [CARACTERÍSTICAS DEL GRUPO]. Incluye contexto, mensaje principal, [PRODUCTO A GENERAR] y tono formal.'),
  prompt('gestion-bitacora', 'Bitácora de gestión escolar', 'Gestión Escolar', 'Intermedio', 84, 'Diseña una bitácora de gestión para dar seguimiento a [TEMA] durante [TIEMPO DISPONIBLE]. Define qué registrar, responsables y [PRODUCTO A GENERAR] como evidencia de cierre.'),

  // 👨‍💼 Liderazgo
  prompt('liderazgo-analisis-documentos', 'Análisis comparativo de documentos', 'Liderazgo', 'Avanzado', 92, 'Compara estas fuentes institucionales sobre [TEMA]: identifica coincidencias, contradicciones e información faltante, y su impacto para [PRODUCTO A GENERAR]. Entrega una recomendación clara para decidir en [TIEMPO DISPONIBLE].'),
  prompt('liderazgo-informe-cte', 'Informe accionable para Consejo Técnico Escolar', 'Liderazgo', 'Avanzado', 95, 'Elabora un informe ejecutivo para Consejo Técnico Escolar sobre [TEMA], con base en las fuentes de este notebook. Incluye hallazgos, implicaciones didácticas, riesgos, [PRODUCTO A GENERAR] como acción de bajo costo y seguimiento en [TIEMPO DISPONIBLE].'),
  prompt('liderazgo-agenda-academia', 'Agenda para reunión académica', 'Liderazgo', 'Intermedio', 88, 'Prepara una agenda para una reunión académica sobre [TEMA]. Define objetivo, [TIEMPO DISPONIBLE], fuentes a revisar, decisiones esperadas y [PRODUCTO A GENERAR] como resultado del encuentro.'),
  prompt('liderazgo-tutor-pedagogico', 'Asesoría pedagógica experta', 'Liderazgo', 'Intermedio', 96, 'Actúa como asesor pedagógico especializado en la Nueva Escuela Mexicana. Revisa [PRODUCTO A GENERAR] sobre [TEMA] para [GRADO], identifica fortalezas, riesgos y mejoras, y entrega una versión corregida lista para pilotear con [CARACTERÍSTICAS DEL GRUPO].'),
  prompt('liderazgo-seguimiento-acuerdos', 'Seguimiento de acuerdos del colectivo', 'Liderazgo', 'Intermedio', 89, 'Con base en minutas y acuerdos permitidos sobre [TEMA], crea una tabla de seguimiento con responsables, fechas y evidencia de [PRODUCTO A GENERAR]. Señala qué acuerdo sigue vigente antes de [TIEMPO DISPONIBLE].'),
  prompt('liderazgo-diagnostico-institucional', 'Diagnóstico institucional breve', 'Liderazgo', 'Avanzado', 91, 'Con base en fuentes institucionales permitidas, crea un diagnóstico breve sobre [TEMA] para la escuela. Incluye hallazgos, [PRODUCTO A GENERAR] como síntesis y una recomendación para [TIEMPO DISPONIBLE].'),
  prompt('liderazgo-plan-acompanamiento', 'Plan de acompañamiento pedagógico', 'Liderazgo', 'Avanzado', 90, 'Diseña un plan de acompañamiento pedagógico sobre [TEMA] para docentes de [ASIGNATURA]. Define [INTENCIÓN PEDAGÓGICA], sesiones, [PRODUCTO A GENERAR] y calendario en [TIEMPO DISPONIBLE].'),
  prompt('liderazgo-reporte-supervision', 'Reporte para supervisión escolar', 'Liderazgo', 'Avanzado', 88, 'Elabora un reporte para supervisión escolar sobre [TEMA], con base en las fuentes de este notebook. Incluye evidencias, [PRODUCTO A GENERAR] y una tabla de seguimiento en [TIEMPO DISPONIBLE].')
];

export const allPrompts = professionalTeacherToolkitPrompts;

export const resources: Resource[] = [
  {
    id: 'notebooklm',
    title: 'NotebookLM',
    category: 'Herramientas de Google',
    description: 'El asistente de IA que trabaja con tus propias fuentes: la herramienta central del taller.',
    url: 'https://notebooklm.google.com/'
  },
  {
    id: 'notebooklm-ayuda',
    title: 'Centro de ayuda de NotebookLM',
    category: 'Herramientas de Google',
    description: 'Referencia oficial para funciones, fuentes, notebooks y opciones de Studio.',
    url: 'https://support.google.com/notebooklm/'
  },
  {
    id: 'notebooklm-fuentes',
    title: 'Fuentes compatibles en NotebookLM',
    category: 'Herramientas de Google',
    description: 'Referencia oficial para revisar tipos de fuentes, sincronización con Drive y límites técnicos antes del taller.',
    url: 'https://support.google.com/notebooklm/answer/16215270'
  },
  {
    id: 'notebooklm-studio-ayuda',
    title: 'Productos de Studio en NotebookLM',
    category: 'Herramientas de Google',
    description: 'Ayuda oficial sobre productos como Audio Overview, Video Overview, cuestionarios, tarjetas, infografías y presentaciones.',
    url: 'https://support.google.com/notebooklm/'
  },
  {
    id: 'workspace',
    title: 'Google Workspace',
    category: 'Herramientas de Google',
    description: 'Docs, Slides, Sheets y Classroom para integrar los productos que generas con NotebookLM.',
    url: 'https://workspace.google.com/'
  },
  {
    id: 'workspace-updates',
    title: 'Google Workspace Updates',
    category: 'Herramientas de Google',
    description: 'Blog oficial de novedades y actualizaciones de Google Workspace.',
    url: 'https://workspaceupdates.googleblog.com/'
  },
  {
    id: 'google-for-education',
    title: 'Google for Education',
    category: 'Herramientas de Google',
    description: 'Programas, capacitación y herramientas de Google pensadas para docentes y escuelas.',
    url: 'https://edu.google.com/'
  },
  {
    id: 'gemini',
    title: 'Gemini',
    category: 'Herramientas de Google',
    description: 'Asistente de IA general de Google, útil para explorar ideas antes de trabajar con tus fuentes en NotebookLM.',
    url: 'https://gemini.google.com/'
  },
  {
    id: 'sep',
    title: 'Secretaría de Educación Pública (SEP)',
    category: 'Marco curricular oficial',
    description: 'Sitio oficial de la SEP: normativa, programas y comunicados de educación básica.',
    url: 'https://www.sep.gob.mx/'
  },
  {
    id: 'conaliteg',
    title: 'CONALITEG',
    category: 'Marco curricular oficial',
    description: 'Comisión Nacional de Libros de Texto Gratuitos: libros oficiales para secundaria.',
    url: 'https://www.conaliteg.sep.gob.mx/'
  },
  {
    id: 'nem-programas',
    title: 'Nueva Escuela Mexicana',
    category: 'Marco curricular oficial',
    description: 'Base para alinear campos formativos, PDA y ejes articuladores del plan de estudios vigente.',
    url: 'https://educacionbasica.sep.gob.mx/'
  },
  {
    id: 'plan-estudio-2022',
    title: 'Plan de Estudio 2022',
    category: 'Marco curricular oficial',
    description: 'Documento oficial de educación básica para consultar enfoque, codiseño, campos formativos y ejes articuladores.',
    url: 'https://educacionbasica.sep.gob.mx/wp-content/uploads/2024/06/Plan-de-Estudio-ISBN-ELECTRONICO.pdf'
  },
  {
    id: 'edubc',
    title: 'EduBC',
    category: 'Marco curricular oficial',
    description: 'Portal educativo oficial con recursos y comunicados para el magisterio.'
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
    type: 'Prompt' as const,
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
