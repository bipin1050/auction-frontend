import Fields from "./Fields";
import { useState } from "react";
import img from "../../../assets/auction-icon.jpg";
import AddNewProduct from "./AddNewProduct";

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

  const [newProduct, setNewProduct] = useState({
    productName: "",
    image: "",
    enableBid: "",
    minimumBid: "",
    enableInstantBuy: "",
    instantBuy: "",
    endDate: "",
  });

  //  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewProduct((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  //  }
  //  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name:string) => {
  //    const { value } = e.target;
  //    console.log(name, value)
  //    setNewProduct((prevState) => ({
  //      ...prevState,
  //      [name]: value,
  //    }));
  //  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value, type, checked } = e.target;

    // Handle different input types
    const inputValue = type === "checkbox" ? checked : value;
    console.log(name, value);
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setNewProduct((prevState) => ({
        ...prevState,
        [e.target.name]: file,
      }));
    }
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
            {/* <Fields
              label={"Product Name"}
              inputTypes={"text"}
              inputStyles={"rounded-md px-2 outline outline-1 outline-main"}
              value={newProduct.productName}
              handleChange={(e) => handleInputChange(e, "productName")}
            /> */}
            {/* <Fields
              label={"Upload Image"}
              inputTypes={"file"}
              inputStyles={"rounded-md px-2 text-sm"}
              value={newProduct.image}
              handleChange={(e) => handleInputChange(e, "image")}
            /> */}
            {/* <Fields
              label={"Enable Bid"}
              inputTypes={"checkbox"}
              inputStyles={"h-4 w-4"}
              value={newProduct.enableBid}
              handleChange={(e) => handleInputChange(e, "enablebid")}
            />
            <Fields
              label={"Minimum Bid"}
              inputTypes={"number"}
              inputStyles={"rounded-md px-2 outline outline-1 outline-main"}
              value={newProduct.minimumBid}
              handleChange={(e) => handleInputChange(e, "minimumbid")}
            />
            <Fields
              label={"Enable Instant Buy"}
              inputTypes={"checkbox"}
              inputStyles={"h-4 w-4"}
              value={newProduct.enableInstantBuy}
              handleChange={(e) => handleInputChange(e, "enableInstantBuy")}
            />
            <Fields
              label={"Instant Buy"}
              inputTypes={"number"}
              inputStyles={"rounded-md px-2 outline outline-1 outline-main"}
              value={newProduct.instantBuy}
              handleChange={(e) => handleInputChange(e, "nstantBuy")}
            />
            <Fields
              label={"End Date"}
              inputTypes={"date"}
              inputStyles={"rounded-md px-2 outline outline-1 outline-main"}
              value={newProduct.endDate}
              handleChange={(e) => handleInputChange(e, "endDate")}
            /> */}
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
