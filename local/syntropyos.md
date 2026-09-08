# SyntropyOS — Checklist del perfil de la organización

Documento vivo: todo lo decidido, lo pendiente y los pasos para completar el perfil de GitHub de la org `syntropyos` (display **Syntropy AI**), separada del proyecto VantaDB.

## 1. Estado actual (verificado)

- Org renombrada: `Vantadb` → `syntropyos` (display "Syntropy AI", 1 repo `.github`; descripción actual: tagline "Order out of chaos for the age of agents.", blog vacío)
- Miembros: `ness-e` (admin, público) + `DevpNess` (invitado admin, **pendiente aceptar**)
- Seguridad: base permissions `none`; secret scanning + push protection + Dependabot en `.github`; 2FA **sin exigir** (paso manual en UI)
- Perfil publicado en Syntropy (README v2 EN+ES, hero GIF dual, tabla de holones; commits `565e020`, `cdd7c49`, `a201cb7`, `d5523b7`). Pendiente humano: subir avatar + ojo final dark/light

## 2. Plataforma de marca (decisiones bloqueadas)

- **Concepto**: syntropy, del caos al orden (no al revés: eso es entropía). **Misión**: soluciones para ecosistemas de LLMs y agentes de IA — no un LLM, sino la infraestructura alrededor (coherente, estable); sin ella, el LLM es caos. VantaDB aporta la memoria como primer holón; los datos no son el objetivo de Syntropy
- **Marco oficial**: holón (Koestler, 1967). Syntropy crea holones: VantaDB es un todo en su área y parte del todo mayor; cada módulo, igual. Ref: [holón](https://en.wikipedia.org/wiki/Holon_(philosophy)), [texto 1969](http://panarchy.org/koestler/holon.1969.html)
- **Marca**: ruptura total. VantaDB conserva esfera, naranja `#FF5500` y tipografías; Syntropy no reutiliza ningún asset suyo
- **Símbolo**: wordmark hoy, símbolo en fase 2
- **Paleta**: fondo `#F0EEE6`, tinta `#141413`, grises `#B0AEA5`/`#E8E6DC`, acento primario Sage deep `#4A6B53` (solo acciones clave/punto). Alts: Sage claro `#8AA184` (sobre ink), Mineral `#6A9BCC`, Slate `#3B5B73`, Ochre `#C29B47` (detalle premium). Blanco puro eliminado como fondo. Terracota `#D97757` vetado (Anthropic). Naranja VantaDB intacto y separado. Proporción 60/30/10
- **Voz**: técnica en specs/docs/READMEs; editorial en About/blog/manifiestos
- **Sistema tipográfico**: wordmark Space Grotesk 700 caps · titulares Instrument Serif caja título · operativo Poppins 500/600 · técnico IBM Plex Mono · body editorial Newsreader. Todo OFL en Google Fonts
- **Escala medida en anthropic.com**: display sans 700/64 · feature serif 500/72 · sección/card sans 600/24/16 · body serif 400/24/18 · UI sans 16-20 · micro mono 12 · sin letterspacing salvo kickers
- **Wordmark**: `SYNTROPY` en mayúsculas (nos separa del "Anthropic" en minúsculas)
- **Lockup FINAL (V-A)**: caps tracking 0.14em, O como círculo perfecto con punto Sage deep `#4A6B53` dentro. D1/D2/D3/V-B/V-C/V-D y fusión con punto arriba, descartados. Minúscula cruda rechazada (clon directo)
- **Avatar FINAL**: monograma "S" Space Grotesk 700 — versión ink (fondo `#141413`, S paper) + versión paper (fondo `#F0EEE6`, S ink). Cinta entrelazada y M1-M10 descartados
- **Reglas**: flat 100% monocromo, hairlines 1px, cero sombras/degradados/neón, padding amplio; fondo `#F0EEE6`; caps solo wordmark/kickers
- **Alcance**: sistema completo, aplicado primero solo al perfil GitHub de la org

## 3. Seleccionar (decisiones abiertas)

- [x] Tipografías, lockup V-A final, avatar S ink/paper, paleta final y escala medida (decididos y en el Brand Sheet V3)
- [x] Exports generados en `Syntropy/brand/exports/`: avatar 500px ink/paper, hero dual 1920×640, GIFs single-play dual 960×240 (60f/4s, alfa), mark SVG exacto + wordmark SVG texto
- [ ] Subir avatar a la org (UI: Org Settings → Profile picture, usar `avatar-ink.png`; sin API para foto de org, solo manual)
- [x] Tagline paraguas EN: "Order out of chaos for the age of agents." + ES espejo: "Orden desde el caos para la era de los agentes." (revisado 2026-09-06: el anterior hablaba de datos, ámbito de VantaDB, no de Syntropy; aplicado en `docs/profile-README-EN.md` / `-ES.md`)
- [x] Links sociales: omitidos por ahora (sin X/Discord de Syntropy; no reutilizar los de VantaDB)
- [x] Dominio: diferido (perfil sale sin web; verificar `syntropyos.com` cuando toque)
- [x] Idiomas del perfil: EN primero con espejo ES
- [x] Hero del perfil: GIFs dual-theme single-play con `<picture>` por `prefers-color-scheme`
- [x] Narrativa congelada tras auditoría externa (2026-09-06): rewrite corporativo rechazado, sin nombres de holones futuros, sin claims enterprise; el perfil queda mínimo hasta tracción

## 4. Crear

- [x] Avatar final: PNG 500px ink/paper exportados (`brand/exports/`); falta subirlo (org Settings, UI)
- [x] Wordmark SVG (texto, dual) + mark SVG geométrico exacto + hero PNG dual desde el lockup V-A
- [x] Banner GIF dual-theme single-play (`org-syntropy.gif` / `org-syntropy-light.gif`, 960×240, letras suben una vez + lockup V-A fijo, proyecto Remotion propio en `Syntropy/remotion/`, frames verificados por ffprobe; v3 con O asentada: commit `a201cb7`; v4 con huecos R-O-P simétricos: commit `d5523b7`)
- [x] README del perfil v2 publicado en `syntropyos/.github` (copy en `cdd7c49`: sin H1, tagline centrado, misión/visión/filosofía, explainer de holones, fila de links, tabla con objetivo/técnica/enlace; banner v3 O asentada `a201cb7`, v4 huecos R-O-P simétricos `d5523b7`)

## 5. Modificar (todo manual en GitHub UI)

- [x] Descripción de la org → "Order out of chaos for the age of agents." + blog vacío (vía `gh api`, 2026-09-06)
- [x] Quitado del perfil el branding VantaDB (GIFs naranja, tabla de 12 módulos) en `565e020`; links al repo `ness-e/Vantadb` retenidos a propósito (fila Holones, Core engine, Discussions) hasta el transfer (§7)
- [x] Blog del perfil vacío hasta registrar dominio (no apunta a `vantadb.vercel.app`)
- [x] Actualizar este checklist a medida que se cierre cada punto

## 6. No tocar

- Identidad del proyecto VantaDB (mark, naranja, READMEs de `ness-e/Vantadb`, GIFs): intacta
- Seguridad ya aplicada; no aflojar base permissions ni scanning

## 7. Cuando se transfiera el core (futuro, fuera de este checklist)

- Aceptar invite `DevpNess` + exigir 2FA antes del transfer
- Transferir repo, renombrar links `ness-e/…`, fijar repos (pins), rulesets/PRs, secret scanning en el core
- [x] VantaDB como primer holón del perfil con su link (hecho desde el perfil v1; tras el transfer solo se actualizan los links `ness-e/…` → `syntropyos/…`)

## 8. Verificación final

- [ ] Perfil legible en dark y light a ojo humano (capturas archivadas en `brand/specimens/org-profile-*.png`)
- [x] Todos los links del perfil devuelven 200 (4/4 raw: README, ES, 2 GIFs)
- [x] Capturas dark + light archivadas como prueba
- [x] `git status` limpio en el clon `.github` tras el push (`d5523b7`)

## 9. Casa de la marca (`Syntropy/`, fuera de GitHub)

- `brand/brand-sheet.html` V3 (B0 concepto, B1b construcción, voz, B9 archivos) + `brand/exports/` (fuentes `src-*.html`; finales: PNG, SVG, GIFs) + `brand/specimens/` (evidencia y capturas)
- `docs/brand-platform.md` (misión, voz, reglas) + `docs/profile-README-EN.md` / `-ES.md` (espejos del perfil publicado)
- `remotion/` propio (tokens, `SyntropyBanner` dual-theme, receta GIF con alfa; `typecheck` en verde)
- `.opencode/skills/` (74 skills de diseño/frontend/video/visual) + `README.md` y `AGENTS.md` del proyecto
- Regla: el perfil GitHub está congelado; todo cambio futuro de marca nace aquí y se exporta
