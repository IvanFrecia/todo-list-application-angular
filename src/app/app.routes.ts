import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-lists.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: '' }
];
