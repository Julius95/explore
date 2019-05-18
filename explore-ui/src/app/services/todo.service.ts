import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Todo} from '../models/Todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url:string = '/api/todo';

  constructor(private httpClient:HttpClient, private authService:AuthService) {}

  getTodos():Observable<Todo[]>{
    let headers = {
      headers: {'Authorization':this.authService.getBasicAuth()}
    }
    return this.httpClient.get<Todo[]>(this.url, headers).pipe(map((result:any)=>{
      return result._embedded.todo;
   }));
  }

  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.url}/${todo.id}`
    return this.httpClient.put(url, todo, httpOptions);
  }

  delete(todo:Todo):Observable<Todo> {
    const url = `${this.url}/${todo.id}`
    return this.httpClient.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo> {
    return this.httpClient.post<Todo>(this.url, todo, httpOptions);
  }
}
