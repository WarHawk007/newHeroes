import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {HeroesdataService} from '../heroesdata.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes: Hero[];
  sheroes: Hero[];
  temp: string;
  searchForm = this.fb.group({
    search: ['', Validators.required]
  });
  constructor(private herodata: HeroesdataService , private fb: FormBuilder) { }

  ngOnInit() {
    this.herodata.getHeroes().subscribe(data => this.heroes = data);
  }
  getsearchHeroes() {
    if (this.searchForm.get('search').value !== '') {
      this.sheroes = null;

      this.sheroes = this.heroes.filter(shero => {
            return shero.name.toLowerCase().includes(this.searchForm.get('search').value.toLowerCase());
           });
      console.log('Searched Heroes' , this.sheroes);
      console.log('All Heroes' , this.heroes);
    } else {
      this.sheroes = null;
    }
  }
}
