import img from "../../assets/auction-icon.jpg";
import Card from "../../components/Card";
import Button from "../../components/UI/Button";

const ProductDetails = () => {
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
              handleClick={() => console.log("first")}
              styles={"w-[200px] mr-auto ml-0"}
            />
            <Button
              value="Instant Buy ($50)"
              handleClick={() => console.log("first")}
              styles={"w-[200px] mr-auto ml-0"}
            />
          </div>
          <div>Product Description: This is an awesome product</div>
        </div>
      </div>
      <div>
        <div>Recent Products</div>
        <div className="grid grid-cols-5 gap-3">
          <Card value={"Product title"} />
          <Card value={"Product title"} />
          <Card value={"Product title"} />
          <Card value={"Product title"} />
          <Card value={"Product title"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
