import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Spring2023Component } from './archive/spring2023/spring2023.component';
import { ArchiveComponent } from './archive/archive/archive.component';
import { Fall2023Component } from './archive/fall2023/fall2023.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Spring2023Component,
    ArchiveComponent,
    Fall2023Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
