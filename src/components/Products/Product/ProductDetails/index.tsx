import { AdaptedProduct } from '../../../../models/UI/Products.types';
import { substringStringsOfArray, stringToArray, capitalizeString } from '../../../../utilities/strings';

import { TextWrapper, ItemWrapper, Card } from '../../../UI';
import { Paragraph } from '../../../UI/Typography';
import DetailsSection from './DetailsSection';

export interface ProductDetailsProps {
  product: AdaptedProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const {categories, allergens, ingredients} = product;

  const detailsAreEmpty = !categories && allergens.length === 0 && !ingredients;

  const noDetailsMessage = (
    <Paragraph className="flexCenter">There are no details for this product.</Paragraph>
  );

  const CARD_STYLES = 'w-auto lg:w-[35rem]';

  const ingredientsSection = (
    <Card className={CARD_STYLES}>
      <TextWrapper>
        <DetailsSection categorieName="Ingredients">
          <Paragraph>{ingredients}</Paragraph>
        </DetailsSection>
      </TextWrapper>
    </Card>
  );


  const categoriesSection = (
    <Card className={CARD_STYLES}>
      <TextWrapper>
        <DetailsSection
          categorieName="Categories"
          className="flexCenter flex-row flex-wrap gap-y-2 gap-x-4"
        >
          {categories.map((categorie, index) => (
            <ItemWrapper key={index} className="bg-purple text-white">
              {categorie}
            </ItemWrapper>
          ))}
        </DetailsSection>
      </TextWrapper>
    </Card>
  );

  const allergensSection = (
    <Card className={CARD_STYLES}>
      <TextWrapper>
        <DetailsSection
          categorieName="Allergènes"
          className="flexCenter flex-row flex-wrap gap-y-2 gap-x-4"
        >
          {allergens.map((categorie, index) => (
            <ItemWrapper key={index} className="bg-lightPink text-black text-opacity-80">
              {categorie}
            </ItemWrapper>
          ))}
        </DetailsSection>
      </TextWrapper>
    </Card>
  );

  return (
    <div className="w-auto lg:w-[35rem] flex flex-col gap-6">
      {ingredients && ingredientsSection}
      {categories && categoriesSection}
      {allergens.length !== 0 && allergensSection}
      {detailsAreEmpty && noDetailsMessage}
    </div>
  );
};

export default ProductDetails;
