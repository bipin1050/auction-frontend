import img from "../../../assets/auction-icon.jpg";
import { useContext, useState } from "react";
import Button from "../../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../authentication/auth";
import axios from "axios";
import { baseURL } from "../../../data/baseURL";
import { toast } from "react-toastify";

const ProfileComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const {user, setUser, logout} = useContext(AuthContext);

  const [amount, setAmount] = useState("0");
  const handleAddBalance = () => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;
    axios
      .post(baseURL + "/user/addBalance", {
        balance : amount
      })
      .then((res) => {
        console.log(res)
        setShowModal(false)
        setUser({ ...user, balance: user.balance + Number(amount) });
        toast.success("Balance Added Successfully")
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add Balance")
      });
  }

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
        <span>Balance: ${user.balance}</span>
        <button
          onClick={() => {setShowModal(true)}}
          className="bg-main text-white h-6 px-1 rounded-md flex items-center justify-center ml-1">
          <span className="text-lg">+Add</span>
        </button>
      </div>
      <div>
        <button onClick={()=>logout()}>Logout</button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-opacity-60 z-10"></div>
          <div className="bg-[#001620] p-6 rounded-lg relative z-20 text-lg text-white">
            <div className="px-4">
              <span className="text-xl">Load Balance</span>
              <br />
              <span>
                Enter the amount you want to load to your BidZone Account
              </span>
            </div>
            <div className="bg-[#0c2b3a] p-4 w-[100%]">
              <input
                type="number"
                placeholder="Enter amount in $"
                className="outline outline-1 text-main font-bold rounded-md px-2 w-full h-9"
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setAmount(e.target.value)}}
              />
              <div className="flex">
                <Button
                  value="Add"
                  styles="px-10 ml-0 mt-2 text-white rounded-md py-2"
                  handleClick={() => {handleAddBalance()}}
                />
                <Button
                  value="Cancel"
                  styles="px-10 mr-0 mt-2 text-black rounded-md py-2"
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
