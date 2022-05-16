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

  personnages:any[] = [];
  constructor(private personnageService: PersonnageService, private httpClient:HttpClient) { 
    personnageService.getHeroes(100).subscribe(pers=>{
      this.personnages = pers.data.results
    })
  }

  ngOnInit(): void {
  }

}
