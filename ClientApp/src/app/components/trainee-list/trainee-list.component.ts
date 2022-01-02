import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../services/trainee.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {
  trainees: any;
  constructor(private router: Router, private service: TraineeService) { }

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.service.getTrainees().subscribe(trainees => this.trainees = trainees);
  }

  delete(id) {
    if (confirm("Do you want to delete Trainee with ID : " + id)) {
      console.log(id);
      this.service.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }

}
