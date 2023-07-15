import { useContext, useState } from "react";
import img from "../../assets/auction-icon.jpg";
import Button from "../../components/UI/Button";
import { AuthContext } from "../../authentication/auth";
import { useNavigate, useParams } from "react-router-dom";
import useFetchDetails from "../../data/useFetchDetails";
import { baseURL } from "../../data/baseURL";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useFetchDetails(
    "/product/productDetails",
    id || ""
  );
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bidAmount, setBidAmount] = useState("");
  const [showAmountModal, setShowAmountModal] = useState(false);

  const handleClick = (buyType: string) => {
    if (!user) navigate("/login");
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;
    axios
      .post(baseURL + "/product/placeBid", {
        buyType,
        userId: user.id,
        productId: id,
        bidAmount,
      })
      .then((res) => {
        console.log(res);
        setBidAmount("");
        setShowAmountModal(false);
        toast.success("Bid Placed Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        // return err
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
      <div>
        <img
          src={baseURL + "/images/" + data?.image}
          // width={"full"}
          // height={"full"}
          className="object-cover max-h-[500px] w-[60%] mx-auto md:w-full"
        />
      </div>
      <div className="flex flex-col gap-4 text-lg">
        <div className="font-bold text-2xl w-full shadow-md">
          {data?.productName}
        </div>
        <div> End Date: {data?.endDate?.toString().slice(0, 10)}</div>
        <div>
          Current Highest Bid: ${data?.highestBid ? data?.highestBid : "0"}
        </div>
        <div>Total No. of bids: {data?.bidCount}</div>
        <div className="grid grid-cols-2 gap-5 mb-5 max-[450px]:grid-cols-1 max-[769px]:grid-cols-2 max-[1000px]:grid-cols-1">
          {data?.enableBid && (
            <Button
              value={`Place Bid (min. $${data.minimumBid})`}
              handleClick={() => {
                setShowAmountModal(true);
              }}
              styles={"w-[200px] mr-auto ml-0"}
            />
          )}
          {data?.enableInstantBuy && (
            <Button
              value={`Instant Buy ($${data.instantBuy})`}
              handleClick={() => {handleClick("instantbuy")}}
              styles={"w-[200px] mr-auto ml-0"}
            />
          )}
        </div>
        {showAmountModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-opacity-60 z-10"></div>
            <div className="bg-[#001620] p-6 rounded-lg relative z-20 text-lg text-white">
              <div className="px-4">
                <span className="text-xl">Place Bid</span>
                <br />
                <span>
                  Enter your Bid Amount (Minumum Bid at ${data?.minimumBid})
                </span>
              </div>
              <div className="bg-[#0c2b3a] p-4 w-full">
                <input
                  type="number"
                  placeholder="Enter amount in $"
                  className="outline outline-1 text-main font-bold rounded-md px-2 w-full h-9"
                  value={bidAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setBidAmount(e.target.value);
                  }}
                />
                <div className="flex">
                  <Button
                    value="Add"
                    styles="px-10 ml-0 mt-2 text-white rounded-md py-2"
                    handleClick={() => {
                      handleClick("placebid");
                    }}
                  />
                  <Button
                    value="Cancel"
                    styles="px-10 mr-0 mt-2 text-black rounded-md py-2"
                    handleClick={() => {
                      setShowAmountModal(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
