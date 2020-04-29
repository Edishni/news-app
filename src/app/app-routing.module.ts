import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationGuard } from './authorization.guard';
import { QuestComponent } from './quest/quest.component';

const routes: Routes = [
  {path:'',redirectTo:'quest' , pathMatch :'full'},
  {path:'quest',component : QuestComponent},
  {path:'logIn',component : LoginComponent},
  {path:'main',component:MainComponent,canActivate:[AuthorizationGuard]},
  {path:'main/**',component : MainComponent,canActivate:[AuthorizationGuard]}, 
  {path:'**',component : QuestComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
