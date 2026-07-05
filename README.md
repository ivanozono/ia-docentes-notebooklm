# IA para Docentes: Acompañante NotebookLM NEM

Aplicación web interactiva para el taller profesional **"IA para Docentes: De buscar respuestas a crear experiencias de aprendizaje con NotebookLM"**, escrita en español mexicano y alineada con el vocabulario de la Nueva Escuela Mexicana.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Características

- React + Vite + TypeScript
- Material UI, Framer Motion y React Router
- PWA lista para uso sin conexión en la versión de producción
- Modo claro/oscuro
- Modo presentación con tecla `F`
- Paleta global con `Ctrl/Cmd + K`
- Búsqueda global de lecciones, consignas para IA, recursos y actividades
- Progreso, marcadores y favoritos en `localStorage`
- Contenido centralizado en `src/data/course.ts`

## Despliegue

El proyecto usa `base: './'` en `vite.config.ts`, por lo que el build está preparado para GitHub Pages y hosting estático.
