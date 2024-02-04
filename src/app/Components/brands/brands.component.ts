import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Brands } from 'src/app/product';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  animations: [
    trigger('zoomInOutAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('5s ease', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class BrandsComponent  implements OnInit{


  Brands: Brands[]=[];
  constructor(private _PService:ProductsService){}


  ngOnInit(): void {
    
    this._PService.getBrands().subscribe({
      next: (res) => {
        this.Brands = res.data;
        console.log(this.Brands);

      }
    
    }  )
  }

}
