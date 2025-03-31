# Todo App with Angular Material, Unocss, SSR & Standalone Components

This project is a responsive Todo List application built with Angular. It uses Angular Material for UI components, Unocss for utility-first styling, Angular SSR for server-side rendering, and SCSS for custom styles. The application features standalone components and reactive forms to create, update, and delete todos. Note that while an internal ID is generated automatically for each todo, users only see and interact with the todo's **name** and **description**.

## Features

- **Responsive Design:**  
  The layout adapts for both desktop and mobile screens. On larger screens, elements are arranged side by side; on mobile, they stack vertically.

- **Angular Material Components:**  
  Utilizes Angular Material components such as `mat-card`, `mat-form-field`, `mat-list`, and `mat-button` for a consistent look and feel.

- **Reactive Forms:**  
  Uses Angular Reactive Forms for creating and updating todos. Only the name and description are displayed to the user.

- **Internal ID Management:**  
  Each todo gets an internal ID generated automatically (using `Date.now()`). The ID is used for CRUD operations but is hidden from the UI.

- **Standalone Components:**  
  The project leverages Angular’s standalone components, so each component imports its own required modules (such as `CommonModule`, `ReactiveFormsModule`, and Angular Material modules).

- **Server-Side Rendering (SSR):**  
  The app is configured for Angular Universal SSR to improve initial page load performance and SEO.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Angular CLI](https://angular.io/cli) (version 15 or later recommended)
- Git (for version control)

## Installation & Running Locally

1. **Clone the Repository**

```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
```

2. Install Dependencies

```bash
    npm install
    Run the Application in Development Mode
```

3. Run the Application

```bash
ng serve
```

4. Then open your browser at http://localhost:4200.

5. Build and Serve with SSR

To build and serve with SSR, run the following commands:

```bash
npm run build:ssr
npm run serve:ssr
```