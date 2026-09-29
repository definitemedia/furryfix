type IngredientListProps = {
  ingredients: string;
};

export default function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <section aria-labelledby="ingredients-heading" className="mt-16 border-t border-navy/10 pt-12 sm:mt-20 sm:pt-14">
      <h2
        id="ingredients-heading"
        className="text-2xl font-extrabold tracking-[-0.03em] text-navy sm:text-3xl"
      >
        Ingredients
      </h2>
      <p className="mt-5 w-full break-words text-base leading-8 text-body sm:text-lg sm:leading-9">
        {ingredients}
      </p>
    </section>
  );
}
