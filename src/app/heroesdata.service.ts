import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from './hero';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroesdataService {
  constructor(private httpclient: HttpClient) {}
  getHeroes(): Observable<Hero[]> {
    // return this.httpclient.get<Hero[]>('https://modernlibrarysystem.000webhostapp.com/heroapi/herodata.php');
    return this.httpclient.get<Hero[]>('http://localhost/heroapi/herodata.php');
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.httpclient.post<Hero>('https://heroes007.000webhostapp.com/herodata.php', hero);
  }
  getHero(heroid): Observable<Hero> {
    return this.httpclient.get<Hero>('https://heroes007.000webhostapp.com/herodata.php?id=' + heroid);
  }
  updateHero(hero: Hero): Observable<Hero> {
    return this.httpclient.put<Hero>('https://heroes007.000webhostapp.com/updatehero.php', hero);
  }
  deleteHero(hero: Hero): Observable<Hero> {
    return this.httpclient.delete<Hero>('https://heroes007.000webhostapp.com/deletehero.php?id=' + hero.id);
  }
  searchbyname(name): Observable<Hero[]> {
    return this.httpclient.get<Hero[]>('https://heroes007.000webhostapp.com/herodata.php?name=' + name);
  }
}
