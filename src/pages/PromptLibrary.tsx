import { useMemo, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Grid,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  alpha
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Page from '../components/common/Page';
import PromptCard from '../components/common/PromptCard';
import { allPrompts } from '../data/course';
import type { Difficulty } from '../types';

const categoryGuide = [
  {
    id: 'Planeación',
    label: '1. Planeación',
    description: 'Documentos para ordenar clases, semanas, secuencias y proyectos.'
  },
  {
    id: 'Actividades de aprendizaje',
    label: '2. Actividades de aprendizaje',
    description: 'Productos para trabajar en clase: individual, equipos, debate, casos, experimentos y retos.'
  },
  {
    id: 'Evaluación',
    label: '3. Evaluación',
    description: 'Instrumentos, preguntas y retroalimentación para revisar avances.'
  },
  {
    id: 'Materiales didácticos',
    label: '4. Materiales didácticos',
    description: 'Presentaciones, guías, resúmenes, tarjetas, infografías, podcast y Audio Overview.'
  },
  {
    id: 'Educación inclusiva',
    label: '5. Educación inclusiva',
    description: 'Ajustes para reducir barreras y ofrecer opciones de participación.'
  },
  {
    id: 'Nueva Escuela Mexicana',
    label: '6. Nueva Escuela Mexicana',
    description: 'Plantillas para conectar PDA, campos formativos, ejes y CONALITEG.'
  },
  {
    id: 'Comunicación',
    label: '7. Comunicación',
    description: 'Mensajes para familias, reportes, avisos y oficios escolares.'
  },
  {
    id: 'Gestión escolar',
    label: '8. Gestión escolar',
    description: 'PEMC, minutas, reuniones académicas y planes de mejora.'
  },
  {
    id: 'Productividad con NotebookLM',
    label: '9. Productividad con NotebookLM',
    description: 'Resumir, comparar, analizar evidencias, detectar inconsistencias y generar preguntas.'
  },
  {
    id: 'Studio de NotebookLM',
    label: '10. Studio de NotebookLM',
    description: 'Prompts para elegir, revisar y usar productos creados con Studio.'
  },
  {
    id: 'Chat docente de NotebookLM',
    label: '11. Chat docente de NotebookLM',
    description: 'Prompts flexibles para crear productos personalizados para la función docente.'
  }
];

const categoryLabel = (category: string) => categoryGuide.find((item) => item.id === category)?.label ?? category;

const variableGuide = [
  {
    variable: '[INTENCION PEDAGOGICA]',
    title: '1. Intención pedagógica',
    helper: 'Elige una o varias según lo que quieres que logren los estudiantes.',
    selectable: true,
    options: [
      { label: 'Comprender un concepto', description: 'Cuando el grupo necesita entender una idea central antes de aplicarla.' },
      { label: 'Aprender contenido nuevo', description: 'Para introducir un tema, vocabulario o procedimiento por primera vez.' },
      { label: 'Profundizar la comprensión', description: 'Cuando ya conocen el tema y necesitan ir más allá de lo básico.' },
      { label: 'Analizar información', description: 'Para leer datos, fuentes, casos, textos o evidencias con más cuidado.' },
      { label: 'Comparar ideas', description: 'Cuando deben encontrar semejanzas, diferencias, ventajas o límites.' },
      { label: 'Aplicar conocimientos', description: 'Para usar lo aprendido en ejercicios, situaciones o productos concretos.' },
      { label: 'Resolver un problema real', description: 'Cuando el tema se conecta con una necesidad del aula, escuela o comunidad.' },
      { label: 'Desarrollar pensamiento crítico', description: 'Para cuestionar, justificar, distinguir fuentes y tomar postura.' },
      { label: 'Generar hipótesis', description: 'Para ciencias, investigación o problemas donde deben proponer explicaciones posibles.' },
      { label: 'Argumentar una postura', description: 'Para debates, textos argumentativos, discusiones y toma de decisiones.' },
      { label: 'Investigar', description: 'Cuando necesitan formular preguntas, buscar información y organizar hallazgos.' },
      { label: 'Trabajar colaborativamente', description: 'Para actividades en equipo con roles, acuerdos y producto compartido.' },
      { label: 'Comunicar ideas', description: 'Cuando el producto principal es explicar, presentar o compartir información.' },
      { label: 'Presentar hallazgos', description: 'Para exposiciones, reportes, carteles, infografías o socialización de proyectos.' },
      { label: 'Crear un producto', description: 'Cuando el aprendizaje se demuestra con algo elaborado por el estudiante.' },
      { label: 'Reflexionar', description: 'Para cerrar una actividad, valorar avances o reconocer aprendizajes.' },
      { label: 'Visualizar un proceso', description: 'Para mapas, diagramas, líneas del tiempo, esquemas o modelos.' },
      { label: 'Evaluar aprendizajes', description: 'Cuando quieres comprobar avances con criterios claros.' },
      { label: 'Autoevaluarse', description: 'Para que cada estudiante revise su propio desempeño o producto.' },
      { label: 'Coevaluar', description: 'Para que estudiantes revisen el trabajo de sus pares con respeto y criterios.' },
      { label: 'Adaptar para inclusión', description: 'Cuando necesitas opciones de acceso, producto, tiempo o participación.' },
      { label: 'Reducir barreras de aprendizaje', description: 'Para ajustar una actividad que puede excluir por lectura, ritmo, lenguaje o recursos.' },
      { label: 'Fortalecer la comunicación', description: 'Para mejorar instrucciones, mensajes, reportes o diálogo con familias.' },
      { label: 'Promover creatividad', description: 'Cuando buscas varias soluciones, diseños, ideas o productos originales.' },
      { label: 'Promover autonomía', description: 'Para que el estudiante tome decisiones, organice pasos y avance con guía.' },
      { label: 'Conectar con la vida cotidiana', description: 'Cuando el aprendizaje debe relacionarse con experiencias cercanas del grupo.' }
    ]
  },
  {
    variable: '[TIPO DE EVALUACION]',
    title: '2. Tipo de evaluación',
    helper: 'Elige según el momento y el uso de la información.',
    options: [
      { label: 'Diagnóstica', description: 'Antes de enseñar; muestra saberes previos, dudas y punto de partida.' },
      { label: 'Formativa', description: 'Durante el proceso; ayuda a ajustar la siguiente clase o actividad.' },
      { label: 'Sumativa', description: 'Al cierre; permite valorar un producto, desempeño o logro final.' },
      { label: 'Autoevaluación', description: 'El estudiante revisa su propio avance con criterios claros.' },
      { label: 'Coevaluación', description: 'Los estudiantes revisan productos de sus pares con respeto y guía.' },
      { label: 'Heteroevaluación docente', description: 'El docente valora el desempeño con criterios observables.' },
      { label: 'Evaluación de desempeño', description: 'Sirve para productos, presentaciones, proyectos, experimentos o demostraciones.' },
      { label: 'Evaluación oral', description: 'Para exposiciones, debates, argumentación, lectura en voz alta o explicación verbal.' },
      { label: 'Evaluación escrita', description: 'Para respuestas, reportes, exámenes, ensayos, ejercicios o guías.' },
      { label: 'Observación en clase', description: 'Para participación, colaboración, procedimientos y actitudes durante la actividad.' },
      { label: 'Portafolio', description: 'Para reunir evidencias de varias sesiones y ver progreso.' }
    ]
  },
  {
    variable: '[PRODUCTO ESPERADO]',
    title: '3. Producto esperado',
    helper: 'Elige qué evidencia dejará el estudiante al terminar.',
    options: [
      { label: 'Respuesta breve', description: 'Útil para salida rápida, diagnóstico o comprobación de comprensión.' },
      { label: 'Ticket de salida', description: 'Una evidencia de cierre para saber qué entendieron y qué falta.' },
      { label: 'Organizador gráfico', description: 'Para ordenar conceptos, causas, pasos, relaciones o clasificaciones.' },
      { label: 'Cuadro comparativo', description: 'Para contrastar fuentes, ideas, personajes, procedimientos o soluciones.' },
      { label: 'Mapa mental o conceptual', description: 'Para visualizar relaciones entre conceptos.' },
      { label: 'Infografía', description: 'Para sintetizar información con lenguaje visual y texto breve.' },
      { label: 'Presentación', description: 'Para comunicar hallazgos, explicar un tema o socializar un proyecto.' },
      { label: 'Cartel o mural', description: 'Para comunicar una idea a la escuela o comunidad.' },
      { label: 'Reporte', description: 'Para organizar hallazgos, evidencias, análisis o conclusiones.' },
      { label: 'Guía resuelta', description: 'Para práctica, repaso o estudio autónomo.' },
      { label: 'Solución de problema', description: 'Para matemáticas, ciencias, casos o retos comunitarios.' },
      { label: 'Registro de experimento', description: 'Para hipótesis, procedimiento, observaciones, datos y conclusión.' },
      { label: 'Argumento o postura', description: 'Para debate, texto argumentativo o análisis crítico.' },
      { label: 'Audio o podcast', description: 'Para explicar, entrevistar, narrar o compartir hallazgos oralmente.' },
      { label: 'Prototipo o maqueta', description: 'Para retos STEAM, diseño, modelos o soluciones físicas.' },
      { label: 'Reflexión personal', description: 'Para metacognición, autoevaluación o cierre de aprendizaje.' },
      { label: 'Portafolio de evidencias', description: 'Para reunir varios productos y observar progreso.' },
      { label: 'Proyecto comunitario', description: 'Para una solución, campaña, investigación o producto con sentido social.' }
    ]
  },
  {
    variable: '[TIPO DE ACTIVIDAD]',
    title: '4. Tipo de actividad',
    helper: 'Elige el formato de trabajo que más conviene al tiempo, grupo y producto.',
    options: [
      { label: 'Actividad individual', description: 'Cuando necesitas comprobar comprensión de cada estudiante.' },
      { label: 'Actividad colaborativa', description: 'Para resolver, crear o discutir con roles y responsabilidad compartida.' },
      { label: 'Aprendizaje basado en problemas', description: 'Cuando el grupo debe analizar una situación y proponer solución.' },
      { label: 'Proyecto', description: 'Para trabajar varios pasos y producir algo útil o comunicable.' },
      { label: 'Debate', description: 'Para argumentar posturas, escuchar razones y construir criterio.' },
      { label: 'Estudio de caso', description: 'Para analizar una situación concreta con datos, dilemas o decisiones.' },
      { label: 'Investigación guiada', description: 'Para buscar, seleccionar, organizar y presentar información.' },
      { label: 'Experimento', description: 'Para observar, medir, probar hipótesis y registrar datos.' },
      { label: 'Reto gamificado', description: 'Para repasar o aplicar contenido mediante misión, reglas y evidencia.' },
      { label: 'Estaciones de aprendizaje', description: 'Para rotar por tareas breves con productos parciales.' },
      { label: 'Aula invertida', description: 'Para revisar algo antes y usar la clase en práctica o discusión.' },
      { label: 'Reto STEAM', description: 'Para diseñar, construir, probar y mejorar una solución.' },
      { label: 'Taller práctico', description: 'Para practicar paso a paso con acompañamiento.' },
      { label: 'Discusión guiada', description: 'Para dialogar con preguntas, evidencia y cierre claro.' },
      { label: 'Rompehielo', description: 'Para activar al grupo, recuperar saberes previos o iniciar tema.' },
      { label: 'Actividad de refuerzo', description: 'Para practicar lo que aún no quedó claro.' },
      { label: 'Ticket de salida', description: 'Para cerrar la clase con una evidencia breve.' }
    ]
  },
  {
    variable: '[OBJETIVO DE APRENDIZAJE]',
    title: '5. Objetivo de aprendizaje',
    helper: 'Usa un verbo claro que diga qué hará el estudiante con el contenido.',
    options: [
      { label: 'Reconocer', description: 'Identificar conceptos, elementos, datos, partes o ejemplos.' },
      { label: 'Comprender', description: 'Explicar con sus palabras una idea, proceso o relación.' },
      { label: 'Describir', description: 'Nombrar características, pasos, componentes o situaciones.' },
      { label: 'Explicar', description: 'Dar razones, causas, consecuencias o funcionamiento.' },
      { label: 'Analizar', description: 'Separar partes, encontrar relaciones y justificar observaciones.' },
      { label: 'Comparar', description: 'Encontrar semejanzas, diferencias, ventajas o límites.' },
      { label: 'Interpretar', description: 'Dar sentido a textos, datos, gráficas, casos o evidencias.' },
      { label: 'Aplicar', description: 'Usar el conocimiento en una tarea, problema o situación.' },
      { label: 'Resolver', description: 'Encontrar una solución con procedimiento, criterio o estrategia.' },
      { label: 'Argumentar', description: 'Sostener una postura con razones y evidencia.' },
      { label: 'Investigar', description: 'Formular preguntas, buscar información y organizar hallazgos.' },
      { label: 'Crear', description: 'Elaborar un producto, propuesta, diseño, texto o solución.' },
      { label: 'Comunicar', description: 'Presentar ideas de forma clara para una audiencia.' },
      { label: 'Evaluar', description: 'Valorar opciones, productos o fuentes con criterios.' },
      { label: 'Reflexionar', description: 'Reconocer aprendizajes, dificultades y próximos pasos.' },
      { label: 'Colaborar', description: 'Participar con roles, acuerdos y responsabilidad compartida.' },
      { label: 'Relacionar con el contexto', description: 'Conectar el contenido con la escuela, comunidad o vida cotidiana.' }
    ]
  },
  {
    variable: '[BARRERAS EDUCATIVAS]',
    title: '6. Barreras educativas',
    helper: 'Elige las barreras que podrían impedir participar, comprender o demostrar aprendizaje.',
    options: [
      { label: 'Lectura extensa o compleja', description: 'Cuando el texto es largo, técnico o difícil de procesar.' },
      { label: 'Vocabulario desconocido', description: 'Cuando hay términos nuevos, abstractos o propios de la asignatura.' },
      { label: 'Ritmo de trabajo desigual', description: 'Cuando algunos terminan rápido y otros necesitan más tiempo.' },
      { label: 'Atención sostenida', description: 'Cuando la actividad exige concentración larga sin pausas o apoyos.' },
      { label: 'Acceso digital limitado', description: 'Cuando no todos tienen dispositivo, internet o cuenta disponible.' },
      { label: 'Materiales insuficientes', description: 'Cuando la actividad requiere recursos que no todos tienen.' },
      { label: 'Participación oral', description: 'Cuando hablar frente al grupo puede bloquear o excluir.' },
      { label: 'Trabajo en equipo', description: 'Cuando hay dificultad para organizar roles, acuerdos o corresponsabilidad.' },
      { label: 'Escritura extensa', description: 'Cuando el producto escrito puede ser una barrera para mostrar lo aprendido.' },
      { label: 'Necesidad visual', description: 'Cuando se requieren apoyos de tamaño, contraste, descripción o formato.' },
      { label: 'Necesidad auditiva', description: 'Cuando se requieren apoyos escritos, subtítulos o instrucciones visibles.' },
      { label: 'Asistencia irregular', description: 'Cuando estudiantes pierden continuidad por faltas o llegadas tardías.' },
      { label: 'Seguridad emocional', description: 'Cuando la actividad puede exponer, ridiculizar o generar ansiedad.' },
      { label: 'Contexto familiar o comunitario', description: 'Cuando tareas fuera de clase dependen de condiciones no garantizadas.' },
      { label: 'Lengua o cultura', description: 'Cuando ejemplos, vocabulario o referencias no conectan con el estudiante.' },
      { label: 'Conocimientos previos insuficientes', description: 'Cuando faltan bases para iniciar la actividad propuesta.' },
      { label: 'Evaluación rígida', description: 'Cuando solo hay una forma de demostrar aprendizaje y eso excluye alternativas.' }
    ]
  }
];

export default function PromptLibrary() {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty | 'Todos'>('Todos');
  const categories = categoryGuide.filter((item) => allPrompts.some((prompt) => prompt.category === item.id));
  const [category, setCategory] = useState('Todos');
  const [selectedIntentions, setSelectedIntentions] = useState<string[]>([]);

  const toggleIntention = (intention: string) => {
    setSelectedIntentions((current) =>
      current.includes(intention) ? current.filter((item) => item !== intention) : [...current, intention]
    );
  };

  const filtered = useMemo(
    () =>
      allPrompts.filter((prompt) => {
        const matchesText = `${prompt.title} ${prompt.category} ${prompt.text}`.toLowerCase().includes(query.toLowerCase());
        const matchesDifficulty = difficulty === 'Todos' || prompt.difficulty === difficulty;
        const matchesCategory = category === 'Todos' || prompt.category === category;
        return matchesText && matchesDifficulty && matchesCategory;
      }),
    [category, difficulty, query]
  );

  const groupedPrompts = categories
    .map((item) => ({
      ...item,
      prompts: filtered.filter((prompt) => prompt.category === item.id)
    }))
    .filter((item) => item.prompts.length > 0);

  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Kit profesional docente
          </Typography>
          <Typography variant="h2">Kit profesional docente</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 820 }}>
            Plantillas listas para crear productos con NotebookLM: planeaciones, actividades, evaluaciones, materiales, comunicación escolar y análisis de fuentes.
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: (theme) => alpha(theme.palette.warning.main, theme.palette.mode === 'dark' ? 0.16 : 0.1)
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h5">Antes de usar las plantillas</Typography>
            <Grid container spacing={1.5}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2">Prompt</Typography>
                <Typography variant="body2" color="text.secondary">
                  Es la instrucción que escribes en NotebookLM. Aquí usamos plantillas de prompt: prompts reutilizables con variables editables.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2">Nombre del taller</Typography>
                <Typography variant="body2" color="text.secondary">
                  “Plantilla de prompt” no es una función oficial de NotebookLM; es una forma práctica de copiar, adaptar y reutilizar instrucciones.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2">Límite real</Typography>
                <Typography variant="body2" color="text.secondary">
                  NotebookLM puede omitir, interpretar mal o redactar algo convincente pero incompleto. Revisa fuentes, datos personales, sesgos y pertinencia antes de compartir.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Stack spacing={1.5}>
          <Box>
            <Typography variant="h5">Guía de variables editables</Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5, maxWidth: 860 }}>
              Usa estas listas para completar los campos entre corchetes de cada plantilla. La primera sección permite seleccionar varias intenciones y copiarlas en [INTENCION PEDAGOGICA].
            </Typography>
          </Box>

          {selectedIntentions.length > 0 && (
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'primary.main',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08)
              }}
            >
              <Typography variant="subtitle2">Usar en [INTENCION PEDAGOGICA]</Typography>
              <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                {selectedIntentions.join(', ')}
              </Typography>
            </Box>
          )}

          {variableGuide.map((group, index) => (
            <Accordion
              key={group.variable}
              defaultExpanded={index === 0}
              disableGutters
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.72),
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                <Box sx={{ width: '100%' }}>
                  <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                    <Typography variant="h6">{group.title}</Typography>
                    <Chip size="small" label={group.variable} color="primary" variant="outlined" />
                    <Chip size="small" label={`${group.options.length} opciones`} />
                  </Stack>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                    {group.helper}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1.5}>
                  {group.options.map((option) => {
                    const selected = selectedIntentions.includes(option.label);

                    return (
                      <Grid item xs={12} sm={6} md={4} key={option.label}>
                        <Box
                          onClick={group.selectable ? () => toggleIntention(option.label) : undefined}
                          role={group.selectable ? 'button' : undefined}
                          tabIndex={group.selectable ? 0 : undefined}
                          sx={{
                            height: '100%',
                            p: 1.5,
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: selected ? 'primary.main' : 'divider',
                            bgcolor: (theme) =>
                              selected ? alpha(theme.palette.primary.main, 0.08) : alpha(theme.palette.background.default, 0.54),
                            cursor: group.selectable ? 'pointer' : 'default'
                          }}
                        >
                          <Stack spacing={0.75}>
                            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                              <Typography variant="subtitle2">{option.label}</Typography>
                              {selected && <Chip size="small" label="Seleccionada" color="primary" />}
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                              {option.description}
                            </Typography>
                          </Stack>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>

        <Stack spacing={2}>
          <TextField label="Buscar producto" value={query} onChange={(event) => setQuery(event.target.value)} />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label={`Todos (${allPrompts.length})`} color={category === 'Todos' ? 'primary' : 'default'} onClick={() => setCategory('Todos')} />
            {categories.map((item) => (
              <Chip
                key={item.id}
                label={`${item.label} (${allPrompts.filter((prompt) => prompt.category === item.id).length})`}
                color={category === item.id ? 'primary' : 'default'}
                onClick={() => setCategory(item.id)}
              />
            ))}
          </Stack>
          <ToggleButtonGroup value={difficulty} exclusive onChange={(_, value) => value && setDifficulty(value)} size="small">
            {['Todos', 'Básico', 'Intermedio', 'Avanzado'].map((item) => (
              <ToggleButton key={item} value={item}>
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="body2" color="text.secondary">
            {filtered.length} plantilla{filtered.length === 1 ? '' : 's'} disponible{filtered.length === 1 ? '' : 's'}
            {category !== 'Todos' ? ` en ${categoryLabel(category)}` : ''}.
          </Typography>

          {groupedPrompts.map((group, index) => (
            <Accordion
              key={group.id}
              defaultExpanded={category !== 'Todos' || index === 0}
              disableGutters
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.72),
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                <Box sx={{ width: '100%' }}>
                  <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                    <Typography variant="h5">{group.label}</Typography>
                    <Chip size="small" label={`${group.prompts.length} plantillas`} color="primary" variant="outlined" />
                  </Stack>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                    {group.description}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {group.prompts.map((prompt) => (
                    <Grid item xs={12} md={6} lg={4} key={prompt.id}>
                      <PromptCard prompt={prompt} />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Page>
  );
}
