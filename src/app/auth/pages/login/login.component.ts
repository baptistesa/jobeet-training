import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router, private auth: AuthService) { }

  // Handle button click
  validateInputs() {
    let body = {
      mail: this.username,
      password: this.password
    }
    this.auth.login(body)
      .subscribe(data => {
        let result = JSON.parse(JSON.stringify(data)).data;
        if (result.status != "KO") {
          localStorage.setItem("idUser", result.id);
          this.router.navigateByUrl("/home");
        }
      })
  }

  // Go to signup page
  goToSignup() {
    this.router.navigateByUrl("/signup")
  }

}
