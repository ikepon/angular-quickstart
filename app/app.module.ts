import { NgModule }      from '@angular/core';
// ブラウザで表示させるために必要
import { BrowserModule } from '@angular/platform-browser';
// Form用のmodule. two way binding に必要
import { FormsModule }   from '@angular/forms';

// Router用のmodule.
import { RouterModule }   from '@angular/router';

// AppComponent を読みこんでる
import { AppComponent }   from './app.component';

// HeroDetailComponent の読み込み
import { HeroDetailComponent } from './hero-detail.component';
// HeroesComponent の読み込み
import { HeroesComponent }     from './heroes.component';
// HeroService の読み込み
import { HeroService }         from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
