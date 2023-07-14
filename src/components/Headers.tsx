import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentication/auth';

const Headers = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  return (
    <header className="bg-main py-6">
      <nav className="w-[85%] 2xl:w-[1100px] mx-auto flex justify-between text-xl text-white">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          BidZone - Auctions Made Easy
        </div>
        {user && (
          <button
            className="cursor-pointer"
            onClick={() => navigate("/profile")}>
            Hi { user.name.split(" ")[0]}
          </button>
        )}
        {!user && (
          <button className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

export default Headers