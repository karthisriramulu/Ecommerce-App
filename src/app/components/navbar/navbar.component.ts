import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isOpen: boolean = false;

  toggleNavBar() {
    this.isOpen = !this.isOpen; 
  }

  ngOnInit(): void {
  }

}
