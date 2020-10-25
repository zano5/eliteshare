import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DetailComponent } from './component/detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: '', component: DetailComponent},
{path: 'home', component: ProfileComponent},
{path: 'signup', component: SignUpComponent},
{path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
