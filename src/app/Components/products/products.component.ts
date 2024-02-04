import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/Services/products.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('zoomInOutAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('3s ease', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ProductsComponent {

  isInWishList:boolean=false;
  products: Product[] = []
  x:string='';
  cartData:any;

  

  constructor(private _ProductsService: ProductsService, private _CartService:CartService , private _ToastrService:ToastrService) { }

  ngOnInit(): void {

    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        console.log(this.products);

      }
    })

  }




  addToWishList(id:string){
    this.isInWishList = !this.isInWishList;
    console.log(this.isInWishList);
    this._ProductsService.addToWishList(id).subscribe({
      next:(res)=>{
        console.log(res);
         this.cartData=res;
      }, error:()=>{},
      complete:()=>{
        this._ToastrService.success(this.cartData.message);
      }
    })
  }
  
  
  addToCart(id:string){
  
    this._CartService.addToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartData=res;
      },
      error:()=>{},
      complete:()=>{
        this._ToastrService.success(this.cartData.message);
      }
    })
  
  }

}
