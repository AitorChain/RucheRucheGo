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
  nutritionGrade: string;
};
