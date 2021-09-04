import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMsg : string = '';

  constructor(private as: AuthService, private user: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  signup(form){
    console.log(form.value);

    this.as.signup(form.value.email, form.value.password)
    .then(data => {
      this.user.addNewUser(data.user.uid, form.value.name, form.value.address);
      this.errorMsg = '';
      this.router.navigate(['/']);
    })
    .catch(err => this.errorMsg = err);
  }
}
