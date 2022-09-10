import { Product } from '../../../../models/Products';
import { substringStringsOfArray, stringToArray } from '../../../../utilities/strings';

import { TextWrapper, ItemWrapper, Card } from '../../../UI';
import { Paragraph } from '../../../UI/Typography';
import DetailsSection from './DetailsSection';

export interface ProductDetailsProps {
  product?: Product[];
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const categories = product?.['categories'];
  const allergens = product?.['allergens_hierarchy'];
  const ingredients = product?.['ingredients_text'];

  const detailsAreEmpty = !categories && allergens.length === 0 && !ingredients;

  const showNoDetailsMessage = () => {
    return <Paragraph className="flexCenter">There are no details for this product.</Paragraph>;
  };

  const showIngredients = () => {
    return (
      <DetailsSection categorieName="Ingredients">
        <Paragraph>{ingredients}</Paragraph>
      </DetailsSection>
    );
  };

  const showCategories = () => {
    const arrayCategories = stringToArray(categories, ',');

    return (
      <DetailsSection
        categorieName="Categories"
        className="flexCenter md:flexStartCenter flex-row flex-wrap gap-y-2 gap-x-4">
        {arrayCategories.map((categorie, index) => (
          <ItemWrapper key={index} className="bg-purple text-white">
            {categorie}
          </ItemWrapper>
        ))}
      </DetailsSection>
    );
  };

  const showAllergens = () => {
    const formattedAlergenes = substringStringsOfArray(allergens, 3);

    return (
      <DetailsSection
        categorieName="Allergènes"
        className="flexCenter md:flexStartCenter flex-row flex-wrap gap-y-2 gap-x-4">
        {formattedAlergenes.map((categorie, index) => (
          <ItemWrapper key={index} className="bg-lightPink text-black text-opacity-80">
            {categorie}
          </ItemWrapper>
        ))}
      </DetailsSection>
    );
  };

  return (
    <Card className="w-auto lg:w-[35rem]">
      <TextWrapper className="py-4 px-6 lg:pt-5 lg:pb-7 lg:px-8 flex flex-col gap-4">
        {ingredients && showIngredients()}
        {categories && showCategories()}
        {allergens.length !== 0 && showAllergens()}
        {detailsAreEmpty && showNoDetailsMessage()}
      </TextWrapper>
    </Card>
  );
};

export default ProductDetails;
