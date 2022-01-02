import { Component, OnInit } from '@angular/core';

import { TraineeService } from './../../services/trainee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.css']
})
export class TraineeFormComponent implements OnInit {

  traineeID: any;
  traineeName: any;
  gender: any;
  traineeEmail: any;
  traineeContact: any;
  dob: any;
  educationalStatus: any;
  

  courseID: number;
  courseList: Array<number> = [];

  trainee = { traineeID: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private service: TraineeService) {
    route.params.subscribe(t => {
      this.trainee.traineeID = t["id"];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/trainee']);
    });
  }

  ngOnInit() {

    this.service.getCourseList().subscribe(
      data => this.courseList = data
    )

    if (this.trainee.traineeID !== undefined) {
      this.service
        .getTrainee(this.trainee.traineeID)
        .subscribe(t => {
          this.trainee = t;
        });
    }
    else {
      this.trainee.traineeID = 0;
      this.traineeName = '';
      this.gender = '';
      this.traineeEmail = '';
      this.traineeContact = '';
      this.courseID = 0;
      this.dob = '';
      this.educationalStatus = false;
    }
  }

  submit() {
    if (this.trainee.traineeID != 0) {
      this.service.update(this.trainee, this.trainee.traineeID)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/trainee'])
        });
    }
    else {
      console.log(this.trainee);
      this.service.create(this.trainee)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/trainee'])
        });
    }
  }

}
