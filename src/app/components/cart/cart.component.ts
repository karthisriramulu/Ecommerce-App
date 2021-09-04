import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Shoppingcart : Array<any>;

  constructor(private cart: CartService) { }

  ngOnInit(): void {

    this.cart.getCart().subscribe((cs) => {
      this.Shoppingcart = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      });
      console.log(this.Shoppingcart);
      
    });
  }

  deleteCart(index){

    this.cart.deletedocfromcart(this.Shoppingcart[index].id)
  }

  updateCart(index){

    this.cart.updatedocfromcart(this.Shoppingcart[index].id, this.Shoppingcart[index].amount)
  }

}
