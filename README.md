->Introduction

The traditional ticketing system suffers from major issues such as ticket fraud, duplication, and unfair resale practices (scalping). 
Centralized platforms often lack transparency and give limited control to event organizers over secondary market pricing.
This project introduces a decentralized NFT-based ticketing system built on blockchain technology. 
By leveraging smart contracts, each ticket is minted as a unique NFT, ensuring authenticity, traceability, and secure ownership transfer without relying on intermediaries.

->About the Project

This system is built using Solidity, Hardhat, React, and Ethers.js to create a full-stack decentralized application (dApp).
Tickets are represented as ERC-721 NFTs
Users interact through a React frontend
Smart contract enforces rules like resale limits and cooldowns
Transactions are handled via MetaMask

->Functions (Core Smart Contract Logic)
- mintTicket()
Allows users to purchase and mint a ticket NFT
Requires ETH payment
Assigns ownership to the buyer

- listTicket(uint256 tokenId, uint256 price)
Lists a ticket for resale
Only the owner can list
Enforces maximum resale price (anti-scalping)

- buyTicket(uint256 tokenId)
Allows another user to purchase a listed ticket
Transfers ownership securely
Sends ETH to the seller

- validateTicket(uint256 tokenId)
Marks a ticket as used
Prevents reuse

- withdraw()
Allows contract owner to withdraw collected funds

->Features

NFT-based ticket ownership
- Secure and tamper-proof transactions
-  Controlled resale pricing (anti-scalping)
- Cooldown period before resale
-  Peer-to-peer ticket transfer
- Transparent transaction history
-  MetaMask wallet integration

-> Conclusion

This project demonstrates how blockchain technology can solve real-world problems in ticketing by introducing transparency, security, and fairness. By eliminating intermediaries and enforcing rules through smart contracts, the system ensures trustless transactions and prevents common issues like fraud and price manipulation.
While the current implementation focuses on core functionality, it provides a strong foundation for building scalable and production-ready decentralized ticketing platforms


-> Output Explanation

 - Wallet Connection
The user connects their MetaMask wallet to the application. This step initializes the blockchain interaction by allowing the frontend to access the user's account and sign transactions.

<img width="1710" height="1112" alt="1" src="https://github.com/user-attachments/assets/87d26a33-7988-4fad-abd4-0ecaab47b9ee" />


-> Mint Ticket

The user clicks the "Mint Ticket" button to create a new NFT ticket. A MetaMask transaction popup appears requesting payment (0.01 ETH).

<img width="1710" height="1112" alt="2" src="https://github.com/user-attachments/assets/df02c59d-4c16-4383-b49c-03d9719eb088" />
request on metamask from wallet 1
<img width="1710" height="1112" alt="3" src="https://github.com/user-attachments/assets/7f0b0a99-a383-4409-b765-245b7df3c299" />


 -> List Ticket
 
The ticket owner lists their NFT for resale by entering the token ID and price.

 <img width="1710" height="1112" alt="4" src="https://github.com/user-attachments/assets/b8f84f5f-fb2d-4fae-8524-ef28af9d9518" />
 request on metamask from wallet 1
 <img width="1710" height="1112" alt="5" src="https://github.com/user-attachments/assets/7e9bc37b-d07b-417e-80c0-4c1263d42983" />

switch to wallet/Account 2 on metamask

->  Buy Ticket

A different user purchases the listed ticket by clicking the "Buy" button.
<img width="352" height="516" alt="6" src="https://github.com/user-attachments/assets/a164b7c0-457c-4997-aef9-3229488af911" />
request on metamask from wallet 2
<img width="1710" height="988" alt="7" src="https://github.com/user-attachments/assets/8fc32ba8-6aed-4a23-a8c8-baf02abea8cd" />


- Ownership of the NFT is transferred
- Payment is sent to the seller


->  Terminal Output

The backend (Hardhat) shows contract deployment and transaction logs.
<img width="666" height="602" alt="Screenshot 2026-03-22 at 10 45 09 PM" src="https://github.com/user-attachments/assets/601cacb0-c73a-4e9e-a3bf-0a4f543cc796" />
- Transactions are recorded on the local blockchain


->Result:

- Smart contract deployed successfully
- <img width="584" height="250" alt="Screenshot 2026-03-22 at 10 52 30 PM" src="https://github.com/user-attachments/assets/4aa9ea44-fa52-4348-b710-a9d133aa38b7" />



----------------------END------------------------------

