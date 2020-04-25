import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { UserService } from '../user.service';
import { ThemesControlService } from '../themes-control.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  showThebar:boolean=false;
  myTheme:string;
  
 /*  login:boolean=false; */
  constructor(private authorize: AuthorizationService, public usersrv: UserService , public themes : ThemesControlService) { }
 

  ngOnInit() {
    this.myTheme=this.themes.changeTheme('dark');
  }
}
