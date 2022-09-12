require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remember equip inflict industry fortune twist'; 
let testAccounts = [
"0x45b2a9edcc8bf45046f78975c1db8661c1ee025030a466242bbb23f09f21a949",
"0xf215e9340d0e99f2430df86364413654569a2e7f80c431e86574cae8900baef4",
"0x233bb9eb5971aa292d60c377cd18840f20feba30ea72cabd841ab29ae12b67db",
"0xfa93c7b6fe4d5143fc7646ed1bfc439a570a00fc3ad318a08b069ec1ba2b58ed",
"0xf036811ee9851bcf7da21c324ad773cc6ef288305dd641358f56165e7144c7f8",
"0x34f48c7426ae5fb8cd4a372c9b1ee013e29175aebf14acc0e92d559d4a64e21e",
"0xb12a060a74a1a5baebbb80dc785793cd022eaadcc1186afc5b4fd01066c6aef9",
"0x4c5ae04988625b4cdc22d3f0731a6b734065e2ed6257c29ffe0ba036d4536117",
"0x2990279a8efcc7f705e8bdc5725965539da0659852816b76deb1e2fddf239f84",
"0xfad3a774f9e206dc37af12bb9621b90e4a73d92fc0d74b71fe6ca838f5564f8b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


