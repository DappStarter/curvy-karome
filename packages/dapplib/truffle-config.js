require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture stove radar situate unit gown light army giggle'; 
let testAccounts = [
"0xb2239b46bd354c9ad5b1689033e355db5ce9fef8e58103d108d9072d600da5f1",
"0xc723ff91c48c5cc36fe6c2513b09c7e7076c7e7aa9bb95f8a7e0b8865d75a060",
"0x73ea1c19ed0d5dd1384697bb8119226b8496e7ccd220bd7fa8f4e3af47313b83",
"0x8c543f9d16b07bfe67101714ecc379ff86fbd70efc81ce92ea555bb777132b7a",
"0x0da777a63502838b00d846bd61ea3e3b74d4a17369046649dab27c0573628d89",
"0x82564cdae6b9f382930e0aad433c673372d789334f35a8a7f9b6ee995d70397f",
"0xdbcedf81c32566d3dbfe2fed3f0a94c8e2c7427319ae20b6cb5cacc55d037c1e",
"0xdba552fe611a48401256ebce69a9ae5103030766e92a38db8af96ccd91da6375",
"0xc006e9d27f212d8be3163f3efbbb34cd5e7c5b61639030b21ef3cb47493b46a5",
"0x91978f37719797e230d2640052df19468e41b0e760f0b6dff22f3a2d046608b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
