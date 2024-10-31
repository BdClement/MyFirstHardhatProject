const { ethers } = require("hardhat");

const provider = new ethers.JsonRpcProvider("http://localhost:8545");

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

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
		const owner = await contract.getOwner();
		// const owner = "test";
		console.log("Le proprietaire du contrat est : ", owner);
	} catch (error) {
		console.log("Erreur : ", error);
	}
}

main();
// Faire la connexion entre mon back-end et le smart contrat sur le reseau localhost !
// Faire la meme chose sur un reseau de test ETH
