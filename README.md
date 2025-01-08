
# MyFirstHardhatProject

MyFirstHardhatProject aims to create, test and deploy a smart contract on Sepolia Ethereum testnet. 

(I used hardhat network as well to first deploy it on hardhat local blockhain)

## 📋 Table des matières
- [Environment](#environment)
- [Install](#install)
- [Compilation](#compilation)
- [Tests](#tests)
- [Deployment](#deployment)
- [Licence](#licence)
- [Documentation](#documentation)

---

## 🌐 Environment

This project uses environment variables to store sensitive informations. Those informations are stored in a .env file at the root of the project, which is not included in the repo for security reasons.

### Creation env
- Create a .env file at the root of the project
- Copy the variables from the provided `.env.example` file and fill them with your own values.

```plaintext
    ALCHEMY_API_KEY=your_alchemy_key
    PRIVATE_KEY=your_private_key
    NETWORK_URL=your_network_url
```

ALCHEMY_API_KEY : API Key to connect to the Ethereum network via ALCHEMY.
PRIVATE_KEY : Private Key to sign and deploy the smart contract.
NETWORK_URL : Ethereum network RPC URL (ex. : Sepolia via Alchemy).

## 📦 Install
git clone https://github.com/BdClement/MyFirstHardhatProject.git

cd MyFrirstHardhatProject

Make sure you have installed [Node.js](https://nodejs.org/) 

Recommended version  : ![Node Version](https://img.shields.io/badge/node-20.x-green)

npm install

## 🛠 Compilation

npx hardhat compile


## 🧪 Tests

npx hardhat test

## 🔧 Deployment

npx hardhat ignition deploy ignition/modules/TournamentStore.cjs --network sepolia



## 📄 Licence
![License](https://img.shields.io/badge/license-MIT-green)

 
## Documentation

[How to deploy a smart contract](https://docs.alchemy.com/docs/how-to-deploy-a-smart-contract-to-the-sepolia-testnet)

