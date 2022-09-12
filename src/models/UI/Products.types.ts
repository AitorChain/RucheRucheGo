export type AdaptedProduct = {
  allergens: string[];
  categories: string[];
  image: string;
  name: string;
  ingredients: string;
  brands: string;
  nutriments: {
    string: number | string;
  };
  nutritionGrade: string | undefined;
};

export type AdaptedProductShort = {
  id: number;
  image: string;
  name: string;
  nutritionGrade: string | undefined;
  brands: string;
  ingredients: string;
};
