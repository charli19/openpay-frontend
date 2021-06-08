import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from '../../models/generic-response/generic-response.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  prefix = '/wallets/';
  url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getWallets(): Observable<GenericResponse> {
    const url = this.url + this.prefix;
    return this.httpClient.get<GenericResponse>(url);
  }
}
