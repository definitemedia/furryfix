import Image from "next/image";
import { PawIcon } from "@/components/why-furryfix/icons";

type PostMediaProps = {
  src: string | null;
  alt: string;
  imageClass?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export default function PostMedia({
  src,
  alt,
  imageClass = "object-center",
  sizes,
  priority = false,
  className = "",
}: PostMediaProps) {
  return (
    <div className={`relative overflow-hidden bg-aqua ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClass} transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_28%_18%,var(--color-lavender),var(--color-aqua)_58%,var(--color-pale-turquoise))]"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-turquoise shadow-[0_10px_30px_-18px_var(--color-navy)]">
            <PawIcon className="h-10 w-10" />
          </span>
        </div>
      )}
    </div>
  );
}
