import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username : string;
  password : string;

  constructor(private router: Router) { }

  // Handle button click
  validateInputs() {
    this.router.navigateByUrl("/home");
  }

  // Go to signup page
  goToSignup() {
    this.router.navigateByUrl("/signup")
  }

}
