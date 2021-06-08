import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Transaction } from 'src/app/shared/models/transaction/transaction.model';
import { TransactionService } from 'src/app/shared/services/transaction/transaction.service';
import { GenericResponse } from 'src/app/shared/models/generic-response/generic-response.model';
import { Wallet } from 'src/app/shared/models/wallet/wallet.model';
import { MatSnackBar } from '@angular/material';
import { WalletService } from 'src/app/shared/services/wallet/wallet.service';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})

export class NewTransactionComponent implements OnInit {

  transaction: Transaction;

  user: any;

  public wallets: Wallet[];

  originWallet: Wallet;
  originWalletToEncrypt: Wallet = new Wallet();

  destinyWallet: Wallet;
  destinyWalletToEncrypt: Wallet = new Wallet();

  hash = require('object-hash');

  /**
   * Contains the profile's info form
   */
  userInfoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private router: Router,
    private snackBar: MatSnackBar,
    private walletService: WalletService
    ) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.detail.data;

    this._getWallets();
    this.transaction = this._initTransaction();
    this.userInfoForm = this._initProfileForm();
  }

  /**
   * Save the profile's creation
   */
  public saveCreate(): void {
    this.originWallet = this.userInfoForm.get('originWallet').value;
    this.destinyWallet = this.userInfoForm.get('destinyWallet').value;

    this._mapOriginWalletToEncrypt();
    this._mapDestinyWalletToEncrypt();

    this.transaction.originWallet = this.hash.sha1(this.originWalletToEncrypt);
    this.transaction.destinyWallet = this.hash.sha1(this.destinyWalletToEncrypt);
    this.transaction.coins = this.userInfoForm.get('coins').value;

    this.transactionService.createTransaction(this.transaction).subscribe((transactionCreated: GenericResponse) => {
      if (transactionCreated.data) {
            this.snackBar.open('Transacción realizada correctamente', 'OK', {
              duration: 2000,
            });
            this.router.navigate(['']);
          }
        }, (err: HttpErrorResponse) => {this.snackBar.open('Saldo insuficiente en la cuenta de origen', 'OK', {
          duration: 2000,
        });
      });
  }

  private _getWallets() {
    this.walletService.getWallets().subscribe((response: GenericResponse) => {
      this.wallets = response.data;
    });
    return this.walletService.getWallets();
  }

  private _mapDestinyWalletToEncrypt() {
    this.destinyWalletToEncrypt.id = this.destinyWallet.id;
    this.destinyWalletToEncrypt.name = this.destinyWallet.name;
    this.destinyWalletToEncrypt.description = this.destinyWallet.description;
  }

  private _mapOriginWalletToEncrypt() {
    this.originWalletToEncrypt.id = this.originWallet.id;
    this.originWalletToEncrypt.name = this.originWallet.name;
    this.originWalletToEncrypt.description = this.originWallet.description;
  }

  private _initTransaction(): Transaction {
    return {
      originWallet: {
        id: null,
        name: '',
        description: '',
        coins: null
      },
      destinyWallet: {
        id: null,
        name: '',
        description: '',
        coins: null
      },
      coins: null
    };
  }

  /**
   * Init the profile form by object received
   * @param user the user base to init form values
   */
  private _initProfileForm(): FormGroup {
    return this.fb.group({
      originWallet: new FormControl(''),
      destinyWallet: new FormControl(''),
      coins: new FormControl('')
    }
    );
  }

}
