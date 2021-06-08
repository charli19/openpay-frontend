import { USERS, USER } from '../../models/user/user.mock';
import { Observable, of } from 'rxjs';
import { GenericResponse } from 'src/app/shared/models/generic-response/generic-response.model';

export class UserMockService {

  getUser(userId: string): Observable<GenericResponse>  {
    return of(new GenericResponse());
  }

}
