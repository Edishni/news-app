import { Component, OnInit } from '@angular/core';
import { GetApiServiceService } from '../get-api-service.service';
import { Country } from '../classes/country';
import { ThemesControlService } from '../themes-control.service';
import { NgxSpinnerService } from 'ngx-spinner';

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



  constructor(public getAPIdetails: GetApiServiceService, public themes: ThemesControlService, private spinner: NgxSpinnerService) { }

  buildURL(typeSrc, categ, countr, lang, word, sortby) {
    console.log(typeSrc, categ, countr, lang, word, sortby);
    this.getAPIdetails.getNewUrl(typeSrc, categ, countr, lang, word, sortby);
     this.showSpinner(); 
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  } 

  ngOnInit() {
    this.languages = this.getAPIdetails.language;
    this.countries = this.getAPIdetails.countryArr;
    this.categories = this.getAPIdetails.category;
  }

}
