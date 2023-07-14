import { useContext } from "react";
import img from "../../assets/auction-icon.jpg";
import Button from "../../components/UI/Button";
import { AuthContext } from "../../authentication/auth";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (id : string) => {
    if(!user) navigate('/login')
    // id == 'placebid' ? :
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 pt-8">
        <div>
          <img src={img} width={"full"} />
        </div>
        <div>
          <div className="font-bold text-2xl">
            This is the Awesome Product Name
          </div>
          <div> Time Left: 2hrs 3min (2023/10/10)</div>
          <div className="bids">
            Current Bid: $5 No. of bids: 4
            <Button
              value="Place Bid ($6)"
              handleClick={() => handleClick("placebid")}
              styles={"w-[200px] mr-auto ml-0"}
            />
            <Button
              value="Instant Buy ($50)"
              handleClick={() => handleClick("instantbuy")}
              styles={"w-[200px] mr-auto ml-0"}
            />
          </div>
          <div>Product Description: This is an awesome product</div>
        </div>
      </div>
      <div>bottom content</div>
    </div>
  );
};

export default ProductDetails;
