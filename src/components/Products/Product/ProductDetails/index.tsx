import { Product } from '../../../../models/Products';
import { substringStringsOfArray, stringToArray, capitalizeString } from '../../../../utilities/strings';

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

  const showNoDetailsMessage = () => <Paragraph className="flexCenter">There are no details for this product.</Paragraph>;

  const showIngredients = () => {
    const capitalizedIngredients = capitalizeString(ingredients);

    return (
      <Card className="w-auto lg:w-[35rem]">
        <TextWrapper className="py-4 px-4 lg:pt-5 lg:pb-7 lg:px-6 flex flex-col gap-4">
          <DetailsSection categorieName="Ingredients">
            <Paragraph>{capitalizedIngredients}</Paragraph>
          </DetailsSection>
        </TextWrapper>
      </Card>
    );
  };

  const showCategories = () => {
    const arrayCategories = stringToArray(categories, ',');

    return (
      <Card className="w-auto lg:w-[35rem]">
        <TextWrapper className="py-4 px-4 lg:pt-5 lg:pb-7 lg:px-6 flex flex-col gap-4">
          <DetailsSection
            categorieName="Categories"
            className="flexCenter flex-row flex-wrap gap-y-2 gap-x-4"
          >
            {arrayCategories.map((categorie, index) => (
              <ItemWrapper key={index} className="bg-purple text-white">
                {categorie}
              </ItemWrapper>
            ))}
          </DetailsSection>
        </TextWrapper>
      </Card>
    );
  };

  const showAllergens = () => {
    const formattedAlergenes = substringStringsOfArray(allergens, 3);

    return (
      <Card className="w-auto lg:w-[35rem]">
        <TextWrapper className="py-4 px-4 lg:pt-5 lg:pb-7 lg:px-6 flex flex-col gap-4">
          <DetailsSection
            categorieName="Allergènes"
            className="flexCenter flex-row flex-wrap gap-y-2 gap-x-4"
          >
            {formattedAlergenes.map((categorie, index) => (
              <ItemWrapper key={index} className="bg-lightPink text-black text-opacity-80">
                {categorie}
              </ItemWrapper>
            ))}
          </DetailsSection>
        </TextWrapper>
      </Card>
    );
  };

  return (
    <div className="w-auto lg:w-[35rem] flex flex-col gap-6">
      {ingredients && showIngredients()}
      {categories && showCategories()}
      {allergens.length !== 0 && showAllergens()}
      {detailsAreEmpty && showNoDetailsMessage()}
    </div>
  );
};

export default ProductDetails;
