import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeftPanelModule} from './leftPanel/leftPanel.module';
import {MainPageModule} from './mainPage/mainPage.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeftPanelModule,
    MainPageModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
