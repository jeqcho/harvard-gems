import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive/archive.component';
import { Fall2023Component } from './archive/fall2023/fall2023.component';
import { Spring2023Component } from './archive/spring2023/spring2023.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: Fall2023Component },
  { path: 'archive', component: ArchiveComponent },

  { path: 'fall-2023', component: Fall2023Component },
  { path: 'spring-2023', component: Spring2023Component },

  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
