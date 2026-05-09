import { Loading } from "../components/Loading";
import { PageHeading } from "../components/PageHeading";
import { ProductCard } from "../components/ProductCard";
import { useData } from "../hooks/useData";
import { useCartStore } from "../stores/cartStore";
import type { CartItem } from "../types/cart_item.type";

const Cart = () => {
  const { data } = useData("/products");
  const cartItems = useCartStore((state) => state.items);

  return (
    <div>
      <PageHeading dataTestId="cart-heading">My Cart</PageHeading>
      <section className={`mt-8 mx-[5%] lg:mx-[25%] grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4 p-4`}>
        {data.length === 0 ?
          <Loading /> :
          cartItems.length === 0 ?
            <p className={`flex justify-center text-lg lg:text-2xl`}>No items in cart</p> :
            cartItems.map((item: CartItem) => {
              return (
                <ProductCard productData={data.find((product) => product.id === item.id)} isCart={true} />
              );
            })}
      </section>
    </div>
  );
};

export { Cart };