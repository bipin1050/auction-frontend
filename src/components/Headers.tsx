import React from 'react'
import { useNavigate } from 'react-router-dom';

const Headers = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-main py-6">
      <nav className="w-[85%] 2xl:w-[1100px] mx-auto flex justify-between text-xl text-[white]">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          BidZone - Auctions Made Easy
        </div>
        <button className="cursor-pointer" onClick={() => navigate("/profile")}>
          Profile
        </button>
      </nav>
    </header>
  );
}

export default Headers