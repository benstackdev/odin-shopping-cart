import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import type { ProductType } from "../types/product.type";
import { Button } from "./Button";
import type { CartItem } from "../types/cart_item.type";
import { useCartStore } from "../stores/cartStore";
import { useState } from "react";

export type ProductCardProps = {
  productData: ProductType,
  isCart?: boolean;
};

const ProductCard = ({ productData, isCart }: ProductCardProps) => {
  const items = useCartStore((state) => state.items);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const updateCartItemQuantity = useCartStore((state) => state.updateCartItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  const itemInCart = () => {
    return items.find((item) => item.id === productData.id);
  };

  const [quantity, setQuantity] = useState(itemInCart() ? itemInCart().quantity : 1);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    if (itemInCart()) updateCartItemQuantity(productData.id, newQuantity);
    setQuantity(newQuantity);
  };

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
      <div className={`flex justify-between items-center px-2`}>
        <span className={`text-xl lg:text-2xl font-bold`}>{
          Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            .format(productData.price)
        }</span>
        <div className={`flex justify-start gap-2`}>
          <Button size="smallIcon"
            onClick={() => updateQuantity(quantity - 1)}>
            <Minus />
          </Button>
          <input
            type="number"
            id={`${productData.id}-quantity`}
            min={1} max={99}
            className={`text-center remove-arrow`}
            value={quantity}
            onChange={e => updateQuantity(Number(e.target.value))}
          />
          <Button size="smallIcon" className={``}
            onClick={() => updateQuantity(quantity + 1)}>
            <Plus />
          </Button>
        </div>
      </div>
      {!itemInCart() ?
        <Button
          className={`inline-flex justify-center gap-2`}
          size="small"
          background="green"
          type="button"
          onClick={() => addCartItem({
            id: productData.id,
            title: productData.title,
            price: productData.price,
            image: productData.image,
            quantity: quantity
          } as CartItem)}>
          <ShoppingCart />
          Add to Cart
        </Button>
        :
        <div className={`flex gap-2`}>
          {!isCart ?
            <Button
              className={`flex-1 justify-center gap-2`}
              size="small"
              background="grey"
              type="button"
              disabled>
              <ShoppingCart />
              In Cart
            </Button>
            : null
          }
          <Button
            className={`flex-1 inline-flex justify-center gap-2`}
            size="small"
            background="red"
            type="button"
            onClick={() => {
              removeCartItem(productData.id);
              setQuantity(1);
            }}>
            <X />
            Remove
          </Button>
        </div>
      }
    </div>
  );
};

export { ProductCard };