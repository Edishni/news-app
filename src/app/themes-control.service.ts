import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesControlService {
  public appTheme:string;
  public appChildTheme:string;
  public appBorderTheme:string;
  
  changeTheme(usrTheme) {
    if (usrTheme == 'dark') { /*   #343a40 */
      this.appTheme='bg-dark text-light btn-outline-light';
      this.appChildTheme='bg-secondary text-light btn-outline-light';
      this.appBorderTheme='border border-info';
     }  
    if (usrTheme == 'grey') {/* grey transp #9e9e9e9e    full color #9e9e9e */
      this.appTheme='bg-secondary text-white btn-outline-light ';
      this.appChildTheme='bg-info text-white btn-outline-light';
      this.appBorderTheme='border border-info';
     }    
    if (usrTheme == 'info') { 
      this.appTheme='bg-info text-light btn-outline-light ';
      this.appChildTheme='bg-light text-dark btn-outline-dark';
      this.appBorderTheme='border border-light';
    } 
    if (usrTheme == 'light') { 
      this.appTheme='bg-light text-dark btn-outline-dark';
      this.appChildTheme='bg-light text-dark btn-outline-dark';
      this.appBorderTheme='border border-info';
    } 
    console.log(this.appTheme);
    return this.appTheme;
  }
  constructor() { }
}
