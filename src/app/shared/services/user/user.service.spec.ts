import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


import { UserService } from './user.service';

let httpTestingController: HttpTestingController;
let service: UserService;

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule
      ]
      });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
