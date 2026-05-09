import { useEffect, useState } from "react";
import type { ProductType } from "../types/product.type";

const BASE_URL = "https://fakestoreapi.com";

export const useData = (url: string): { data: ProductType[]; } => {
  const [state, setState] = useState<ProductType[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data: ProductType[] = await (await fetch(BASE_URL + url)).json();

      if (!data) setState([]);
      setState(data);
    };

    dataFetch();
  }, [url]);

  console.log({ data: state });

  return { data: state };
};