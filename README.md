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

- Learn more later about the in-memory web API in the HTTP client chapter.
https://angular.io/docs/ts/latest/guide/server-communication.html#!#in-mem-web-api





## Angular2 の実装方法
フレームワークってコードを書くルールってのがあると思う。
それを理解するために、学んだことをざっと書いていく。

★ 今後確認していく箇所に ★ マークを記述


### Configuration files
- package.json
  依存する npm パッケージを記述
- tsconfig.json
  TypeScript から JSファイルをコンパイルするときの定義
- systemjs.config.js
  Application 内の Module のひも付けとパッケージの登録

Tutorial をやっている過程でこの辺をいじることはなかった。

systemjs.config.js 内の package 指定で app/main.js を指定してる。
app/main.ts は基本的な構成を書いていて、その中で /app.module を読んでる。
必要なパッケージは app.module.ts で指定していく（★）


### index.html
Application 全体のテンプレート。
rails でいうところの layouts/application.html.erb 。


### ベースは app.module.ts
Application のエントリーポイント。
設定は基本ここでやっていく。
モジュールを `import` して それを使う形にいじって `export` するイメージ。

Application 全体に関わる Module が必要であればここで指定する。
※ ここは勉強する必要あり。まだあまり分かってない

コンポーネントを新しく作った場合、ここで `import` して、`declarations` に書かないと使えない。
※ この辺は空気を読んで自動で読み取って欲しいかも...


### コンポーネント
#### ファイル名前
`hoge.component.ts` って component を付ける必要がありそう。

#### コンポーネントの読み込み
- `app.module.ts` 内で import
  `import { HogeComponent } from './hoge.component';`
- `app.module.ts` 内、 `@Component` の `declarations` に記述

#### moduleId
templateUrl, styleUrl を相対的にかけるようにする

#### HTML, CSS
`hoge.component.html` , `hoge.component.css` など同じ名前にして、`hoge.component.ts` 内で `templateUrl` , `styleUrls` に記述してやると読み込まれる。

#### イベント
- `hoge.component.html` 内に `(click)="onClick()"` とか記述して、 `hoge.component.ts` にその内容を記述する。
※ `(click)` の後の関数名さえ揃えれば別に何でもいい。
- `(ngModel)]=”test”` は双方向データバインド
- `{{title}}` は片方向データバインド

#### Angular 記法
- ngFor: ループ処理
- ngIf: 条件分岐
- ngModel: あとで調べる ★


### サービス
Application 内の処理や状態を記述する
#### ファイル名前
`hoge.service.ts` って service って名前をつける必要がありそう。

#### ファイルの読み込み方法
- `app.module.ts` 内で import
  `import { HogeService } from './hoge.service';`
- `app.module.ts` 内、 `@Component` の `providers` に記述
- 必要なコンポーネントでimportして使用する

###
router-outlet にrouteの子が表示される
