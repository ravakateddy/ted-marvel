import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ListPersonnagesComponent } from './list-personnages/list-personnages.component';
import { DetailPersonnageComponent } from './detail-personnage/detail-personnage.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPersonnagesComponent,
    DetailPersonnageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
