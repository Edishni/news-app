export class Sources {
    id: string;
    name: string;
    description: string;
    url: string;
    //["business", "entertainment", "general", "health", "science", "sports", "technology"]; 
    category: string;
    // ["en", "he", "ru", "ar", "de", "es", "fr", "it", "nl", "no", "pt", "se", "ud", "zh"];
    language: string;
    //["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
    country: string;
    img_flag: string; //<img src="https://www.countryflags.io/<CountryCode>/shiny/64.png">
}
