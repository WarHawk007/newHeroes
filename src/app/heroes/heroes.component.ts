import { Component, OnInit } from '@angular/core';
import {HeroesdataService} from '../heroesdata.service';
import {Observable } from 'rxjs';
import { Hero } from '../hero';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Hero[];
  newhero: Object;
  hero: Hero ;
  hname: string;
  himgsrc: string;
  hdescription: string;
  index: number;
  addHeroForm = this.fb.group({
    name: ['', Validators.required],
    imgsrc: ['', Validators.required],
    description: ['', Validators.required]
  });
  constructor(private herodata: HeroesdataService , private fb: FormBuilder ) {}
  ngOnInit() {
    this.getheroes();
  }
  getheroes() {
    this.herodata.getHeroes().subscribe(data => this.heroes$ = data);
  }
  addnewHero() {
    this.hname = this.addHeroForm.get('name').value;
    this.himgsrc = this.addHeroForm.get('imgsrc').value;
    this.hdescription = this.addHeroForm.get('description').value;
     this.hero = new Hero(this.hname, this.himgsrc, this.hdescription);
      this.herodata.addHero(this.hero).subscribe(data => {
        this.getheroes();
        swal({
          title: 'Added',
          text: 'Your Hero has been Added',
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          type: 'success'
        });
      });
      this.addHeroForm.reset();
  }
  deletehero(hero) {
     this.herodata.deleteHero(hero).subscribe(data => {
       swal({
         title: 'Deleted',
         text: 'Your Hero has been deleted',
         position: 'center',
         showConfirmButton: false,
         timer: 2000,
         type: 'success'
       });
       this.heroes$.splice(this.heroes$.indexOf(hero), 1 );
     });
  }



}
