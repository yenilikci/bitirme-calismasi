const HDWalletProvider = require('@truffle/hdwallet-provider');
const keys = require('./keys.json');

module.exports = {
    contracts_build_directory: "./public/contracts",
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
        },
        ropsten: {
            provider: () =>
                new HDWalletProvider({
                    mnemonic: {
                        phrase: keys.MNEMONIC
                    },
                    providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
                    addressIndex: 0
                }),
            network_id: 3,
            gas: 5500000, // Gas Limit, How much gas we are willing to spent
            gasPrice: 20000000000, // how much we are willing to spent for unit of gas
            confirmations: 2, // number of blocks to wait between deployment
            timeoutBlocks: 200 // number of blocks before deployment times out
        }
    },
    compilers: {
        solc: {
            version: "0.8.13",
        }
    },
};


// > transaction hash:    0x7860b6f98948b7747ed3790b1b1fc4903b4627b388d2827637ed5d50ee4f36a9
// > Blocks: 1            Seconds: 17
// > contract address:    0x0A5f264eaf8BdCf7C230ef5BE581e88a864Ea392
// > block number:        12275014
