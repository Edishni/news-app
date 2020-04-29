import { Component, OnInit } from '@angular/core';
import { GetApiServiceService } from '../get-api-service.service';
import { ThemesControlService } from '../themes-control.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(public getAPI : GetApiServiceService, public themes : ThemesControlService) { }

  ngOnInit() {
    let firstURL='http://newsapi.org/v2/top-headlines?country=il&apiKey=79c0f667b4ef402c90fc0b199b103db4';
    this.getAPI.getArticles(firstURL);
   }

}
