import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NameService } from './name.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTableComponent } from './time-table/time-table.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { MonthScheduleComponent } from './month-schedule/month-schedule.component';
import { MemoriesComponent } from './memories/memories.component';
import { HomeComponent } from './home/home.component';
import { SpecialDiaryComponent } from './special-diary/special-diary.component';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
 import { MatVideoModule } from 'mat-video';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    TimeTableComponent,
    MoviesComponent,
    SongsComponent,
    MonthScheduleComponent,
    MemoriesComponent,
    HomeComponent,
    SpecialDiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    TableModule,
    MultiSelectModule,
    MatVideoModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSliderModule,
    MatCheckboxModule,
    NgxChartsModule,
  


  ],
  providers: [ NameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
