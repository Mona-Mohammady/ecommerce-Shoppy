import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient :HttpClient ) { }



  getProducts():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  
  getProductByID(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  addToWishList(id:string):Observable<any>{
    let headerData = new HttpHeaders().set('token', ' '+ localStorage.getItem('userToken'));
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id} )
  }


  getMyWishList():Observable<any>{
    let headerData = new HttpHeaders().set('token', ' '+ localStorage.getItem('userToken'));
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
  }

  removeToWishList(id:string):Observable<any>{
    let headerData = new HttpHeaders().set('token', ' '+ localStorage.getItem('userToken'));
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` )
  }


  
  getBrands():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands') ;
  }


}
