import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "./baseURL";
import { Product } from "../types/FetchTypes";

const useFetchDetails = (path: string, id: string) => {
console.log(path, id)
  const [data, setData] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${baseURL + path}/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetchDetails;
