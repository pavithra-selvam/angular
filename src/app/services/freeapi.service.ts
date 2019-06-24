import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { TodoAPIComponent } from './../todo-api/todo-api.component';

@Injectable()
export class freeApiService {
  constructor(private http: HttpClient) { }

  getTodo():Observable<any> {
    return this.http.get('https://isha-todos-api.herokuapp.com/todos/list');
  }

  addTodo(obj:TodoAPIComponent):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post('https://isha-todos-api.herokuapp.com/todos/add-todo',obj, { headers: headers });
  }
  editTodo(obj:TodoAPIComponent):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post('https://isha-todos-api.herokuapp.com/todos/edit-todo',obj, { headers: headers });
  }

  deleteTodo(id:TodoAPIComponent):Observable<any> {
      //let param1 = new HttpParams().set('','5cff4c53a3996400151f7e4d');
    return this.http.get('https://isha-todos-api.herokuapp.com/todos/delete-todo/'+id);
  }

}