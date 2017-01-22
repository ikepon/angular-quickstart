import { NgModule }      from '@angular/core';
// ブラウザで表示させるために必要
import { BrowserModule } from '@angular/platform-browser';
// 2way binding のために必要
import { FormsModule }   from '@angular/forms';

// AppComponent を読みこんでる
import { AppComponent }  from './app.component';
// HeroesComponent を読み込んでる
import { HeroesComponent } from './heroes.component';
// HeroDetailComponent を読み込んでる
import { HeroDetailComponent } from './hero-detail.component';
// HeroService を読み込んでる
import { HeroService } from './hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
