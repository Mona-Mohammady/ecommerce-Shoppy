import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CartsComponent } from './Components/carts/carts.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersDetailsComponent } from './Components/users-details/users-details.component'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './Components/main-slider/main-slider.component';
import { CategoriesSliderComponent } from './Components/categories-slider/categories-slider.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { TitleTextPipe } from './Pipes/title-text.pipe';
import { SeeMorePipe } from './Pipes/see-more.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { AddHeadersInterceptor } from './add-headers.interceptor';
import { SharedModule } from './Core/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    BrandsComponent,
    ProductsComponent,
    CategoriesComponent,
    NotFoundComponent,
    UsersDetailsComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    ProductDetailsComponent,
    WishlistComponent,
    TitleTextPipe,
    SeeMorePipe,
    SearchPipe,
    CheckoutComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    SharedModule


  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: AddHeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
