/* ────────────────────────────────────────────────────────────────────────────
   SEMESTER KIT — primitives
   PROVENANCE: dmotheral3-eng/centripetal-semester src/App.jsx, blob 3083bf5d.
     Tile         — lines 262-270, verbatim
     Dot          — lines 272-274, generalised from CourseDot (was ACCT/STAT)
     SectionLabel — lines 276-278, verbatim
     Card         — lines 377-395, lifted OUT of TodayScreen where it was a
                    closure over dropOn/dragKey/collapsed/toggle/DECK_WIDE.
                    Those became props so the card is reusable; the styling,
                    the ⋮⋮ grip, the 10/1.6 uppercase title and the 10px radius
                    are unchanged.
   Every measurement here came off the repo. None was invented.
──────────────────────────────────────────────────────────────────────────── */

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MONO, BODY } from "./tokens";

export function Tile({ T, label, value, sub, accent }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: "18px 16px 14px", flex: 1, minWidth: 150, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: accent || T.accent, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: BODY, fontSize: 12, letterSpacing: 2, color: T.text, textTransform: "uppercase", marginTop: 8 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: T.dim, marginTop: 3 }}>{sub}</div>}
    </div>
  );
}

export function Dot({ T, track }) {
  return <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: track === "alt" ? T.acctTrack : T.statTrack, marginRight: 6, flexShrink: 0 }} />;
}

export function SectionLabel({ T, children }) {
  return <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: T.dim, margin: "18px 0 8px" }}>{children}</div>;
}

export function Card({ T, k, title, children, badge, wide, onDropOn, onDragStartKey }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDropOn && onDropOn(k)}
      style={{ gridColumn: wide ? "1 / -1" : undefined, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden", alignSelf: "start" }}>
      <div
        draggable={Boolean(onDragStartKey)}
        onDragStart={() => onDragStartKey && onDragStartKey(k)}
        style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: collapsed ? "none" : `1px solid ${T.border}`, cursor: onDragStartKey ? "grab" : "default", background: T.elev }}>
        <span style={{ fontFamily: MONO, fontSize: 11, color: T.dim, letterSpacing: -1 }}>⋮⋮</span>
        <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.6, textTransform: "uppercase", color: T.text, fontWeight: 700, flex: 1 }}>{title}</span>
        {badge}
        <button onClick={() => setCollapsed((c) => !c)} aria-label={collapsed ? "Expand" : "Collapse"}
          style={{ background: "none", border: "none", cursor: "pointer", color: T.dim, display: "flex", padding: 0 }}>
          {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>
      </div>
      {!collapsed && <div style={{ padding: 12 }}>{children}</div>}
    </div>
  );
}

/* An empty state is an invitation to act, and in this estate it is also the
   place a missing measurement gets named rather than papered over. */
export function Empty({ T, children }) {
  return <div style={{ fontFamily: MONO, fontSize: 12, color: T.dim, padding: "18px 2px" }}>{children}</div>;
}
