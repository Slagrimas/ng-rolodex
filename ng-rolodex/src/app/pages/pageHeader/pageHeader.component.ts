import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { SessionServices } from '../../services/session.service';
import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'page-header',
    templateUrl: './pageHeader.component.html',
    styleUrls: ['./pageHeader.component.scss']
})

export class PageHeaderComponent {
    title: string = 'Header Component';
    user: object;
    constructor( private router: Router, private session: SessionServices, private auth: AuthService ) {
        this.user = this.session.getUser();
    }

    isLoggedIn(){
        return this.session.getIsLoggedIn();
    }

    login(){
        return this.router.navigate(['/login']);
    }

    logout() {
        return this.auth.logout()
        .then(()=>{
            return this.router.navigate(['/login'])
        })
    }
} 
