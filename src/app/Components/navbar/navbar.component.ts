import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  
  isLogin:boolean = false;
  numberOfItem:number=0;
 constructor(private _AuthService:AuthService, private _CartService:CartService){

  // Numbers of Cart Items
  this._CartService.numCart.subscribe({

    next:(res)=> {
      this.numberOfItem=res;
    //this.numberOfItem=this._CartService.numCart.getValue();
    },
  })







  _AuthService.userProfile.subscribe({
    next:()=>{

      if(_AuthService.userProfile.getValue() !== null){
        this.isLogin=true;
      }else{
        this.isLogin = false;
      }

      
    },
  })

 
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 logout(){this._AuthService.logout()}

}


