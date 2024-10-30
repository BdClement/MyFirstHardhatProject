// import { ethers } from "hardhat";
const { ethers } = require("hardhat");

async function main() {

	const contract = await ethers.getContractAt("TournamentStore", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
	const ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
	const provider = new ethers.JsonRpcProvider("http://localhost:8545");
	const balance =  await provider.getBalance(ownerAddress);
	console.log("Solde du proprietaire :", ethers.formatEther(balance), " ETH");
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});


//Verifier ce qui se passe sur le node
