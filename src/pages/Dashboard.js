import React from "react";
import "../styles/main.css"; // Adjust path to reflect new location
// Import custom styles if needed
import Header from "../components/Header";

function Dashboard() {
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
        backgroundPosition: "center"
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center py-44">
          <h2 className="text-5xl font-bold drop-shadow-md">Dashboard</h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto intro px-6">
            Explore our unique collection of NFT scratch cards. Buy using
            cryptocurrency and start collecting today!
          </p>
        </section>

        {/* Shop Section */}
      </main>
      <section id="shop" className="w-full">
        <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-md ">
          Coming soon!
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
              className="bg-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
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
                  className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-md shadow-lg font-bold hover:opacity-90 w-full"
                >
                  Coming soon!
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
