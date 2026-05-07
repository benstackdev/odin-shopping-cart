import { PageHeading } from "../components/PageHeading";
import { useCartStore } from "../stores/cartStore";
import type { CartItem } from "../types/cart_item.type";

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <div>
      <PageHeading>My Cart</PageHeading>
      <section>
        {cartItems.map((item: CartItem) => {
          return <pre>{JSON.stringify(item, null, 2)}</pre>;
        })}
      </section>
    </div>
  );
};

export { Cart };