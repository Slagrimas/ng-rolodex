import { Component } from '@angular/core';
import { SessionServices } from '../../services/session.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  title: string = 'Welcome to your profile!';
  username: string = 'yeah_shad';
  name: string = 'shadrach lagrimas';
  user: object;

  constructor(private session: SessionServices) {
    this.user = this.session.getUser();
  }

  isLoggedIn(){
    return this.session.getIsLoggedIn();
}

}
