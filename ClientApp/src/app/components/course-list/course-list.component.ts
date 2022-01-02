import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any;
  constructor(private router: Router, private service: CourseService) { }

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.service.getCourses().subscribe(courses => this.courses = courses);
  }
  delete(id: any) {
    if (confirm("Are You Sure??")) {
      console.log(id);
      this.service.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }

}
