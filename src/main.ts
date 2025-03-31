// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Standalone root component (it can be a minimal shell that just includes a <router-outlet>)
import { AppComponent } from './app/app.component';

// Import your standalone components in your route configuration
import { TodoListComponent } from './app/components/todo-list/todo-lists.component';
import { TodoDetailComponent } from './app/components/todo-detail/todo-detail.component';

const routes = [
  { path: '', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));
