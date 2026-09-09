import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { CartService } from '../../service/cart-service';
import { RouterLink } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, DecimalPipe, RouterLink, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit, OnDestroy {
  // export class Cart {

  cartService = inject(CartService);

  productsList = this.cartService.productsList;

  totalProducts = this.cartService.totalProducts;

  totalAmount = this.cartService.totalAmount;

  sublist = []

  // declarative pattern to access data 
  product$ = this.cartService.product$;
  sub !: Subscription;

  ngOnInit(): void {
    // this.cartService.loadCart();

    // procedural pattern to access data 
    // this.sub = this.cartService.getProducts().subscribe(res => this.sublist = res)
    // console.log(this.sub);
    // console.log(this.sublist);

    // this.product$.subscribe((ans) => console.log("ans   : ", ans))
    console.log(this.product$)

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  increment(item: any): void {

    this.cartService.increment(item);
  }

  decrement(item: any): void {

    this.cartService.decrement(item);
  }


  removeCartItemFromLS(item: any): void {

    const productName =
      item.title
        .split(' ')
        .slice(0, 2)
        .join(' ')
        .toUpperCase();

    const confirmed = confirm(
      `Are You Sure Want to Remove ${productName}`
    );

    if (confirmed) {
      this.cartService.removeCartItem(item);
    }

  }


  clearCartfromLS(): void {

    const confirmed =
      confirm('Are You Sure Want To Clear The Cart');

    if (confirmed) {
      this.cartService.clearCart();
    }
  }

}






















// import { HttpClient } from '@angular/common/http';
// import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, computed, inject, OnChanges, OnInit, output, signal, SimpleChanges } from '@angular/core';
// import { ApiService } from '../../service/api-service';
// import { CurrencyPipe, DecimalPipe } from '@angular/common';
// import { RouterLink } from "@angular/router";
// import { Navbar } from '../../navbar/navbar';
// import { CartService } from '../../service/cart-service';

// @Component({
//   imports: [CurrencyPipe, DecimalPipe],
//   selector: 'app-cart',
//   styleUrl: './cart.css',
//   templateUrl: './cart.html',
// })
// // export class Cart implements OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked {
// export class Cart implements OnInit {
//   http = inject(HttpClient);
//   // cartList: any[] = []
//   // customeServie = inject(ApiService)
//   cartService = inject(CartService);

//   // productsList = signal<any[]>([])
//   productsList = this.cartService.productsList;


//   // totalProducts = signal<number>(0);
//   totalProducts = this.cartService.totalProducts;

//   // totalAmount = signal<number>(0)
//   totalAmount = this.cartService.totalAmount;

//   // navTotal = output<number>

//   ngOnInit(): void {
//     this.getFromLS()

//   }

//   getFromLS(isdeleted?: boolean, item?: any) {
//     this.cartService.getFromLS(isdeleted, item)
//     //go if 1st time , not execute if removing
//     // if (!isdeleted) {
//     //   let cart = localStorage.getItem("cart")

//     //   if (cart) {
//     //     this.productsList.set(JSON.parse(cart))
//     //   }
//     //   this.totalProducts.set(this.productsList().length)

//     //   this.totalAmount.set(0)
//     //   this.getTotalAmount()

//     // }
//     // // execute when removing
//     // else {
//     //   this.getTotalAmountWhenRemove(item)
//     // }
//     // this.totalProducts.set(this.productsList().length)

//   }

//   removeCartItemFromLS(item: any, isClear?: boolean) {
//     this.cartService.removeCartItemFromLS(item, isClear)
//     // let toggle = true;
//     // if (!isClear) {
//     //   toggle = confirm("Are You Sure Want to Remove " + (item.title.split(" ")[0] + " " + item.title.split(" ")[1]).toUpperCase())
//     // }
//     // if (toggle) {

//     //   this.productsList.set(this.productsList().filter((p) => p !== item))

//     //   localStorage.setItem("cart", JSON.stringify(this.productsList()))

//     //   this.getFromLS(true, item)

//     // }

//   }

//   clearCartfromLS() {

//     this.cartService.clearCartfromLS()

//     // let toggle = confirm("Are You Sure Want To Clear The Cart")
//     // if (toggle) {
//     //   localStorage.removeItem("cart");
//     //   // this.getFromLS()
//     //   this.productsList.set([])
//     //   this.totalAmount.set(0)
//     //   this.totalProducts.set(0)
//     // }

//   }

//   // getTotalAmount() {
//   //   for (let i = 0; i < this.totalProducts(); i++) {
//   //     this.totalAmount.update((sum = 0) => sum + Number(this.productsList()[i].price * this.productsList()[i].count))
//   //     console.log(this.productsList()[i].price);
//   //   }
//   //   console.log("initial amount...", this.totalAmount());

//   // }

//   // getTotalAmountWhenRemove(item: any) {
//   //   this.totalAmount.update((totalAmount) => totalAmount - item.price)
//   //   console.log("removed item price : ", item.price);
//   //   console.log("after removall..", this.totalAmount());
//   //   // console.log( this.totalAmount());
//   // }

//   increment(item: any) {

//     this.cartService.increment(item);
//     // for (let i = 0; i < this.totalProducts(); i++) {
//     //   if (this.productsList()[i] === item) {
//     //     this.productsList()[i].count++;

//     //     this.totalAmount.update((sum = this.totalAmount()) => sum + item.price)

//     //     localStorage.setItem("cart", JSON.stringify(this.productsList()))

//     //     return
//     //   }
//     // }

//   }

//   decrement(item: any) {

//     this.cartService.decrement(item);

//     //   for (let i = 0; i < this.totalProducts(); i++) {
//     //     if (this.productsList()[i] === item) {
//     //       if (this.productsList()[i].count === 1) {
//     //         this.removeCartItemFromLS(item)
//     //         return
//     //       }
//     //       this.productsList()[i].count--;

//     //       this.totalAmount.update((sum = this.totalAmount()) => sum - item.price)

//     //       localStorage.setItem("cart", JSON.stringify(this.productsList()))

//     //       return
//     //     }
//     // }

//   }



//   // by using HTTP clients GET, POST, PUT, DELETE

//   // getProducts(isdeleted?: boolean, item?: any) {
//   //   // this.http.get("http://localhost:3000/cart")
//   //   this.customeServie.getCartApi()
//   //     .subscribe({
//   //       next: (result: any) => {

//   //         this.productsList.set(result)
//   //         console.log(this.productsList());

//   //         this.totalProducts.set(this.productsList().length)
//   //         console.log("totalProducts : ", this.totalProducts());


//   //         if (isdeleted) {
//   //           this.getTotalAmountWhenRemove(item)
//   //         }
//   //         else {
//   //           this.totalAmount.set(0)
//   //           this.getTotalAmount()
//   //         }
//   // 
//   //       },
//   // 
//   //       error: (err) => {
//   //         console.log(err);
//   //         console.log(err.message);
//   //         console.log(err.status);
//   //       },
//   //       complete: () => {
//   //         console.log("cart get api completed....");
//   //       }
//   //     })
//   // }



//   // removeFromCart(item: any, isClear?: boolean) {
//   //   // this.http.delete("http://localhost:3000/cart/" + item.id)

//   //   let toggle = true;
//   //   // isClear = isClear && true

//   //   if (!isClear) {
//   //     toggle = confirm("Are You Sure Want to Remove " + (item.title.split(" ")[0] + " " + item.title.split(" ")[1]).toUpperCase())
//   //   }
//   //   if (toggle) {
//   //     this.customeServie.deleteCartApi(item.id)
//   //       .subscribe({
//   //       next: (res) => {
//   //         // console.log(res);

//   //         // this.getTotalAmountWhenRemove(item)
//   //         if (!isClear) {
//   //           this.getProducts(true, item)
//   //         }

//   //       },
//   //       error: (err) => {
//   //         console.log(err);
//   //       },
//   //       complete: () => {
//   //         console.log("product removed from cart...");
//   //       }
//   //     })
//   // }

//   // }

//   // clearCart() {
//   //   console.log("clear cart started....");
//   //   let toggle = confirm("Are You Sure Want To Clear Cart")
//   //   if (toggle) {
//   //     for (let i = 0; i < this.totalProducts(); i++) {
//   //       // this.customeServie.deleteCartApi(this.productsList()[i].id)
//   //       this.removeFromCart(this.productsList()[i], true)
//   //     }
//   //   }

//   //   // this.getProducts()
//   //   this.productsList.set([])

//   // }


// }
