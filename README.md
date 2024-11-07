
# MyFrirstHardhatProject

MyFrirstHardhatProject aims to create, test and deploy a smart contract on Sepolia Ethereum testnet. 

(I used hardhat network as well to firt deploy it on hardhat local blockhain)

## 📋 Table des matières
- [Environment](#environnement)
- [Install](#-installation)
- [Compilation](#-compilation)
- [Tests](#-tests)
- [Deployment](#-déploiement)
- [Licence](#-licence)

---

## 🌐 Environment

This project uses environment variables to store sensitive informations. Those informations are stored in a .env file at the root of the projet, which is not included in the repo for security reasons.

### Creation env
- Create a .env file at the root of the project
- Copy the variables from the provided `.env.example` file and fill them with your own values.

```plaintext
    INFURA_API_KEY=your_infura_key
    PRIVATE_KEY=your_private_key
    NETWORK_URL=your_network_url
```

INFURA_API_KEY : Clé API pour se connecter au réseau Ethereum via Infura.
PRIVATE_KEY : Clé privée pour signer et déployer le smart contract.
NETWORK_URL : URL RPC du réseau Ethereum (ex. : Sepolia via Infura).

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


### A Faire 
- Retier cache, artifacts, nodes_modules
 
 
