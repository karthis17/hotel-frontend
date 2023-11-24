import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  data:any;
  constructor(private api: ApiService){
    this.api.getAll().subscribe(res =>{
      console.log(res);
      this.data = res;
    });
  }
}
