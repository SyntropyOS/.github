# Perfil de la org — EN final (publicado en `syntropyos/.github`, commit `cdd7c49`)

Criterios aplicados (skills `writing-guidelines` + `copywriting`, best practices 2026): propósito en las 2 primeras líneas, sin H1 duplicado (el nombre ya está en el GIF), voz activa, headings en sentence case, término `holon` definido al primer uso, links con texto descriptivo, alt text en la imagen.

```markdown
English | [Español](README_ES.md)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="org-syntropy.gif">
  <img src="org-syntropy-light.gif" alt="Syntropy wordmark animating into place" width="960">
</picture>

<p align="center"><strong>Order out of chaos for the age of agents.</strong></p>

<p align="center"><a href="https://github.com/ness-e/Vantadb">Core engine</a> · <a href="https://github.com/SyntropyOS/.github/discussions">Discussions</a> · <a href="mailto:eros.messy@gmail.com">Contact</a></p>

Syntropy builds infrastructure around large language models. Models are stateless and brilliant; without a coherent layer around them, every agent rebuilds memory, retrieval, and plumbing from scratch. That duplication is chaos. Syntropy turns it into order.

## Mission, vision, philosophy

- **Mission**: give every agent ecosystem the stable layer it needs: memory, retrieval, and tooling that persist beyond a single prompt
- **Vision**: an age of agents where capability comes from the infrastructure around the model, not from a bigger model
- **Philosophy**: build wholes, not fragments. Each piece owns its scope completely and plugs into a larger whole

## Why holons

A [holon](https://en.wikipedia.org/wiki/Holon_(philosophy)) is a system that is a whole in its own scope and part of a larger whole at the same time. Arthur Koestler coined the term in 1967. We chose it because it describes exactly how we build: each project is complete and autonomous, yet designed from day one to compose into the Syntropy ecosystem.

## Holons

| Holon | Objective | Technical | Link |
|---|---|---|---|
| **VantaDB** | Give agents durable local memory | Rust core with WAL persistence; BM25 plus HNSW fused by Reciprocal Rank Fusion; Python, TypeScript, and WASM bindings | [Core repo](https://github.com/ness-e/Vantadb) |
| _next_ | _reserved_ | — | — |

## Get involved

- Ask questions and share use cases in [Discussions](https://github.com/SyntropyOS/.github/discussions)
- Star the [core repo](https://github.com/ness-e/Vantadb) if it is useful to you
```
