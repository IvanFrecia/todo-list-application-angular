import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // for *ngIf
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

// Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todoForm!: FormGroup;
  todoId!: number;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoId = Number(this.route.snapshot.paramMap.get('id'));
    const todo = this.todoService.getTodoById(this.todoId);
    if (todo) {
      this.todoForm = this.fb.group({
        name: [todo.name, Validators.required],
        description: [todo.description, Validators.required]
      });
    }
  }

  updateTodo() {
    if (this.todoForm.valid) {
      const updatedTodo: Todo = {
        id: this.todoId,
        name: this.todoForm.value.name,
        description: this.todoForm.value.description
      };
      this.todoService.updateTodo(updatedTodo);
      this.router.navigate(['/']);
    }
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todoId);
    this.router.navigate(['/']);
  }
}
