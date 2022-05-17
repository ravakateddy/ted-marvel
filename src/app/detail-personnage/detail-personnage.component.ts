import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { ComicsService } from '../services/comics.service';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-detail-personnage',
  templateUrl: './detail-personnage.component.html',
  styleUrls: ['./detail-personnage.component.css']
})
export class DetailPersonnageComponent implements OnInit {
  isLoading=true;
  personnage:ReplaySubject<any> = new ReplaySubject();
  comics: ReplaySubject<any[]> = new ReplaySubject();
  constructor(private route: ActivatedRoute, private personnageService:PersonnageService, private comicsService:ComicsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.personnageService.getHero(param.id as number).subscribe(hero=>{
        this.personnage.next(hero.data.results[0]);
        this.comicsService.getComics(hero.data.results[0].id as number).subscribe(comics=>{
          this.comics.next(comics.data.results)
          this.isLoading = false
        })
      })
    })
  }

}
