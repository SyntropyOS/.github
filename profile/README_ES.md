[English](README.md) | Español

![VantaDB](org-mark.gif#gh-dark-mode-only)
![VantaDB](org-mark-light.gif#gh-light-mode-only)

<p align="center"><strong>Infraestructura de memoria persistente local para apps, espacios de trabajo de desarrolladores y agentes autónomos.</strong></p>

<p align="center"><a href="https://vantadb.vercel.app">🌐 Sitio web</a> · <a href="https://github.com/ness-e/Vantadb">📦 Motor core</a> · <a href="https://github.com/ness-e/Vantadb/discussions">💬 Discusiones</a> · <a href="mailto:eros.messy@gmail.com">📧 Contacto</a></p>

VantaDB desarrolla componentes de memoria embebidos que se ejecutan donde ya están tus datos: búsqueda vectorial, de texto completo e híbrida para aplicaciones, dispositivos, herramientas locales y agentes, sin servicios adicionales que operar. Tomamos como modelo la memoria del cerebro — una memoria de trabajo rápida y una memoria duradera que consolida lo importante — implementada con persistencia respaldada por WAL y recuperación híbrida nativa.

## 🚀 Empieza aquí

| Módulo | Función | Técnica | Docs |
|---|---|---|---|
| **Motor core** | Memoria local durable con recuperación híbrida para cualquier app | Rust, in-process; WAL (CRC32C); BM25 + HNSW vía RRF | [Arquitectura](https://github.com/ness-e/Vantadb/blob/main/docs/architecture/ARCHITECTURE.md) |
| **SDK Python** | Memoria para apps y agentes en Python | Bindings PyO3 · `pip install vantadb-py` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/PYTHON_SDK.md) |
| **SDK TypeScript** | Memoria para Node, Bun, Deno y navegadores | Con WASM · `npm i vantadb` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/TS_SDK.md) |
| **Bindings Node** | Memoria a velocidad nativa para Node.js | napi-rs · `vantadb-node` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/NODE_SDK.md) |
| **Build WASM** | Memoria dentro de páginas web y edge runtimes | `vantadb-wasm` · persistencia OPFS/IDB | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/WASM_API.md) |
| **Servidor MCP** | Memoria para agentes de IA vía MCP | `vantadb-mcp` · stdio/HTTP | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/MCP.md) |
| **Servidor local** | Motor por HTTP para cualquier lenguaje | `vantadb-server` · API REST | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/HTTP_API.md) |
| **Proxy LLM** | Memoria en llamadas OpenAI/Anthropic, transparente | Wire proxy · APIs Chat + Messages/Responses | [Código](https://github.com/ness-e/Vantadb/tree/main/vanta-proxy) |
| **Workspace desktop** | Explorar y gestionar memoria en local | App Tauri | [Docs](https://github.com/ness-e/Vantadb/blob/main/desktop/README.md) |
| **Providers e integraciones** | Memoria en LangChain, LlamaIndex, CrewAI, Mem0, Ollama… | Adaptadores | [Código](https://github.com/ness-e/Vantadb/tree/main/integrations) |
| **Web y docs** | Benchmarks, guías, quickstart | Next.js | [Sitio](https://vantadb.vercel.app) |

## 🤝 Participa

VantaDB es open source bajo la Apache License 2.0.

- Dale una estrella al [repo core](https://github.com/ness-e/Vantadb) si te es útil.
- Reporta un bug o pide una feature en el issue tracker.
- Pregunta y comparte casos de uso en [Discusiones](https://github.com/ness-e/Vantadb/discussions).
- Explora todos los repos públicos en la [organización VantaDB](https://github.com/orgs/Vantadb/repositories).
