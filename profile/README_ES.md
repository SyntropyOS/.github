[English](README.md) | Español

![VantaDB](org-mark.gif#gh-dark-mode-only)
![VantaDB](org-mark-light.gif#gh-light-mode-only)

<p align="center"><strong>Infraestructura de memoria persistente local para apps, espacios de trabajo de desarrolladores y agentes autónomos.</strong></p>

<p align="center"><a href="https://vantadb.vercel.app">🌐 Sitio web</a> · <a href="https://github.com/ness-e/Vantadb">📦 Motor core</a> · <a href="https://github.com/ness-e/Vantadb/discussions">💬 Discusiones</a> · <a href="mailto:eros.messy@gmail.com">📧 Contacto</a></p>

VantaDB desarrolla componentes de memoria embebidos que se ejecutan donde ya están tus datos: búsqueda vectorial, de texto completo e híbrida para aplicaciones, dispositivos, herramientas locales y agentes, sin servicios adicionales que operar. Tomamos como modelo la memoria del cerebro — una memoria de trabajo rápida y una memoria duradera que consolida lo importante — implementada con persistencia respaldada por WAL y recuperación híbrida nativa.

## 🚀 Empieza aquí

| Módulo | Objetivo | Técnica | Docs |
|---|---|---|---|
| **Motor core** | Conserva la memoria del agente en la máquina que corre tu app | Rust, in-process; write-ahead log (WAL) con CRC32C; BM25 más HNSW fusionados por Reciprocal Rank Fusion (RRF) | [Arquitectura](https://github.com/ness-e/Vantadb/blob/main/docs/architecture/ARCHITECTURE.md) |
| **Pipeline de memoria** | Eleva recuerdos de notas sueltas a conocimiento consolidado | Cuatro etapas (L0-L3), agnóstico al host, portado de TDAM | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/VANTA_MEMORY.md) |
| **SDK Python** | Guarda y busca memoria desde Python en una sola llamada rankeada | Bindings PyO3; expiración TTL más `supersede` atómico; `pip install vantadb-py` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/PYTHON_SDK.md) |
| **SDK TypeScript** | La misma memoria en Node, Bun, Deno y navegadores | Motor WASM; `npm i vantadb`; exporta e importa JSONL | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/TS_SDK.md) |
| **Bindings Node** | Corre el motor a velocidad nativa dentro de Node.js | Bindings napi-rs; directorio persistente o `:memory:` | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/NODE_SDK.md) |
| **Build WASM** | Lleva el motor completo dentro de una página web | 1.35 MB raw; persistencia OPFS en el navegador | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/WASM_API.md) |
| **Servidor MCP** | Da herramientas de memoria a cualquier cliente Model Context Protocol (MCP) sin red que configurar | stdio JSON-RPC 2.0; lo lanzan Claude Code, Cursor, OpenCode | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/MCP.md) |
| **Servidor local** | Consulta el motor por HTTP desde cualquier lenguaje | `vantadb-server`; API REST en localhost | [Docs](https://github.com/ness-e/Vantadb/blob/main/docs/api/HTTP_API.md) |
| **Proxy LLM** | Registra memoria del tráfico OpenAI/Anthropic sin tocar tu código | Wire proxy transparente; APIs Chat más Messages y Responses | [Código](https://github.com/ness-e/Vantadb/tree/main/vanta-proxy) |
| **Vanta Studio** | Inspecciona registros, esquemas y consultas en una ventana local | App de escritorio Tauri v2; una UI, tres backends | [Docs](https://github.com/ness-e/Vantadb/blob/main/desktop/README.md) |
| **Providers e integraciones** | Conecta memoria a LangChain, LlamaIndex, CrewAI, Mem0, Ollama, LiteLLM | Paquetes adaptadores en `integrations/` y `providers/` | [Código](https://github.com/ness-e/Vantadb/tree/main/integrations) |
| **Web y docs** | Lee benchmarks, guías y el quickstart | Sitio Next.js | [Sitio](https://vantadb.vercel.app) |

## 🤝 Participa

VantaDB es open source bajo la Apache License 2.0.

- Dale una estrella al [repo core](https://github.com/ness-e/Vantadb) si te es útil.
- Reporta un bug o pide una feature en el issue tracker.
- Pregunta y comparte casos de uso en [Discusiones](https://github.com/ness-e/Vantadb/discussions).
- Explora todos los repos públicos en la [organización VantaDB](https://github.com/orgs/Vantadb/repositories).
