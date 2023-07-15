import React, { useContext, useEffect } from "react";
import img from "../../../../assets/auction-icon.jpg";
import useFetch from "../../../../data/useFetch";
import { Product } from "../../../../types/FetchTypes";
import { baseURL } from "../../../../data/baseURL";
import Button from "../../../../components/UI/Button";
import axios from "axios";
import { AuthContext } from "../../../../authentication/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PendingBids = () => {
  const { data, isLoading, error } = useFetch(
    "/product/getActiveProductsBidded"
  );

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCancelBid = (product: Product) => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;
    axios
      .post(baseURL + "/product/cancelBid", {
        productId: product._id,
        bidderId: user.id,
      })
      .then((res) => {
        console.log(res);
        navigate("/profile");
        toast.success("Bid Removed Successfully");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Failed to remove bid");
      });
  };

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
                  <div>Highest Bids : ${product.highestBid}</div>
                  <div>Your Bid : ${product.userBid}</div>
                  <Button
                    value="Cancel Bid"
                    handleClick={() => handleCancelBid(product)}
                    styles="px-5"
                  />
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

export default PendingBids;
