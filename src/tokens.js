/* ────────────────────────────────────────────────────────────────────────────
   SEMESTER KIT — tokens
   PROVENANCE: lifted byte-identical from dmotheral3-eng/centripetal-semester
   src/App.jsx lines 20–34, blob 3083bf5d3c56569a254aac5a9de081afef3ab451, ref main.
   Read through the master extensions.http door 2026-08-30 03:01Z, seat s_b83e8568.

   The block below is the SOURCE OF TRUTH for this design system and is the
   hashed region. md5 at lift: 071530ffe93af6471edbeca3193ea0cb (585 bytes).

   DO NOT EDIT THE BLOCK BY HAND. Do not re-derive these values from a design
   note — that has already happened once and produced four wrong hexes
   (dim #7C857F, amber #B5822E, red #A8443C, plus a missing elev token).
   To change a token: change it in centripetal-semester, then re-lift and
   re-bank the hash. The drift meter reads RED the moment the two diverge.
──────────────────────────────────────────────────────────────────────────── */

const THEMES = {
  command: {
    bg: "#0A0F0D", surface: "#0F1612", elev: "#141D19", accent: "#2DD4A7",
    border: "#1E2B26", text: "#E8EDEA", dim: "#7A8F85", amber: "#F5A623",
    red: "#E84040", acctTrack: "#2DD4A7", statTrack: "#5EA8F5",
  },
  study: {
    bg: "#F7F6F2", surface: "#FFFFFF", elev: "#FBFAF6", accent: "#0E6B59",
    border: "#E5E4DD", text: "#202623", dim: "#8A918C", amber: "#B9821D",
    red: "#C24040", acctTrack: "#0E6B59", statTrack: "#3A6EA5",
  },
};

const MONO = "'JetBrains Mono', ui-monospace, monospace";
const BODY = "'Inter', system-ui, sans-serif";

/* ── End of the hashed region. Anything below is kit-only and not hashed. ── */

export const THEME_PROVENANCE = {
  repo: "dmotheral3-eng/centripetal-semester",
  path: "src/App.jsx",
  ref: "main",
  blob_sha: "3083bf5d3c56569a254aac5a9de081afef3ab451",
  hashed_lines: "20-34",
  block_md5: "071530ffe93af6471edbeca3193ea0cb",
  block_bytes: 585,
  lifted_at: "2026-08-30T03:01Z",
};

export { THEMES, MONO, BODY };
export default THEMES;
