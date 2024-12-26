import { useState } from "react";
import { ethers } from "ethers";

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(accounts[0]); // Set connected wallet address
        console.log("Wallet connected:", accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert(
        "MetaMask is not installed. Please install it to connect your wallet."
      );
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    console.log("Wallet disconnected");
  };

  return (
    <div>
      {!walletAddress ? (
        <button
          className="connect-wallet-button animate-customBounce"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <button className="wallet-connected" onClick={disconnectWallet}>
          <button className="text-white italic text-xs truncate max-w-[150px] overflow-hidden whitespace-nowrap">
            Wallet:
            <span class="opacity-50">{walletAddress}</span>
          </button>
        </button>
      )}
    </div>
  );
}

export default WalletConnect;
