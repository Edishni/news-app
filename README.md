# news-app
final angular project ,the news portal use API from https://newsapi.org.

Possible to find a lot of news from API sources on newsapi.org site with next filters :
  a. endpoits [top-headlines, sources, everything]
  b. category ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  c. countries 
  d. languages
  f. by word
  e. use sort type
  
  Sevices and features:
1. the user authorization mechanizm with social logins like Google and Facebook
2. the authorization guard service
3. has Routes usage
4. the service for get API results
5. the service for themes supporting on boostrap basic 

6. Componets :
  DashboardComponent : root
      QuestComponent - first "welcome" page
      LoginComponent - with social login too
      MainComponent : 
        - NavigatorComponent - Navigator panel
        - NewsNavigatorComponen - News search menu
        - NewsComponent - search results
        - About-Portal  - about web page
        - AboutComponent - about iNT College
        - ContactsComponent - about me 
        - FooterComponent - footer 
    
