import { Component, OnInit } from '@angular/core';
import { Product } from './../../Interface/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products : Array<Product> = [
    {
      Name: "Banana", 
      Price: 3, 
      Desc: "Fruit", 
      ProductPath: "../assets/Pics/banana.jpg" 
    },
    {
      Name: "Kiwi", 
      Price: 3, 
      Desc: "Fruit", 
      ProductPath: "../assets/Pics/kiwi.jpg" 
    },
    {
      Name: "Orange", 
      Price: 3, 
      Desc: "Fruit", 
      ProductPath: "../assets/Pics/orange.jpg" 
    },
    {
      Name: "Strawberry", 
      Price: 3, 
      Desc: "Fruit", 
      ProductPath: "../assets/Pics/strawberry.jpg" 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCard(index){
    
    console.log("added item", this.Products[index]);
    
  }
}
