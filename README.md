# Full-Stack-Dapp 🚀

This repository contains a basic decentralized application (DApp) that demonstrates the integration of Solidity, React, Hardhat, and the Sepolia testnet. The DApp allows users to interact with a simple smart contract deployed on the Sepolia testnet.

Visit [https://web3-dapp-wave.netlify.app/](https://web3-dapp-wave.netlify.app/) in your web browser to interact with the DApp.

## Prerequisites 🛠️

Make sure you have the following tools installed on your machine:

- Node.js 📦
- npm (Node Package Manager) 📦
- Hardhat ⚙️
- React ⚛️

## Installation 🚧

1. Clone the repository:

```bash
git clone https://github.com/your-username/simple-dapp.git
```

2. Navigate to the project directory:

```bash
cd simple-dapp
```

3. Install dependencies:

```bash
npm install
```

## Configuration ⚙️

1. Create a `.env` file in the project root and add your Sepolia testnet API key, also your metamask private key in your env:

```env
SEPOLIA_API_KEY=your_sepolia_api_key
PRIVATE_KEY=metamask_api_key
```

Replace `your_sepolia_api_key` with your actual Sepolia testnet API key.

## Usage 🚀

1. Compile the smart contract:

```bash
npx hardhat compile
```

2. Deploy the smart contract to Sepolia testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

3. Start the React app:

```bash
npm run dev
```
