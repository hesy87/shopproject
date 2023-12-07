"use client";

import CardProductDetail from "@/app/components/UI/Card/CardProductDetail";
import { GET } from "@/app/services/api";
import { ROUTE_PRODUCT } from "@/app/services/routes";
import { Product } from "@/app/types/type";
import { useEffect, useState } from "react";

type paramsProps = {
  params: { id: number };
};

const ProductDetailPage = ({ params: { id } }: paramsProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const FetchProduct = async () => {
      const response = await GET(ROUTE_PRODUCT(id));
      setProduct(response);
    };
    FetchProduct();
  }, [id]);
  return (
    <>
      <CardProductDetail {...product} />
    </>
  );
};

export default ProductDetailPage;
