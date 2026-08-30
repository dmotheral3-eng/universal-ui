/* ────────────────────────────────────────────────────────────────────────────
   SEMESTER KIT — Shell
   PROVENANCE: dmotheral3-eng/centripetal-semester src/App.jsx lines 2243-2406,
   blob 3083bf5d, ref main. Read live 2026-08-30.

   WHAT IS LOAD-BEARING AND MUST NOT DRIFT — every number came off the repo:
     · icon rail 62px wide, 1px right border, 16px 0 padding, 4px gap
     · brand chip 38x38, radius 8, accent at 1a alpha, 18px bottom margin
     · nav button 50x50, radius 8, active = accent 14 alpha fill,
       accent 44 alpha border, 3px solid accent LEFT border, icon 17px,
       label MONO 8px letter-spacing 0.4
     · theme toggle pinned with marginTop auto, 40x40
     · header 52px tall, 1px bottom border, 0 22px padding, 12px gap
     · wordmark MONO 13px letter-spacing 4 weight 700 in accent
     · screen title MONO 27px weight 700 letter-spacing 7 uppercase,
       18px bottom margin  <-- the signature of this system
     · body scroll region padding 22px 26px
     · footer 36px, 1px top border, centred, 12px

   THE 224px TEXT RAIL IS THE KNOWN WRONG ANSWER. A previous adoption built it
   from a design note instead of the source and got a wide text rail. It is
   62px and it is icons.
──────────────────────────────────────────────────────────────────────────── */

import { Sun, Moon } from "lucide-react";
import { THEMES, MONO, BODY } from "./tokens";

export default function Shell({
  mode = "study",
  onToggleMode,
  nav = [],
  screen,
  onScreen,
  titles = {},
  brandIcon: BrandIcon,
  wordmark = "",
  headerRight = null,
  footer = null,
  children,
}) {
  const T = THEMES[mode] || THEMES.study;

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", background: T.bg, fontFamily: BODY, transition: "background .25s" }}>
      <nav style={{ width: 62, flexShrink: 0, borderRight: `1px solid ${T.border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 4, background: T.bg }}>
        {BrandIcon && (
          <div style={{ width: 38, height: 38, borderRadius: 8, background: T.accent + "1a", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
            <BrandIcon size={19} color={T.accent} />
          </div>
        )}
        {nav.map((n) => {
          const active = screen === n.key;
          return (
            <button key={n.key} onClick={() => onScreen(n.key)} title={n.label}
              style={{ width: 50, height: 50, borderRadius: 8, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3,
                background: active ? T.accent + "14" : "transparent",
                border: active ? `1px solid ${T.accent}44` : "1px solid transparent",
                borderLeft: active ? `3px solid ${T.accent}` : "3px solid transparent",
                color: active ? T.accent : T.dim }}>
              <n.icon size={17} />
              <span style={{ fontFamily: MONO, fontSize: 8, letterSpacing: 0.4 }}>{n.label}</span>
            </button>
          );
        })}
        <button onClick={onToggleMode} title="Toggle theme"
          style={{ marginTop: "auto", width: 40, height: 40, borderRadius: 8, border: `1px solid ${T.border}`, background: T.surface, color: T.dim, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {mode === "command" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </nav>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 52, flexShrink: 0, borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", padding: "0 22px", gap: 12 }}>
          {BrandIcon && <BrandIcon size={15} color={T.accent} />}
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: 4, color: T.accent, fontWeight: 700 }}>{wordmark}</div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>{headerRight}</div>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: "22px 26px" }}>
          <div style={{ fontFamily: MONO, fontSize: 27, fontWeight: 700, letterSpacing: 7, color: T.text, textTransform: "uppercase", marginBottom: 18 }}>
            {titles[screen] || ""}
          </div>
          {typeof children === "function" ? children(T) : children}
        </div>

        {footer && (
          <footer style={{ height: 36, flexShrink: 0, borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: T.dim }}>
            {footer}
          </footer>
        )}
      </main>
    </div>
  );
}
