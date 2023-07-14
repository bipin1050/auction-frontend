import { useState } from "react";
import img from "../../../assets/auction-icon.jpg";

const BidComponent = () => {
  const [title, setTitle] = useState([
    { name: "Closed Bids", path: "closedbids ", state: true },
    { name: "Pending Bids", path: "pendingbids", state: false },
  ]);

  const handleTitleClick = (path: string) => {
    const updatedTitle = title.map((item) => {
      if (item.path === path) {
        return { ...item, state: true };
      }
      return { ...item, state: false };
    });

    setTitle(updatedTitle);
  };
  return (
    <div className="text-main">
      <div className="font-bold text-xl">Your Bids</div>
      <div>
        <div className="flex justify-start">
          {title.map((title, id) => {
            return (
              <div
                key={id}
                onClick={() => handleTitleClick(title.path)}
                className={`py-2 px-4 text-white cursor-pointer ${
                  title.state ? "bg-main" : "bg-ignore"
                }`}>
                {title.name}
              </div>
            );
          })}
        </div>
        {title[0].state && (
          <div className="flex px-2 py-3 shadow-xl items-center">
            <div>1</div>
            <div className="px-8">
              <img src={img} width={100} />
            </div>
            <div>
              <div>Total Bids : 10</div>
              <div>Highest Bids : $68</div>
              <div></div>
            </div>
          </div>
        )}
        {title[1].state && (
          <div className="flex px-2 py-3 shadow-xl items-center">
            <div>1</div>
            <div className="px-8">
              <img src={img} width={100} />
            </div>
            <div>
              <div>Total Bids : 10</div>
              <div>Highest Bids : $68</div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BidComponent;
