import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isUser: boolean = false;

  constructor(private as: AuthService, public router: Router) { }

  isOpen: boolean = false;

  toggleNavBar() {
    this.isOpen = !this.isOpen; 
  }

  ngOnInit(): void {

    this.as.user.subscribe(user => {
      if(user) {
        this.isUser = true;
        this.as.userId = user.uid;
      }
      else {
        this.isUser = false;
        this.as.userId = '';
      }
    });
  }

  logout(){
    console.log('logout');
    
    this.as.logout();
    this.router.navigate(['/login']);
  }
}
