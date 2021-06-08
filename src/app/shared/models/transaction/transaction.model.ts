import { Wallet } from '../wallet/wallet.model';

export interface Transaction {
  originWallet: Wallet;
  destinyWallet: Wallet;
  coins: number;
}
