import { Loading } from "../components/Loading";
import { PageHeading } from "../components/PageHeading";
import { ProductCard } from "../components/ProductCard";
import { useData } from "../hooks/useData";
import { useCartStore } from "../stores/cartStore";
import type { CartItem } from "../types/cart_item.type";
import type { ProductType } from "../types/product.type";

const Cart = () => {
  const { data }: { data: ProductType[]; } = useData("/products");
  const cartItems = useCartStore((state) => state.items);

  return (
    <div>
      <PageHeading dataTestId="cart-heading">My Cart</PageHeading>
      <section className={`mt-8 mx-[5%] lg:mx-[25%] grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4 p-4`}>
        {!data ?
          <Loading /> :
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