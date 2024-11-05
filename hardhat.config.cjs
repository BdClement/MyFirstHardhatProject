/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-ethers");// extension specifique de ethers pour Harhat
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();
//dotenv pour recuperer des variables depuis un .env pour cacher els private_KEY

const { ALCHEMY_RPC, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    localhost : {
      url : 'http://127.0.0.1:8545',
      chainId: 31337
      // accounts : ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    },
    sepolia: {
      url: ALCHEMY_RPC,
      accounts: [`${PRIVATE_KEY}`]
    }
    //Autre reseau a definir
  },
  solidity: "0.8.27",
  //Declaration d'objet network a utiliser Alchemy
  //Local network hardhat par defaut localhost:8545
};

// .cjs importation attendu require
// .js importation attendu import puisque type module dans config donc passage de CommonJS a ESM
