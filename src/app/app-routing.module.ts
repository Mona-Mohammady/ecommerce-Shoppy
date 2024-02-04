import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CartsComponent } from './Components/carts/carts.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { authgGuard } from './authg.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';

const routes: Routes = [ 

  {path:'' , redirectTo:'home',pathMatch:'full' , title:'FreshCart'},
  {path:'home' , canActivate: [authgGuard], component:HomeComponent , title:'Home'},
  {path:'brands' ,canActivate: [authgGuard], component:BrandsComponent , title:'Brands'},
  {path:'cart' ,canActivate: [authgGuard], component:CartsComponent , title:'Cart'},
  {path:'categories' ,canActivate: [authgGuard], component:CategoriesComponent , title:'Categories'},
  {path:'products',canActivate: [authgGuard] , component:ProductsComponent , title:'Products'},
  {path:'product-details/:id',canActivate: [authgGuard] , component:ProductDetailsComponent, title:'ProductDetails'},
  {path:'wishlist',canActivate: [authgGuard] , component:WishlistComponent, title:'Wishlist'},
  {path:'checkout/:id',canActivate: [authgGuard] , component:CheckoutComponent, title:'Checkout'},
  {path:'allorders' ,canActivate: [authgGuard], component:AllOrdersComponent , title:'AllOrders'},


  
  {path:'login' , component:LoginComponent , title:'Login'},
  {path:'register' , component:RegisterComponent , title:'Register'},
  {path:'**' , component:NotFoundComponent, title:'Error Page'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
