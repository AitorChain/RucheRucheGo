import React from 'react';
 
const ProductPreview = () => {
  return (
    <div className='flexCenter flex-col rounded-md shadow-custom'>
      <img 
        src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV"
        alt="pepino"
        className='object-cover w-52 h-64 rounded-md rounded-b-none' />
      <div className='px-2 py-2 w-full bg-red flexCenter rounded-b-md'>
        <h3 className='leagueGothic text-white text-2xl'>PEPINOS FRESCOS</h3>
      </div>
    </div>
  );
};

export default ProductPreview;