import { useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com";

export const useData = (url: string) => {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(BASE_URL + url)).json();

      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
};