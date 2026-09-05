English | [Español](README_ES.md)

![VantaDB](org-mark.gif#gh-dark-mode-only)
![VantaDB](org-mark-light.gif#gh-light-mode-only)

<p align="center"><strong>Persistent local memory infrastructure for apps, developer workspaces, and autonomous agents.</strong></p>

<p align="center"><a href="https://vantadb.vercel.app">🌐 Website</a> · <a href="https://github.com/ness-e/Vantadb">📦 Core engine</a> · <a href="https://github.com/ness-e/Vantadb/discussions">💬 Discussions</a> · <a href="mailto:eros.messy@gmail.com">📧 Contact</a></p>

VantaDB builds embedded memory components that run where your data already lives: vector, full-text, and hybrid search for applications, devices, local tools, and agents, with no additional services to operate. We model them on brain memory — fast working memory plus durable memory that consolidates what matters — implemented with WAL-backed persistence and native hybrid retrieval.

## 🚀 Start here

| Module | Function | Technical | Docs |
|---|---|---|---|
| **Core engine** | Durable local memory with hybrid retrieval for any app | Rust, in-process; WAL (CRC32C); BM25 + HNSW via RRF | [Architecture](https://github.com/ness-e/Vantadb/blob/main/docs/architecture/ARCHITECTURE.md) |
| **Python SDK** | Memory for Python apps and agents | PyO3 bindings · `pip install vantadb-py` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/PYTHON_SDK.md) |
| **TypeScript SDK** | Memory for Node, Bun, Deno, and browsers | WASM-powered · `npm i vantadb` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/TS_SDK.md) |
| **Node bindings** | Native-speed memory for Node.js | napi-rs · `vantadb-node` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/NODE_SDK.md) |
| **WASM build** | Memory inside web pages and edge runtimes | `vantadb-wasm` · OPFS/IDB persistence | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/WASM_API.md) |
| **MCP server** | Memory for AI agents over MCP | `vantadb-mcp` · stdio/HTTP | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/MCP.md) |
| **Local server** | Engine over HTTP for any language | `vantadb-server` · REST API | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/HTTP_API.md) |
| **LLM proxy** | Memory on OpenAI/Anthropic calls, transparently | Wire proxy · Chat + Messages/Responses APIs | [Code](https://github.com/ness-e/Vantadb/tree/main/vanta-proxy) |
| **Desktop workspace** | Explore and manage memory locally | Tauri app | [Docs](https://github.com/ness-e/Vantadb/blob/main/desktop/README.md) |
| **Providers & integrations** | Memory inside LangChain, LlamaIndex, CrewAI, Mem0, Ollama… | Adapters | [Code](https://github.com/ness-e/Vantadb/tree/main/integrations) |
| **Web & docs** | Benchmarks, guides, quickstart | Next.js | [Site](https://vantadb.vercel.app) |

## 🤝 Get involved

VantaDB is open source under the Apache License 2.0.

- Star the [core repo](https://github.com/ness-e/Vantadb) if it is useful to you.
- Report a bug or request a feature in the issue tracker.
- Ask questions and share use cases in [Discussions](https://github.com/ness-e/Vantadb/discussions).
- Browse every public repository in the [VantaDB organization](https://github.com/orgs/Vantadb/repositories).
