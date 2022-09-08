import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProductsResult {
  count: number,
  page: number,
  page_count: number,
  page_size: number,
  products: {
    id: number,
    image_front_url: string,
    product_name: string
  }[]
}

export interface IProductResult {
  code: number,
  status: number,
  status_verbose: string,
  product: {
    allergens_hierarchy: string[],
    categories: string,
    image_front_url: string,
    product_name: string
    ingredients_text: string
  }[]
}

export const openFoodApi = createApi({
  reducerPath: 'openFoodApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://world.openfoodfacts.org' }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResult, string>({
      query: (searchTerm) => `cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_url&json=1&page=1&page_size=24`
    }),
    getProductById: builder.query<IProductResult, string>({
      query: (id) => `api/v0/product/${id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`
    })
  })
});

export const {
  useGetProductsQuery, 
  useGetProductByIdQuery
} = openFoodApi;