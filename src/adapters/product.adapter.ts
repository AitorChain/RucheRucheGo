import { Product } from '../models/API/OpenFood.types';
import { AdaptedProduct } from '../models/UI/Products.types';
import { capitalizeString, stringToArray, substringStringsOfArray } from '../utilities';

//This adapter receives the API Data Model and transforms it to the UI Data Model.

export const createProductAdapter = (product: Product): AdaptedProduct => ({
  allergens: substringStringsOfArray(product.allergens_hierarchy, 3),
  categories: stringToArray(product.categories, ','),
  image: product.image_front_url,
  name: product.product_name,
  ingredients: capitalizeString(product.ingredients_text),
  brands: product.brands,
  nutriments: product.nutriments,
  nutritionGrade: product.nutrition_grade
});
