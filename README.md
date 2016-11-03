## Angular2 quickstart
### 基本的なファイルの役割
- package.json
  identifies npm package dependencies for the project.
- tsconfig.json
  defines how the TypeScript compiler generates JavaScript from the project's files.
- systemjs.config.js
  provides information to a module loader about where to find application modules, and registers all the necessary packages. It also contains other packages that will be needed by later documentation examples.

- app/app.module.ts
  the entry point to your application.

- app/app.component.ts
  the root component

  - An import statement. Importing gives your component access to Angular's core @Component decorator function.

- A @Component decorator that associates metadata with the AppComponent component class:
  - a selector that specifies a simple CSS selector for an HTML element that represents the component.
  - a template that tells Angular how to render the component's view.
- A component class that controls the appearance and behavior of a view through its template. Here, you only have the root component, AppComponent.

- main.ts
  initializes the platform that your application runs in.
