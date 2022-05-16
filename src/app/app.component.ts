import { Component } from '@angular/core';
import { PersonnageService } from './services/personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ted-marvel';
  public constructor(pesonnageService:PersonnageService){
    pesonnageService.getHeroes().subscribe((data) => console.log(data.data.results))
  }
}
