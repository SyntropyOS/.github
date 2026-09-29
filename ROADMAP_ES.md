[English](./ROADMAP.md) | Español

# Roadmap de SyntropyOS

> **Estado actual**: Solo **VantaDB** (Memoria) está en producción. Los nueve holones
> tienen diseño documentado y criterio de activación, pero **ninguno está construido**.
>
> No hay fechas de lanzamiento. El orden lo determina la demanda diagnosticada, no un
> calendario.

**Holones (monorepo)**: [`syntropy`](https://github.com/SyntropyOS/syntropy) — los nueve
holones como directorios.

---

## La regla que gobierna este roadmap

> Un holón **no se construye porque esté en un roadmap**. Se construye cuando un
> diagnóstico en una organización real encuentra el caos que ese holón resuelve.

Y su corolario, que es el que más se olvida:

> **Nada se construye antes de tener el instrumento para medir el caos.**

El 88% de los pilotos de IA empresarial nunca llega a producción. El 95% no produce
impacto medible. La causa no es técnica: es que nadie definió qué iba a cambiar y nadie
midió si cambió. Un holón construido sin instrumento de diagnóstico es exactamente eso.

| Estado | Significado |
|---|---|
| **En producción** | En uso real |
| **En construcción** | Siguiente en la cadena de dependencias, con diseño cerrado |
| **Definido** | Diseño documentado y criterio de activación escritos; no construido |
| **Aplazado** | Fuera del alcance inicial, con condición explícita de reactivación |

---

## Fase 0 — Instrumentos · antes de cualquier código

Esto no es un holón. Es lo que activa todos los demás.

| Instrumento | Para qué |
|---|---|
| Guion de entrevista de diagnóstico | Las seis preguntas que encuentran caos |
| Plantilla de mapa de caos | El entregable que se cobra |
| Plantilla de propuesta | Convierte el hallazgo en precio |
| Contrato de diagnóstico | Los términos del cobro, incluido el "se paga igual" |

**Criterio de salida**: cinco conversaciones hechas, cinco mapas de caos escritos, y el
caos que se repitió tres veces identificado.

> Sin este criterio cumplido, la Fase 1 no empieza. No es disciplina, es aritmética:
> construir Cardinal sin saber qué caos de contexto se repite sería especulación con
> código.

---

## Los seis caos y su holón

Cada holón responde a un caos concreto que se diagnostica antes de construir nada. Los
primeros cinco vienen del análisis de por qué fracasan los proyectos de IA en empresas. El
sexto apareció al validar los holones contra la industria.

| # | El caos | Se manifiesta como | Holón |
|---|---|---|---|
| 1 | **Contexto** | La organización no sabe qué sabe, ni cuándo, ni de quién | **Cardinal** |
| 2 | **Percepción** | Documentos que son imagen o papel y nadie puede consultar | **Iris** |
| 3 | **Ejecución** | La automatización se rompe y nadie sabe repararla | **Execute** |
| 4 | **Adaptación** | Ni el sistema ni las personas se adaptan | **Sage** |
| 5 | **Confianza** | Nadie puede verificar que la IA dijo la verdad | **Meta** |
| 6 | **Descomposición** | Nadie descompone el trabajo | **Plan** |

El caos de **adopción** no tiene holón propio: vive dentro de Sage, que por eso se llama
Adaptación y no Aprendizaje. La IA empresarial falla más por adopción que por precisión, y
las causas medidas son organizacionales.

---

## Orden de construcción

### 🔴 Alta — cadena de dependencias

1. **Cardinal** (Orientación) — *Contexto*. Prerrequisito de todos los demás. Construye
   sobre VantaDB, que ya tiene aristas temporales y recuperación híbrida. Cubre memoria
   factual: formación y recuperación. **La memoria de trabajo —qué entra en la ventana de
   contexto en cada llamada— es un requisito suyo, con presupuesto de tokens.**
2. **Iris** (Visión) — *Percepción*. OCR primero, luego extracción estructurada, luego
   diagramas e interfaces. El ROI más medible. **Condicional**: solo si algún diagnóstico
   encuentra caos de percepción.
3. **Meta** (Metacognición) — *Confianza*. Calibración de confianza, bitácora de decisiones
   y escalamiento a humano. Es el diferenciador: la competencia vende capacidad, esto vende
   verificabilidad.

### 🟡 Media — requieren confianza previa

4. **Execute** (Ejecución) — *Ejecución*. Registro completo de acciones, reproducción y
   reversión. Es el nivel por defecto de una arquitectura agéntica: un agente con
   herramientas auditadas. Viene cuando ya hay confianza.
5. **Sage** (Adaptación) — *Adaptación*. Las dos mitades: la máquina aprende de las
   correcciones, y las personas cambian cómo trabajan. Va después a propósito: aprender
   sobre contexto no confiable amplifica el error en vez de corregirlo.
6. **Plan** (Planificación) — *Descomposición*. Es el patrón **magentic** de Azure:
   plan-construye-ejecuta con registro de tareas. No es un componente de nivel superior en
   ninguna taxonomía, y no pretende serlo. No es diferenciador; se usa antes de construir.

### 🔵 Infraestructura (no holón cognitivo)

- **Orchestra** (Coordinación) — Runtime que hace cooperar a los holones: propagación de
  contexto, política, salud. **Se construye cuando existan dos o más holones vivos.**
  Antes es especulación.

### ⚪ Aplazado — con condición de reactivación

- **Reverb** (Audio) — Transcripción y clasificación. **Se reactiva** cuando un diagnóstico
  detecte caos de percepción dominado por audio, o entre un cliente con caso de uso claro.
- **Reason** (Razonamiento) — Neuro-simbólico. **Se reactiva** cuando Meta necesite anclaje
  simbólico y el cuello de botella ya no sea confianza sino inferencia.

---

## Qué se construye primero, en concreto

| Semana | Entregable |
|---|---|
| 1 | Los cuatro instrumentos escritos. Cinco conversaciones |
| 2 | Cinco mapas de caos. Ver qué caos se repite |
| 3 | **Un** holón. Solo el que se repitió tres veces |
| 4 | Propuesta y precio |

Si solo se puede hacer una cosa: **el guion de entrevista y salir a hablar con cinco
empresas.** El código sin diagnóstico es exactamente el 88% que muere.

---

## Por qué cambió el orden

| Holón | Orden anterior | Orden actual | Razón |
|---|---|---|---|
| Meta | 9º (baja) | 3º (alta) | Es el diferenciador: nadie vende confiabilidad |
| Sage | 2º (alta) | 5º (media) | Aprender sobre contexto no confiable amplifica el error |
| Iris | 3º (alta) | 2º (alta) | Sube por ROI medible y construcción simple |
| Plan | 5º (media) | 6º (media) | Bajo: todo framework ya lo hace. Se usa, no se compite |
| **Fase 0** | **no existía** | **primero** | Sin instrumento no hay diagnóstico, y sin diagnóstico todo lo demás es especulación |

---

## Historia de los repositorios

| Fecha | Qué pasó |
|---|---|
| 08-09-2026 | Nueve repos `syntropy-<holon>`, uno por holón |
| 28-09-2026 | Se integran en el monorepo `syntropy` con `git subtree`. Los nueve quedan **archivados** con su historial preservado: 27 commits originales |
| 29-09-2026 | La organización se reconstruye. Los nueve archivados se **eliminan** —su historial sigue dentro del monorepo— y se recrean los tres repos activos. La barra lateral de la organización pasó de once repos, nueve de ellos stubs, a dos |

Verificación: los 27 commits originales de los nueve repos siguen siendo alcanzables
dentro del monorepo.

---

## 2028+ (visión)

- Ecosistema de holones de terceros
- Marketplace de skills
- Holones construidos a partir de demanda diagnosticada, no de planificación

---

## Documentos de estrategia

La validación de los holones contra las taxonomías canónicas, la auditoría de
herramientas, la auditoría de skills y los flujos de negocio viven en el repositorio
privado de estrategia. Este roadmap describe **qué se construye**; aquellos documentos
explican **por qué, con qué evidencia y con qué herramientas**.

---

**SyntropyOS** — Orden desde el caos.
