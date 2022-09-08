import { FC } from 'react';
import { substringStringsOfArray, stringToArray } from '../../../../utilities/strings';
import { TextWrapper, ItemWrapper, Card } from '../../../UI';
import { Paragraph } from '../../../UI/Typography';
import DetailsSection from './DetailsSection';

export interface IProductDetails {
  product?: {
    allergens_hierarchy: string[],
    categories: string,
    image_front_url: string,
    product_name: string
    ingredients_text: string
  }[]
}

const ProductDetails: FC<IProductDetails> = ({product}) => {

  const categories = product?.['categories'];
  const allergens = product?.['allergens_hierarchy'];
  const ingredients = product?.['ingredients_text'];

  const showIngredients = () => {
    return (
      <DetailsSection categorieName='Ingredients'>
        <Paragraph>{ingredients}</Paragraph>
      </DetailsSection>
    );
  };
  

  const showCategories = () => {
    const arrayCategories = stringToArray(categories, ',');

    return (
      <DetailsSection categorieName='Categories'
        className='flexCenter md:flexStartCenter flex-row flex-wrap gap-y-2 gap-x-4'>
        {arrayCategories.map((categorie, index) => (
          <ItemWrapper key={index}
            className="bg-purple text-white">{categorie}</ItemWrapper>
        ))}
      </DetailsSection>
    );
  };

  const showAllergens = () => {
    const formattedAlergenes = substringStringsOfArray(allergens, 3);

    return (
      <DetailsSection categorieName='Allergènes'
        className='flexCenter md:flexStartCenter flex-row flex-wrap gap-y-2 gap-x-4'>
        {formattedAlergenes.map((categorie, index) => (
          <ItemWrapper key={index}
            className="bg-lightPink text-black text-opacity-80">{categorie}</ItemWrapper>
        ))}
      </DetailsSection>);
  };

  return (
    <Card className='w-auto lg:w-[35rem]'>
      <TextWrapper className='py-4 px-6 pb-8 lg:py-4 lg:px-8 flex flex-col gap-8'>
        {ingredients && showIngredients()}
        {categories && showCategories()}
        {allergens.length !== 0 && showAllergens()}
      </TextWrapper>
    </Card>
  );
};

export default ProductDetails;