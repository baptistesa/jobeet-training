import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  username: string;
  password: string;
  name : string;
  lastname: string;

  constructor(private router: Router) { }

  // handle signup
  signup() {
    this.router.navigateByUrl("/home")
  }

  // Go to login page
  goToLogin() {
    this.router.navigateByUrl("/");
  }
}
