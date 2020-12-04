import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})

export class TodosService {
  constructor(public http: HttpClient) {}

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos/', newTodo, {
      headers: new HttpHeaders({
        'MyHeader': Math.random().toString()
      })
    })
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams()
    params = params.append('_limit', '4')
    params = params.append('myparam', 'anything')

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '3')
      params
    })
      .pipe(
        delay(1000),
        catchError(err => {
          console.log('Error message: ', err.message);
          return throwError(err)
        })

      )
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>('https://jsonplaceholder.typicode.com/todos/' + id.toString())
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>('https://jsonplaceholder.typicode.com/todos/' + id.toString(),
      {completed: true})
  }
}
