## Angular2 quickstart
### App の起動
`npm start`

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

  - JavaScript libraries: core-js polyfills for older browsers, the zone.js and reflect-metadata libraries needed by Angular, and the SystemJS library for module loading.
- Configuration file for SystemJS, and a script where you import and run the app module which refers to the main file that you just wrote.
- The <my-app> tag in the <body> which is where your app lives!

- Learn more about the FormsModule and ngModel in the Forms and Template Syntax chapters.
https://angular.io/docs/ts/latest/guide/forms.html#ngModel
https://angular.io/docs/ts/latest/guide/template-syntax.html#ngModel

- Learn more about ngFor and template input variables in the Displaying Data and Template Syntax chapters.
https://angular.io/docs/ts/latest/guide/displaying-data.html#ngFor
https://angular.io/docs/ts/latest/guide/template-syntax.html#ngFor

- Learn more about Event Binding in the User Input and Templating Syntax chapters.
https://angular.io/docs/ts/latest/guide/user-input.html
https://angular.io/docs/ts/latest/guide/template-syntax.html#event-binding

- Learn more about ngIf, ngFor and other structural directives in the Structural Directives and Template Syntax chapters.
https://angular.io/docs/ts/latest/guide/structural-directives.html
https://angular.io/docs/ts/latest/guide/template-syntax.html#directives

- Learn more about property bindings in the Template Syntax chapter.
https://angular.io/docs/ts/latest/guide/template-syntax.html#property-binding

- Naming conventions

- Notice that we have an AppComponent in a file named app.component.ts and our new HeroDetailComponent is in a file named hero-detail.component.ts.

- All of our component names end in "Component". All of our component file names end in ".component".

- We spell our file names in lower dash case (AKA kebab-case) so we don't worry about case sensitivity on the server or in source control.

- Learn more about the @Input() decorator in the Attribute Directives chapter.
https://angular.io/docs/ts/latest/guide/attribute-directives.html#input

- We've adopted a convention in which we spell the name of a service in lowercase followed by .service. If the service name were multi-word, we'd spell the base filename in lower dash-case. The SpecialSuperHeroService would be defined in the special-super-hero.service.ts file.

- Learn more about Dependency Injection in the Dependency Injection chapter.
https://angular.io/docs/ts/latest/guide/dependency-injection.html

- Learn more about lifecycle hooks in the Lifecycle Hooks chapter.
https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html

- Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser address bar.

- This route definition has the following parts:
  - path: the router matches this route's path to the URL in the browser address bar (heroes).
  - component: the component that the router should create when navigating to this route (HeroesComponent).

- Learn more about defining routes with Routes in the Routing chapter.
https://angular.io/docs/ts/latest/guide/router.html

- The forRoot method gives us the Router service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

- Learn more about dynamic router links and the link parameters array in the Routing chapter.
https://angular.io/docs/ts/latest/guide/router.html#link-parameters-array

- Learn about the redirects in the Routing chapter.
https://angular.io/docs/ts/latest/guide/router.html#!#redirect

- The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.

- Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html

- Pipes are a good way to format strings, currency amounts, dates and other display data. 
https://angular.io/docs/ts/latest/guide/pipes.html
