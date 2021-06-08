import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainUserComponent } from './views/user/main-user/main-user.component';
import { NewTransactionComponent } from './views/user/new-transaction/new-transaction.component';
import { DetailUserResolverService } from './shared/services/user/resolvers/detail-user-resolver.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: './views/user/user.module#UserModule',
    data: { title: 'Users', breadcrumb: 'Usuarios' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
