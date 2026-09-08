# Definition of Done

A standing, project-wide bar that every change must clear before it counts as done. Unlike acceptance criteria, which vary per task and answer "did we build the right thing?", the Definition of Done is the same every time and answers "is this finished to our standard?". Use it as the final gate in `planning-and-task-breakdown`, `incremental-implementation`, and `shipping-and-launch`.

## Definition of Done vs. Acceptance Criteria

| | Acceptance Criteria | Definition of Done |
|---|---|---|
| Scope | Specific to one task or spec | Applies to every increment |
| Changes | Different for each item | Fixed and reused |
| Answers | "Did we build *this thing*?" | "Is it *ready*?" |
| Owner | Defined when planning the task | Defined once for the project |
| Example | "User can reset password via email link" | "Tests pass, no regressions, docs updated" |

The two are complementary. A task is done only when **its** acceptance criteria are met **and** the standing Definition of Done is satisfied. Skipping either leaves work that looks finished but is not.

## The Standing Checklist

Apply this to every change before declaring it done.

### Correctness
- [ ] All acceptance criteria for the task are met
- [ ] Code runs and behaves as intended, verified at runtime, not just compiled or typechecked
- [ ] New behavior is covered by tests that fail without the change and pass with it
- [ ] Existing tests still pass; no regressions introduced
- [ ] Edge cases and error paths are handled, not just the happy path

### Quality
- [ ] Code reveals intent through naming and structure; no comments needed to explain *what* it does
- [ ] No duplicated business logic
- [ ] No dead code, debug output, or commented-out blocks left behind
- [ ] Changes are scoped to the task; no unrelated refactors snuck in
- [ ] Linting and formatting pass

The depth behind these items lives in `code-review-and-quality` (the five-axis review) and `code-simplification` (reducing complexity without changing behavior).

### Integration
- [ ] Change works with the rest of the system, not just in isolation
- [ ] Database migrations, config changes, and feature flags are accounted for
- [ ] Backward compatibility considered for any public interface or API change

### Documentation
- [ ] Public interfaces, APIs, and user-facing behavior are documented
- [ ] Architectural decisions worth preserving are recorded (see `documentation-and-adrs`)
- [ ] Documentation describes the current state in timeless language, not the change history

### Ship-readiness
- [ ] Security implications reviewed for any untrusted input, auth, or data handling (see `security-and-hardening`)
- [ ] Observability in place for new critical paths (logs, metrics, traces) (see `observability-and-instrumentation`)
- [ ] Rollback path exists for anything risky (see `shipping-and-launch`)
- [ ] rollback plan declared explicitly in the task file for features touching production or risky paths (concrete `git revert` steps or a flag-off), with feature flags in place when gradual deployment is required
- [ ] The human has reviewed and approved before merge or deploy

## How to Apply

- **Per task**: confirm the Correctness and Quality sections before checking the task off.
- **Per feature**: confirm Integration and Documentation before considering the feature complete.
- **Per release**: the full checklist is the floor; `shipping-and-launch` adds the deploy-specific gates on top.
- **Per release — post-release**: after releasing, verify in production that the release broke nothing before closing the iteration.
- **Per release — monitoring**: monitor logs, metrics, and error rates as part of that post-release verification.

Tailor the list to the project once, then reuse it unchanged. A Definition of Done that is renegotiated every sprint is not a Definition of Done.

## Red Flags

- "It's done, I just haven't run it yet": unverified work is not done.
- "Tests pass" used as a synonym for done while docs, regressions, or runtime verification are skipped.
- A different bar applied depending on deadline pressure.
- Acceptance criteria treated as the whole bar, with no standing quality floor.
- "Done" declared before human review on changes that need it.

---

# VantaDB — Definition of Ready (DoR)

Applicable to every item admitted to the active backlog (`docs/Backlog.md`). An item is ready to be picked up only when all of the following hold:

- [ ] Unique ID assigned
- [ ] Priority defined (🔴🟠🟡🟢🔵⬜)
- [ ] Involved files known
- [ ] Effort estimated
- [ ] Verified against real code (not assumed)

# VantaDB — Project-specific DoD commands

The standing checklist above applies to every change. VantaDB additionally requires these concrete commands to pass (equivalent to `dev-tools/verify.ps1`):

- [ ] Code compiles: `cargo check` / `tsc --noEmit`
- [ ] Tests pass: `cargo nextest run` / `pytest`
- [ ] Linters pass: `cargo clippy` / `eslint`
- [ ] Docs updated if applicable
- [ ] Task registered in `docs/avance/` (domain file, e.g. `activo/core-engine.md`) when completed
- [ ] Changelog updated if user-visible change (`docs/CHANGELOG.md` via git-cliff)
- [ ] Change is shippable: PR opened with green CI, or merged to `main` (Regla 7) — to merge a main-branch change, open a PR and get CI green first; task ends when the work can ship, not when it commits

# VantaDB — Feature shippable (trunk-based)

Formaliza el criterio de "qué es feature shippable" en trunk-based (REPORTE-FINAL 2026-08-10 §3.4-11): en develop → PR a main, la decisión de shippear no queda al juicio humano. Una feature es **shippable** solo si cumple el umbral completo — un solo item faltante la mantiene en `develop`.

Aplica como gate de merge a `main` (Regla 7), además del standing checklist y los comandos del DoD VantaDB de arriba. El checklist por feature es:

- [ ] **(a) Tests** — unit tests que fallan sin la feature y pasan con ella; tests de integración donde aplique (backend, bindings, red)
- [ ] **(b) Docs** — API/uso actualizadas en el mismo PR (Regla 3): `docs/api/`, README, docstrings de API pública; ADR registrado si hay decisión arquitectónica
- [ ] **(c) Monitoring/observabilidad** — log o métrica que evidencie que la feature funciona en producción (no "se ve que anda"); critical paths con logs estructurados o métricas
- [ ] **(d) Rollback viable** — revert limpio (`git revert` del commit/PR) o flag-off con feature flag; sin migración irreversible que impida el revert
- [ ] **(e) Sin caballos sueltos** — toda deuda conocida (stub, shortcut, edge case diferido) está documentada y con ID de backlog; deuda silenciosa = no shippable

**Red flag:** "shippear y ver" sin (c) o (d) — si no se puede observar ni revertir, no es shippable, es un experimento.

# VantaDB — Capa determinista (barreras infranqueables, copia de RULES.md — north star inmutable, no se edita allá)

Fuente: `.opencode/task-system/RULES.md` §"Capa Determinista" + §"Rust Safety Rules". Copia + cita (D13): si diverge, manda RULES.md.

- [ ] **(0) Output Validation (LLM05)** — antes de escribir cualquier archivo con shell/SQL/Python/HTML/paths, validar con `campaign_validate_output`
- [ ] **(1)** `cargo clippy --all-targets -- -D warnings` — cero advertencias
- [ ] **(2)** `cargo fmt --check` — formato correcto
- [ ] **(3)** `cargo nextest run --profile audit --workspace --build-jobs 2` — tests pasan
- [ ] **(4)** Si el diff contiene `unsafe` → `cargo +nightly miri test` + `// SAFETY:` con invariante documentado (sin `#[allow(unsafe_code)]` sin approval en review)
- [ ] **(5)** Si el componente es crítico (parser, serializador, WAL, protocolo de red) → marcar para fuzzing + quickcheck/proptest en CI
- [ ] **Rust safety** — `Rc<T>` prohibido en multi-hilo (usar `Arc<T>`); sin `unwrap()` en producción con datos de usuario o E/S (usar `?` o `expect("contexto")`)

# VantaDB — Versioned DoD Thresholds v1-v4 (ratchet, copia de RULES.md §6)

Current: **DoD v1** (baseline). Regla ratchet: **solo sube, nunca baja; no se puede saltar una versión** (v1+v2 aplican cuando NEXT_DOD_VERSION=v2; a v3 solo tras 5 tareas consecutivas estables en v2).

- [ ] **v1 (baseline)** — Capa determinista (0-5) de arriba + Pre-commit gate (7 ítems): DoD aplicado · security checklist (si toca datos/auth) · performance checklist (si camino crítico) · testing checklist (si lógica nueva) · ponytail ladder aplicada · tests pasan · documentación afectada actualizada
- [ ] **v2 (coverage)** — `cargo nextest run --coverage` mínimo 70% en módulos nuevos; security checklist obligatorio (no condicional)
- [ ] **v3 (hardening)** — fuzzing obligatorio en todo parser/serializer; `cargo audit` sin warnings; Miri en todo `unsafe`
- [ ] **v4 (enterprise)** — `cargo deny check` sin advisories; 90% coverage mínimo; review externo obligatorio antes de merge

# VantaDB — Progreso checklist (copia de skill `progreso` Trigger 1 + DoD pre-commit)

Fuente: `.opencode/skills/progreso/SKILL.md` §§ Trigger 1.A-G + "Definition of Done". Al completar una tarea, antes del cierre:

- [ ] **A. Doc impact** — por cada archivo modificado, verificado su doc (`src/sdk.rs`→`docs/api/EMBEDDED_SDK.md`, `src/config.rs`/`cli.rs`→`CONFIGURATION.md`, `src/error.rs`→`EMBEDDED_SDK.md` VantaError, `vantadb-python/src/lib.rs`→`PYTHON_SDK.md`, `src/cli_server.rs`→`HTTP_API.md`, `vantadb-mcp/src/`→`MCP.md`, `vantadb-wasm/src/lib.rs`→`vantadb-ts/README.md`)
- [ ] **B. Task data** — ID, nombre, fecha, objetivo, archivos, resultado extraídos
- [ ] **C. Task sources** — fila ✅ **eliminada** de `docs/Backlog.md` (no tachada; ❌→ también eliminada + movida a `docs/avance/historial/backlog-history.md`); plan file status + recitation actualizados
- [ ] **D. Avance (dominio)** — entrada `### <ID>: desc` (Fecha/Objetivo/Resultado/Commit) en el archivo de dominio (`activo/core-engine.md`, `bindings.md`, `web-frontend.md`, `ci-cd.md`, `operaciones.md`, `desktop.md`, `auditoria/seguridad.md`, `dependencias.md`, `decisiones/wontfix.md`, `investigaciones.md`, `historial/no-ops.md`, `meta.md`); milestone → nota en `meta.md`
- [ ] **D2. Archive plans** — al cerrar el plan: retrospectiva Start/Stop/Continue + 1 acción medible; `git mv` plan + `.budget.json` a `docs/plans/archive/`; sin `.budget.json` huérfanos; nota en `meta.md`
- [ ] **E. CHANGELOG** — solo cambios user-visible (features, breaking, bugfix público, CLI); no cada tarea
- [ ] **F. Doc coverage** — `pwsh scripts/check-avance-coverage.ps1` + `pwsh scripts/validate-docs-coverage.ps1` limpios
- [ ] **G. Notify + memoria** — Backlog/plan/avance reportados; decisión relevante → `campaign_memory_write(file="decisions", entry="<tema> | <decisión> | ref: <ruta:línea>")` (fecha la antepone el server)
- [ ] **Código** — compila + tests pasan (`cargo nextest run --profile audit --workspace --build-jobs 2`); **certify gate recomendado:** `skill unified-review --mode certify --profile vantadb`
