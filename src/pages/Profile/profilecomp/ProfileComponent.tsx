import img from "../../../assets/auction-icon.jpg";
import { useState } from "react";
import Button from "../../../components/UI/Button";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-10 py-6 shadow-2xl">
      <div className="flex justify-between items-center">
        <img src={img} width={100} />
        <div className="font-bold text-lg text-main leading-5 text-right">
          <div>Bipin Khanal</div>
          <div className="text-base">#bipin_1078</div>
        </div>
      </div>
      <div className="font-bold text-lg text-main py-3 leading-6">
        Bid Placed : 10
        <br />
        Active Bid : 3
        <br />
        Closed Bid : 7
      </div>
      <div className="flex items-center">
        <span>Balance: $20</span>
        <button
          onClick={() => {setShowModal(true)}}
          className="bg-main text-white h-6 w-6 rounded-md flex items-center justify-center ml-1">
          <span className="text-lg">+</span>
        </button>
      </div>
      <div>
        <button onClick={()=>navigate("/login")}>Logout</button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[black] bg-opacity-80 backdrop-filter backdrop-opacity-60 z-10"></div>
          <div className="bg-[#001620] p-6 rounded-lg relative z-20 text-lg text-[white]">
            <div className="px-4">
              <span className="text-xl">Load Balance</span>
              <br />
              <span>
                Enter the amount you want to load to your BidZone Account
              </span>
            </div>
            <div className="bg-[#0c2b3a] p-4 w-[100%]">
              <input
                type="text"
                placeholder="Enter amount in $"
                className="outline outline-1 rounded-md px-2 w-full h-9"
                // value={amount}
                // onChange={handleAmountChange}
              />
              <div className="flex">
                <Button
                  value="Submit"
                  styles="px-10 ml-0 mt-2 text-[white] rounded-md py-2"
                  handleClick={() => console.log("hello")}
                />
                <Button
                  value="Cancel"
                  styles="px-10 mr-0 mt-2 text-[white] rounded-md py-2"
                  handleClick={() => {setShowModal(false)}}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
