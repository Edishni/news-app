import { Component, OnInit } from '@angular/core';
import { ThemesControlService } from '../themes-control.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public myTheme: ThemesControlService) { }

  ngOnInit() {
  }

}
