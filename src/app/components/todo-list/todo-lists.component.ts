import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for *ngFor, *ngIf
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoForm!: FormGroup;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => this.todos = data);
    this.newTodoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  selectTodo(todo: Todo) {
    this.router.navigate(['/todo', todo.id]);
  }

  createTodo() {
    if (this.newTodoForm.valid) {
      const newTodo: Todo = {
        id: Date.now(), // internal id generated automatically
        name: this.newTodoForm.value.name,
        description: this.newTodoForm.value.description
      };
      this.todoService.addTodo(newTodo);
      this.newTodoForm.reset();
    }
  }

  deleteTodo() {
    if (this.todos.length > 0) {
      // For example, delete the last todo
      const todo = this.todos[this.todos.length - 1];
      this.todoService.deleteTodo(todo.id);
    }
  }
}
