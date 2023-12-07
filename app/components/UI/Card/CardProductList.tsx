import { Product } from "@/app/types/type";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Card = ({ image, title, id, description }: Product) => {
  const route = useRouter();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={image} alt={title} width={250} height={250} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Button
            type="button"
            style={"btn btn-primary"}
            id={id}
            onClick={() => route.push(`/products/${id}`)}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
