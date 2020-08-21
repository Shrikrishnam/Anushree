import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../_services/user.service';

export class Views {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}
@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})

export class ViewAppointmentComponent implements OnInit {
  
  viewss:Views[];
  id:number;
  confirmDelete = false;
  constructor(private userService: UserService,private router:Router) { }
  ngOnInit() {
    //this.userService.getfitnessdata().subscribe(viewss=> this.viewss =viewss);
    this.getfitness();
  }
  
  getfitness() {
    this.userService.getfitnessdata().subscribe(viewss=> this.viewss =viewss);
  }

    editEmployee(){
    this.router.navigate(['/place']);
  }

  deleteEmployee(id) {
    this.userService.deleteUser(id).subscribe((result) => {console.log(result)
    this.ngOnInit();
    });
  }
}
