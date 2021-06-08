import { TestBed } from '@angular/core/testing';

import { DetailUserResolverService } from './detail-user-resolver.service';
import { UserService } from '../user.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserMockService } from 'src/app/shared/mocks/services/user/user.mock.service';
import { USER } from 'src/app/shared/mocks/models/user/user.mock';

describe('DetailUserResolverService', () => {
  let resolver: DetailUserResolverService;
  let route: ActivatedRouteSnapshot;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: UserService, useClass: UserMockService }
      ]
    });

    route = new ActivatedRouteSnapshot();
    userService = TestBed.get(UserService);
    resolver = TestBed.get(DetailUserResolverService);
  });

  it('should be created', () => {
    const service: DetailUserResolverService = TestBed.get(DetailUserResolverService);
    expect(service).toBeTruthy();
  });

  // it('should resolve user', () => {
  //   route.params = { id: 2 };

  //   const resolved = resolver.resolve(route);
  //   resolved.subscribe((response) => {
  //     expect(response.data).toEqual(USER);
  //   });
  // });
});
