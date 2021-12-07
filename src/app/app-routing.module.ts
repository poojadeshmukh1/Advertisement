import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddadvertiseComponent } from './components/addadvertise/addadvertise.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [

  {
    path:'',
    component:UserhomeComponent,
    pathMatch:'full',
  }, 
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  }, 
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full', 
  }, 
  {
    path:'userhome',
    component:UserhomeComponent,
    pathMatch:'full', 
  }, 
  {
    path:'addadvertise',
    component:AddadvertiseComponent,
    pathMatch:'full',
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
