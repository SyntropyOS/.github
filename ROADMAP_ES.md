[English](./ROADMAP.md) | Español

# Roadmap de SyntropyOS

> **Estado actual**: Solo **VantaDB** (Memoria) está en producción. El resto de los holones tiene diseño documentado y criterio de activación, pero **ninguno está construido**. No hay fechas de lanzamiento: el orden lo determina la demanda diagnosticada, no un calendario.

**Repos de holones**: [`syntropy-iris`](https://github.com/SyntropyOS/syntropy-iris) · [`syntropy-reverb`](https://github.com/SyntropyOS/syntropy-reverb) · [`syntropy-cardinal`](https://github.com/SyntropyOS/syntropy-cardinal) · [`syntropy-orchestra`](https://github.com/SyntropyOS/syntropy-orchestra) · [`syntropy-sage`](https://github.com/SyntropyOS/syntropy-sage) · [`syntropy-execute`](https://github.com/SyntropyOS/syntropy-execute) · [`syntropy-plan`](https://github.com/SyntropyOS/syntropy-plan) · [`syntropy-reason`](https://github.com/SyntropyOS/syntropy-reason) · [`syntropy-meta`](https://github.com/SyntropyOS/syntropy-meta)

---

## Criterio de activación

> Un holón **no se construye porque esté en un roadmap**. Se construye cuando un diagnóstico en una organización real encuentra el caos que ese holón resuelve.

Este criterio sustituye a la priorización por XTECnología. Cambió el orden cuatro veces y explica por qué.

| Estado | Significado |
|---|---|
| **En producción** | En uso real |
| **En construcción** | Siguiente en la cadena de dependencias, con diseño cerrado |
| **Definido** | Diseño documentado y criterio de activación escritos; no construido |
| **Aplazado** | Fuera del alcance inicial, con condición explícita de reactivación |

---

## 2026: Cimientos

- ✅ **VantaDB v0.5.0** (Memoria) — el sustrato soberano
- ✅ Organización + documentos de gobernanza (MANIFESTO, CONTRIBUTING, ROADMAP, SECURITY, CODE_OF_CONDUCT)
- ✅ Nombres de holones definidos + 9 repos creados
- ✅ Tesis comercial documentada con evidencia de mercado
- 🔵 Gobernanza de comunidad (ADRs, RFCs)

---

## Los 5 caos y su holón

Cada holón responde a un caos concreto que se diagnostica antes de construir nada.

| # | El caos | Se manifiesta como | Holón |
|---|---|---|---|
| 1 | **Contexto** | La organización no sabe qué sabe, ni cuándo, ni de quién | **Cardinal** |
| 2 | **Percepción** | Documentos que son imagen o papel y nadie puede consultar | **Iris** |
| 3 | **Ejecución** | La automatización se rompe y nadie sabe repararla | **Execute** |
| 4 | **Aprendizaje** | El sistema repite lo que ya se le corrigió | **Sage** |
| 5 | **Confianza** | Nadie puede verificar que la IA dijo la verdad | **Meta** |

---

## Orden de construcción

### 🔴 Alta — cadena de dependencias

1. **Cardinal** (Orientación) — *Contexto*. Prerrequisito de todos los demás. Construye sobre VantaDB, que ya tiene aristas temporales y recuperación híbrida.
2. **Iris** (Visión) — *Percepción*. OCR primero, luego extracción estructurada, luego diagramas e interfaces. El ROI más medible.
3. **Meta** (Metacognición) — *Confianza*. Calibración de confianza, bitácora de decisiones y escalamiento a humano. Es el diferenciador: la competencia vende capacidad, esto vende verificabilidad.

### 🟡 Media — requieren confianza previa

4. **Execute** (Ejecución) — *Ejecución*. Registro completo de acciones, reproducción y reversión. Viene cuando ya hay confianza.
5. **Sage** (Aprendizaje) — *Aprendizaje*. Adaptación local por organización. Va después a propósito: aprender sobre contexto no confiable amplifica el error en vez de corregirlo.
6. **Plan** (Planificación) — Complementario. Descomposición en pasos verificables. No es diferenciador; se usa antes de construir.

### 🔵 Infraestructura (no holón cognitivo)

- **Orchestra** (Coordinación) — Runtime que hace cooperar a los holones: propagación de contexto, política, salud. **Se construye cuando existan dos o más holones vivos.** Antes es especulación.

### ⚪ Aplazado — con condición de reactivación

- **Reverb** (Audio) — Transcripción y clasificación. **Se reactiva** cuando un diagnóstico detecte caos de percepción dominado por audio, o entre un cliente con caso de uso claro.
- **Reason** (Razonamiento) — Neuro-simbólico. **Se reactiva** cuando Meta necesite anclaje simbólico y el cuello de botella ya no sea confianza sino inferencia.

**Descartado**: Comunicación (lo cubren los LLMs).

---

## Por qué cambió el orden

| Holón | Orden anterior | Orden actual | Razón |
|---|---|---|---|
| Sage | 2º (alta) | 5º (media) | Aprender sobre contexto no confiable amplifica el error |
| Meta | 9º (baja) | 3º (alta) | Es el diferenciador de marca: nadie vende confiabilidad |
| Iris | 3º (alta) | 2º (alta) | Sube por ROI medible y construcción simple |
| Plan | 5º (media) | 6º (media) | Bajo: todo framework ya lo hace. Se usa, no se compite |

---

## 2028+ (Visión)

- Ecosistema de holones de terceros
- Marketplace de skills
- Holones construidos a partir de demanda diagnosticada, no de planificación

---

## Documentos de estrategia

El detalle de la tesis comercial, la evidencia de mercado, el modelo de negocio y el método de diagnóstico viven fuera de este repositorio, en la carpeta de estrategia de la organización. Este roadmap describe **qué se construye**; aquellos documentos explican **por qué y para quién**.

---

**SyntropyOS** — Orden desde el caos.
