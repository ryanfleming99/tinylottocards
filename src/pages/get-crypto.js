import React, { useEffect } from "react";
// import gsap from "gsap";
import Header from "../components/Header";
// import dynamic from "next/dynamic";

// // Dynamically import the MoonPay component
// const MoonPay = dynamic(() => import("../components/Moonpay.js"), {
//   ssr: false // Disable server-side rendering
// });

function GetCrypto() {
  return (
    <div
      className="theme-monochrome min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ryry/image/upload/v1733790212/staking-background-one_juc7v5.webp')"
      }}
    >
      <Header isBackButton={true} />
      <main className="flex flex-col items-center text-center">
        <section className="py-20 px-6">
          <h1 id="floatingIntro" className="text-4xl font-extrabold">
            Your Gateway to Cryptocurrency!
          </h1>
        </section>
      </main>
    </div>
  );
}

export default GetCrypto;
