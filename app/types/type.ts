export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

export type CategoryType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
