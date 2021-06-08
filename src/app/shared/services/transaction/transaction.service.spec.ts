import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

let httpTestingController: HttpTestingController;
let service: TransactionService;

describe('TransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule
      ]
      });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
