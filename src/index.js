/* ────────────────────────────────────────────────────────────────────────────
   SEMESTER KIT — package entry.

   Re-exports the three source modules. There is NO build step: the "exports"
   map in package.json points straight at src, so what ships is what is here.

   ./tokens is plain JS and resolves under bare node. This entry — and the
   ./Shell and ./primitives subpaths — pull in .jsx and therefore need a
   JSX-aware bundler (Vite, Next, esbuild) on the consuming side.

   Do not edit src/tokens.js, src/Shell.jsx or src/primitives.jsx here. Their
   bytes are provenance-tracked against centripetal-semester and metered by
   fn_semester_theme_drift; to change a token, change it at the source and
   re-lift. See the header of src/tokens.js.
──────────────────────────────────────────────────────────────────────────── */

export * from "./tokens.js";
export { default as Shell } from "./Shell.jsx";
export * from "./primitives.jsx";
