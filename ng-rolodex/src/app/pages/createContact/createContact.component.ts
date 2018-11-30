import { Component } from '@angular/core';

 @Component({
  selector: 'createContact-page',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})

 export class CreateContactComponent {
  title: string = "Create Contact Page";
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

   constructor() {   }

   createContact() {
    console.log(this.formPlug);
  }

} 




//   