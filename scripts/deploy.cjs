// Utilise pour un test, desormais obcolete car utilisation de hardhat Ignition pour le deploiement
const { ethers } = require("hardhat");

async function main() {
    const TournamentStore = await ethers.getContractFactory("TournamentStore"); // Crée un contrat factory
    const tournamentStore = await TournamentStore.deploy(); // Déploie le contrat

    // Assure-toi que le contrat est déployé
	await tournamentStore.waitForDeployment();

    // Affiche l'adresse
	console.log(`TournamentStore has been deployed at address : ${await tournamentStore.getAddress()}`);
}

// Exécute la fonction main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Deployment error:", error);
        process.exit(1);
    });
