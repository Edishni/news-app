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
  /* {path:'main/**',component : MainComponent,canActivate:[AuthorizationGuard]}, */
/*     children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'newsnav', component: NewsNavigatorComponent },
    { path: 'news', component: NewsComponent },
    { path: '**', component: MainComponent },
  ]},  */
/*   {path:'./news',component:NewsComponent,canActivate:[AuthorizationGuard]},
  {path:'./newsnav',component:NewsNavigatorComponent,canActivate:[AuthorizationGuard]}, */
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
