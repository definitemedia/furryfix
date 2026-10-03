export type BlogCardModel = {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  filters: readonly string[];
  imageSrc: string | null;
  imageAlt: string;
  imageClass: string;
  minutes: number;
};
