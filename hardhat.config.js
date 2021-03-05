require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.11"
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
      }
    ]
  },
  networks:{
    testnet:{
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      wallet: {
        mnemonic: 'license evoke life slush father range garlic picnic accuse label error dumb',
      },
      accounts: [`0xf5bebf7133e52cad8942cff8c0547e81f9e3239820a3dfed1a857cefd841d9f1`]
    }
  },
  etherscan:{
    apiKey: '8XV4M8T6DCNYX6EY8RXDD3F66J54WAWMN8'
  }
};

