# Exports — archivos listos para subir

Solo este directorio sale hacia GitHub. Todo lo demás (`specimens/`, tableros) es trabajo interno.

| Archivo | Uso | Destino |
|---|---|---|
| `avatar-ink.png` | Avatar org, 500×500, S paper sobre ink | Org Settings → Profile picture |
| `avatar-paper.png` | Variante clara 500×500 | Alternativa / docs |
| `hero-paper.png` | Hero lockup V-A 1920×640 claro | README del perfil |
| `hero-ink.png` | Hero lockup V-A 1920×640 oscuro | README del perfil (tema dark) |
| `org-syntropy.gif` | Banner dark 960×240, 60f, single-play, fondo con alfa | `syntropyos/.github` perfil (tema dark) |
| `org-syntropy-light.gif` | Banner light 960×240, 60f, single-play, fondo con alfa | `syntropyos/.github` perfil (tema light) |
| `mark-paper.svg` / `mark-ink.svg` | Anillo + punto sage, geometría exacta (semilla del símbolo fase 2) | Favicon futuro, docs |
| `wordmark-paper.svg` / `wordmark-ink.svg` | Lockup texto, Space Grotesk 700 + tracking (requiere la fuente instalada; el anillo exacto vive en `mark-*.svg` y los PNG) | Docs, web |

Fuentes reproducibles: `src-*.html` (captura Playwright a tamaño exacto) y `../../remotion/` (frames en `remotion/out/`, receta GIF en `remotion/README.md`).

Regla: si se toca la marca, regenerar desde la fuente y reemplazar aquí. Nunca editar un PNG/GIF a mano.
