"use client";

import { useEffect, useState } from "react";
import { GET } from "../services/api";
import { ROUTE_CATEGORIES } from "../services/routes";
import Button from "../components/UI/Button/Button";
import { useDataDispatch } from "../store/hooks";
import { categorySelector } from "../store/category-slice";

const Category = () => {
  const dispatch = useDataDispatch();
  const [category, setCategory] = useState<string[]>([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await GET(ROUTE_CATEGORIES);
      setCategory(response);
    };
    fetchCategory();
  });

  return (
    <div className="flex flex-col">
      {category.map((item) => (
        <div key={item}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(categorySelector(item))}
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
