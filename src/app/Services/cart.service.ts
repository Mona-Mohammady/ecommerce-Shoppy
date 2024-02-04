import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL: string = 'https://ecommerce.routemisr.com/api/v1';
  myHeaders = new HttpHeaders().set('token', ' ' + localStorage.getItem('userToken'));
  numCart = new BehaviorSubject(0);
  
  
  constructor(private _HttpClient: HttpClient) {

    this.getUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.numCart.next(res.numOfCartItems);
       


      }

    })
  }

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/cart`, { productId: id })
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/cart`)
  }



  updateCountCartItem(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`${this.baseURL}/cart/${id}`, { count: count })
  }

  removeCartItem(id: string): Observable<any> {
    return this._HttpClient.delete(`${this.baseURL}/cart/${id}`)
  }


  onlinePayment(cartId: string, data: FormGroup): Observable<any> {

    return this._HttpClient.post(`${this.baseURL}/orders/checkout-session/${cartId}?url=http://localhost:4200`,
     { shippingAddress: data })
  }

  getAllOrders(cartId: string): Observable<any> {

    return this._HttpClient.get(`${this.baseURL}/orders/user/${cartId}`)
  }
}
