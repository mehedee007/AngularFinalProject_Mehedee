import { Component, OnInit } from '@angular/core';
import { CourseService } from './../../services/course.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseID: any;
  courseName: any;
  courseDuration: any;
  course = { courseID: 0 };
  constructor(private route: ActivatedRoute, private router: Router, private service: CourseService) {
    route.params.subscribe(p => {
      this.course.courseID = p['id'];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/course']);
    });
  }
  ngOnInit() {
    if (this.course.courseID !== undefined) {
      this.service
        .getCourse(this.course.courseID)
        .subscribe(b => {
          this.course = b;
        });
    }
    else {
      this.course.courseID = 0;
      this.courseName = '';
      this.courseDuration = '';
    }
  }
  submit() {
    if (this.course.courseID != 0) {
      this.service.update(this.course, this.course.courseID)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/course'])
        });
    }
    else {
      console.log(this.course);
      this.service.create(this.course)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/course'])
        });
    }
  }
}


//import { Component, OnInit } from '@angular/core';

//import { CourseService } from './../../services/course.service';
//import { ActivatedRoute, Route, Router } from '@angular/router';


//@Component({
//  selector: 'app-course-form',
//  templateUrl: './course-form.component.html',
//  styleUrls: ['./course-form.component.css']
//})
//export class CourseFormComponent implements OnInit {
//  courseID: any;
//  courseName: any;
//  courseDuration: any;
//  course = { courseID: 0 };

//  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
//    route.params.subscribe(p => {
//      this.course.courseID = p['id'];
//    }, err => {
//      if (err.status == 404)
//        this.router.navigate(['/course']);
//    });
//  }
//  // type is assignable to very few other types
//  ngOnInit() {
//    if (this.course.courseID !== undefined) {
//      this.courseService
//        .getCourse(this.course.courseID)
//        .subscribe(c => {
//          this.course = c;
//        });
//    }
//    else {
//      this.course.courseID = 0;
//      this.courseName = '';
//      this.courseDuration = '';
//    }
//  }

//  submit() {
//    if (this.course.courseID != 0) {
//      this.courseService.update(this.course, this.course.courseID)
//        .subscribe(x => {
//          console.log(x),
//            this.router.navigate(['/course'])
//        });
//    }
//    else {
//      console.log(this.course);
//      this.courseService.create(this.course)
//        .subscribe(x => {
//          console.log(x),
//            this.router.navigate(['/course'])
//        });
//    }
//  //}

// }
