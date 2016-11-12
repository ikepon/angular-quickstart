import { NgModule }      from '@angular/core';
// ブラウザで表示させるために必要
import { BrowserModule } from '@angular/platform-browser';
// Form用のmodule. two way binding に必要
import { FormsModule }   from '@angular/forms';
// httpアクセスに必要
import { HttpModule }    from '@angular/http';

// // Router用のmodule.
// import { RouterModule }  from '@angular/router';
// AppRoutingModule の読み込み
import { AppRoutingModule }    from './app-routing.module';

// in-memory web api 用
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// AppComponent を読みこんでる
import { AppComponent }        from './app.component';
// DashboardComponent の読み込み
import { DashboardComponent }  from './dashboard.component';
// HeroesComponent の読み込み
import { HeroesComponent }     from './heroes.component';
// HeroDetailComponent の読み込み
import { HeroDetailComponent } from './hero-detail.component';
// HeroService の読み込み
import { HeroService }         from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
