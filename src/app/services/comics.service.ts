import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private httpClient:HttpClient) { }

  public getComics(characterId:number):Observable<any>{
    return this.httpClient.get(environment.baseUrl+"/characters/"+characterId+"/comics", {
      params:{
        ts: environment.ts,
        apikey: environment.apiKey,
        hash: environment.hash,
      }
    });
  }
}
