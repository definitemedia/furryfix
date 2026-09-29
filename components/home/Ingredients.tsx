import Image from "next/image";
import { publicAsset } from "@/lib/brand-assets";
import { ingredients, type Ingredient } from "@/lib/ingredients";

function IngredientItem({ ingredient }: { ingredient: Ingredient }) {
  const imageSrc = publicAsset([ingredient.image.src]);

  return (
    <figure className="relative flex w-[84px] flex-col items-center text-center sm:w-[96px]" title={ingredient.description}>
      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white sm:h-[84px] sm:w-[84px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={ingredient.image.alt}
            fill
            sizes="(min-width: 640px) 84px, 72px"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`${ingredient.name} botanical color block`}
            className={`flex h-full w-full items-center justify-center ${ingredient.fallbackClassName}`}
          >
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.08em]">
              {ingredient.name}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-xs font-semibold text-navy sm:text-[0.8rem]">
        {ingredient.name}
        <span className="sr-only">: {ingredient.description}</span>
      </figcaption>
    </figure>
  );
}

export default function Ingredients() {
  return (
    <section id="ingredients" aria-labelledby="ingredients-heading" className="bg-lavender">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-7">
        <div className="shrink-0 lg:max-w-[300px]">
          <h2
            id="ingredients-heading"
            className="text-lg font-extrabold uppercase tracking-[0.06em] text-navy sm:text-xl"
          >
            Nature-Inspired Care
          </h2>
          <p className="mt-1 text-xs leading-5 text-navy/75 sm:text-sm">
            Thoughtfully selected botanicals for everyday pet care.
          </p>
          <a
            href="#product"
            className="-mt-2 -mb-3.5 inline-flex min-h-11 items-center text-xs font-semibold text-turquoise-hover underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
          >
            Explore Our Products &rarr;
          </a>
        </div>

        <div
          role="region"
          aria-label="Featured botanical ingredients"
          tabIndex={0}
          className="relative -mx-5 min-w-0 overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise sm:-mx-8 lg:mx-0 lg:flex-1 [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-4 px-5 py-1 sm:w-max sm:min-w-full sm:flex-nowrap sm:justify-between sm:gap-6 sm:px-8 lg:px-0">
            {ingredients.map((ingredient) => (
              <li key={ingredient.slug} className="shrink-0">
                <IngredientItem ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
