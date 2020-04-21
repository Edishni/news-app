import { Component, OnInit } from '@angular/core';
import { GetApiServiceService } from '../get-api-service.service';
import { News } from '../classes/News-articles';
import { Sources } from '../classes/News-sources';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(public getAPI : GetApiServiceService) { }

  ngOnInit() {
    let firstURL='http://newsapi.org/v2/top-headlines?country=il&apiKey=79c0f667b4ef402c90fc0b199b103db4';
    this.getAPI.getArticles(firstURL);
      
  }

}
