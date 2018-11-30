import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { SessionServices } from '../../services/session.service';

@Component({
    selector: 'contacts-page',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent {
    title: string = "Contacts Page";
    user: object;
    contacts: Array<any> = [];
    // contacts: Object[] = [];
    contact: object;

    constructor(private backend: BackendService, private session: SessionServices) {
        this.user = this.session.getUser();

        this.backend.getContacts()
            .then((data) => {
                this.contacts.push(data);
            })
    }

    isLoggedIn(){
        return this.session.getIsLoggedIn();
    }

} 