# CONTEXT_ENGINEERING.md — 3-Layer Architecture & Token Budget

## Core Law
> Context is a finite attention budget. Every token competes with every other token.
> More context ≠ better. Goal: smallest set of high-signal tokens = maximum output quality.

## The 3 Layers
| Layer | File(s) | Budget | Loaded when |
|---|---|---|---|
| 1. Router | `AGENTS.md`, `CLAUDE.md` | ≤50 lines each | Every session start |
| 2. Agent Brain | `context/AGENT.md` | ≤100 lines | Every session start |
| 3. Deep Reference | `context/LAWS.md` | unlimited | Only when deep facts needed (brand, history, location) |

## Cognitive Identity Layer
| File | Purpose |
|---|---|
| `context/USER.md` | Who the operator is (Christ) + communication prefs |
| `context/SOUL.md` | Agent temperament + Ponytail philosophy |
| `context/IDENTITY.md` | Agent role + tool boundaries |
| `context/SKILL_INDEX.md` | Skill routing table |

## Token Budgets (chars/4 heuristic)
- Router files: ≤ ~500 tokens (50 lines).
- Agent Brain: ≤ ~1000 tokens (100 lines).
- Keep dynamic state (branch, build status) at the **bottom** of AGENT.md; keep instructions at the top.

## Audit Instrument
```
python3 /home/christ/.config/opencode/skills/context-engineer-por/scripts/token_audit.py audit /home/christ/projects/hosanna-school
```
Run before ending any session that touched context files. Fix over-budget files (trim, never silently ignore).

## Session Hygiene
- **Byte-Stable Caching**: System + Router logic stay at the top of context; push dynamic variables down.
- **Subagent Isolation**: For heavy web/file reading, spawn subagents and force bullet/JSON returns — never raw HTML.
- **Self-Healing**: If you see a Compacting/Compressing system message → re-read `context/AGENT.md`.
- **Cross-tool**: Agent Brain + Deep Reference are identical across claude/codex/agy/opencode. Router file name changes per tool (`CLAUDE.md` / `.cursorrules` / `AGENTS.md` / `.windsurfrules` / `GEMINI.md`).
