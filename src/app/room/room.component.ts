import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  data:any;
  id:string|null;
  constructor(private api: ApiService, private router: ActivatedRoute) {
    this.id = this.router.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe(data => {this.data = data});
  }
}
