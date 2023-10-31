import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"", component: DashboardComponent
  },
  {
    path:"dashboard", component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
