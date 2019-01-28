import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelsModule} from './panels/panels/panels.module';
import {MainPageModule} from './main-page/main-page/main-page.module';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelsModule,
    MainPageModule,
    MaterialModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
