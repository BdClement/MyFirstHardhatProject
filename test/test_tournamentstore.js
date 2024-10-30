import { expect } from 'chai';
import hardhat from "hardhat";// Utilisation de l'import ES par defaut
const { ethers } = hardhat;//Contournement de la limitation  d'import direct de ethers
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";


describe("TournamentStore contract", function() {

	async function deployStoreFixture() {
		const [owner, addr1, addr2] = await ethers.getSigners();// Recuperation d'adresses de test
		//Deploiement du contrat autre option => Utilisation de getContractFactory et possibilite de donner des arguments au constructeur
		const ts = await ethers.deployContract("TournamentStore");
		await ts.waitForDeployment();// Assurance que le deploiement a bien ete effectue
		const ts_address = await ts.getAddress();//Recupere l'addresse du contrat deploye
		return {ts, ts_address, owner, addr1, addr2}
	};

	//Avec declaratiton des variables au prealable disponible pour tout les tests
	// beforeEach(async function () {
	// 	const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
	// })
	describe("Initialisation du contrat", function() {
		it("Le deploiement devrait assigner le owner au compte utilise pour le deploiement", async function (){
			const { ts, ts_address, owner } = await loadFixture(deployStoreFixture);
			expect(ts_address).to.equal(await ts.getAddress());;
			expect(owner.address).to.equal(await ts.getOwner());
		});
	});
	describe("Tests unitaires des fonctions", function() {

		it("Le score devrait etre stockable", async function (){
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			let errorOccured = false; // Possibilite de verifier directement si la fonction ne revert pas mais necessite d'installer un plugin (fait plus bas pour Ownership)
			try {
				await ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1')
			} catch (error) {
				errorOccured = true;
			}
			expect(errorOccured).to.be.false;
		});

		it("Le score doit etre consultable par tous", async function() {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1');

			let result = await ts.getTournamentScore(1);
			let players = result[0].map(player => Number(player));// map permet de creer un nouveau tableau a partir dun tableau en convertissant le resultat
			let winner = result[1].map(w => Number(w));// Number est une fonction globale JS qui permet de convertir une valeur en nombre
			let score = result[2];
			expect(players).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);// to.deep est une methode utilisee pour comparee de maniere recursive
			expect(winner).to.deep.equal([3]);
			expect(score).to.equal('3-1');

			let result_not_owner = await ts.connect(addr2).getTournamentScore(1);
			players = result_not_owner[0].map(player => Number(player));// map permet de creer un nouveau tableau a partir dun tableau en convertissant le resultat
			winner = result_not_owner[1].map(w => Number(w));// Number est une fonction globale JS qui permet de convertir une valeur en nombre
			score = result_not_owner[2];
			expect(players).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);// to.deep est une methode utilisee pour comparee de maniere recursive
			expect(winner).to.deep.equal([3]);
			expect(score).to.equal('3-1');
		})

		it("Le Owner doit etre consultable par tous", async function() {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			expect(await ts.getOwner()).to.equal(owner);
			expect(await ts.connect(addr1).getOwner()).to.equal(owner);
		})

		it("Le changement de Ownership doit etre possible uniquement par le owner", async function() {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await expect(ts.transferOwnership(addr1)).to.not.be.reverted;
			await expect(ts.transferOwnership(addr2)).to.be.reverted;
		})
	});

	describe("Test des events", function() {
		it("L'event TournamentScoreStored doit etre emis", async function () {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await expect(ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1'))
				.to.emit(ts, "TournamentScoreStored")
				.withArgs(1);
		})
		it("L'event OwnerShipTransferred doit etre emis", async function() {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await expect(ts.transferOwnership(addr1)).to.emit(ts, "OwnerShipTransferred").withArgs(owner, addr1);
		})
	})

	describe("Tests des modifiers", function() {
		it("Le modifier onlyOwner doit autoriser uniquement le owner a effectue l'action", async function () {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await expect(ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1')).to.not.be.reverted;
			await expect(ts.connect(addr2).storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1')).to.be.rejectedWith("Sender is not the owner !");
		})
		it("Le modifier onlyIfExists doit autoriser l'action uniquement si l'id concerne un tournoi stocke sur le contrat", async function () {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1');
			await expect(ts.getTournamentScore(1)).to.not.be.reverted;
			await expect(ts.getTournamentScore(5)).to.be.revertedWith("Ce tournoi n'est pas stocke sur le contrat.");
		})
		it("Le modifier onlyIfDoesntExist doit autoriser l'action uniquement pour un id qui n'a pas deja ete stocke sur le contrat", async function () {
			const { ts, ts_address, owner, addr1, addr2 } = await loadFixture(deployStoreFixture);
			await expect(ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1')).to.not.be.reverted;
			await expect(ts.storeScore(1, [1, 2, 3, 4, 5, 6, 7, 8], [3], '3-1')).to.be.revertedWith("Ce tournoi a deja ete stocke !");
		})
	})
});


// Dans ce test, j'utilise un LoadFixture pour chaque test different
// L'autre option serait d'automatiser le LoadFixture avec la creation de variable modifiables let
// et un Hook qui automative l'appel du loadFixture pour chaque tests
