import React, { useState, useEffect } from "react";

import Ethers from "../components/Ethers.js";

const CollectPrize = () => {
  // State to store the winner's prize
  const [prize, setPrize] = useState(null);

  // Simulate fetching prize data
  useEffect(() => {
    // Fake API delay to fetch prize
    const fakePrizeData = "0.1 ETH"; // Simulate winner's prize value
    setTimeout(() => {
      setPrize(fakePrizeData);
    }, 1000); // 1-second delay
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white">
      <h1 className="text-5xl font-bold mb-6">🎉 Congratulations! 🎉</h1>
      <p className="text-xl mb-4">You are a winner! Here is your prize:</p>

      {prize ? (
        <div className="bg-yellow-500 text-black px-6 py-3 rounded-md text-4xl font-bold">
          {prize}
        </div>
      ) : (
        <p className="text-lg">Loading your prize...</p>
      )}

      <p className="text-lg mt-6 ">
        You can claim your prize by connecting your wallet and verifying your
        account.
      </p>
      <div id="walletButton" className="hidden md:flex space-x-4 mt-6">
        <Ethers />
      </div>
    </div>
  );
};

export default CollectPrize;
