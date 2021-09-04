import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  add: number = -1;

  Products : Array<any> = [
    // {
    //   Name: "Banana", 
    //   Price: 3, 
    //   Desc: "Fruit", 
    //   ProductPath: "assets/Pics/banana.jpg" 
    // },
    // {
    //   Name: "Kiwi", 
    //   Price: 3, 
    //   Desc: "Fruit", 
    //   ProductPath: "assets/Pics/kiwi.jpg" 
    // },
    // {
    //   Name: "Orange", 
    //   Price: 3, 
    //   Desc: "Fruit", 
    //   ProductPath: "assets/Pics/orange.jpg" 
    // },
    // {
    //   Name: "Strawberry", 
    //   Price: 3, 
    //   Desc: "Fruit", 
    //   ProductPath: "assets/Pics/strawberry.jpg" 
    // }
  ];

  constructor(private ps: ProductsService, private cart: CartService) { }

  ngOnInit(): void {

    this.ps.getAllProducts().subscribe((data) => {
      this.Products = data;
    });
  }

  addToCard(index){
    
    this.add = +index;
    console.log("added item", this.Products[index]);
    
  }

  buy(amount){

    let selectedProduct = this.Products[this.add];

    let data = {
      name : selectedProduct.Name,
      price : selectedProduct.Price,
      amount : +amount
    }

    // console.log(data);
    this.cart.addToCart(data)
    .then(() => this.add = -1)
    .catch(err => console.log(err));
  
  }
}
