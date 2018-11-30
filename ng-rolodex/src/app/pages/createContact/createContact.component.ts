import { Component } from '@angular/core';
import { SessionServices } from '../../services/session.service';
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

   constructor(private backend: BackendService, private session: SessionServices) { 
    this.user = this.session.getUser();

    
     }

   createContact() {
    console.log(this.formPlug);
  }

  isLoggedIn(){
    return this.session.getIsLoggedIn();
}

} 




//   