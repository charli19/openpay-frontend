import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction/transaction.model';
import { GenericResponse } from '../../models/generic-response/generic-response.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  public createTransaction(transaction: Transaction): Observable<GenericResponse> {
    const url = `${environment.url}/transactions`;
    return this.httpClient.post<GenericResponse>(url, transaction);
  }
}
