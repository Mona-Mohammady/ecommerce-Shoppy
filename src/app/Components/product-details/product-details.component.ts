import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/Services/products.service';



import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})



export class ProductDetailsComponent implements OnInit {
  productID: string = '';
  productData:any;
  cartData:any;

  constructor(private _ProductsService: ProductsService,
     private _ActivatedRoute: ActivatedRoute,
     private _CartService:CartService , private _ToastrService:ToastrService) { }




  ngOnInit(): void {

    this.productID = this._ActivatedRoute.snapshot.params['id']

    this._ProductsService.getProductByID(this.productID).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productData = res.data;
      }
    })
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }





  addToCart(id:string){

    this._CartService.addToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartData=res;
      },
      error:()=>{},
      complete:()=>{
        this._ToastrService.success(this.cartData.message)
      }
    })
  
  }
  
}
