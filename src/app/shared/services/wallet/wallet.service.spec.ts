import { TestBed } from '@angular/core/testing';

import { WalletService } from './wallet.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

let httpTestingController: HttpTestingController;
let service: WalletService;

describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule
      ]
      });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(WalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
