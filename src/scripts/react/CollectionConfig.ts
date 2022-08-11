import CollectionConfigInterface from './CollectionConfigInterface';
import * as Networks from './Networks';
import * as Marketplaces from './Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'FirstChoiceCoin',
  tokenName: 'FirstChoiceCoin',
  tokenSymbol: 'FCC',
  hiddenMetadataUri: 'ipfs://QmcHCfC8hcsCt1nidT2UDACuVqFPRZbpEWwfdtanBiVrqp/hidden.json',
  maxSupply: 8888,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x8233712A2d90B80d3B0C53c5840bAdde356b62A6",
  marketplaceIdentifier: 'first-choice-coin',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
