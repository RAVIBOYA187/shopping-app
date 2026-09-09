import { HttpClient } from '@angular/common/http';
import { Component, inject, LOCALE_ID, OnInit, signal } from '@angular/core';
import { ApiService } from '../../service/api-service';
import { CurrencyPipe, DecimalPipe, JsonPipe, PercentPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { json } from 'node:stream/consumers';
import { CartService } from '../../service/cart-service';

@Component({
  imports: [CurrencyPipe, TitleCasePipe, RouterLink, SlicePipe],
  selector: 'app-view-product',
  styleUrl: './view-product.css',
  templateUrl: './view-product.html',
})
export class ViewProduct implements OnInit {

  // http = inject(HttpClient);

  // productsList: any[] = []
  productsArray = signal<any[]>([])

  customService = inject(ApiService)
  cartService = inject(CartService)

  // cartItems: any[] = [];

  // product = {
  //   id: "",
  //   title: "",
  //   price: 0,
  //   category: "",
  //   stock: 0,
  //   image: "",
  //   count: 1
  // }


  getProducts() {
    // this.http.get("http://localhost:3000/products")
    this.customService.getProductsApi()
      .subscribe({
        next: (result: any) => {
          // debugger
          // this.productsList.set(result);
          // this.productsArray = result;
          this.productsArray.set(result)
          // console.log("products : ", this.productsList);
          console.log("products : ", this.productsArray());

        },

        error: (err) => {
          console.log(err);
          console.log(err.message);
          console.log(err.status);
        },
        complete: () => {
          console.log("products get api completed....");
        }
      })
  }

  ngOnInit(): void {
    this.getProducts()
    // this.addToCartInLS()
    // console.log("cons : ", localStorage.getItem("cart"));

  }

  // cartItems: any[] = [];

  addToCartInLS(item: any) {

    this.cartService.addToCart(item);

    // const cart = localStorage.getItem('cart');

    //   if (cart) {
    //     this.cartItems = JSON.parse(cart) ?? [];
    //   }

    //   for (let i = 0; i < this.cartItems.length; i++) {
    //     if (this.cartItems.at(i).id === item.id) {

    //       let addAgain = confirm((item.title.split(" ")[0] + " " + item.title.split(" ")[1]).toUpperCase() + "  Already Added To Cart.. DO You want to Add Again...")

    //       if (addAgain) {
    //         this.cartItems.at(i).count++;
    //         console.log("duplicate updated...");

    //         localStorage.setItem(
    //           'cart',
    //           JSON.stringify(this.cartItems)
    //         );

    //       }
    //       return
    //     }
    //   }

    //   this.cartItems.push({ ...this.product, ...item });
    //   localStorage.setItem(
    //     'cart',
    //     JSON.stringify(this.cartItems)
    //   );

    //   alert((item.title.split(" ")[0] + " " + item.title.split(" ")[1]).toUpperCase() + "  Added to Cart..")

    //   console.log('Cart:', this.cartItems);
  }




  // addToCart(item: any) {
  //   // this.http.post("http://localhost:3000/cart", item)
  //   // confirm("are you sure want to ")
  //   // alert(item.title.slice(0, 10) + "product added to cart..")
  //   alert((item.title.split(" ")[0] + " " + item.title.split(" ")[1]).toUpperCase() + "  Added to Cart..")

  //   this.customService.postProductsApi({ ...this.product, ...item })
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log("product added to cart...");
  //       }
  //     })
  // }


  // ngOnDestroy(): void {
  //   this.productsList = []
  // }

  // singleProduct(id) {


  // }
}
