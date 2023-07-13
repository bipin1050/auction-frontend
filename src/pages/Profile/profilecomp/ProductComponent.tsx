import Fields from "./Fields";
import {useState} from 'react';
import img from "../../../assets/auction-icon.jpg";

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
  }
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
                className={`py-2 px-4 text-[white] cursor-pointer ${
                  title.state ? "bg-main" : "bg-ignore"
                }`}>
                {title.name}
              </div>
            );
          })}
        </div>
        {title[0].state && (
          <div className="bg-[#D9D9D9] flex flex-col gap-2 py-3 mt-2 font-semibold text-lg">
            <Fields
              label={"Product Name"}
              inputTypes={"text"}
              inputStyles={"rounded-md px-2"}
            />
            <Fields
              label={"Upload Image"}
              inputTypes={"file"}
              inputStyles={"rounded-md px-2 text-sm"}
            />
            <Fields
              label={"Enable Bid"}
              inputTypes={"checkbox"}
              inputStyles={"h-4 w-4"}
            />
            <Fields
              label={"Minimum Bid"}
              inputTypes={"number"}
              inputStyles={"rounded-md px-2"}
            />
            <Fields
              label={"Enable Instant Buy"}
              inputTypes={"checkbox"}
              inputStyles={"h-4 w-4"}
            />
            <Fields
              label={"Instant Buy"}
              inputTypes={"number"}
              inputStyles={"rounded-md px-2"}
            />
            <Fields
              label={"End Date"}
              inputTypes={"date"}
              inputStyles={"rounded-md px-2"}
            />
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
        {title[2].state && (
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

export default ProductComponent;
