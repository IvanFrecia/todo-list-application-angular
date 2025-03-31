// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // For common directives like *ngFor
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-lists.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

// Angular Material Modules
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes), // Configure routes here
      MatListModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule
    ],
    providers: []
  })
  export class AppModule { }
  
