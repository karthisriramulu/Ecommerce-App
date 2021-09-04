import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  constructor(private as: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  login(form){
    console.log(form);
    
    this.as.login(form.value.email, form.value.password)
    .then(data => {

      console.log(data);
      
      this.router.navigate(['/']);
    })
    .catch(err => this.errorMsg = err);
  }
}
