[English](./ROADMAP.md) | Español

# SyntropyOS Roadmap

> **Current state**: Only **VantaDB** (Memory) is in production. The nine holons have a
> documented design and an activation criterion, but **none of them is built**.
>
> There are no launch dates. The order is set by diagnosed demand, not by a calendar.

**Holons (monorepo)**: [`syntropy`](https://github.com/SyntropyOS/syntropy) — the nine
holons as directories.

---

## The rule that governs this roadmap

> A holon **is not built because it is on a roadmap**. It is built when a diagnosis in a
> real organization finds the chaos that holon resolves.

And its corollary, which is the part most often forgotten:

> **Nothing gets built before you have the instrument to measure the chaos.**

88% of enterprise AI pilots never reach production. 95% produce no measurable impact. The
cause is not technical: nobody defined what was supposed to change and nobody measured
whether it changed. A holon built without a diagnostic instrument is exactly that.

| Status | Meaning |
|---|---|
| **In production** | In real use |
| **In build** | Next in the dependency chain, with the design closed |
| **Defined** | Design and activation criteria documented; not built |
| **Deferred** | Out of initial scope, with an explicit reactivation condition |

---

## Phase 0 — Instruments · before any code

This is not a holon. It is what activates all of them.

| Instrument | What it is for |
|---|---|
| Diagnostic interview script | The six questions that find chaos |
| Chaos map template | The deliverable that gets billed |
| Proposal template | Turns the finding into a price |
| Diagnostic agreement | The terms, including "you pay even if the answer is no" |

**Exit criterion**: five conversations held, five chaos maps written, and the chaos that
recurred three times identified.

> Until that criterion is met, Phase 1 does not start. This is not discipline, it is
> arithmetic: building Cardinal without knowing which context chaos actually recurs would
> be speculation written as code.

---

## The six kinds of chaos and their holon

Each holon answers a specific chaos that gets diagnosed before anything is built. The
first five come from the analysis of why enterprise AI projects fail. The sixth surfaced
when the holons were validated against the industry.

| # | The chaos | What it looks like | Holon |
|---|---|---|---|
| 1 | **Context** | The organization does not know what it knows, when, or from whom | **Cardinal** |
| 2 | **Perception** | Documents that are image or paper and nobody can query | **Iris** |
| 3 | **Execution** | The automation breaks and nobody knows how to repair it | **Execute** |
| 4 | **Adaptation** | Neither the system nor the people adapt | **Sage** |
| 5 | **Trust** | Nobody can verify that the AI told the truth | **Meta** |
| 6 | **Decomposition** | Nobody breaks the work down | **Plan** |

The **adoption** chaos has no holon of its own: it lives inside Sage, which is why Sage is
called Adaptation rather than Learning. Enterprise AI fails more on adoption than on
accuracy, and the measured causes are organizational.

---

## Build order

### 🔴 High — dependency chain

1. **Cardinal** (Orientation) — *Context*. Prerequisite for all the others. Builds on
   VantaDB, which already has temporal edges and hybrid retrieval. Covers factual memory:
   formation and retrieval. **Working memory — what enters the context window on each call
   — is its requirement, with a token budget.**
2. **Iris** (Vision) — *Perception*. OCR first, then structured extraction, then diagrams
   and interfaces. The most measurable ROI. **Conditional**: only if a diagnosis finds
   perception chaos.
3. **Meta** (Metacognition) — *Trust*. Confidence calibration, decision log and escalation
   to a human. It is the differentiator: the competition sells capability, this sells
   verifiability.

### 🟡 Medium — require prior trust

4. **Execute** (Execution) — *Execution*. Full action log, reproduction and rollback. It is
   the default level of an agentic architecture: a single agent with audited tools. It
   arrives once there is trust.
5. **Sage** (Adaptation) — *Adaptation*. Both halves: the machine learns from corrections,
   and the people change how they work. It comes fifth on purpose — learning on untrusted
   context amplifies the error instead of correcting it.
6. **Plan** (Planning) — *Decomposition*. This is Azure's **magentic** pattern:
   plan-build-execute with a task ledger. It is not a top-level component in any
   taxonomy, and it does not pretend to be. It is not a differentiator; it is used rather
   than competed with.

### 🔵 Infrastructure (not a cognitive holon)

- **Orchestra** (Coordination) — Runtime that makes the holons cooperate: context
  propagation, policy, health. **Built once two or more holons are alive.** Before that it
  is speculation.

### ⚪ Deferred — with reactivation conditions

- **Reverb** (Audio) — Transcription and classification. **Reactivates** when a diagnosis
  finds perception chaos dominated by audio, or when a customer arrives with a clear use
  case.
- **Reason** (Reasoning) — Neuro-symbolic. **Reactivates** when Meta needs symbolic
  anchoring and the bottleneck is no longer trust but inference.

---

## What gets built first, concretely

| Week | Deliverable |
|---|---|
| 1 | The four instruments written. Five conversations |
| 2 | Five chaos maps. See which chaos recurs |
| 3 | **One** holon. Only the one that recurred three times |
| 4 | Proposal and price |

If only one thing can be done: **the interview script, and go talk to five companies.**
Code without a diagnosis is exactly the 88% that dies.

---

## Why the order changed

| Holon | Previous order | Current order | Reason |
|---|---|---|---|
| Meta | 9th (low) | 3rd (high) | It is the differentiator: nobody sells trust |
| Sage | 2nd (high) | 5th (medium) | Learning on untrusted context amplifies the error |
| Iris | 3rd (high) | 2nd (high) | Rises on measurable ROI and simple construction |
| Plan | 5th (medium) | 6th (medium) | Low: every framework already does it. Used, not competed with |
| **Phase 0** | **did not exist** | **first** | Without the instrument there is no diagnosis, and without a diagnosis everything else is speculation |

---

## Repository history

| Date | What happened |
|---|---|
| 2026-09-08 | Nine `syntropy-<holon>` repositories, one per holon |
| 2026-09-28 | Merged into the `syntropy` monorepo with `git subtree`. The nine were **archived** with history preserved: 27 original commits |
| 2026-09-29 | The organization was rebuilt. The nine archived repositories were **deleted** — their history lives inside the monorepo — and the three active repositories were recreated. The org sidebar went from eleven repos, nine of them stubs, to two |

Verified: the 27 original commits of the nine repositories are still reachable inside the
monorepo.

---

## 2028+ (vision)

- Ecosystem of third-party holons
- Skills marketplace
- Holons built from diagnosed demand, not from planning

---

## Strategy documents

The validation of the holons against canonical taxonomies, the tools audit, the skills
audit and the business flows live in the organization's private strategy repository. This
roadmap describes **what gets built**; those documents explain **why, with what evidence,
and with what tools**.

---

**SyntropyOS** — Order out of chaos.
