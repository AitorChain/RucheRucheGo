export type Products = {
  id: number;
  image_front_url: string;
  product_name: string;
  nutrition_grade: string;
  brands: string;
};

export type Product = {
  allergens_hierarchy: string[];
  categories: string;
  image_front_url: string;
  product_name: string;
  ingredients_text: string;
  brands: string;
  nutriments: {
    string: number | string;
  };
  nutrition_grade: string;
};