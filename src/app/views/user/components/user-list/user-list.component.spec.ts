import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MatCardModule, MatTableModule, MatIconModule, MatInputModule, MatSelectModule, MatOptionModule, MatMenuModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule,
        MatOptionModule,
        MatMenuModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        NgbModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to new transaction page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.newTransaction(1);
    expect(navigateSpy).toHaveBeenCalled();
  });
});
