//--------------------- products
export const ROUTE_PRODUCTS = "/products";
export const ROUTE_CATEGORIES = "/products/categories";
export const ROUTE_CATEGORY = (category: string) =>
  `/products/categories/${category}`;
export const ROUTE_PRODUCT = (id: number) => `/products/${id}`;
