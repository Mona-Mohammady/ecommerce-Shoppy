import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 constructor(private _ProductsService: ProductsService, private _ToastrService: ToastrService) { }
products:any[]=[];
  ngOnInit(): void {
    this.getWishListData();

  }



  getWishListData(){
    this._ProductsService.getMyWishList().subscribe({
      next: (res) => {
    console.log(res);
    this.products=res.data;

      }
    })

  }

  wishRes:any;
  remove(id:string){

    this._ProductsService.removeToWishList(id).subscribe({
      next:(res)=>{
    console.log(res);
    this.wishRes=res;
      },
      error:()=>{},
      complete:()=>{
        this._ToastrService.success(this.wishRes.message ,this.wishRes.status);
       this.getWishListData();
      }
    })
  }

}
