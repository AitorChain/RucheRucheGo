import React from 'react';
import { substringStringsOfArray } from '../../../../utilities/strings';
import stringToArray from '../../../../utilities/strings/stringToArray';
import Card from '../../../UI/Card';
import ItemWrapper from '../../../UI/ItemWrapper';
import TextWrapper from '../../../UI/TextWrapper';
import { Paragraph } from '../../../UI/Typography';
import DetailsSection from './DetailsSection';

const ProductDetails = () => {
  const ingredients = 'Lait partiellement écrémé à 1% Mat. Gr. (94,7%), lait écrémé concentré ou en poudre (5,2%), ferments lactiques (lait). Lait: Origine France';

  const alergenes = [
    'en:milk',
    'en:nuts',
    'en:soybeans',
    'de:beurre',
    'de:lait',
    'de:noisette'
  ];

  const categories = 'Milk, Chocolate, Other things, Tomato, Gluten';

  const arrayCategories = stringToArray(categories, ', ');

  const formattedAlergenes = substringStringsOfArray(alergenes, 3);

  console.log(formattedAlergenes);


  return (
    <Card className='w-[35rem]'>
      <TextWrapper className='py-4 px-8 flex flex-col gap-4'>
        <DetailsSection categorieName='Ingredients'>
          <Paragraph>{ingredients}</Paragraph>
        </DetailsSection>
        <DetailsSection categorieName='Allergènes'
          className='flexStartCenter flex-row flex-wrap gap-2'>
          {formattedAlergenes.map((categorie, index) => (
            <ItemWrapper key={index}
              className="bg-lightPink text-black text-opacity-80">{categorie}</ItemWrapper>
          ))}
        </DetailsSection>
        <DetailsSection categorieName='Categories'
          className='flexStartCenter flex-row flex-wrap gap-2'>
          {arrayCategories.map((categorie, index) => (
            <ItemWrapper key={index}
              className="bg-purple text-white">{categorie}</ItemWrapper>
          ))}
        </DetailsSection>
      </TextWrapper>
    </Card>
  );
};

export default ProductDetails;