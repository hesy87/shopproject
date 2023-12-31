"use client";

import { useEffect, useState } from "react";
import { GET } from "../services/api";
import { ROUTE_PRODUCTS } from "../services/routes";
import Card from "../components/UI/Card/CardProductList";
import { useDataSelector } from "../store/hooks";

const ProductList = () => {
  const selectedCategory = useDataSelector((state) => state.category.items);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const FetchProduct = async () => {
      if (selectedCategory === "") {
        const response = await GET(ROUTE_PRODUCTS);
        setProduct(response);
      } else {
        const response = await GET(ROUTE_PRODUCTS);
        setProduct(
          response.filter((item) => item.category === selectedCategory)
        );
      }
    };
    FetchProduct();
  }, [selectedCategory]);
  return (
    <div className="grid grid-cols-3 gap-3 m-10">
      {product.map((item) => (
        <div key={item.id}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
