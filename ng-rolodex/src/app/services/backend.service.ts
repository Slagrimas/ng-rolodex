import { Injectable } from '@angular/core';
import data from './mockData';




@Injectable({
    providedIn: 'root'
})

export class BackendService {

    constructor() {

    }

    getContacts() {
        return new Promise((resolve) => {
            return resolve(data.contacts);
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
