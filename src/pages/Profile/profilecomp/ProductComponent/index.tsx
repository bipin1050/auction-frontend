import { useState } from "react";

import AddNewProduct from "./AddNewProduct";
import ClosedBids from "./ClosedBids";
import ActiveBids from "./ActiveBids";

const ProductComponent = () => {
  const [title, setTitle] = useState([
    { name: "Add Product", path: "addproduct", state: true },
    { name: "Closed Bids", path: "closedbids", state: false },
    { name: "Active Bids", path: "activebids", state: false },
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
      <div className="font-bold text-xl">Your Products</div>
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
          <div>
            <AddNewProduct />
          </div>
        )}
        {title[1].state && (
          <ClosedBids />
        )}
        {title[2].state && (
          <ActiveBids />
        )}
      </div>
    </div>
  );
};

export default ProductComponent;
