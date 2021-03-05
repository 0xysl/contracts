import { NetworkConfig,  NetworksConfig } from "hardhat/types";
import { HardhatConfig } from 'hardhat/types'
export type ExtendedNetworkConfig = NetworkConfig & {
  _chainId?: number;
  default_balance_ether?: number,
  gasLimit?: number;
  mnemonic?: string;
  network_id?: number;
  url?: string;
};

export interface ExtendedNetworks extends NetworksConfig {
  [networkName: string]: ExtendedNetworkConfig;
}

export interface ExtendedHardhatConfig extends HardhatConfig {
  networks: ExtendedNetworks ;
}

