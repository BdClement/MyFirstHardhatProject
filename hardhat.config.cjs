/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-ethers");// extension specifique de ethers pour Harhat
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
//dotenv pour recuperer des variables depuis un .env pour cacher els private_KEY

module.exports = {
  solidity: "0.8.27",
  //Declaration d'objet network a utiliser Alchemy
  //Local network hardhat par defaut localhost:8545
};

// .cjs importation attendu require
// .js importation attendu import puisque type module dans config donc passage de CommonJS a ESM
