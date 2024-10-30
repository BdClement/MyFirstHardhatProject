// import { ethers } from "hardhat";
const { ethers } = require("hardhat");

async function main() {


	const signers = await ethers.getSigners();

	const addressIndex = 0;
	const address = await signers[addressIndex].getAddress();

	const balance = await ethers.provider.getBalance(address);

	console.log(`Le solde de ladress ${address} : ${balance} ETH`);
	// ${ethers.utils.formatEther(balance)}

	console.log("TEST SUR LE CONTRAT DIRECT");
	const contract = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});


//Verifier ce qui se passe sur le node
