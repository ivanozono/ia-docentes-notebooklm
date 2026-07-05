const courseImage = (fileName: string) => `${import.meta.env.BASE_URL}images/course-optimized/${fileName}`;

export const courseVisuals = {
  portada: {
    src: courseImage('PortadaPrincipal.jpg'),
    alt: 'Portada del taller IA para Docentes con estudiantes y docente trabajando con NotebookLM.'
  },
  cicloDocente: {
    src: courseImage('DiagramaFlujoCicloDocente.jpg'),
    alt: 'Diagrama del ciclo de trabajo docente apoyado con inteligencia artificial.'
  }
};

export const moduleVisuals: Record<string, { src: string; alt: string }> = {
  'modulo-1': {
    src: courseImage('Modulo1AsistentePedagogicoInteligente.jpg'),
    alt: 'Módulo 1: construcción de un asistente pedagógico inteligente con NotebookLM.'
  },
  'modulo-2': {
    src: courseImage('Modulo2DisenandoExperienciasAprendizaje.jpg'),
    alt: 'Módulo 2: diseño de experiencias de aprendizaje con estudiantes de secundaria.'
  },
  'modulo-3': {
    src: courseImage('Modulo3EcosistemaInteligenteDocente.jpg'),
    alt: 'Módulo 3: NotebookLM en el trabajo diario, colegiado y escolar del docente.'
  },
  'modulo-4': {
    src: courseImage('Modulo4DocenteFuturo.jpg'),
    alt: 'Módulo 4: docente del futuro y uso responsable de inteligencia artificial.'
  }
};

export const lessonVisuals: Record<string, { src: string; alt: string; caption: string }> = {
  'nueva-generacion-ia': {
    src: courseImage('DiagramaMapaDocenteAumentado.jpg'),
    alt: 'Mapa del docente aumentado con inteligencia artificial.',
    caption: 'Mapa del docente aumentado: tareas, decisiones y apoyos donde la IA puede ampliar la práctica docente.'
  },
  'notebook-perfecto': {
    src: courseImage('DiagramaArquitecturaNotebook.jpg'),
    alt: 'Arquitectura de un notebook pedagógico bien organizado.',
    caption: 'Arquitectura del cuaderno de NotebookLM: fuentes, preguntas, productos y criterios de revisión docente.'
  }
};

export const keyedVisuals: Record<string, { src: string; alt: string }> = {
  'gemini-vs-notebooklm': {
    src: courseImage('DiagramaComparativaNotebookLMvsGemini.jpg'),
    alt: 'Diagrama comparativo entre Gemini y NotebookLM para docentes.'
  },
  'docente-aumentado': {
    src: courseImage('DiagramaMapaDocenteAumentado.jpg'),
    alt: 'Mapa del docente aumentado con inteligencia artificial.'
  },
  'arquitectura-notebook': {
    src: courseImage('DiagramaArquitecturaNotebook.jpg'),
    alt: 'Arquitectura de un cuaderno de NotebookLM bien organizado.'
  },
  'ciclo-docente': {
    src: courseImage('DiagramaFlujoCicloDocente.jpg'),
    alt: 'Ciclo de trabajo docente con apoyo de inteligencia artificial.'
  },
  'reto-actual-docente': {
    src: courseImage('ilustracionRetoActualDocente.jpg'),
    alt: 'Ilustración del reto actual del docente y la jornada invisible.'
  },
  'gestion-conocimiento': {
    src: courseImage('ilustracionGestionConocimiento.jpg'),
    alt: 'Ilustración del paso del acceso a la información a la gestión del conocimiento.'
  },
  'cambia-ia': {
    src: courseImage('ilustracionCambiaIA.jpg'),
    alt: 'Ilustración sobre qué cambia con la inteligencia artificial en la docencia.'
  },
  'elegir-herramienta': {
    src: courseImage('ilustracionElegirHerramienta.jpg'),
    alt: 'Ilustración para elegir la herramienta de IA adecuada según la necesidad docente.'
  },
  'docente-notebooklm-fuentes': {
    src: courseImage('ilustracionDocenteNotebookLMFuentes.jpg'),
    alt: 'Ilustración de docente, NotebookLM y fuentes para formular la pregunta correcta.'
  },
  'regla-oro': {
    src: courseImage('ilustracionReglaOro.jpg'),
    alt: 'Ilustración de la regla de oro: un Notebook equivale a un propósito.'
  },
  'fuentes-importan': {
    src: courseImage('ilustracionFuentesImportan.jpg'),
    alt: 'Ilustración de las fuentes que importan: currículo, aula, evaluación y evidencias.'
  },
  'distintas-fuentes': {
    src: courseImage('ilustracionDistintasFuentes.jpg'),
    alt: 'Ilustración de los tipos de fuentes que se pueden agregar a un Notebook.'
  },
  'prompt-contextualizado': {
    src: courseImage('ilustracionPromptcontextualizado.jpg'),
    alt: 'Ilustración que compara un prompt genérico con un prompt contextualizado para NotebookLM.'
  },
  'plantilla-prompt': {
    src: courseImage('ilustracionPlantillaPrompt.jpg'),
    alt: 'Ilustración de la plantilla de prompt profesional con variables para docentes.'
  },
  'studio-productos': {
    src: courseImage('ilustracionStudio.jpg'),
    alt: 'Ilustración de productos que NotebookLM Studio puede crear desde un mismo notebook.'
  },
  'chat-productos-docentes': {
    src: courseImage('ilustracionChatProductosA.jpg'),
    alt: 'Ilustración de productos personalizados que el chat de NotebookLM puede crear para la función docente.'
  },
  'actividades-posibilidades': {
    src: courseImage('ilustracionActividadesPosibilidades.jpg'),
    alt: 'Ilustración de tipos de actividades que NotebookLM puede crear a partir de un tema.'
  },
  'una-fuente-multiples-actividades': {
    src: courseImage('ilustracionUnaFuenteMultiplesActividades.jpg'),
    alt: 'Ilustración de una misma fuente convertida en múltiples experiencias de aprendizaje con NotebookLM.'
  },
  'planeacion-transformacion': {
    src: courseImage('ilustracionPlaneacionTransformacion.jpg'),
    alt: 'Ilustración de una misma planeación transformada en distintos documentos docentes con NotebookLM.'
  },
  'planeaciones-tipos': {
    src: courseImage('ilustracionPlaneacionesTipos.jpg'),
    alt: 'Ilustración del catálogo de planeaciones que NotebookLM puede crear desde fuentes docentes.'
  },
  'evaluacion-reto': {
    src: courseImage('ilustracionEvaluarReto.jpg'),
    alt: 'Ilustración del reto docente para elegir el instrumento de evaluación adecuado.'
  },
  'evaluacion-catalogo': {
    src: courseImage('ilustracionEvaluacionCatalogo.jpg'),
    alt: 'Ilustración del catálogo de instrumentos de evaluación que NotebookLM puede crear.'
  },
  'notebooklm-logros': {
    src: courseImage('ilustracionNotebookLMLogros.jpg'),
    alt: 'Ilustración de un docente satisfecho con todo lo que ya puede utilizar NotebookLM para crear.'
  },
  'catalogo-profesional': {
    src: courseImage('ilustracionAsistenteAreaTrabajo.jpg'),
    alt: 'Ilustración del catálogo profesional de NotebookLM organizado por área de trabajo docente.'
  },
  'flujo-trabajo-docente': {
    src: courseImage('ilustracionFlujoTrabajo.jpg'),
    alt: 'Ilustración del flujo de trabajo docente que conecta notebooks, Google Workspace y tips de productividad.'
  },
  'notebook-colegiado': {
    src: courseImage('ilustracionNotebookColegiado.jpg'),
    alt: 'Ilustración de NotebookLM como memoria institucional del colectivo docente.'
  }
};
