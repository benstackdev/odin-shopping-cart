import { PageHeading } from "../components/PageHeading";
import { ProductCard } from "../components/ProductCard";
import { useData } from "../hooks/useData";
import type { ProductType } from "../types/product.type";

const Shop = () => {
  const { data }: { data: ProductType[]; } = useData("/products");

  return (
    <div>
      <PageHeading data-testid="shop-heading">My Shop</PageHeading>
      <section className={`mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4 p-4`}>
        {!data ?
          <p>Loading...</p> :
          data.map((product) => {
            return (
              <ProductCard key={product.id} productData={product} />
            );
          })
        }
      </section>
    </div>
  );
};

export { Shop };