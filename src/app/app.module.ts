import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Spring2023Component } from './archive/spring2023/spring2023.component';
import { ArchiveComponent } from './archive/archive/archive.component';
import { Fall2023Component } from './archive/fall2023/fall2023.component';
import { Spring2024Component } from './archive/spring2024/spring2024.component';

@NgModule({
  declarations: [
    AppComponent,
    Spring2023Component,
    ArchiveComponent,
    Fall2023Component,
    Spring2024Component
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
