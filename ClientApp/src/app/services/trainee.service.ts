import { Injectable } from '@angular/core';

/*import { Http, Headers } from '@angular/http';*/

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class TraineeService {

  constructor(private http: Http) { }

  create(trainee: any) {
    return this.http.post('/api/trainees', trainee).pipe(map(res => console.log(res.json())));
    //return this.http.post('/api/trainees', trainee);
  }
  getTrainee(id: any) {
    return this.http.get('/api/trainees/' + id).pipe(map(res => res.json()));
    //return this.http.get('/api/trainees/' + id).pipe(map(res => res.json()));
  }

  update(trainee: any, id: any) {
    return this.http.put('/api/trainees/' + id, trainee).pipe(map(res => res.json()));
    //return this.http.put('/api/trainees/' + id, trainee);
  }

  delete(id: any) {
    return this.http.delete('/api/trainees/' + id).pipe(map(res => res.json()));
    //return this.http.delete('/api/trainees/' + id);
  }

  getTrainees() {
    return this.http.get('/api/trainees/').pipe(map(res => res.json()));
    //return this.http.get('/api/trainees/');
  }

  getCourseList() {
    return this.http.get('/api/trainees/GetCourseList/').pipe(map(res => res.json()));
    //return this.http.get('/api/trainees/GetCourseList/');
  }
}
