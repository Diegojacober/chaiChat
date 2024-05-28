require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

require("dotenv").config();

const LOCAL_NETWORK_URL = process.env.LOCAL_NETWORK_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: LOCAL_NETWORK_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
