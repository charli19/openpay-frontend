import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserComponent } from './main-user.component';
import { UserService } from 'src/app/shared/services/user/user.service';
import { UserListComponent } from '../components/user-list/user-list.component';
import { NewTransactionComponent } from '../new-transaction/new-transaction.component';
import { of } from 'rxjs';
import { USERS } from 'src/app/shared/mocks/models/user/user.mock';
import { GenericResponse } from 'src/app/shared/models/generic-response/generic-response.model';
import { MatCardModule, MatTableModule, MatIconModule, MatInputModule, MatSelectModule, MatOptionModule, MatMenuModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainUserComponent', () => {
  let component: MainUserComponent;
  let fixture: ComponentFixture<MainUserComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainUserComponent,
        UserListComponent,
        NewTransactionComponent
       ],
       providers: [
         UserService
       ],
       imports: [
        RouterTestingModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatMenuModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        NgbModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule
       ],
       schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get all users', async(async () => {
  //   spyOn(userService, 'getUsers').and.returnValues(of(new GenericResponse()));
  //   fixture.detectChanges();
  //   expect(component.users).toEqual(USERS.data);
  // }));
});
