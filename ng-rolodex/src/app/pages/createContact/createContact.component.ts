import { Component } from '@angular/core';
import { SessionServices } from '../../services/session.service';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'createContact-page',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})

export class CreateContactComponent {
  title: string = "Create Contact Page";
  user: object;
  contact: object;
  formPlug: {
    name: string,
    address: string,
    mobile: string,
    email: string,
    instagram: string,
  } = {
      name: '',
      address: '',
      mobile: '',
      email: '',
      instagram: '',
    }

  constructor(private router: Router, private backend: BackendService, private session: SessionServices) {
    this.user = this.session.getUser();

  }

  createContact() {
    console.log(this.formPlug);
    this.backend.addContact({
      name: this.formPlug.name, address: this.formPlug.address,
      mobile: this.formPlug.mobile, email: this.formPlug.email,
      instagram: this.formPlug.instagram
    }) .then(()=>{
      return this.router.navigate(['/contacts'])
  })

  }

  isLoggedIn() {
    return this.session.getIsLoggedIn();
  }

}




//   