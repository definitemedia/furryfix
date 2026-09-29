export type Ingredient = {
  slug: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  /** Tailwind classes for the labeled color block shown if the photo file is missing. */
  fallbackClassName: string;
};

/**
 * Featured botanical concepts behind the FurryFix approach.
 * This is not a formulation label for any specific product.
 */
export const ingredients: Ingredient[] = [
  {
    slug: "aloe-vera",
    name: "Aloe Vera",
    description: "Known for its moisturizing and skin-conditioning properties.",
    image: {
      src: "ingredients/aloe-vera.jpg",
      alt: "Close-up of green aloe vera leaves with water droplets",
    },
    fallbackClassName: "bg-[#e3f1e4] text-[#3f6b45]",
  },
  {
    slug: "oat",
    name: "Oat",
    description: "Traditionally valued for its gentle and conditioning properties.",
    image: {
      src: "ingredients/oat.jpg",
      alt: "Close-up of rolled oat flakes",
    },
    fallbackClassName: "bg-[#f4ecdd] text-[#7a6440]",
  },
  {
    slug: "calendula",
    name: "Calendula",
    description: "A botanical ingredient traditionally used in gentle skincare.",
    image: {
      src: "ingredients/calendula.jpg",
      alt: "Orange calendula flowers blooming among green leaves",
    },
    fallbackClassName: "bg-[#fdebd6] text-[#9a5a14]",
  },
  {
    slug: "chamomile",
    name: "Chamomile",
    description: "Known for its soothing properties and long history in skincare.",
    image: {
      src: "ingredients/chamomile.jpg",
      alt: "Small white chamomile flowers with yellow centers",
    },
    fallbackClassName: "bg-[#fbf6dc] text-[#7d6b1c]",
  },
  {
    slug: "rosemary",
    name: "Rosemary",
    description: "Aromatic botanical traditionally valued in personal care.",
    image: {
      src: "ingredients/rosemary.jpg",
      alt: "Upright sprigs of a green rosemary plant",
    },
    fallbackClassName: "bg-[#e1ece6] text-[#3d5f4c]",
  },
];
