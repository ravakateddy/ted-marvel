import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpClient: HttpClient) { }

  public getHeroes(offset:number):Observable<any>{
    return this.httpClient.get(environment.baseUrl+"/characters", {
      params:{
        ts: environment.ts,
        apikey: environment.apiKey,
        hash: environment.hash,
        offset: offset
      }
    });
  }

  public getHero(id:number):Observable<any>{
    return this.httpClient.get(environment.baseUrl+"/characters/"+id, {
      params:{
        ts: environment.ts,
        apikey: environment.apiKey,
        hash: environment.hash
      },
    });
  }
}
