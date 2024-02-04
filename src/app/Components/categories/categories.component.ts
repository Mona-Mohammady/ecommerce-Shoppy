import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


import { Categoery } from 'src/app/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('zoomInOutAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('3s ease', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class CategoriesComponent implements OnInit {
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
