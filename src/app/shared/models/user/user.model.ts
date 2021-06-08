import { Wallet } from '../wallet/wallet.model';
import { DocumentType } from '../document-type/document-type.model';

export class User {
  id: number;
  name: string;
  surname?: string;
  documentType?: DocumentType;
  documentNumber?: string;
  wallets?: Array<Wallet>;
}
