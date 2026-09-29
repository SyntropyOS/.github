<a href="https://discord.gg/g8nqB3NtXt"><img align="right" src="https://img.shields.io/badge/Syntropy-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="SYNTROPY on Discord"></a>
<a href="https://opensource.org/licenses/Apache-2.0"><img align="right" src="https://img.shields.io/badge/Apache_2.0-181717?style=for-the-badge&logoColor=white" alt="Apache 2.0"></a>
<div align="left">English | <a href="./README_ES.md">Español</a></div>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="org-syntropy.gif">
  <img src="org-syntropy-light.gif" alt="Syntropy wordmark animating into place" width="960">
</picture>

<p align="center"><strong>Order out of chaos for the age of AI agents.</strong></p>

<p align="center"><em>Infrastructure that turns operational chaos into systems you can trust.</em></p>

---

## What is SyntropyOS?

SyntropyOS builds **infrastructure for AI agents**.

Large language models have raw intelligence but no structure. SyntropyOS creates the organization layers that turn that intelligence into coherent, predictable, useful systems.

We intend to be POSIX for the age of AI agents: we don't make applications, we make the foundations others build applications on. Nothing here is built yet except the substrate, and we would rather say that than imply otherwise.

The problem is not artificial intelligence. It is that no system survives operational reality: the power cuts, the person who configured it leaves, the source document is a PDF from 2019, and nobody knows where the data came from. So the test is not *what the system knows* but **whether you can trust it**. We build **verifiable, sovereign** infrastructure — not merely capable.

---

## Where things live

| Repository | Visibility | What it holds |
|---|---|---|
| [`syntropy`](https://github.com/SyntropyOS/syntropy) | public | **The nine holons**, one directory each. The substrate |
| [`ness-e/Vantadb`](https://github.com/ness-e/Vantadb) | public | The memory substrate. Released library, v0.5.0 in production |
| [`.github`](https://github.com/SyntropyOS/.github) | public | [Manifesto](https://github.com/SyntropyOS/.github/blob/main/MANIFESTO.md) · [Roadmap](https://github.com/SyntropyOS/.github/blob/main/ROADMAP.md) · [Contributing](https://github.com/SyntropyOS/.github/blob/main/CONTRIBUTING.md) · Governance |
| `strategy` | **private** | Business definition, market evidence, pricing, competitive analysis |

Three active repositories. One of them is private, and that is deliberate: mixing *what we
believe* with *what we know about the market* degrades both.

---

## Holons

Each capability is a **holon**: autonomous yet connected — a whole in its own scope and
part of the Syntropy ecosystem at the same time.

Each holon exists because it resolves a specific **chaos** that gets diagnosed in a real
organization. A holon with no associated chaos does not get built.

| Holon | Function | The chaos it resolves | Status |
|-------|----------|----------------------|--------|
| **VantaDB** | Memory | Substrate for all: ACID persistence and hybrid retrieval, local and sovereign | [v0.5.0](https://github.com/ness-e/Vantadb) ✅ |
| [**Cardinal**](https://github.com/SyntropyOS/syntropy/tree/main/holons/cardinal) | Orientation | **Context**: what we know, when we learned it, and from whom | In build · 1st |
| [**Iris**](https://github.com/SyntropyOS/syntropy/tree/main/holons/iris) | Vision | **Perception**: what is an image or paper nobody can query | In build · 2nd |
| [**Meta**](https://github.com/SyntropyOS/syntropy/tree/main/holons/meta) | Metacognition | **Trust**: evidence that the AI told the truth | In build · 3rd |
| [**Execute**](https://github.com/SyntropyOS/syntropy/tree/main/holons/execute) | Execution | **Execution**: the automation breaks and nobody repairs it | Defined |
| [**Sage**](https://github.com/SyntropyOS/syntropy/tree/main/holons/sage) | Adaptation | **Adaptation**: neither the system nor the people adapt | Defined |
| [**Plan**](https://github.com/SyntropyOS/syntropy/tree/main/holons/plan) | Planning | **Decomposition**: nobody breaks the work down | Defined |
| [**Orchestra**](https://github.com/SyntropyOS/syntropy/tree/main/holons/orchestra) | Coordination | **Runtime**: without it, the holons do not know how to cooperate | Defined · once 2+ exist |
| [**Reverb**](https://github.com/SyntropyOS/syntropy/tree/main/holons/reverb) · [**Reason**](https://github.com/SyntropyOS/syntropy/tree/main/holons/reason) | Audio · Reasoning | Out of initial scope | Deferred |

**Defined** means the design and activation criteria are documented; it does not mean it
ships. Only one holon is in production today.

**Cardinal** is first because the others depend on it: without verifiable context there
is nothing to perceive and nothing to verify. **Meta** moved from ninth to third because
it is the differentiator — the competition sells capability, this sells verifiability.

---

## Build order

```
VantaDB  (substrate, in production)
   └─► 1. Cardinal   context       ┐
   └─► 2. Iris       perception    ├─ without Cardinal there is nothing to verify
   └─► 3. Meta       trust         ┘
   └─► 4. Execute    execution     requires prior trust
   └─► 5. Sage       adaptation   requires trustworthy context and Iris
   └─► 6. Plan       decomposition requires something to verify the steps against
          Orchestra   runtime       once two holons are alive
```

No dates. The order comes out of the diagnosis, not out of a calendar. Full detail in the
[roadmap](https://github.com/SyntropyOS/.github/blob/main/ROADMAP.md).

---

## Principles

1. **Infrastructure, Not Products**: We build foundations, not applications.
2. **Pragmatism over Purity**: Local-first when it makes sense, cloud when needed.
3. **Strategic Openness**: Open source with commercial licenses for sustainability.
4. **Coherence over Complexity**: Simple APIs, predictable behavior.
5. **Evolution, Not Revolution**: Compatibility, gradual deprecation, documented migrations.
6. **Radical Transparency**: Real status, documented decisions, visible roadmap.

📖 **Full manifesto**: [MANIFESTO.md](https://github.com/SyntropyOS/.github/blob/main/MANIFESTO.md)

---

## Contribute

- **🐛 Report bugs**: Issues on GitHub.
- **💬 Community**: [Discord](https://discord.gg/g8nqB3NtXt)
- **📧 Contact**: [syntropyos.ia@gmail.com](mailto:syntropyos.ia@gmail.com)
- **📖 Contribute**: See [CONTRIBUTING.md](https://github.com/SyntropyOS/.github/blob/main/CONTRIBUTING.md)

---

## License

Code under Apache 2.0 (personal and commercial use allowed).

📖 **Details**: [LICENSE](https://github.com/SyntropyOS/.github/blob/main/LICENSE)

---

**SyntropyOS** — Order out of chaos.
