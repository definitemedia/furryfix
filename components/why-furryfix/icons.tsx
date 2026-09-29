type IconProps = { className?: string };

export function PawIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <circle cx="7.2" cy="8.2" r="1.7" />
      <circle cx="12" cy="6.4" r="1.7" />
      <circle cx="16.8" cy="8.2" r="1.7" />
      <circle cx="8.6" cy="12.2" r="1.55" />
      <path d="M12.1 11.2c2.15 0 3.9 1.7 3.9 3.85 0 2.35-1.9 4.15-4.15 4.15-1.7 0-3.15-.95-3.75-2.35-.35.25-.8.4-1.25.4-1.15 0-2.05-.95-2.05-2.15 0-1.55 1.35-2.7 3.15-2.9.85-.7 1.9-1 3.15-1Z" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HeartIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} {...stroke}>
      <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function BottleIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} {...stroke}>
      <path d="M10 3h4v2.5h-4z" />
      <path d="M9.5 5.5h5l1.5 3v10.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8.5z" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function HomeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} {...stroke}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 9v10.5h12V9" />
      <path d="M12 17.2s-2.6-1.6-2.6-3.4a1.4 1.4 0 0 1 2.6-.8 1.4 1.4 0 0 1 2.6.8c0 1.8-2.6 3.4-2.6 3.4Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" className={className} {...stroke}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" className={className} {...stroke} strokeWidth={2}>
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}
