import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  userId: any
  order: any;

  constructor(private _CartService: CartService, private _AuthService: AuthService) { }

  ngOnInit(): void {

    this.userId = this._AuthService.userProfile.getValue();



    this._CartService.getAllOrders(this.userId.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.order=res;
    }
      
    })
  }

}
