import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Spring2023Component } from './archive/spring2023/spring2023.component';
import { ArchiveComponent } from './archive/archive/archive.component';
import { Fall2023Component } from './archive/fall2023/fall2023.component';
import { Spring2024Component } from './archive/spring2024/spring2024.component';
import { Fall2024Component } from './archive/fall2024/fall2024.component';
import { Spring2025Component } from './spring2025/spring2025.component';
import { Fall2025Component } from './fall2025/fall2025.component';

@NgModule({
  declarations: [
    AppComponent,
    Spring2023Component,
    ArchiveComponent,
    Fall2023Component,
    Spring2024Component,
    Fall2024Component,
    Spring2025Component,
    Fall2025Component
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
