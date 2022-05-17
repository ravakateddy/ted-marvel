import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonnageService } from '../services/personnage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-personnages',
  templateUrl: './list-personnages.component.html',
  styleUrls: ['./list-personnages.component.css']
})
export class ListPersonnagesComponent implements OnInit {
  indiceActuel = 100;
  isLoading=true;
  personnages:any[] = [];
  constructor(private personnageService: PersonnageService, private httpClient:HttpClient) { 
    this.getPersos()
  }

  getPersos(){
    this.isLoading = true
    this.personnageService.getHeroes(this.indiceActuel).subscribe(pers=>{
      this.personnages = pers.data.results;
      this.isLoading = false;
    })
  }
  next(){
    this.indiceActuel = this.indiceActuel+20
    this.getPersos()
  }

  previous(){
    if(this.indiceActuel>=20){
      this.indiceActuel = this.indiceActuel-20
      this.getPersos()
    }
    

  }

  ngOnInit(): void {
  }

}
