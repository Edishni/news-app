import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:any;
  errorMessage:string;
  successMessage:string;
  constructor(private auth:AuthorizationService, private router:Router) { }
  
  loginWithGoogle(){
    this.auth.doGoogleLogin().then(res => {
      this.router.navigate(['main']);
    })
  }

  loginWithFacebook(){
    this.auth.doFacebookLogin().then(res => {
      this.router.navigate(['main']);
    })
  }

  tryRegister(email,pass){
    this.auth.doRegister(email,pass)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
      this.router.navigate(['main']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
      this.router.navigate(['logIn']);
    })
  }
  
  ngOnInit() {
  }

}
