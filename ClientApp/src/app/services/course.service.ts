import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  create(course: any) {
    return this.http.post('/api/courses', course).pipe(map(res => console.log(res.json())));
    //return this.http.post('/api/courses', course);
  }
  getCourse(id: any) {
    /*    return this.http.get('/api/courses/' + id);*/
    return this.http.get('/api/courses/' + id).pipe(map(res => res.json()));

  }
  update(course: any, id: any) {
    return this.http.put('/api/courses/' + id, course).pipe(map(res => res.json()));
    //return this.http.put('/api/courses/' + id, course);
  }
  delete(id: any) {
    return this.http.delete('/api/courses/' + id).pipe(map(res => res.json()));
    //return this.http.delete('/api/courses/' + id);
  }
  getCourses() {
    return this.http.get('/api/courses/').pipe(map(res => res.json()));
    //return this.http.get('/api/courses/');
  }

}
