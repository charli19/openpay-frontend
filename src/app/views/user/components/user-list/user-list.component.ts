import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.model';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /**
   * Contains the columns to display
   */
  @Input() displayedColumns: string[];

  /**
   * Contains all users
   */
  @Input() users: User[];

  user: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  /**
   * Routes to the new Transaction route
   */
  newTransaction(userId: number) {
    this.router.navigate(['new-transaction', userId], { relativeTo: this.route});
  }

}
