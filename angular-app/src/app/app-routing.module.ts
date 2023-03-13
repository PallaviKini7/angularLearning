import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './users/about/about.component';
import { LoginComponent } from './users/login/login.component';
import { PersonalDetailsComponent } from './users/personal-details/personal-details.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path:'home', component:LoginComponent
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'about', component:AboutComponent,
    outlet:'aboutroute'
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'personaldetails', component:PersonalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
