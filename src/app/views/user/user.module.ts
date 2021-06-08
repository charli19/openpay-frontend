import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { MainUserComponent } from './main-user/main-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
// tslint:disable-next-line: max-line-length
import { MatCardModule, MatTableModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatSnackBarModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NewTransactionComponent,
    MainUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class UserModule { }
