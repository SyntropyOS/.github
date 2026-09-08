# Syntropy AI — Organización

Soluciones para ecosistemas de LLMs y agentes de IA. Syntropy no es un LLM: construye la infraestructura alrededor — coherente, estable — porque un LLM sin buena infraestructura es caos.

Creador de holones: todos en su ámbito, partes de un todo mayor. VantaDB (memoria local) es el primero. Marco oficial: **holón** (Koestler, 1967).

## Estructura

| Ruta | Qué es |
|---|---|
| `syntropyos.md` | Checklist vivo: decisiones, pendientes y verificación del perfil de la org |
| `brand/brand-sheet.html` | Tablero de marca V3 (referencia visual vigente) |
| `brand/specimens/` | Planchas y pruebas previas (wordmarks, avatares, capturas) |
| `brand/exports/` | PNG/GIF finales listos para subir (avatar 500px, hero, banners) |
| `docs/brand-platform.md` | Plataforma de marca: concepto, tokens, voz, reglas |
| `remotion/` | Proyecto Remotion propio para GIFs y PNGs de empresa/producto |
| `.opencode/skills/` | Skills de diseño, animación, video, frontend y visual |

## Reglas

- Todo lo de Syntropy vive aquí. El repo VantaDB (`ness-e/Vantadb`) es otro holón: se lee, no se modifica desde este proyecto.
- Paleta: fondo `#F0EEE6`, tinta `#141413`, acento Sage deep `#4A6B53`. Vetados: terracota `#D97757`, naranja VantaDB `#FF5500`, degradados, sombras, neón.
- Wordmark `SYNTROPY` (Space Grotesk 700, caps, tracking 0.14em, O-anillo + punto sage dentro). Avatar: monograma S ink/paper.

## Flujo de producción de imágenes

1. Diseñar en `brand/` (tableros HTML → captura).
2. Animar en `remotion/` (`npm run render:banner`, luego GIF con ffmpeg).
3. Exportar a `brand/exports/` y subir a GitHub desde la UI o `gh`.
