const hre = require("hardhat");

async function main() {
  const Ticket = await hre.ethers.getContractFactory("TicketNFT");
  const ticket = await Ticket.deploy();

  await ticket.deployed(); 

  console.log("DEPLOYED:", ticket.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});