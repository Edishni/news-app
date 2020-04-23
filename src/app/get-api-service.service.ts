import { Injectable } from '@angular/core';
import { News } from './classes/News-articles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sources } from './classes/News-sources';
import { Country } from './classes/country';
import { countries } from './classes/countries';

@Injectable({
  providedIn: 'root'
})
export class GetApiServiceService {
  //top result
  readonly articlesapiURL: string = 'http://newsapi.org/v2/top-headlines?';
  //search result by q=<???>
  readonly searchapiURL: string = 'https://newsapi.org/v2/everything?';
  readonly sourcesapiURL: string = 'http://newsapi.org/v2/sources?';
  readonly newsAPIOrgKey: string = 'apiKey=79c0f667b4ef402c90fc0b199b103db4';
  //["business", "entertainment", "general", "health", "science", "sports", "technology"]; 
  readonly category: string[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  // ["en", "he", "ru", "ar", "de", "es", "fr", "it", "nl", "no", "pt", "se", "ud", "zh"];
  readonly language: string[] = ["en", "he", "ru", "ar", "de", "es", "fr", "it", "nl", "no", "pt", "se", "ud", "zh"];
  //has counties.ts file
  readonly countryArr: Country[] = countries;
  readonly sortByType: string[] = ["relevancy", "popularity", "publishedAt"];


  /*   url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=79c0f667b4ef402c90fc0b199b103db4'; */

  articlesArr: News[] = [];
  sourcesArr: Sources[] = [];
  totalResults: string; // not in sources results
  fromGet: any;
  fromGet2: any;
  public sourceType: boolean;
  articlesURL: string;

  constructor(private http: HttpClient) { }
  readonly newsAPIUrl = "newsapi.org";



  getNewUrl(typeSrc, categ, countr, lang, word, sortby) {

    if (typeSrc == 'sources') {  //http://newsapi.org/v2/sources?
      let block: string = '';

      if (countr) {
        block += `country=${countr}&`;
      }
      if (lang) {
        block += `language=${lang}&`;
      }
      if (categ) {
        block += `category=${categ}&`;
      }

      let newURL = `${this.sourcesapiURL}` + `${block}` + `${this.newsAPIOrgKey}`;
      console.log(newURL);
      this.getSources(newURL);
    }

    if (typeSrc == 'top-headlines') {  //http://newsapi.org/v2/top-headlines?  categ,countr,lang,word,
      let block2: string = '';

      if (word) {
        block2 += `q=${word}&`; // it first in request     
      }
      if (countr) {
        block2 += `country=${countr}&`;
      }
      if (lang) {
        block2 += `language=${lang}&`;
      }
      if (categ) {
        block2 += `category=${categ}&`;
      }
      if (sortby) {
        block2 += `sortBy=${sortby}&`;
      }

      let newURL = `${this.articlesapiURL}` + `${block2}` + `${this.newsAPIOrgKey}`;
      console.log(newURL);
      this.getArticles(newURL);
    }

    if (typeSrc == 'everything') {  //https://newsapi.org/v2/everything?   lang,word,sortby
      let block3: string = '';

      if (word) {
        block3 += `q=${word}&`; // it first in request     
      }
      if (lang) {
        block3 += `language=${lang}&`;
      }
      if (sortby) {
        block3 += `sortBy=${sortby}&`;
      }

      let newURL = `${this.searchapiURL}` + `${block3}` + `${this.newsAPIOrgKey}`;
      console.log(newURL);
      this.getArticles(newURL);
    }

  }

  getsrc(url: string): Observable<any> {
    console.log(" from sources");
    console.log(url);
    return this.http.get<any>(url)
  }


  getart(url: string): Observable<any> {
    console.log("url from articles");
    console.log(url);
    return this.http.get<any>(url)
  }

  getArticles(url: string): void {
    this.articlesArr = [];
    this.sourceType = true;   // top-headling or everithing
    this.getart(url).subscribe(elem => {

      elem.articles.forEach(ele => {
        this.fromGet = ele;

        this.articlesArr.push({
          id: this.fromGet.source.id,
          name: this.fromGet.source.name,
          author: this.fromGet.author,
          title: this.fromGet.title,
          description: this.fromGet.description,
          url: this.fromGet.url,
          urlToImage: this.fromGet.urlToImage,
          publishedAt: this.fromGet.publishedAt,
          content: this.fromGet.content
        });
      });

      this.totalResults = elem.totalResults;
      console.log(this.totalResults);
    });
    console.log('articles array');
    console.log(this.articlesArr);
  }

  getSources(url: string): void {
    this.sourcesArr = [];
    this.sourceType = false;  // not top-headling or not everithing
    this.getsrc(url).subscribe(ele => {

      ele.sources.forEach(ele => {
        this.fromGet2 = ele;
        let tempcntr = this.fromGet2.country;
        tempcntr = tempcntr.toUpperCase( );
        let result = this.countryArr.find(({ code }) => code === `${tempcntr}`);
    
        this.sourcesArr.push({
          id: this.fromGet2.id,
          name: this.fromGet2.name,
          description: this.fromGet2.description,
          url: this.fromGet2.url,
          category: this.fromGet2.category,
          language: this.fromGet2.language,
          country: result.countryName,
          img_flag: `https://www.countryflags.io/${this.fromGet2.country}/flat/24.png`
        });

      });
    });
    console.log('sources array');
    console.log(this.sourcesArr);

  }

}
