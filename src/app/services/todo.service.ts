import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Start with some sample todos
  private todos: Todo[] = [
    { id: 1, name: 'Todo 1', description: 'Description 1' },
    { id: 2, name: 'Todo 2', description: 'Description 2' }
  ];

  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find(t => t.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosSubject.next(this.todos);
  }

  updateTodo(updatedTodo: Todo) {
    const index = this.todos.findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.todosSubject.next(this.todos);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.todosSubject.next(this.todos);
  }
}
