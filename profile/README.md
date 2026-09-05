English | [Español](README_ES.md)

![VantaDB](org-mark.gif#gh-dark-mode-only)
![VantaDB](org-mark-light.gif#gh-light-mode-only)

<p align="center"><strong>Persistent local memory infrastructure for apps, developer workspaces, and autonomous agents.</strong></p>

<p align="center"><a href="https://vantadb.vercel.app">🌐 Website</a> · <a href="https://github.com/ness-e/Vantadb">📦 Core engine</a> · <a href="https://github.com/ness-e/Vantadb/discussions">💬 Discussions</a> · <a href="mailto:eros.messy@gmail.com">📧 Contact</a></p>

VantaDB builds embedded memory components that run where your data already lives: vector, full-text, and hybrid search for applications, devices, local tools, and agents, with no additional services to operate. We model them on brain memory — fast working memory plus durable memory that consolidates what matters — implemented with WAL-backed persistence and native hybrid retrieval.

## 🚀 Start here

| Module | Objective | Technical | Docs |
|---|---|---|---|
| **Core engine** | Keep agent memory on the machine that runs your app | Rust, in-process; write-ahead log (WAL) with CRC32C; BM25 plus HNSW fused by Reciprocal Rank Fusion (RRF) | [Architecture](https://github.com/ness-e/Vantadb/blob/main/docs/architecture/ARCHITECTURE.md) |
| **Memory pipeline** | Graduate memories from scratch notes to consolidated knowledge | Four stages (L0-L3), host-neutral, ported from TDAM | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/VANTA_MEMORY.md) |
| **Python SDK** | Store and search memory from Python with one ranked call | PyO3 bindings; TTL expiry plus atomic `supersede`; `pip install vantadb-py` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/PYTHON_SDK.md) |
| **TypeScript SDK** | Run the same memory in Node, Bun, Deno, and browsers | WASM engine; `npm i vantadb`; JSONL export and import | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/TS_SDK.md) |
| **Node bindings** | Run the engine at native speed inside Node.js | napi-rs bindings; persistent directory or `:memory:` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/NODE_SDK.md) |
| **WASM build** | Ship the full engine inside a web page | 1.35 MB raw; OPFS persistence in the browser | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/WASM_API.md) |
| **MCP server** | Give any Model Context Protocol (MCP) client memory tools with zero network setup | stdio JSON-RPC 2.0; spawned by Claude Code, Cursor, OpenCode | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/MCP.md) |
| **Local server** | Query the engine over HTTP from any language | `vantadb-server`; REST API on localhost | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/HTTP_API.md) |
| **LLM proxy** | Record memory from OpenAI/Anthropic traffic without touching app code | Transparent wire proxy; Chat plus Messages and Responses APIs | [Code](https://github.com/ness-e/Vantadb/tree/main/vanta-proxy) |
| **Vanta Studio** | Inspect records, schemas, and queries in a local window | Tauri v2 desktop app; one UI, three backends | [Docs](https://github.com/ness-e/Vantadb/blob/main/desktop/README.md) |
| **Providers & integrations** | Plug memory into LangChain, LlamaIndex, CrewAI, Mem0, Ollama, LiteLLM | Adapter packages in `integrations/` and `providers/` | [Code](https://github.com/ness-e/Vantadb/tree/main/integrations) |
| **Web & docs** | Read benchmarks, guides, and the quickstart | Next.js site | [Site](https://vantadb.vercel.app) |

## 🤝 Get involved

VantaDB is open source under the Apache License 2.0.

- Star the [core repo](https://github.com/ness-e/Vantadb) if it is useful to you.
- Report a bug or request a feature in the issue tracker.
- Ask questions and share use cases in [Discussions](https://github.com/ness-e/Vantadb/discussions).
- Browse every public repository in the [VantaDB organization](https://github.com/orgs/Vantadb/repositories).
