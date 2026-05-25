# Principles

## 1. Surface assumptions; ask before guessing

When inputs are ambiguous, list the assumptions you would otherwise silently make and ask. Do not paper over uncertainty with `[TBD]` or invented defaults. A spec drafted on guesses is worse than no spec.

## 2. Minimum viable change

Touch the minimum needed to satisfy the acceptance criteria. No incidental refactors, no "while we're here" cleanups, no reformatting adjacent code. If a change needs scope creep, flag it and ask.

## 3. YAGNI (you aren't gonna need it)

Build for the requirements you have, not the ones you might. No optional parameters "in case," no base classes for a single implementation, no config knobs without a current consumer. Add flexibility when a real use case appears — by then you'll know the right shape.

## 4. No redundant comments

Default to none. Write a comment only when the *why* is non-obvious — a hidden constraint, a workaround, behavior that would surprise a reader. Never restate what the code does, and never reference the current task or callers; that belongs in the commit, not the source.

## 5. Don't repeat yourself (DRY)

When the *same* logic — same inputs, same behavior, same reason to change — appears in more than one place, extract it. Do not extract code that merely looks similar; coincidental shape is not duplication. When in doubt, leave it duplicated until the third occurrence makes the pattern clear.

## 6. Follow SOLID for new code

When designing new modules, classes, or functions, follow SOLID. Each unit gets one reason to change; extend behavior by adding code, not by editing stable code; subtypes drop in for their parents without surprises; keep interfaces small and focused on what callers actually use; and depend on inputs and abstractions, not on globals or concrete types.
