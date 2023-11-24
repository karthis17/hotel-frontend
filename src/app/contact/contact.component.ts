import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  	success:any;
  contactForm = new FormGroup({
    name:new FormControl("", Validators.required),
    email:new FormControl("", [Validators.required, Validators.email]),
    message:new FormControl("", Validators.required)
  });
  constructor(private api:ApiService){}
  saveData(){
    if(this.contactForm.valid){
      console.log(this.success)
      this.success=true;
      this.api.saveContact(this.contactForm.value).subscribe(data =>{console.log(data)});
      emailjs.send('service_eogljq6','template_yu42ptd', {
        from_name: this.contactForm.controls['name'].value,
        to_name: 'karthi',
        from_email: this.contactForm.controls['email'].value,
        message: this.contactForm.controls['message'].value
      },'VhdwNJMgBjhI15dYU')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
    }else{
      this.success=false;
    }
  }
}
