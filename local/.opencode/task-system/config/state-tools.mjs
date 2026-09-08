// State machine C0 — per-state tool enforcement (PLAN→ACT→VERIFY→COLLATERAL→RESEARCH→EVALUATE→REVIEW→ACCEPT→CLOSE→STALL).
// @deprecated legacy — espejo funcional. Canónico v2: `.opencode/task-system/C0-unified.mjs` (+ `.opencode/task-system/C0-unified.md`).
// Este archivo SIGUE siendo el runtime importado (C0-unified.mjs lo re-exporta exacto — cero divergencia por construcción).
// No editar listas acá sin regenerar C0-unified (parity-check.mjs lo enforcea).
// Hierarchy of state definitions:
//   1. C0-unified.mjs           → C0 v2 canónica absorbente (runtime + transiciones + perfiles + BUDGET + DoD + Gates)
//   2. state-tools.mjs (this file, legacy) → C0 enforcement (runtime vía campaign-server.mjs, re-exportado por C0-unified.mjs)
//   1. state-tools.mjs        → C0 enforcement (this file, runtime via campaign-server.mjs)
//   2. workflows/*.json       → per-task-type phase templates, consumed ONLY by campaign_classify_workflow / campaign_detect_task_type.
//      Their states (localizing, implementing, ...) do NOT pass through enforce_state — they are classification output, not enforcement input.
//   3. prompts/iter-loop-tools.md → prose spec of C0 (PLAN→ACT→VERIFY→COLLATERAL→EVALUATE→REVIEW→ACCEPT→CLOSE) for the agent.
//   4. enforcement/session-tracking.ps1 → telemetry, not a state machine.
const STATE_TOOLS = {
  PLAN: {
    allowed: ["read", "grep", "glob", "codegraph_explore", "campaign_*", "skill", "bash", "websearch", "webfetch", "argus_*", "metasearchmcp_*"],
    denied: ["edit", "write", "campaign_verify_cmd", "cargo-mcp_*", "rust-analyzer-mcp_*"],
    note: "sólo lectura e investigación",
  },
  ACT: {
    // Scope enforcement IMPLEMENTADO vía tool MCP `campaign_validate_scope`.
    // El agente DEBE llamarlo ANTES de cualquier edit/write en ACT state.
    // Output Validation LLM05 IMPLEMENTADO vía `campaign_validate_output`.
    // El agente DEBE llamarlo ANTES de cualquier edit/write/bash que genere contenido.
    // validateAction recibe (state, toolName, toolArgs?) — 3er param opcional (D14, backward-compat).
    // para validar scope/output, el agente usa
    // campaign_validate_scope(taskId, filePath) + campaign_validate_output(content, type).
    // Runtime enforcement en campaign_enforce_state (D14): max_edit_lines + max_files_per_state
    // como bloques reales (config-driven vía C0_CHECK_CONFIG, espejo de estos valores).
    allowed: ["edit", "write", "bash", "campaign_*", "read", "grep", "glob", "codegraph_explore", "skill", "cargo-mcp_*", "rust-analyzer-mcp_*"],
    denied: ["delete"],
    max_edit_lines: 100,
    max_files_per_state: 5,
    note: "implementación activa — scope enforcement vía campaign_validate_scope; output validation vía campaign_validate_output",
  },
  VERIFY: {
    allowed: ["bash", "campaign_verify_cmd", "campaign_*", "cargo-mcp_*", "read", "grep"],
    denied: ["edit", "write"],
    note: "sólo verificación — nada que cambie archivos",
  },
  COLLATERAL: {
    allowed: ["bash", "read", "grep", "glob", "codegraph_explore", "campaign_*"],
    denied: ["edit", "write"],
    note: "diagnóstico de errores colaterales",
  },
  RESEARCH: {
    allowed: ["read", "grep", "glob", "codegraph_explore", "websearch", "webfetch", "argus_*", "metasearchmcp_*", "campaign_*", "bash"],
    denied: ["edit", "write"],
    note: "sólo investigación, sin cambios (bash read-only permitida; classifyBashWrite bloquea writes)",
  },
  EVALUATE: {
    allowed: ["read", "grep", "codegraph_explore", "campaign_*"],
    denied: ["edit", "write", "bash"],
    note: "auto-revisión cognitiva",
  },
  REVIEW: {
    allowed: ["read", "grep", "codegraph_explore", "campaign_*", "skill"],
    denied: ["edit", "write", "bash"],
    note: "revisión de código, sin cambios",
  },
  ACCEPT: {
    allowed: ["campaign_*", "skill", "read", "bash"],
    denied: ["edit", "write"],
    note: "aceptación, no implementación",
  },
  CLOSE: {
    allowed: ["bash", "campaign_*", "skill", "read"],
    denied: ["edit", "write"],
    note: "commit y cierre",
  },
  STALL: {
    allowed: ["campaign_*", "read"],
    denied: ["edit", "write", "bash", "cargo-mcp_*", "rust-analyzer-mcp_*"],
    note: "bloqueado — sólo lectura y reporte",
  },
}

function getAllowedTools(state) {
  const entry = STATE_TOOLS[state]
  if (!entry) return { allowed: [], denied: [], note: "estado desconocido" }
  return entry
}

function validateAction(state, toolName, toolArgs) {
  const entry = STATE_TOOLS[state]
  if (!entry) return { allowed: false, reason: `estado '${state}' no existe en STATE_TOOLS` }
  // toolArgs opcional (D14): reservado para checks context-aware futuros; hoy no altera el veredicto
  // (aditivo — llamadas existentes validateAction(state, tool) siguen intactas).

  const denied = entry.denied.some(p => matchPattern(toolName, p))
  if (denied) return { allowed: false, reason: `'${toolName}' está denegado en estado ${state}` }

  const allowed = entry.allowed.some(p => matchPattern(toolName, p))
  if (!allowed) return { allowed: false, reason: `'${toolName}' no está en la lista de permitidas para estado ${state}. Permitidas: ${entry.allowed.join(", ")}` }

  return { allowed: true, reason: `ok` }
}

function matchPattern(tool, pattern) {
  if (pattern.endsWith("*")) {
    const prefix = pattern.slice(0, -1)
    return tool.startsWith(prefix)
  }
  return tool === pattern
}

export { STATE_TOOLS, getAllowedTools, validateAction }
