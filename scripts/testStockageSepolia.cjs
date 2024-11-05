const { ethers } = require("hardhat");

// const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/nT09qO2Q0cQzzA6PQ_D5P1Ki7D7LpZjY");

const contractAddress = "0x8eFaB607840525C4351D7956Bf95c97317fF5398"

const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_lastOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerShipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tounrnamentId",
          "type": "uint256"
        }
      ],
      "name": "TournamentScoreStored",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getTournamentScore",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "_players",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_winner",
          "type": "uint256[]"
        },
        {
          "internalType": "string",
          "name": "_score",
          "type": "string"
        }
      ],
      "name": "storeScore",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function main() {
	try {
		const testResult = await contract.getTournamentScore(11);
		console.log("Stockage sur le contrat : ", testResult);
	} catch (error) {
		console.log("Erreur : ", error);
	}
}

main();
// Faire la connexion entre mon back-end et le smart contrat sur le reseau localhost !
// Faire la meme chose sur un reseau de test ETH
