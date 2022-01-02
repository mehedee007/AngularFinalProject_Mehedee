import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseService } from './services/course.service';
import { TraineeListComponent } from './components/trainee-list/trainee-list.component';
import { TraineeFormComponent } from './components/trainee-form/trainee-form.component';
import { TraineeService } from './services/trainee.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CourseListComponent,
    CourseFormComponent,
    TraineeListComponent,
    TraineeFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'course/add', component: CourseFormComponent },
      { path: 'course/:id', component: CourseFormComponent },
      { path: 'course', component: CourseListComponent },
      { path: 'trainee/add', component: TraineeFormComponent },
      { path: 'trainee/:id', component: TraineeFormComponent },
      { path: 'trainee', component: TraineeListComponent },
    ])
  ],
  providers: [
    CourseService,
    TraineeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
