import { Component, OnInit } from '@angular/core';
import { GetApiServiceService } from '../get-api-service.service';
import { Country } from '../classes/country';

@Component({
  selector: 'app-news-navigator',
  templateUrl: './news-navigator.component.html',
  styleUrls: ['./news-navigator.component.css']
})
export class NewsNavigatorComponent implements OnInit {
  languages: string[];
  countries: Country[];
  categories: string[];
  /* 'http://newsapi.org/v2/top-headlines?';
  'https://newsapi.org/v2/everything?q=';
  'http://newsapi.org/v2/sources?'; */



  constructor(private getAPIdetails: GetApiServiceService) { }

  buildURL(typeSrc, categ, countr, lang, word, sortby) {
    console.log(typeSrc, categ, countr, lang, word, sortby);
    this.getAPIdetails.getNewUrl(typeSrc, categ, countr, lang, word, sortby);

  }

  ngOnInit() {
  
    
    this.languages = this.getAPIdetails.language;
    this.countries = this.getAPIdetails.countryArr;
    this.categories = this.getAPIdetails.category;
  }

}
