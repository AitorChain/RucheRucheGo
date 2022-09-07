import React from 'react';
import Card from '../../../UI/Card';
import TextWrapper from '../../../UI/TextWrapper';
import { Paragraph } from '../../../UI/Typography';
import DetailsSection from './DetailsSection';

const ProductDetails = () => {
  const ingredients = 'Lait partiellement écrémé à 1% Mat. Gr. (94,7%), lait écrémé concentré ou en poudre (5,2%), ferments lactiques (lait). Lait: Origine France';

  const alergenes = 'Milk, Chocolate, Other things, Tomato, Gluten';

  const categories = 'Milk, Chocolate, Other things, Tomato, Gluten';


  return (
    <Card className='w-[35rem]'>
      <TextWrapper className='py-4 px-8 flex flex-col gap-4'>
        <DetailsSection categorieName='Ingredients'>
          <Paragraph>{ingredients}</Paragraph>
        </DetailsSection>
        <DetailsSection categorieName='Allergènes'>
          <Paragraph>{alergenes}</Paragraph>
        </DetailsSection>
        <DetailsSection categorieName='Categories'>
          <Paragraph>{categories}</Paragraph>
        </DetailsSection>
      </TextWrapper>
    </Card>
  );
};

export default ProductDetails;