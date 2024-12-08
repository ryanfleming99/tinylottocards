import React from "react";
import "../../src/main.css"; // Import custom styles if needed
import Header from "./Header";

function Staking() {
  const buyCard = cardName => {
    alert(`Buying ${cardName} with cryptocurrency.`);
  };

  const zoom = cardName => {
    alert(`Zooming in on ${cardName}`);
  };

  return (
    <div
      className="theme-monochrome min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ryry/image/upload/v1733672318/dashboard-background_bz5jfo.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%"
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center h-screen text-center opacity-0 animate-fade-in">
        <div className="h-30 py-50">
          <h2 className="text-5xl font-bold drop-shadow-md">Dashboard</h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto intro">
            Explore our unique collection of NFT scratch cards. Buy using
            cryptocurrency and start collecting today!
          </p>
        </div>
        <div id="shop" className="py-16 h-30">
          <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-md">
            Browse Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
            {[
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1730037811/website%20images/tinylotto/Black-Card-Unscratched_vpnuh7.jpg",
                name: "Black Card Unscratched",
                price: "0.1 ETH"
              },
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1730037802/website%20images/tinylotto/GoldCard_begdz4.webp",
                name: "Gold Card",
                price: "0.5 ETH"
              },
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1730037802/website%20images/tinylotto/BlackCard_q5xsqo.webp",
                name: "Black Card",
                price: "0.2 ETH"
              },
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1730037801/website%20images/tinylotto/BlackRedCard_o8e358.webp",
                name: "Black Red Card",
                price: "0.3 ETH"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={card.src}
                  alt={card.name}
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => zoom(card.name)}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{card.name}</h3>
                  <p className="text-gray-400 mt-2">{card.price}</p>
                  <button
                    onClick={() => buyCard(card.name)}
                    className="mt-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md shadow-lg font-bold hover:opacity-90 w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Shop Section */}
    </div>
  );
}

export default Staking;
