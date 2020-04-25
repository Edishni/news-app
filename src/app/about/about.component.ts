import { Component, OnInit } from '@angular/core';
import { ThemesControlService } from '../themes-control.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public appTheme: ThemesControlService) { }

  ngOnInit() {
  }

}
