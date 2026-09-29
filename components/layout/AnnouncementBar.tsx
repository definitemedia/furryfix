export const ANNOUNCEMENT = {
  message: "Thoughtful Care for Your Furry Friends",
  label: "Announcement",
} as const;

type AnnouncementBarProps = {
  message?: string;
  label?: string;
};

function PawIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3.5 shrink-0 text-turquoise"
    >
      <ellipse cx="5.5" cy="10" rx="2.2" ry="2.8" />
      <ellipse cx="9.5" cy="5.5" rx="2.2" ry="2.9" />
      <ellipse cx="14.5" cy="5.5" rx="2.2" ry="2.9" />
      <ellipse cx="18.5" cy="10" rx="2.2" ry="2.8" />
      <path d="M12 11.5c-2.9 0-6.2 3.7-6.2 6.4 0 1.8 1.4 2.6 3 2.6 1.3 0 2.1-.7 3.2-.7s1.9.7 3.2.7c1.6 0 3-.8 3-2.6 0-2.7-3.3-6.4-6.2-6.4Z" />
    </svg>
  );
}

export default function AnnouncementBar({
  message = ANNOUNCEMENT.message,
  label = ANNOUNCEMENT.label,
}: AnnouncementBarProps) {
  return (
    <section aria-label={label} className="w-full overflow-hidden bg-navy text-white">
      <p className="mx-auto flex h-[34px] max-w-full items-center justify-center gap-2 overflow-hidden px-4 text-[12px] font-medium tracking-[0.02em] whitespace-nowrap sm:h-9 sm:px-6 sm:text-[13px] sm:tracking-[0.03em]">
        <PawIcon />
        <span className="truncate">{message}</span>
      </p>
    </section>
  );
}
