require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_URL = process.env.REACT_APP_RINKEBY_RPC_URL != null ? process.env.REACT_APP_RINKEBY_RPC_URL: null;
const WALLET_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY != null ? process.env.REACT_APP_PRIVATE_KEY : null;
const ETHERSCAN_KEY = process.env.REACT_APP_ETHERSCAN_KEY != null ? process.env.REACT_APP_ETHERSCAN_KEY : null;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
