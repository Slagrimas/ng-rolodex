import { Injectable } from '@angular/core';
import data from './mockData';
import { resolve } from 'dns';



@Injectable({
    providedIn: 'root'
})

export class BackendService {

    constructor() {

    }


getContacts() {
    return new Promise ((resolve) => {
        return resolve(data.contacts);
    })
    // return data.contacts;
    // console.log('this is the data', data)
}

} 
