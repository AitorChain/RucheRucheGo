import { ProductShort } from '../models/API/OpenFood.types';
import { AdaptedProductShort } from '../models/UI/Products.types';
import { capitalizeString } from '../utilities';

//This adapter receives the API Data Model and transforms it to the UI Data Model.

export const createProductShortAdapter = (product: ProductShort): AdaptedProductShort => ({
  id: product.id,
  image: product.image_front_url,
  name: capitalizeString(product.product_name),
  brands: capitalizeString(product.brands),
  nutritionGrade: product.nutrition_grade
});
