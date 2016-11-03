import { NgModule }      from '@angular/core';
// ブラウザで表示させるために必要
import { BrowserModule } from '@angular/platform-browser';
// Form用のmodule. two way binding に必要
import { FormsModule }   from '@angular/forms';

// AppComponent を読みこんでる
import { AppComponent }   from './app.component';

// HeroDetailComponent の読み込み
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
