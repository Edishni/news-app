import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationGuard } from './authorization.guard';
import { QuestComponent } from './quest/quest.component';
import { NewsComponent } from './news/news.component';
import { NewsNavigatorComponent } from './news-navigator/news-navigator.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';



const routes: Routes = [
  {path:'',redirectTo:'quest' , pathMatch :'full'},
  {path:'quest',component : QuestComponent},
  {path:'about',component : AboutComponent},
  {path:'contacts',component : ContactsComponent},
  {path:'login',component : LoginComponent},
  {path:'main',component:MainComponent,canActivate:[AuthorizationGuard]},
  {path:'main/news-nav',component:NewsNavigatorComponent,canActivate:[AuthorizationGuard]},
  {path:'news',component:NewsComponent,canActivate:[AuthorizationGuard]},
  {path:'news-nav',component:NewsNavigatorComponent,canActivate:[AuthorizationGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
