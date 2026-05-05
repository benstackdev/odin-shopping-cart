import { ShoppingCart } from "lucide-react";
import type { ProductType } from "../types/product.type";
import { Button } from "./Button";

const ProductCard = ({ productData }: { productData: ProductType; }) => {
  return (
    <div className={`flex flex-col gap-2 p-2 border-gray-500/75 border-2 rounded-xl shadow-lg`}>
      <img
        className={`flex justify-center h-48 object-scale-down`}
        src={productData.image}
        alt=""
      />
      <h3 className={`line-clamp-3 h-18 text-xl font-semibold leading-6`}>
        {productData.title}
      </h3>
      <p className={`line-clamp-2 h-10 text-normal leading-5`}>{productData.description}</p>
      <span className={`text-2xl font-bold`}>{
        Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
          .format(productData.price)
      }</span>
      <Button className={`inline-flex justify-center gap-2`} size="small" background="green">
        <ShoppingCart />
        Add to Cart
      </Button>
    </div>
  );
};

export { ProductCard };