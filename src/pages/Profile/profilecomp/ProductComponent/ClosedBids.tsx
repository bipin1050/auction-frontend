import React from "react";
import img from "../../../../assets/auction-icon.jpg";
import useFetch from "../../../../data/useFetch";
import { Product } from "../../../../types/FetchTypes";
import { baseURL } from "../../../../data/baseURL";

const ActiveBids = () => {
  const { data, isLoading, error } = useFetch("/product/getClosedBids");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {data ? (
        data.map((product: Product, id: number) => {
          return (
            <div key={id}>
              <div className="flex px-2 py-3 shadow-xl items-center">
                <div>{id + 1}</div>
                <div className="px-8">
                  <img src={`${baseURL}/images/${product.image}`} width={100} />
                </div>
                <div>
                  <div>{product.productName}</div>
                  <div>Total Bids : 10</div>
                  <div>Highest Bids : $68</div>
                  <div></div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>No Bid Found</div>
      )}
    </div>
  );
};

export default ActiveBids;
