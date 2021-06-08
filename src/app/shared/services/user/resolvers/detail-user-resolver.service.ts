import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class DetailUserResolverService implements Resolve<Observable<string>> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): any {
    return this.userService.getUser(parseInt(route.paramMap.get('userId'), 10));
  }
}
