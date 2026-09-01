# semester-kit

Shared UI kit lifted from centripetal-semester. Tokens are byte-identical to the source and metered by fn_semester_theme_drift.

## Install

Consumed as a git dependency pinned to a commit — the same pattern semester uses for `@centripetal/identity`:

```
npm install github:dmotheral3-eng/semester-kit#<sha>
```

Pin a sha, never a branch.

## Import

```js
import { THEMES, MONO, BODY, THEME_PROVENANCE } from "@centripetal/semester-kit/tokens";
import Shell from "@centripetal/semester-kit/Shell";
import { Tile, Dot, SectionLabel, Card, Empty } from "@centripetal/semester-kit/primitives";
```

`@centripetal/semester-kit` (the root entry) re-exports all three.

There is no build step — `exports` points straight at `src`. `./tokens` is plain JS and resolves under bare node; the root entry, `./Shell` and `./primitives` are JSX and need a JSX-aware bundler (Vite, Next, esbuild) on the consuming side.

## Do not edit the tracked sources

`src/tokens.js`, `src/Shell.jsx` and `src/primitives.jsx` are provenance-tracked against centripetal-semester. To change a token, change it at the source and re-lift — see the header of `src/tokens.js`.
