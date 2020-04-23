import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  showThebar:boolean=false;
 /*  login:boolean=false; */
  constructor(private authorize: AuthorizationService, public usersrv: UserService) { }
  
/* logIn(){
  this.login=true;
  
}

  logOut(){
    this.login=false;
    this.authorize.doLogout();

  } */

  ngOnInit() {
    
  }

}
