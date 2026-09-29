type AmazonButtonProps = {
  url: string | null;
  productName: string;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold whitespace-nowrap";

export default function AmazonButton({ url, productName, className = "" }: AmazonButtonProps) {
  if (!url) {
    return (
      <button
        type="button"
        disabled
        title="Amazon listing coming soon"
        className={`${base} cursor-not-allowed bg-turquoise/40 text-white ${className}`}
      >
        Buy on Amazon
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buy ${productName} on Amazon (opens in a new tab)`}
      className={`${base} bg-btn-primary text-btn-primary-text shadow-[0_6px_16px_color-mix(in_srgb,var(--color-turquoise)_22%,transparent)] transition duration-200 hover:-translate-y-0.5 hover:bg-btn-primary-hover hover:shadow-[0_10px_22px_color-mix(in_srgb,var(--color-turquoise)_28%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:hover:translate-y-0 ${className}`}
    >
      Buy on Amazon
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
