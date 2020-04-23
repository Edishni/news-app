import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  constructor(private authorize: AuthorizationService, public usersrv: UserService , private router : Router) { }
  
logIn(){
  
  this.router.navigate(['logIn']);
  
}

  logOut(){
   
    this.authorize.doLogout();
    this.router.navigate(['quest']);
  }
  
  ngOnInit() {
    
  }

}
