import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categoery } from 'src/app/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent implements OnInit{

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true
  }


  categories:Categoery[]=[];


  constructor(private _ProductsService:ProductsService){}

  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(res)=>{
          console.log(res.data)
          this.categories= res.data;
      }
    })
  }
}
