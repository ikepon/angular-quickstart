import { NgModule }      from '@angular/core';
// ブラウザで表示させるために必要
import { BrowserModule } from '@angular/platform-browser';
// 2way binding のために必要
import { FormsModule }   from '@angular/forms';

// AppComponent を読みこんでる
import { AppComponent }   from './app.component';
// HeroDetailComponent を読み込んでる
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
