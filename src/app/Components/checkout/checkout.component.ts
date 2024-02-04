import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

//details

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartId:string='';

constructor(private _CartService:CartService, private _ActivatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.cartId =this._ActivatedRoute.snapshot.params['id']
}

shippingAdress = new FormGroup({
    details: new FormControl(null),
          phone:  new FormControl(null),
          city:  new FormControl(null),
          
  })


  checkout(data:FormGroup){
   console.log(data.value);
   this._CartService.onlinePayment( this.cartId, data.value).subscribe({
    next:(res)=>{
      console.log(res.session.url);
      window.location.href = res.session.url;
    },
    error:()=>{},
    complete:()=>{
     
    },
   })
   
  }
}
