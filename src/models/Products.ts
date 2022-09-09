export interface ProductImageAndName {
  productImageSrc: string;
  productName: string;
}

export type Products = {
  id: number;
  image_front_url: string;
  product_name: string;
};

export type Product = {
  allergens_hierarchy: string[];
  categories: string;
  image_front_url: string;
  product_name: string;
  ingredients_text: string;
};
