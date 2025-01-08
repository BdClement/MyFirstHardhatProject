
# MyFirstHardhatProject

MyFirstHardhatProject aims to create, test and deploy a smart contract on Sepolia Ethereum testnet.  
(I used hardhat's local network as well to first deploy it on hardhat local blockhain)  
Hardhat is a Node.js framework that simplifies the process of developing, testing, and deploying smart contracts on Ethereum blockchain.

## 📋 Contents
- [Environment](#-environment)
- [Install](#-install)
- [Compilation](#-compilation)
- [Tests](#-tests)
- [Deployment](#-deployment)
- [Licence](#-licence)
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
```bash
git clone https://github.com/BdClement/MyFirstHardhatProject.git
cd MyFrirstHardhatProject
```

As Hardhat operates within the Node.js environment, I had to install it with Hadhat as dependency thanks to npm (Node Package Manager a tool used to manage dependencies in a Node.js project as framework, pluggins..)

Make sure you have installed [Node.js](https://nodejs.org/) 
Recommended version  : ![Node Version](https://img.shields.io/badge/node-20.x-green)

```bash
npm install
npm init -y
npm install --save-dev hardhat
```


I initialized hardhat by using npx which is a tool included with npm to allows running npm packages without installing them globally.  
For example, running npx hardhat executes the Hardhat command without needing to install it globally on the system.  
This ensures we are using the version of Hardhat specified in the project (in Node.js dependencies), keeping the environment clean and consistent.

```bash
npx hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

## 🛠 Compilation

I have written my Solidity's smart contracts and store it in a contracts folder.  
Hardhat compile the contracts.

```bash
npx hardhat compile
npx hardhat clean && npx hardhat compile
```

## 🧪 Tests

Hardhat has a testing functionality. It integrates with Mocha for structuring tests and Chai for assertions, providing an environment to simulate transactions and interactions with contracts on a local Ethereum network.

```bash
npx hardhat test
```

## 🔧 Deployment

I choose to use Hardhat Ignition to deploy my contracts which has been installed with hardhat-toolbox.  
It works by providing a modular deployment system, allowing to organize and reuse deployment steps across multiple contracts and networks, offering greater flexibility and maintainability compared to a simple script.  
Ignition's advantage hasn't really helpfull in this context but I wanted to use it for the first time and explore it.

```bash
npx hardhat ignition deploy ignition/modules/TournamentStore.cjs --network sepolia
```

## 📄 Licence
![License](https://img.shields.io/badge/license-MIT-green)

 
## Documentation

[How to deploy a smart contract](https://docs.alchemy.com/docs/how-to-deploy-a-smart-contract-to-the-sepolia-testnet)

