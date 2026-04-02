import React from "react";
import { cx } from "../utils/cx.js";

const ICONS = {
  search: (
    <path d="M11 18a7 7 0 1 1 4.95-2.05L21 21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  close: (
    <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  check: (
    <path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chevronRight: (
    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chevronLeft: (
    <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chevronDown: (
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chevronUp: (
    <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  plus: (
    <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  edit: (
    <>
      <path d="M4 20h4l10-10-4-4L4 16z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m12.5 7.5 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  minus: (
    <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  more: (
    <path d="M5 12a1.5 1.5 0 1 0 0 .01M12 12a1.5 1.5 0 1 0 0 .01M19 12a1.5 1.5 0 1 0 0 .01" fill="currentColor" />
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4l8 15H4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 9v4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.7 9.2a2.5 2.5 0 1 1 4.2 2c-.8.7-1.9 1.3-1.9 2.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17.2" r="1" fill="currentColor" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5L12 4l8 6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10v9h9v-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 12h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </>
  ),
  card: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="9" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 18a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  bell: (
    <>
      <path d="M8 18h8M9 18a3 3 0 0 0 6 0M6.5 15.5h11L16 13.8V10a4 4 0 1 0-8 0v3.8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  settings: (
    <path d="M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0-4 1.1 2.2 2.4.5.9 2.2 2.1 1.3-.8 2.3.8 2.3-2.1 1.3-.9 2.2-2.4.5L12 19.5l-1.1-2.2-2.4-.5-.9-2.2-2.1-1.3.8-2.3-.8-2.3 2.1-1.3.9-2.2 2.4-.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 4v4M16 4v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4.5l3 1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  filter: (
    <path d="M5 7h14l-5.5 6v4l-3-1.8V13z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  refresh: (
    <path d="M19 7v4h-4M5 17v-4h4M7.5 9A5.5 5.5 0 0 1 19 11M16.5 15A5.5 5.5 0 0 1 5 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  externalLink: (
    <>
      <path d="M14 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14 19 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 13v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="8" width="9" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  download: (
    <>
      <path d="M12 5v10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 11.5 12 15.5l4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  upload: (
    <>
      <path d="M12 19V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12.5 12 8.5l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 5h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  star: (
    <path d="m12 4 2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 16l-4.8 2.5.9-5.2L4.3 9.6l5.3-.8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  lock: (
    <>
      <rect x="6" y="10" width="12" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 10V8a3.5 3.5 0 0 1 7 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M3 3l18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.6 6.8A9.6 9.6 0 0 1 12 6.5c6 0 9.5 5.5 9.5 5.5a18.4 18.4 0 0 1-4 4.2M6.2 9.1A17.2 17.2 0 0 0 2.5 12S6 17.5 12 17.5c1 0 2-.2 2.8-.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.2 10.2A2.5 2.5 0 0 0 13.8 13.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  dot: (
    <circle cx="12" cy="12" r="2.4" fill="currentColor" />
  ),
  grid: (
    <>
      <rect x="5" y="5" width="5.5" height="5.5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.5" y="5" width="5.5" height="5.5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="5" y="13.5" width="5.5" height="5.5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.5" y="13.5" width="5.5" height="5.5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </>
  ),
  navigation: (
    <>
      <path d="M6 7h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 17h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4.5 13.3 9l4.7 1.3-4.7 1.3L12 16l-1.3-4.4L6 10.3 10.7 9z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18.5 4v2M19.5 5h-2M5 17v3M6.5 18.5h-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  bolt: (
    <path d="M13 3 6.5 13h4l-1 8L17.5 11h-4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  layers: (
    <>
      <path d="m12 5 8 4.5-8 4.5-8-4.5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m20 13-8 4.5L4 13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  table: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 10h16M9.3 6v12M14.7 6v12" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </>
  ),
  bookmark: (
    <path d="M7 4.5h10a1 1 0 0 1 1 1V19l-6-3.5L6 19V5.5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  mail: (
    <>
      <rect x="4" y="6.5" width="16" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5.5 8 6.5 5 6.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  message: (
    <path d="M6.5 6.5h11A2.5 2.5 0 0 1 20 9v6a2.5 2.5 0 0 1-2.5 2.5H10L6 20v-2.5H6.5A2.5 2.5 0 0 1 4 15V9a2.5 2.5 0 0 1 2.5-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  phone: (
    <path d="M8.7 4.8c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.2.2 1.7l-1 1.4a14.8 14.8 0 0 0 3.4 3.4l1.4-1c.5-.3 1.2-.3 1.7.2l1.5 1.5c.5.5.5 1.3 0 1.8l-1 1a3 3 0 0 1-3 .8c-4.7-1.4-8.5-5.2-9.9-9.9a3 3 0 0 1 .8-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  ),
  trash: (
    <>
      <path d="M5.5 7h13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m-8 0 1 11a1.5 1.5 0 0 0 1.5 1.4h5a1.5 1.5 0 0 0 1.5-1.4l1-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  folder: (
    <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H10l2 2h5.5A2.5 2.5 0 0 1 20 10.5v6A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  file: (
    <>
      <path d="M8 4.5h6l4 4V18a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 18V6a1.5 1.5 0 0 1 1-1.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 4.5V9h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  image: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <path d="m6 17 4.5-4.5 3.5 3.5 2-2 2 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  play: (
    <path d="m9 7 8 5-8 5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  pause: (
    <>
      <path d="M9 7v10M15 7v10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  camera: (
    <>
      <path d="M7 8.5 8.5 6h7L17 8.5h1.5A1.5 1.5 0 0 1 20 10v7A1.5 1.5 0 0 1 18.5 18.5h-13A1.5 1.5 0 0 1 4 17v-7A1.5 1.5 0 0 1 5.5 8.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="4" width="6" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 11.5a5 5 0 0 0 10 0M12 16.5V20M9 20h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  location: (
    <>
      <path d="M12 20s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  shield: (
    <path d="M12 4 18 6.2v4.5c0 4.2-2.5 6.9-6 9.3-3.5-2.4-6-5.1-6-9.3V6.2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  gift: (
    <>
      <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 0V7.5A1.5 1.5 0 0 1 5.5 6H18.5A1.5 1.5 0 0 1 20 7.5V10M12 6v14M4 13h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 6S8 6 8 4.8A1.8 1.8 0 0 1 9.8 3c1.3 0 2.2 3 2.2 3m.5 0s1.5 0 1.5-1.2A1.8 1.8 0 0 0 14.2 3c-1.3 0-2.2 3-2.2 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.7 6.3l-1.6 1.6M7.9 16.1l-1.6 1.6M17.7 17.7l-1.6-1.6M7.9 7.9 6.3 6.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  moon: (
    <path d="M17.5 14.8A6.8 6.8 0 0 1 9.2 6.5 7.8 7.8 0 1 0 17.5 14.8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  archive: (
    <>
      <rect x="4" y="5" width="16" height="5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 10h12v7.5A1.5 1.5 0 0 1 16.5 19h-9A1.5 1.5 0 0 1 6 17.5zM10 13h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 6.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6M5.5 12.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  trendUp: (
    <path d="M5 15l4.2-4.2 3.2 3.2L19 7.5M14 7.5h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  trendDown: (
    <path d="M5 9l4.2 4.2 3.2-3.2L19 16.5M14 16.5h5v-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export const iconNames = Object.keys(ICONS);

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 20,
  className = "",
  strokeWidth,
  ...props
}: IconProps) {
  const glyph = ICONS[name] ?? ICONS.info;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cx("rpl-icon", className)}
      fill="none"
      aria-hidden="true"
      {...(strokeWidth ? { strokeWidth } : {})}
      {...props}
    >
      {glyph}
    </svg>
  );
}
