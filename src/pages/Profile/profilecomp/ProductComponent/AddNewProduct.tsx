import { useState } from "react";
import Button from "../../../../components/UI/Button";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    image: null as File | null,
    enableBid: "",
    minimumBid: "",
    enableInstantBuy: "",
    instantBuy: "",
    endDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
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
        image: file,
      }));
    }
  };

  const validForm = () => {
    // Validate productName
    if (!newProduct.productName) {
      toast.error("Product Name is required");
      return false;
    }

    // Validate image
    if (!newProduct.image) {
      toast.error("Image is required");
      return false;
    }

    // Validate enableBid or enableInstantBuy
    if (!newProduct.enableBid && !newProduct.enableInstantBuy) {
      toast.error(
        "Please select at least one option: Enable Bid or Enable Instant Buy"
      );
      return false;
    }

    // Validate minimumBid if enableBid is true
    if (newProduct.enableBid && !newProduct.minimumBid) {
      toast.error("Minimum Bid is required");
      return false;
    }

    // Validate instantBuy if enableInstantBuy is true
    if (newProduct.enableInstantBuy && !newProduct.instantBuy) {
      toast.error("Instant Buy is required");
      return false;
    }

    // Validate endDate
    if (!newProduct.endDate) {
      toast.error("End Date is required");
      return false;
    }
    const currentDate = new Date();
    const selectedDate = new Date(newProduct.endDate);
    const isSameDay = (date1: Date, date2: Date) => {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
    };

    if (selectedDate < currentDate && !isSameDay(selectedDate, currentDate)) {
      toast.error("End date cannot be in the past");
      return false;
    }

    return true;
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(newProduct);
    if (validForm()) {
      const formData = new FormData();
      formData.append("productName", newProduct.productName);
      // formData.append("image", newProduct.image);
      if (newProduct.image) {
        formData.append("image", newProduct.image, newProduct.image.name);
      }
      formData.append("enableBid", newProduct.enableBid);
      formData.append("minimumBid", newProduct.minimumBid);
      formData.append("enableInstantBuy", newProduct.enableInstantBuy);
      formData.append("instantBuy", newProduct.instantBuy);
      formData.append("endDate", newProduct.endDate);

      console.log(formData);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("accessToken")}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios
        .post("http://localhost:8000/product/createProduct", formData)
        .then(() => {
          setNewProduct((newProduct) => ({
            ...newProduct,
            productName: "",
            image: null,
            enableBid: "",
            minimumBid: "",
            enableInstantBuy: "",
            instantBuy: "",
            endDate: "",
          }));
          const checkboxElements = document.querySelectorAll<HTMLInputElement>(
            'input[type="checkbox"]'
          );
          checkboxElements.forEach((checkbox) => {
            checkbox.checked = false;
          });
          toast("Item added successfully");
        })
        .catch((err) => {
          console.log(err.response.data.error);
          toast.error(err.response.data.error);
        });
    }
  };
  return (
    <form
      className="shadow-lg flex flex-col gap-2 py-3 mt-2 font-semibold text-lg"
      encType="multipart/form-data">
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>Product Name:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="text"
            name="productName"
            className={"rounded-md px-2 outline outline-1 outline-main"}
            value={newProduct.productName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>Upload Image:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="file"
            name="image"
            className="rounded-md px-2 text-sm"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>Enable Bid:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="checkbox"
            name="enableBid"
            className={"h-4 w-4"}
            value={newProduct.enableBid}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>Minimum Bid:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="number"
            name="minimumBid"
            className={"rounded-md px-2 outline outline-1 outline-main"}
            value={newProduct.minimumBid}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>Enable Instant Buy:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="checkbox"
            name="enableInstantBuy"
            className={"h-4 w-4"}
            value={newProduct.enableInstantBuy}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>Instant Buy:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="number"
            name="instantBuy"
            className={"rounded-md px-2 outline outline-1 outline-main"}
            value={newProduct.instantBuy}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="text-right col-span-2">
          <label>End Date:</label>
        </div>
        <div className="text-left col-span-3">
          <input
            type="date"
            name="endDate"
            className={"rounded-md px-2 outline outline-1 outline-main"}
            value={newProduct.endDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <Button
        value="Submit"
        styles="w-[200px] mr-auto ml-0"
        handleClick={handleFormSubmit}
      />
    </form>
  );
};

export default AddNewProduct;
