const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TournamentStoreModule", (m) => {
	const TournamentStoreContract = m.contract("TournamentStore", []);
	return { TournamentStoreContract };
});
