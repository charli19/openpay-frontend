import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { DetailUserResolverService } from 'src/app/shared/services/user/resolvers/detail-user-resolver.service';
import { MainUserComponent } from './main-user/main-user.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: MainUserComponent,
      data: { title: 'Lista de usuarios', breadcrumb: 'Lista de usuarios' }
    },
    {
      path: 'new-transaction/:userId',
      component: NewTransactionComponent,
      resolve: {
        detail: DetailUserResolverService
      },
      data: { title: 'Nueva transacción', breadcrumb: 'Nueva transacción' }
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    DetailUserResolverService
  ]
})
export class UserRoutingModule { }
