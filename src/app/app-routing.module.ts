import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemoriesComponent } from './memories/memories.component';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AppComponent } from './app.component';
import { MonthScheduleComponent } from './month-schedule/month-schedule.component';
import { SpecialDiaryComponent } from './special-diary/special-diary.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'memories', component: MemoriesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'songs', component:SongsComponent  },
  { path: 'time-table', component:TimeTableComponent  },
  { path: 'month', component:MonthScheduleComponent },
  { path: 'graph', component:SpecialDiaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
