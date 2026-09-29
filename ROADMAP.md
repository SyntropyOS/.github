[Español](./ROADMAP_ES.md) | English

# SyntropyOS Roadmap

> **Current status**: Only **VantaDB** (Memory) is in production. The other holons have a documented design and an activation criterion, but **none of them is built**. There are no release dates: the order is set by diagnosed demand, not by a calendar.

**Holons (monorepo)**: [`syntropy`](https://github.com/SyntropyOS/syntropy) — all 9 holons as directories. The individual `syntropy-<holon>` repos were archived on 2026-09-28 with their history preserved in the monorepo.

---

## Activation criterion

> A holon **is not built because it sits on a roadmap**. It gets built when a diagnosis in a real organization finds the chaos that holon resolves.

This criterion replaces prioritization by technical interest. It reordered the sequence four times, and this is why.

| Status | Meaning |
|---|---|
| **In production** | In real use |
| **In build** | Next in the dependency chain, design closed |
| **Defined** | Design and activation criteria documented; not built |
| **Deferred** | Out of initial scope, with an explicit reactivation condition |

---

## 2026: Foundations

- ✅ **VantaDB v0.5.0** (Memory) — the sovereign substrate
- ✅ Org setup + governance documents (MANIFESTO, CONTRIBUTING, ROADMAP, SECURITY, CODE_OF_CONDUCT)
- ✅ Holon names locked + 9 repos created
- ✅ Business thesis documented with market evidence
- 🔵 Community governance (ADRs, RFCs)

---

## The 5 chaoses and their holon

Each holon answers a specific chaos that gets diagnosed before anything is built.

| # | The chaos | It shows up as | Holon |
|---|---|---|---|
| 1 | **Context** | The organization does not know what it knows, when, or from whom | **Cardinal** |
| 2 | **Perception** | Documents that are an image or a piece of paper nobody can query | **Iris** |
| 3 | **Execution** | The automation breaks and nobody knows how to repair it | **Execute** |
| 4 | **Learning** | The system repeats what it was already corrected on | **Sage** |
| 5 | **Trust** | Nobody can verify that the AI told the truth | **Meta** |

---

## Build order

### 🔴 High — dependency chain

1. **Cardinal** (Orientation) — *Context*. Prerequisite for everything else. Builds on VantaDB, which already has temporal edges and hybrid retrieval.
2. **Iris** (Vision) — *Perception*. OCR first, then structured extraction, then diagrams and interfaces. The most measurable ROI.
3. **Meta** (Metacognition) — *Trust*. Confidence calibration, decision ledger and human escalation. The differentiator: competitors sell capability, this sells verifiability.

### 🟡 Medium — require prior trust

4. **Execute** (Execution) — *Execution*. Full action ledger, replay and rollback. Arrives once trust exists.
5. **Sage** (Learning) — *Learning*. Local adaptation per organization. Deliberately later: learning on untrusted context amplifies the error instead of fixing it.
6. **Plan** (Planning) — Complementary. Decomposition into verifiable steps. Not a differentiator; it gets used before building.

### 🔵 Infrastructure (not a cognitive holon)

- **Orchestra** (Coordination) — Runtime that makes holons cooperate: context propagation, policy, health. **Built once two or more holons are alive.** Before that it is speculation.

### ⚪ Deferred — with a reactivation condition

- **Reverb** (Audio) — Transcription and classification. **Reactivated** when a diagnosis finds perception chaos dominated by audio, or when a client arrives with a clear use case.
- **Reason** (Reasoning) — Neuro-symbolic. **Reactivated** when Meta needs symbolic grounding and the bottleneck is no longer trust but inference.

**Dropped**: Communication (covered by LLMs).

---

## Why the order changed

| Holon | Previous order | Current order | Reason |
|---|---|---|---|
| Sage | 2nd (high) | 5th (medium) | Learning on untrusted context amplifies the error |
| Meta | 9th (low) | 3rd (high) | It is the brand differentiator: nobody sells trust |
| Iris | 3rd (high) | 2nd (high) | Rises on measurable ROI and simple construction |
| Plan | 5th (medium) | 6th (medium) | Lower: every framework already does it. Used, not competed |

---

## 2028+ (Vision)

- Third-party holon ecosystem
- Skills marketplace
- Holons built from diagnosed demand, not from planning

---

## Strategy documents

The business thesis, market evidence, business model and diagnostic method live outside this repository, in the organization's strategy folder. This roadmap describes **what gets built**; those documents explain **why and for whom**.

---

**SyntropyOS** — Order out of chaos.
