# Syntropy — AGENTS.md

Instrucciones para agentes que trabajan en este proyecto (identidad y assets de la org `syntropyos`, display **Syntropy AI**).

## Proyecto

- **Qué es**: soluciones para ecosistemas de LLMs y agentes de IA (no es un LLM ni una capa de datos: la infraestructura alrededor). VantaDB (memoria local) es su primer holón (proyecto separado en `ness-e/Vantadb`).
- **Límite duro**: leer VantaDB está permitido; **modificarlo, commitear en él o reusar sus assets está prohibido**. Naranja `#FF5500`, esfera, Anton/SpaceMono quedan allá.

## Skills

- Fuente: `.opencode/skills/` (copias locales de diseño, animación, video, frontend y visual).
- Orquestador: `vanta-design-orchestrator`. Redacción: `writing-guidelines` (fetch fresco de Vercel) + `copywriting`.
- Web research: `coordinated-web-search` (cascada keyless → Argus → MetaSearchMCP → fallbacks). Citar URLs.

## Brand tokens (ley)

```
paper   #F0EEE6   fondo base (nunca blanco puro)
ink     #141413   texto y fondos oscuros
mid     #B0AEA5   secundario
hair    #E8E6DC   hairlines 1px
sage    #4A6B53   acento único (acciones clave, punto del lockup)
alts    #8AA184 (sobre ink) · #6A9BCC (info) · #3B5B73 (profundo) · #C29B47 (detalle premium)
veto    #D97757 (Anthropic) · #FF5500 (VantaDB) · degradados · sombras · neón
```

Tipos (Google Fonts, OFL): wordmark Space Grotesk 700 caps 0.14em · titulares Instrument Serif · operativo Poppins · técnico IBM Plex Mono · editorial Newsreader.

## Remotion (`remotion/`)

```sh
cd remotion
npm install          # una vez
npm run studio       # vista previa
npm run typecheck    # debe pasar exit 0
npm run render:banner  # PNGs a out/syntropy-frames
```

GIF single-play dual-theme (hairline/ink) con ffmpeg local; receta en `remotion/README.md`. Composiciones: 120f, 30fps, 960×240, loop-safe, GIF-safe (tintas planas, sin blur).

## Convenciones

- Commits en inglés, Conventional Commits. Sin push sin orden explícita.
- Specimens y tableros viven en `brand/`; solo `brand/exports/` sale hacia GitHub.
- Verificar visualmente con screenshots antes de dar algo por terminado.
