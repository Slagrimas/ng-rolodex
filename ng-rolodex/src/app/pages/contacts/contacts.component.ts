import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service'

@Component({
    selector: 'contacts-page',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent {
    title: string = "Contacts Page";
      contacts: Array = [];
    // contacts: Object[] = [];
    contact: object;

    constructor(private backend: BackendService) {
        this.backend.getContacts()
            .then((data) => {
                this.contacts = data;
            })    
    }

} 