import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  title: string = 'Login Page';

    loginForm: {
        username: '',
        password: ''
    } = {
            username: '',
            password: ''
        };


  constructor(private auth: AuthService, private router: Router) {

  }

  login() {
      return this.auth.login(this.loginForm)
      .then(()=> {
          return this.router.navigate(['/'])
      })
  }
  submit() {
    console.log(this.loginForm);
  }

}



   

