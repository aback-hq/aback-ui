## What changes and why

<!-- The problem this solves, and the smallest change that solves it. -->

## Public API

<!-- New or changed props, exports, tokens, registry names, or CLI flags. Write "None" if there are none. A breaking change needs a migration note in CHANGELOG.md. -->

## Checklist

- [ ] `bun run check` passes (type-check, lint, tests, registry, consumer test).
- [ ] A changed component has tests, including an axe check, and its docs example still runs.
- [ ] Keyboard behaviour and focus were checked by hand for an interactive change.
- [ ] Light and dark themes, and a 375px-wide screen, were checked for a visual change.
- [ ] `bun run build:registry` was run and its output committed, if a component or block changed.
- [ ] CHANGELOG.md is updated for a change a consumer can observe.
- [ ] Code taken or adapted from elsewhere is recorded in `docs/provenance.md`, with its license.
