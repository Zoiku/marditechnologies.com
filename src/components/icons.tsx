import type { ReactNode } from "react";

export type IconName =
  | "erp"
  | "cloud"
  | "network"
  | "security"
  | "data"
  | "software"
  | "training"
  | "unsure"
  | "mail"
  | "chat"
  | "support"
  | "talk"
  | "mobile"
  | "target";

const ORANGE = "#ff3300";

const paths: Record<IconName, ReactNode> = {
  erp: (
    <>
      <rect x="3.75" y="3.75" width="7" height="7" />
      <rect x="13.25" y="3.75" width="7" height="7" fill={ORANGE} stroke={ORANGE} />
      <rect x="3.75" y="13.25" width="7" height="7" />
      <rect x="13.25" y="13.25" width="7" height="7" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.75 4.75 0 0 0 7 18.5z" />
      <rect x="13" y="13" width="3" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  network: (
    <>
      <path d="M8.75 6.25h6.5M7.5 8.75l3.25 6.5M16.5 8.75l-3.25 6.5" />
      <rect x="3.75" y="3.75" width="5" height="5" />
      <rect x="15.25" y="3.75" width="5" height="5" />
      <rect x="9.5" y="15.25" width="5" height="5" fill={ORANGE} stroke={ORANGE} />
    </>
  ),
  security: (
    <>
      <path d="M12 3.25l7.25 2.75v5.25c0 4.5-3 7.9-7.25 9.5-4.25-1.6-7.25-5-7.25-9.5V6z" />
      <rect x="10.5" y="10.5" width="3" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  data: (
    <>
      <path d="M3.75 20.25h16.5" />
      <rect x="5" y="12" width="3" height="5.5" />
      <rect x="10.5" y="8" width="3" height="9.5" />
      <rect x="16" y="4" width="3" height="13.5" fill={ORANGE} stroke={ORANGE} />
    </>
  ),
  software: (
    <>
      <rect x="3.75" y="4.75" width="16.5" height="14.5" />
      <path d="M3.75 8.75h16.5M9.5 12l-2.25 2.25L9.5 16.5M14.5 12l2.25 2.25-2.25 2.25" />
      <rect className="blink" x="11.25" y="13" width="1.5" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  training: (
    <>
      <rect x="3.75" y="4.75" width="16.5" height="11" />
      <path d="M12 15.75v4M8.25 20.25h7.5M11 8.75h6M11 11.75h4" />
      <rect x="6.5" y="8" width="3" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  unsure: (
    <>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" strokeDasharray="3 3" />
      <rect x="10.5" y="10.5" width="3" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3.75" y="5.75" width="16.5" height="12.5" />
      <path d="M3.75 6.5l8.25 6 8.25-6" />
      <rect x="16" y="14.5" width="2.5" height="2.5" fill={ORANGE} stroke="none" />
    </>
  ),
  chat: (
    <>
      <path d="M3.75 4.75h16.5v11.5H9.5l-4.25 3.5V16.25H3.75z" />
      <rect x="7.5" y="9.5" width="2" height="2" fill={ORANGE} stroke="none" />
      <rect x="11" y="9.5" width="2" height="2" fill="currentColor" stroke="none" />
      <rect x="14.5" y="9.5" width="2" height="2" fill="currentColor" stroke="none" />
    </>
  ),
  support: (
    <>
      <path d="M19.25 12a7.25 7.25 0 1 1-2.12-5.13" />
      <path d="M19.25 3.75v3.5h-3.5" />
      <rect x="10.5" y="10.5" width="3" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  talk: (
    <>
      <path d="M3.75 4.75h16.5v11.5H9.5l-4.25 3.5V16.25H3.75z" />
      <path d="M7.5 9h9M7.5 12.25h4.5" />
      <rect x="14" y="11" width="2.5" height="2.5" fill={ORANGE} stroke="none" />
    </>
  ),
  mobile: (
    <>
      <rect x="7.25" y="3.25" width="9.5" height="17.5" />
      <path d="M7.25 6.75h9.5M7.25 17.25h9.5" />
      <rect x="10.5" y="10.5" width="3" height="3" fill={ORANGE} stroke="none" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.25" />
      <rect x="10.75" y="10.75" width="2.5" height="2.5" fill={ORANGE} stroke="none" />
    </>
  ),
};

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

export function IconBox({ name }: { name: IconName }) {
  return (
    <span className="icon-box">
      <Icon name={name} />
    </span>
  );
}

const LOGO_M =
  "m37.73,37.73v103.75H0V0h83.75l37.73,37.73v103.75h-37.73V37.73h-46.03Z";
const LOGO_T = "125.72 0 125.72 37.73 167.59 37.73 167.59 141.48 205.32 141.48 205.32 37.73 167.59 0 125.72 0";

/** The Mardi mark, drawn inline so it can take any colour pairing. */
export function Logo({
  primary = ORANGE,
  square = "#0b0b15",
  className,
  title,
}: {
  primary?: string;
  square?: string;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 257.2 141.48"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <polygon fill={primary} points={LOGO_T} />
      <rect fill={square} x="219.47" y="0" width="37.73" height="37.73" />
      <path fill={primary} d={LOGO_M} />
    </svg>
  );
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}
