<a href="https://discord.gg/g8nqB3NtXt"><img align="right" src="https://img.shields.io/badge/Syntropy-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="SYNTROPY on Discord"></a>
<a href="https://opensource.org/licenses/Apache-2.0"><img align="right" src="https://img.shields.io/badge/Apache_2.0-181717?style=for-the-badge&logoColor=white" alt="Apache 2.0"></a>
<div align="left"><a href="./README.md">English</a> | Español</div>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="org-syntropy.gif">
  <img src="org-syntropy-light.gif" alt="Logotipo de Syntropy animándose hasta su posición" width="960">
</picture>

<p align="center"><strong>Orden desde el caos para la era de los agentes de IA.</strong></p>

<p align="center"><em>Infraestructura que convierte el caos operativo de una empresa en un sistema en el que se puede confiar.</em></p>

---

## Qué es SyntropyOS

SyntropyOS construye **infraestructura para agentes de IA**.

Los modelos de lenguaje grandes tienen inteligencia cruda pero ninguna estructura.
SyntropyOS crea las capas de organización que convierten esa inteligencia en sistemas
coherentes, predecibles y útiles.

Somos como POSIX para la era de los agentes de IA: no hacemos aplicaciones, hacemos los
cimientos sobre los que otros construyen aplicaciones.

El problema no es la inteligencia artificial. Es que ningún sistema sobrevive a la
realidad operativa: se corta la luz, se va la persona que lo configuró, el documento
fuente es un PDF de 2019 y nadie sabe de dónde salieron los datos. Entonces la pregunta
no es *qué sabe el sistema* sino **si puedes confiar en él**. Construimos infraestructura
**verificable y soberana**, no solo capaz.

---

## Dónde vive cada cosa

| Repositorio | Visibilidad | Qué contiene |
|---|---|---|
| [`syntropy`](https://github.com/SyntropyOS/syntropy) | público | **Los nueve holones**, un directorio cada uno. El sustrato |
| [`ness-e/Vantadb`](https://github.com/ness-e/Vantadb) | público | El sustrato de memoria. Librería publicada, v0.5.0 en producción |
| [`.github`](https://github.com/SyntropyOS/.github) | público | [Manifiesto](https://github.com/SyntropyOS/.github/blob/main/MANIFESTO_ES.md) · [Roadmap](https://github.com/SyntropyOS/.github/blob/main/ROADMAP_ES.md) · [Contribuir](https://github.com/SyntropyOS/.github/blob/main/CONTRIBUTING_ES.md) · Gobernanza |
| `strategy` | **privado** | Definición de negocio, evidencia de mercado, precios, análisis competitivo |

Nueve repositorios `syntropy-<holon>` quedaron **archivados** el 28 de septiembre de 2026
tras integrar su contenido en el monorepo `syntropy` con su historial preservado. Siguen
siendo legibles e indican a dónde fue su contenido.

---

## Holones

Cada capacidad es un **holón**: autónomo pero conectado — un todo en su ámbito y parte
del ecosistema Syntropy al mismo tiempo.

Cada holón existe porque resuelve un **caos** específico que se diagnostica en una
organización real. Un holón sin caos asociado no se construye.

| Holón | Función | El caos que resuelve | Estado |
|---|---|---|---|
| **VantaDB** | Memoria | Sustrato de todos: persistencia ACID y recuperación híbrida, local y soberana | [v0.5.0](https://github.com/ness-e/Vantadb) ✅ |
| [**Cardinal**](https://github.com/SyntropyOS/syntropy/tree/main/holons/cardinal) | Orientación | **Contexto**: qué sabemos, cuándo lo supimos y de quién | En construcción · 1º |
| [**Iris**](https://github.com/SyntropyOS/syntropy/tree/main/holons/iris) | Visión | **Percepción**: lo que es imagen o papel y nadie puede consultar | En construcción · 2º |
| [**Meta**](https://github.com/SyntropyOS/syntropy/tree/main/holons/meta) | Metacognición | **Confianza**: prueba de que la IA dijo la verdad | En construcción · 3º |
| [**Execute**](https://github.com/SyntropyOS/syntropy/tree/main/holons/execute) | Ejecución | **Ejecución**: la automatización se rompe y nadie la repara | Definido |
| [**Sage**](https://github.com/SyntropyOS/syntropy/tree/main/holons/sage) | Aprendizaje | **Aprendizaje**: el sistema repite lo que ya se le corrigió | Definido |
| [**Plan**](https://github.com/SyntropyOS/syntropy/tree/main/holons/plan) | Planificación | **Descomposición**: nadie descompone el trabajo | Definido |
| [**Orchestra**](https://github.com/SyntropyOS/syntropy/tree/main/holons/orchestra) | Coordinación | **Runtime**: sin él, los holones no saben cooperar | Definido · cuando existan 2+ |
| [**Reverb**](https://github.com/SyntropyOS/syntropy/tree/main/holons/reverb) · [**Reason**](https://github.com/SyntropyOS/syntropy/tree/main/holons/reason) | Audio · Razonamiento | Fuera del alcance inicial | Aplazado |

**Definido** significa que el diseño y los criterios de activación están documentados; no
significa que esté en producción. Hoy solo un holón está en producción.

**Cardinal** va primero porque los demás dependen de él. **Meta** subió de novena a
tercera porque es el diferenciador: la competencia vende capacidad, esto vende
verificabilidad.

---

## Orden de construcción

```
VantaDB  (sustrato, en producción)
   └─► 1. Cardinal   contexto     ┐
   └─► 2. Iris       percepción    ├─ sin Cardinal no hay nada que verificar
   └─► 3. Meta       confianza     ┘
   └─► 4. Execute    ejecución     requiere confianza previa
   └─► 5. Sage       aprendizaje   requiere contexto confiable
   └─► 6. Plan       descomposición
          Orchestra   runtime      cuando existan dos holones vivos
```

No hay fechas. El orden sale del diagnóstico, no de un calendario. Detalle completo en el
[roadmap](https://github.com/SyntropyOS/.github/blob/main/ROADMAP_ES.md).

---

## Principios

1. **Infraestructura, no productos**: Construimos cimientos, no aplicaciones.
2. **Pragmatismo sobre pureza**: Local primero cuando conviene, nube cuando hace falta.
3. **Apertura estratégica**: Código abierto con licencias comerciales para la sostenibilidad.
4. **Coherencia sobre complejidad**: APIs simples, comportamiento predecible.
5. **Evolución, no revolución**: Compatibilidad, deprecación gradual, migraciones documentadas.
6. **Transparencia radical**: Estado real, decisiones documentadas, roadmap visible.

📖 **Manifiesto completo**: [MANIFESTO_ES.md](https://github.com/SyntropyOS/.github/blob/main/MANIFESTO_ES.md)

---

## Participar

- **🐛 Reportar errores**: Issues en GitHub.
- **💬 Comunidad**: [Discord](https://discord.gg/g8nqB3NtXt)
- **📧 Contacto**: [syntropyos.ia@gmail.com](mailto:syntropyos.ia@gmail.com)
- **📖 Contribuir**: Ver [CONTRIBUTING_ES.md](https://github.com/SyntropyOS/.github/blob/main/CONTRIBUTING_ES.md)

---

## Licencia

Código bajo Apache 2.0 (uso personal y comercial permitido).

📖 **Detalles**: [LICENSE](https://github.com/SyntropyOS/.github/blob/main/LICENSE)

---

**SyntropyOS** — Orden desde el caos.
