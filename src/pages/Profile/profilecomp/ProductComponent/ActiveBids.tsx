import React from "react";
import img from "../../../../assets/auction-icon.jpg";
import useFetch from "../../../../data/useFetch";
import { Product } from "../../../../types/FetchTypes";
import { baseURL } from "../../../../data/baseURL";

const ActiveBids = () => {
  const { data, isLoading, error } = useFetch("/product/getActiveBids");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {data.length ? (
        data.map((product: Product, id: number) => {
          return (
            <div key={id}>
              <div className="flex px-2 py-3 shadow-xl items-center max-[450px]:flex-col max-[450px]:gap-3">
                <div className="max-[450px]:hidden">{id + 1}</div>
                <div className="px-8">
                  <img src={`${baseURL}/images/${product.image}`} width={100} />
                </div>
                <div>
                  <div>{product.productName}</div>
                  <div>Total Bids : {product.bidCount}</div>
                  <div>
                    Highest Bids : $
                    {product.highestBid === null ? "0" : product.highestBid}
                  </div>
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
