import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  getAll(){
    return this.http.get("http://localhost:4000/api/rooms");
  }

  getById(id:any) {
    return this.http.get("http://localhost:4000/api/rooms/get/"+ id);
  }

  saveCustomer(customer:any){
    return this.http.post("http://localhost:4000/api/customer/create", customer, this._options);
  }

  saveContact(contact:any){
    return this.http.post("http://localhost:4000/api/contact/create", contact, this._options);
  }

}
