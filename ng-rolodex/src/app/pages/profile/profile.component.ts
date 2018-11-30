import { Component } from '@angular/core';
import { SessionServices } from '../../services/session.service';


@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  title: string = 'Welcome to your profile!';
  user: object;
  username: string = 'user.username';
  name: string = 'shadrach lagrimas';

  constructor(private session: SessionServices) {
    this.user = this.session.getUser();
  }

  isLoggedIn(){
    return this.session.getIsLoggedIn();
}

}
