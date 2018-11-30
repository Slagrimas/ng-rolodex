import { Component } from '@angular/core';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  title: string = 'Welcome to your profile!';
  username: string = 'yeah_shad';
  name: string = 'shadrach lagrimas';

  constructor() {

  }
}
