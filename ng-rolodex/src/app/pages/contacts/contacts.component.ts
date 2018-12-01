import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { SessionServices } from '../../services/session.service';

@Component({
    selector: 'contacts-page',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent{
    title: string = "Contacts Page";
    user: object;
    contacts: any = [];
    // contacts: Object[] = [];
    
    constructor(private backend: BackendService, private session: SessionServices) {
        console.log('this is contacts', this.contacts)
        this.user = this.session.getUser();
        
    
        this.backend.getContacts()
        .then((data) => {
            console.log('this is data', data)
            this.contacts = data;
        })
    
   
}

    isLoggedIn(){
        return this.session.getIsLoggedIn();
    }

} 