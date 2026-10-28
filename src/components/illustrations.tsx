import { useId, type JSX } from "react";
import type { ServiceId } from "../data/content";

const INK = "#0b0b15";
const ORANGE = "#ff3300";
const LINE = "#c9c9c3";
const BASE = "#b9b9b2";
const MONO = "Geist Mono Variable, Geist Mono, ui-monospace, monospace";
const SANS = "Geist Variable, Geist, ui-sans-serif, sans-serif";

type Node = { x: number; y: number; label: string; accent?: boolean };

/* ---------- Hero: one team connecting six services to your business ---------- */

const HERO_LABEL = "Diagram: one team connecting software, cloud, network, data, security and training to your business";

export function HeroDiagram() {
  const nodes: Node[] = [
    { x: 60, y: 70, label: "SOFTWARE", accent: true },
    { x: 380, y: 70, label: "CLOUD" },
    { x: 20, y: 200, label: "NETWORK" },
    { x: 420, y: 200, label: "DATA", accent: true },
    { x: 60, y: 330, label: "SECURITY" },
    { x: 380, y: 330, label: "TRAINING", accent: true },
  ];
  const lines = [
    "M120 110V150H240V196",
    "M440 110V150H320V196",
    "M140 220H200",
    "M420 220H360",
    "M120 330V290H240V244",
    "M440 330V290H320V244",
  ];
  return (
    <svg viewBox="0 0 560 440" width="100%" role="img" aria-label={HERO_LABEL} className="only-wide">
      <g fill="none" stroke={BASE} strokeWidth={1.25}>
        {lines.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={ORANGE} strokeWidth={1.75}>
        <path className="flow" d={lines[0]} />
        <path className="flow" style={{ animationDelay: "-0.7s" }} d={lines[3]} />
        <path className="flow" style={{ animationDelay: "-1.2s" }} d={lines[5]} />
      </g>
      <rect x="200" y="196" width="160" height="48" rx="2" fill={INK} />
      <rect className="blink" x="216" y="217" width="6" height="6" fill={ORANGE} />
      <text x="232" y="225" fontFamily={SANS} fontSize="15" fontWeight="600" fill="#ffffff">
        Your business
      </text>
      <g fontFamily={MONO} fontSize="13" fontWeight="500" letterSpacing="0.06em" fill={INK}>
        {nodes.map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width="120" height="40" rx="2" fill="#ffffff" stroke={LINE} />
            <rect x={n.x + 14} y={n.y + 17} width="6" height="6" fill={n.accent ? ORANGE : INK} />
            <text x={n.x + 30} y={n.y + 25}>
              {n.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function HeroDiagramCompact() {
  const top: Node[] = [
    { x: 0, y: 10, label: "SOFTWARE", accent: true },
    { x: 121, y: 10, label: "CLOUD" },
    { x: 242, y: 10, label: "NETWORK", accent: true },
  ];
  const bottom: Node[] = [
    { x: 0, y: 254, label: "SECURITY" },
    { x: 121, y: 254, label: "DATA", accent: true },
    { x: 242, y: 254, label: "TRAINING" },
  ];
  const lines = [
    "M54 46V90H140V127",
    "M175 46V127",
    "M296 46V90H210V127",
    "M54 254V210H140V173",
    "M175 254V173",
    "M296 254V210H210V173",
  ];
  return (
    <svg viewBox="0 0 350 300" width="100%" role="img" aria-label={HERO_LABEL} className="only-narrow">
      <g fill="none" stroke={BASE} strokeWidth={1.25}>
        {lines.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={ORANGE} strokeWidth={1.75}>
        <path className="flow" d={lines[0]} />
        <path className="flow" style={{ animationDelay: "-0.7s" }} d={lines[4]} />
        <path className="flow" style={{ animationDelay: "-1.2s" }} d={lines[2]} />
      </g>
      <rect x="75" y="127" width="200" height="46" rx="2" fill={INK} />
      <rect className="blink" x="114" y="147" width="6" height="6" fill={ORANGE} />
      <text x="130" y="155" fontFamily={SANS} fontSize="15" fontWeight="600" fill="#ffffff">
        Your business
      </text>
      <g fontFamily={MONO} fontSize="13" fontWeight="500" letterSpacing="0.03em" fill={INK}>
        {[...top, ...bottom].map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width="108" height="36" rx="2" fill="#ffffff" stroke={LINE} />
            <rect x={n.x + 10} y={n.y + 15} width="6" height="6" fill={n.accent ? ORANGE : INK} />
            <text x={n.x + 22} y={n.y + 23}>
              {n.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- ERPNext workspace ---------- */

const ERP_LABEL = "Illustration of an ERPNext workspace with sales, accounting, inventory, HR, CRM and projects modules";
const MODULES = ["Sales", "Accounting", "Inventory", "HR", "CRM", "Projects"];

export function ErpWindow() {
  const bars = [
    [196, 230], [232, 250], [268, 200], [304, 240], [340, 190],
    [376, 215], [412, 175], [448, 205], [484, 165], [520, 185],
  ];
  return (
    <svg viewBox="0 0 600 400" width="100%" role="img" aria-label={ERP_LABEL} className="only-wide">
      <rect x="0.5" y="0.5" width="599" height="399" rx="2" fill="#15161f" stroke="#2a2b36" />
      <path d="M0.5 40.5H599.5M160.5 40.5V399.5" stroke="#2a2b36" />
      {[18, 32, 46].map((x) => (
        <rect key={x} x={x} y="16" width="8" height="8" fill="#2a2b36" />
      ))}
      <text x="72" y="25" fontFamily={MONO} fontSize="13" fontWeight="500" letterSpacing="0.06em" fill="#9a9ba3">
        ERPNEXT
      </text>
      <g fontFamily={SANS} fontSize="15" fill="#9a9ba3">
        <rect x="8" y="98" width="144" height="36" rx="2" fill="#1f202b" />
        <rect x="20" y="113" width="6" height="6" fill={ORANGE} />
        {MODULES.map((m, i) => (
          <text key={m} x="36" y={80 + i * 41} fill={i === 1 ? "#ffffff" : undefined}>
            {m}
          </text>
        ))}
      </g>
      <g fill="#1f202b">
        <rect x="184" y="64" width="120" height="68" rx="2" />
        <rect x="320" y="64" width="120" height="68" rx="2" />
        <rect x="456" y="64" width="120" height="68" rx="2" />
      </g>
      <g fill="#2a2b36">
        <rect x="200" y="82" width="48" height="6" />
        <rect x="200" y="100" width="80" height="12" />
        <rect x="336" y="82" width="40" height="6" />
        <rect x="336" y="100" width="72" height="12" />
        <rect x="472" y="82" width="56" height="6" />
        <rect x="472" y="100" width="64" height="12" />
      </g>
      <path d="M184 360.5H576" stroke="#2a2b36" />
      <g fill="#2a2b36">
        {bars.map(([x, y], i) => (
          <rect
            key={x}
            className="bar"
            style={{ animationDelay: `${-0.4 * i}s` }}
            x={x}
            y={y}
            width="22"
            height={360 - y}
            fill={i === 8 ? ORANGE : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

export function ErpWindowCompact() {
  const bars = [
    [140, 150], [166, 160], [192, 130], [218, 150], [244, 120], [270, 135], [296, 108],
  ];
  return (
    <svg viewBox="0 0 350 250" width="100%" role="img" aria-label={ERP_LABEL} className="only-narrow">
      <rect x="0.5" y="0.5" width="349" height="249" rx="2" fill="#15161f" stroke="#2a2b36" />
      <path d="M0.5 32.5H349.5M120.5 32.5V249.5" stroke="#2a2b36" />
      {[12, 24, 36].map((x) => (
        <rect key={x} x={x} y="12" width="7" height="7" fill="#2a2b36" />
      ))}
      <g fontFamily={SANS} fontSize="14" fill="#9a9ba3">
        <rect x="6" y="72" width="108" height="28" rx="2" fill="#1f202b" />
        <rect x="14" y="83" width="6" height="6" fill={ORANGE} />
        {MODULES.map((m, i) => (
          <text key={m} x="26" y={60 + i * 31} fill={i === 1 ? "#ffffff" : undefined}>
            {m}
          </text>
        ))}
      </g>
      <g fill="#1f202b">
        <rect x="134" y="46" width="96" height="44" rx="2" />
        <rect x="240" y="46" width="96" height="44" rx="2" />
      </g>
      <g fill="#2a2b36">
        <rect x="146" y="58" width="36" height="5" />
        <rect x="146" y="70" width="60" height="9" />
        <rect x="252" y="58" width="44" height="5" />
        <rect x="252" y="70" width="52" height="9" />
      </g>
      <path d="M134 230.5H336" stroke="#2a2b36" />
      <g fill="#2a2b36">
        {bars.map(([x, y], i) => (
          <rect
            key={x}
            className="bar"
            style={{ animationDelay: `${-0.5 * i}s` }}
            x={x}
            y={y}
            width="16"
            height={230 - y}
            fill={i === 6 ? ORANGE : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Service scenes ---------- */

function CloudScene() {
  const slabs = [36, 74, 112];
  return (
    <>
      <path d="M20 90H96M224 90H300" fill="none" stroke={LINE} strokeWidth={1.25} />
      <path className="flow" d="M20 90H96" fill="none" stroke={ORANGE} strokeWidth={1.75} />
      <path className="flow" style={{ animationDelay: "-0.9s" }} d="M224 90H300" fill="none" stroke={ORANGE} strokeWidth={1.75} />
      <rect x="8" y="84" width="12" height="12" fill={INK} />
      <rect x="300" y="84" width="12" height="12" fill={INK} />
      {slabs.map((y, i) => (
        <g key={y}>
          <rect x="96" y={y} width="128" height="32" fill="#ffffff" stroke={INK} strokeWidth={1.5} />
          <rect x="108" y={y + 13} width="6" height="6" fill={INK} />
          <rect className="blink" style={{ animationDelay: `${-0.8 * i}s` }} x="120" y={y + 13} width="6" height="6" fill={ORANGE} />
          <path d={`M176 ${y + 16}h36`} stroke={LINE} strokeWidth={1.5} />
        </g>
      ))}
    </>
  );
}

function NetworkScene() {
  return (
    <>
      <path
        d="M48 48L160 36M160 36L272 56M48 48L96 136M160 36L96 136M160 36L232 144M272 56L232 144M96 136L232 144"
        fill="none"
        stroke={LINE}
        strokeWidth={1.25}
      />
      <path className="flow" d="M48 48L160 36" fill="none" stroke={ORANGE} strokeWidth={1.75} />
      <path className="flow" style={{ animationDelay: "-0.6s" }} d="M160 36L96 136" fill="none" stroke={ORANGE} strokeWidth={1.75} />
      <path className="flow" style={{ animationDelay: "-1.2s" }} d="M272 56L232 144" fill="none" stroke={ORANGE} strokeWidth={1.75} />
      <g fill="#ffffff" stroke={INK} strokeWidth={1.5}>
        <rect x="40" y="40" width="16" height="16" />
        <rect x="152" y="28" width="16" height="16" />
        <rect x="264" y="48" width="16" height="16" />
        <rect x="224" y="136" width="16" height="16" />
      </g>
      <rect x="86" y="126" width="20" height="20" fill={INK} />
      <rect className="blink" x="93" y="133" width="6" height="6" fill={ORANGE} />
    </>
  );
}

function SecurityScene() {
  const clip = useId().replace(/:/g, "");
  const shield = "M160 22l56 20v40c0 34-23 59-56 74-33-15-56-40-56-74V42z";
  return (
    <>
      <defs>
        <clipPath id={`shield-${clip}`}>
          <path d={shield} />
        </clipPath>
      </defs>
      <g clipPath={`url(#shield-${clip})`}>
        <rect className="scan" x="100" y="30" width="120" height="2" fill={ORANGE} />
        <rect className="scan" x="100" y="32" width="120" height="18" fill={ORANGE} opacity="0.08" />
      </g>
      <path d={shield} fill="none" stroke={INK} strokeWidth={1.5} />
      <rect x="148" y="72" width="24" height="24" fill={INK} />
      <rect x="157" y="81" width="6" height="6" fill={ORANGE} />
      <path d="M40 60h40M40 76h28M240 104h40M252 120h28" stroke={LINE} strokeWidth={1.5} />
    </>
  );
}

function DataScene() {
  const bars = [100, 84, 92, 70, 76, 56, 62, 38];
  return (
    <>
      <path d="M40 150.5H280" stroke={INK} strokeWidth={1.5} />
      <g fill={INK}>
        {bars.map((y, i) => (
          <rect
            key={i}
            className="bar"
            style={{ animationDelay: `${-0.5 * i}s` }}
            x={52 + i * 28}
            y={y}
            width="18"
            height={150 - y}
            fill={i === 7 ? ORANGE : undefined}
          />
        ))}
      </g>
      <path
        d="M61 86L89 70L117 78L145 56L173 62L201 42L229 48L257 24"
        fill="none"
        stroke={LINE}
        strokeWidth={1.5}
        strokeDasharray="4 4"
      />
    </>
  );
}

function SoftwareScene() {
  return (
    <>
      <rect x="50" y="24" width="220" height="132" fill="#ffffff" stroke={INK} strokeWidth={1.5} />
      <path d="M50 46H270" stroke={INK} strokeWidth={1.5} />
      <g fill={INK}>
        <rect x="60" y="32" width="6" height="6" />
        <rect x="72" y="32" width="6" height="6" />
        <rect x="84" y="32" width="6" height="6" />
      </g>
      <g fill="#e3e3de">
        <rect x="138" y="62" width="40" height="8" />
        <rect x="82" y="80" width="96" height="8" />
        <rect x="82" y="98" width="56" height="8" />
        <rect x="66" y="116" width="48" height="8" />
        <rect x="66" y="134" width="88" height="8" />
      </g>
      <rect x="66" y="62" width="64" height="8" fill={INK} />
      <rect x="146" y="98" width="72" height="8" fill={INK} />
      <rect className="blink" x="160" y="132" width="3" height="12" fill={ORANGE} />
    </>
  );
}

function TrainingScene() {
  return (
    <>
      <rect x="70" y="22" width="180" height="108" fill="#ffffff" stroke={INK} strokeWidth={1.5} />
      <path d="M160 130v26M126 156h68" stroke={INK} strokeWidth={1.5} />
      <path d="M104 64H216" stroke={LINE} strokeWidth={1.25} />
      <path className="flow" d="M104 64H160" fill="none" stroke={ORANGE} strokeWidth={1.75} />
      <rect x="94" y="54" width="20" height="20" fill={INK} />
      <rect x="150" y="54" width="20" height="20" fill={INK} />
      <rect x="206" y="54" width="20" height="20" fill="#ffffff" stroke={INK} strokeWidth={1.5} />
      <rect className="blink" x="213" y="61" width="6" height="6" fill={ORANGE} />
      <g fill="#e3e3de">
        <rect x="94" y="94" width="72" height="8" />
        <rect x="94" y="110" width="48" height="8" />
      </g>
    </>
  );
}

const SCENES: Record<ServiceId, () => JSX.Element> = {
  cloud: CloudScene,
  network: NetworkScene,
  cybersecurity: SecurityScene,
  data: DataScene,
  software: SoftwareScene,
  training: TrainingScene,
};

export function ServiceScene({ id }: { id: ServiceId }) {
  const Scene = SCENES[id];
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
      <Scene />
    </svg>
  );
}
