import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  username: string;
  password: string;
  name: string;
  lastname: string;

  constructor(private router: Router, private auth: AuthService) { }

  // handle signup
  signup() {
    let body = {
      name : this.name,
      last_name : this.lastname,
      mail: this.username,
      password: this.password
    }
    this.auth.signup(body)
      .subscribe(data => {
        let result = JSON.parse(JSON.stringify(data)).data;
        if (result.status != "KO") {
          localStorage.setItem("idUser", result.id);
          this.router.navigateByUrl("/home");
        }
      })
  }

  // Go to login page
  goToLogin() {
    this.router.navigateByUrl("/");
  }
}
