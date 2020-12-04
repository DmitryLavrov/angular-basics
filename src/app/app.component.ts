import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false

  constructor(private  http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const NewTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', NewTodo)
      .subscribe(todo => {
        console.log('Post: ', todo);
        this.todos.unshift(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay( 1000))
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false
      });
  }

  removeTodo(id: number) {
    this.http.delete<void>('https://jsonplaceholder.typicode.com/todos/'+id.toString())
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
}

