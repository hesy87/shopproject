"use client";

import { useEffect, useState } from "react";
import { Product } from "./types/type";
import { GET } from "./services/api";
import { ROUTE_PRODUCT } from "./services/routes";
import Card from "./components/UI/Card/Card";

export default function Home() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const FetchProduct = async () => {
      const response = await GET(ROUTE_PRODUCT);
      setProduct(response);
    };
    FetchProduct();
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
}
