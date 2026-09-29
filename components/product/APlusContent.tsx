import { publicImagesIn } from "@/lib/brand-assets";

type APlusContentProps = {
  dir: string;
};

export default function APlusContent({ dir }: APlusContentProps) {
  const images = publicImagesIn(dir);
  if (images.length === 0) return null;

  return (
    <section aria-label="FurryFix Shed Control A+ content" className="mt-16 flex flex-col sm:mt-20">
      {images.map(({ src, file }) => (
        // eslint-disable-next-line @next/next/no-img-element -- official A+ art is served as-is, not re-encoded
        <img
          key={file}
          src={src}
          alt={`FurryFix Shed Control A+ content ${file}`}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full object-contain"
        />
      ))}
    </section>
  );
}
