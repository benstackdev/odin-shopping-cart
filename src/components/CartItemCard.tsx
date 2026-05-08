import { Minus, Plus } from "lucide-react";
import type { CartItem } from "../types/cart_item.type";
import { Button } from "./Button";

const CartItemCard = ({ cartItemData }: { cartItemData: CartItem; }) => {
  return (
    <div className={`flex gap-2 p-2`}>
      <img
        className={`flex justify-center h-24 object-scale-down`}
        src={cartItemData.image}
        alt=""
      />
      <div className={`flex flex-col justify-between`}>
        <h3 className={`font-semibold`}>{cartItemData.title}</h3>
        <span className={`text-xl lg:text-2xl font-bold`}>{
          Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            .format(cartItemData.price)
        }</span>
      </div>
      <div className="">
        <div className={`flex justify-start gap-2`}>
          <Button size="smallIcon"
            onClick={() => updateQuantity(quantity - 1)}>
            <Minus />
          </Button>
          <input
            type="number"
            id={`${cartItemData.id}-quantity`}
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
    </div>
  );
};

export { CartItemCard };