# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

The repository is currently empty of application code — only `.agent/`, `.claude/`, and `.superpowers/` meta directories exist. No build, lint, or test tooling has been chosen yet. When the first code lands, update this file with the actual commands and an architecture overview; until then, defer those decisions to the user rather than inventing them.

## Required reading before writing code

`.agent/principles.md` is binding for every change in this repo. Read it before drafting code, designing a module, or proposing a refactor. The principles below are summarized so they stay in mind, but the file in `.agent/principles.md` is the source of truth.

1. **Surface assumptions; ask before guessing.** If inputs are ambiguous, list the assumptions and ask. Never paper over uncertainty with `[TBD]` or invented defaults.
2. **Minimum viable change.** Touch only what the acceptance criteria require. No incidental refactors, no adjacent-code cleanups. Flag scope creep and ask.
3. **YAGNI.** Build for the requirements you have. No "just in case" parameters, no base classes for a single implementation, no config knobs without a current consumer.
4. **No redundant comments.** Default to none. Comment only when the *why* is non-obvious. Never restate what the code does; never reference the current task or callers.
5. **DRY only on real duplication.** Extract when the same logic — same inputs, same behavior, same reason to change — appears in multiple places. Coincidental shape is not duplication; wait for the third occurrence when unsure.
6. **SOLID for new code.** One reason to change per unit; extend by adding code, not editing stable code; subtypes must drop in cleanly; keep interfaces small; depend on inputs and abstractions, not globals or concrete types.

## How these principles change Claude's default behavior

- Prefer asking one targeted question over guessing a default, even if it slows the turn.
- Reject the urge to "tidy up while we're here." If a fix needs a refactor to land cleanly, propose it and wait.
- Do not add comments that narrate the code or reference the task; the commit message is the right place for that context.
- Do not introduce abstractions, interfaces, or extension points until a second concrete use case exists in the repo.
