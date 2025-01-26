import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";

function Dashboard() {
  const buyCard = cardName => {
    alert(`Buying ${cardName} with cryptocurrency.`);
  };

  const zoom = cardName => {
    alert(`Zoom coming soon for ${cardName}`);
  };

  return (
    <div
      className="theme-monochrome text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ryry/image/upload/v1737904638/tinywow_dashbiard_73859510_2_m2lf8c.webp')",
        backgroundSize: "cover", // Maintain the aspect ratio of the image
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        height: "auto", // Let the container grow with the image
        minHeight: "100vh" // Ensure it covers at least the viewport
      }}
    >
      <div
        className="relative w-full"
        style={{
          height: "100%",
          minHeight: "100vh", // Ensure the container grows with the background
          overflowY: "auto" // Enable scrolling for content taller than the viewport
        }}
      >
        {/* Header */}
        <Header isBackButton={true} />

        {/* Hero Section */}
        <main className="flex flex-col items-center text-center">
          <section className="flex flex-col justify-center items-center py-44 z-[50] sm:z-99">
            <Title text={"Dashboard"} />
            <p className="text-lg mt-6 max-w-2xl mx-auto intro px-6">
              Explore our unique collection of NFT scratch cards. Buy using
              cryptocurrency and start collecting today!
            </p>
          </section>
        </main>

        {/* Shop Section */}
        <section id="shop" className="w-full">
          <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-md ">
            Coming soon!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
            {[
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1737905081/black-scratch-card_osqq8t.webp",
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
              },
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1662220086/attack_pwaeq3.png",
                name: "Secret rare",
                price: "0.1 ETH"
              },
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1662220086/defense_cilkd9.png",
                name: "Gold Card",
                price: "0.5 ETH"
              },
              {
                src:
                  "https://res.cloudinary.com/ryry/image/upload/v1662220086/health_waaxc4.png",
                name: "Black Card",
                price: "0.2 ETH"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-transparent rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={card.src}
                  alt={card.name}
                  className="w-full h-auto max-h-auto object-cover cursor-pointer"
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
    </div>
  );
}

export default Dashboard;
