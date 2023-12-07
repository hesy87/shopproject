import { Provider } from "react-redux";
import Category from "../containers/Category";
import ProductList from "../containers/ProductList";
import { store } from "../store/store";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Category />
        <ProductList />
      </div>
    </>
  );
}
