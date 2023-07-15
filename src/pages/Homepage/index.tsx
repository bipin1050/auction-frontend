import React from 'react'
import Card from '../../components/Card'
import useFetch from "../../data/useFetch";
import { Product } from "../../types/FetchTypes";


const HomePage = () => {
  const { data, isLoading, error } = useFetch("/product/getAllActiveBids");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="py-2 grid gap-4 w-full min-[450px]:w-[80%] mx-auto sm:grid-cols-2 sm:w-full md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
      {data &&
        data.map((product, id) => {
          return <Card key={id} product={product} />;
        })}
    </div>
  );
}

export default HomePage
