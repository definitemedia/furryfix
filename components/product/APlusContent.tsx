import fs from "node:fs";
import path from "node:path";
import { publicImagesIn } from "@/lib/brand-assets";

type APlusContentProps = {
  dir: string;
};

function pngSize(dir: string, file: string): { width: number; height: number } | null {
  const filePath = path.join(process.cwd(), "public", ...dir.replace(/\\/g, "/").split("/"), file);
  let handle: number | null = null;

  try {
    handle = fs.openSync(filePath, "r");
    const header = Buffer.alloc(24);
    const read = fs.readSync(handle, header, 0, 24, 0);
    if (read < 24 || header.toString("ascii", 1, 4) !== "PNG") return null;
    const width = header.readUInt32BE(16);
    const height = header.readUInt32BE(20);
    if (width < 1 || height < 1) return null;
    return { width, height };
  } catch {
    return null;
  } finally {
    if (handle !== null) fs.closeSync(handle);
  }
}

export default function APlusContent({ dir }: APlusContentProps) {
  const images = publicImagesIn(dir);
  if (images.length === 0) return null;

  return (
    <section aria-label="FurryFix Shed Control shampoo details" className="mt-16 flex flex-col sm:mt-20">
      {images.map(({ src, file }, index) => {
        const size = pngSize(dir, file);
        return (
          // eslint-disable-next-line @next/next/no-img-element -- official A+ art is served as-is, not re-encoded
          <img
            key={file}
            src={src}
            alt={`FurryFix Shed Control shampoo details, image ${index + 1} of ${images.length}`}
            width={size?.width}
            height={size?.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full object-contain"
          />
        );
      })}
    </section>
  );
}
