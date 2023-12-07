import { Product } from "@/app/types/type";
import Image from "next/image";
import Button from "../Button/Button";

type ProductProps = Product;

type Props = {
  onClick: () => void;
};

const CardProductDetail = ({ image, onClick, title }: ProductProps & Props) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-5">
      <figure>
        <Image src={image} alt="Album" width={400} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <Button type="button" style={"btn btn-primary"} onClick={onClick}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
