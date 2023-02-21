require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: "./src/back/artifacts",
        sources: "./src/back/contracts",
        cache: "./src/back/cache",
        tests: "./src/back/test"
    },
    networks: {
        matic: {
          url: process.env.MAINNET_RPC,
          accounts: [process.env.PRIVATE_KEY]
        }
      },
      etherscan: {
        apiKey: process.env.POLYGONSCAN_API_KEY
      }
}