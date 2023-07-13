import React, { MouseEvent } from "react";
import img from "../assets/auction-icon.jpg";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";

const Card = ({value}: {value: string}) => {
  const handleTitleHover = (event: MouseEvent<HTMLSpanElement>) => {
    const title = event.target as HTMLSpanElement;
    title.style.cursor = "pointer";
    title.title = title.innerText;
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col shadow-2xl rounded-md">
      <div className="flex justify-around h-[250px]">
        <img src={img} width={"full"} height={200} className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="line-clamp-2 min-h-[2.5rem] h-[2.5rem] leading-[1.25rem]">
          <span
            className=" text-main font-bold cursor-pointer"
            onMouseOver={handleTitleHover}
            onClick={() => navigate("/products/:id")}>
            {value}
          </span>
        </div>
        <div className="">
          <p>Minimum Bid : $5</p>
          <p>Instant Buy : $50</p>
        </div>
        <div className="flex justify-between text-base italic">
          <div>Ends on: 2023/10/12</div>
          <div>5 bids</div>
        </div>
        {/* <Button
          value={"Place bid (min $5)"}
          handleClick={() => console.log("first")}
          styles={"w-full"}
        />
        <Button
          value={"Instant buy ($50)"}
          handleClick={() => console.log("first")}
          styles={"w-full"}
        /> */}
      </div>
    </div>
  );
};

export default Card;
