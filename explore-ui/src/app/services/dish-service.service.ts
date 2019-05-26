import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../models/Dish';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  readonly url:string = '/api/dish';

  constructor(private httpClient:HttpClient) { }


  getDishes():Observable<Dish[]>{
    return this.httpClient.get<Dish[]>(this.url).pipe(map((result:any)=>{
      console.log(result);
      return result._embedded.dish;
    }));
  }

}
