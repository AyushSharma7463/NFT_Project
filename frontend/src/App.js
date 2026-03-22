import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
  "function mintTicket() payable",
  "function listTicket(uint256,uint256)",
  "function buyTicket(uint256) payable",
  "function salePrice(uint256) view returns(uint256)",
  "function ownerOf(uint256) view returns(address)"
];

function App() {
  const [account, setAccount] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  async function getContract() {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    return new ethers.Contract(contractAddress, abi, signer);
  }

  async function connectWallet() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
  }

  async function mintTicket() {
    try {
      const contract = await getContract();

      const tx = await contract.mintTicket({
        value: ethers.parseEther("0.01"),
      });

      await tx.wait();
      alert("✅ Ticket Minted!");
    } catch (err) {
      console.error(err);
      alert("❌ Mint failed");
    }
  }

  async function listTicket() {
    try {
      const contract = await getContract();

      const tx = await contract.listTicket(
        tokenId,
        ethers.parseEther(price)
      );

      await tx.wait();
      alert("✅ Listed!");
    } catch (err) {
      console.error(err);
      alert("❌ Listing failed");
    }
  }

  async function buyTicket() {
  try {
    if (!tokenId) {
      alert("Enter Token ID");
      return;
    }

    const contract = await getContract();
    const id = Number(tokenId);

    const salePrice = await contract.salePrice(id);
    console.log("SALE PRICE:", salePrice.toString());

    if (salePrice == 0n) {
      alert("❌ Ticket not listed");
      return;
    }

    const tx = await contract.buyTicket(id, {
      value: salePrice,
    });

    await tx.wait();
    alert("✅ Purchased!");
  } catch (err) {
    console.error("BUY ERROR:", err);
    alert("❌ Purchase failed");
  }
}

  return (
  <div className="container">
    <h1>NFT Ticket</h1>

    <button onClick={connectWallet}>Connect</button>
    <p>{account}</p>

    <div className="section">
      <button onClick={mintTicket}>Mint Ticket</button>
    </div>

    <div className="section">
      <input
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />

      <input
        placeholder="Price (ETH)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={listTicket}>List</button>
    </div>

    <div className="section">
      <button onClick={buyTicket}>Buy</button>
    </div>
  </div>
);
}

export default App;

