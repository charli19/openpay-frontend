import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';
import { GenericResponse } from 'src/app/shared/models/generic-response/generic-response.model';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {

  /**
   * Contains all the columns to display on the list
   */
  displayedColumnsList: string[] = ['name', 'surname', 'documentType', 'documentNumber', 'wallets' ,'actions'];

  /**
   * Contains all users
   */
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this._getUsers();
  }
  private _getUsers() {
    this.userService.getUsers().subscribe((response: GenericResponse) => {
        this.users = response.data;
      });
  }

}
