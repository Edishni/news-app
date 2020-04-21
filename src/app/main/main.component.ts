import { Component, OnInit } from '@angular/core';
import { GetApiServiceService } from '../get-api-service.service';
import { News } from '../classes/News-articles';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private getAPI : GetApiServiceService) { }
articles:News[];


  ngOnInit() {

  }

}
