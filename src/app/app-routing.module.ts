import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BranchselectionPage } from './branchselection/branchselection.page';
import { LoginPage } from './login/login.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { TaskselectionPage } from './taskselection/taskselection.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'branchselection',
    component: BranchselectionPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'taskselection',
    component: TaskselectionPage
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
