import React from 'react';
import ProductPreview from '../Product/ProductPreview';

const PRODUCTS = [
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
  {
    productImageSrc: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
    productName: 'PEPINOS FRESCOS',
  },
  {
    productImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg',
    productName: 'CEBOLLAS',
  },
];

const ProductsList = () => {
  return (
    <div 
      className='grid grid-cols-1 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6'>
      {
        PRODUCTS.map((product, index) => (
          <ProductPreview key={index}
            productImageSrc={product.productImageSrc}
            productName={product.productName} />
        ))
      }
    </div>
  );
};

export default ProductsList;