import { Injectable } from '@angular/core';
import data from './mockData';




@Injectable({
    providedIn: 'root'
})

export class BackendService {
    contacts: Object[] = data.contacts

    constructor() {

    }


    getContacts() {
        return new Promise((resolve) => {
            return resolve(data.contacts);
        })

    }

    addContact(newContact) {
        this.contacts.push(newContact);
        return new Promise((resolve) => {
            return resolve(this.contacts)
        })
    }

    login(user) {
        return Promise.resolve({
            id: 18,
            username: user.username
        });
    }

    logout() {
        return Promise.resolve({});
    }

    register() {
        return Promise.resolve({});
    }
} 
