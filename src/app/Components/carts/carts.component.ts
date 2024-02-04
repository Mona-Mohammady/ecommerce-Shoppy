import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  cartData:any;
  
  constructor(private _CartService: CartService ) { 


   
  }



  ngOnInit(): void {
    this.getUserCart();
  }

  getUserCart() {
    this._CartService.getUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartData=res.data;
      },
      error: () => { },
      complete: () => { this.getUserCart();},

    })
  }


  updateCountCart(id:string, count:number){
    this._CartService.updateCountCartItem(id,count).subscribe({
      next: (res) => {
        console.log(res);  
        this.cartData=res.data;

      },
      error: () => { },
      complete: () => { },


    })
  }


  deleteCartItem(id:string){
    this._CartService.removeCartItem(id).subscribe({
      next: (res) => {
        console.log(res);  
    
        this.cartData=res.data;
      },
      error: () => { },
      complete: () => {
       

        
       },


    })
  }

}

