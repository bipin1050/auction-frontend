import React from 'react'

const Headers = () => {
  return (
    <header className="bg-main py-6">
      <nav className="w-[85%] 2xl:w-[1100px] mx-auto flex justify-between text-xl text-[white]">
        <div className="">BidZone - Auctions Made Easy</div>
        <button>Profile</button>
      </nav>
    </header>
  );
}

export default Headers