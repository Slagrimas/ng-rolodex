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
  user: object;
  name: string = 'shadrach lagrimas';

  constructor(private session: SessionServices) {

  }
}
