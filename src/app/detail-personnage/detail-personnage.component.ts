import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-detail-personnage',
  templateUrl: './detail-personnage.component.html',
  styleUrls: ['./detail-personnage.component.css']
})
export class DetailPersonnageComponent implements OnInit {

  personnage:ReplaySubject<any> = new ReplaySubject();
  comics: ReplaySubject<any[]> = new ReplaySubject();
  constructor(private route: ActivatedRoute, private personnageService:PersonnageService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.personnageService.getHero(param.id as number).subscribe(hero=>{
        this.personnage.next(hero.data.results[0]);
        this.comics.next(hero.data.results[0].comics.items.splice(0, 3));
      })
    })
  }

}
