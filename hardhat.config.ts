import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "hardhat-typechain";

const { WALLET_PRIVATE_KEY, BSCSCAN_API_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  console.log(process.env);
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
   TODO: Migrate to a universal, preferably latest compiler version
 */
const testnet = {
  url: "https://data-seed-prebsc-1-s1.binance.org:8545",
  chainId: 97,
  accounts: [`0x${WALLET_PRIVATE_KEY}`],
} as any;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.4.11",
      },
      {
        version: "0.5.9",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.7.5",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  networks: {
    testnet: testnet,
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  },
};

module.exports = config;
