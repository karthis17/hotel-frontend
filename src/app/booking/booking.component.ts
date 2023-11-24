import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  success: boolean = false;
  data:any;
  constructor(private api:ApiService, private router:Router) {
    this.api.getAll().subscribe(res => {this.data = res;
    console.log(this.data[2]);});
  }
  date= new Date();
  toDay = this.date.getDate()+"-"+this.date.getMonth()+"-"+this.date.getFullYear();
  bookingForm = new FormGroup({
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phno: new FormControl("", Validators.required),
    checkin:new FormControl(this.toDay, Validators.required),
    checkout: new FormControl("", Validators.required),
    roomtype: new FormControl("", Validators.required),
    nof: new FormControl("1", Validators.required),
    adult: new FormControl("1", Validators.required),
    children: new FormControl("")
  });

  saveData(){
    if(this.bookingForm.valid){
      console.log(JSON.stringify(this.bookingForm.value))
      this.api.saveCustomer(this.bookingForm.value).subscribe((data) =>
      {
        this.success=true;
        console.log(data);
      });
    }else{
      console.log("bye");
    }
  }
}
