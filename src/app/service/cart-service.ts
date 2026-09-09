

import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private platformId = inject(PLATFORM_ID);

    productsList = signal<any[]>([]);

    totalProducts = computed(() => {
        // return this.productsList().length;
        return this.productsList().reduce((acc, item) =>
            acc + item.count, 0
        )
    });

    totalAmount = computed(() => {
        return this.productsList().reduce(
            (total, item) =>
                total + Number(item.price) * Number(item.count), 0);

    });

    productUrl = "http://localhost:3000/products"
    http = inject(HttpClient)

    Product = {
        id: "",
        title: "",
        price: 0,
        category: "",
        stock: 0,
        image: "",
        count: 1
    }

    // procedural pattern to access data 
    getProducts(): Observable<any> {
        return this.http.get<any>(this.productUrl).pipe(
            // tap(data => console.log(JSON.stringify(data))),
            tap(data => console.log(data[3].title)),

            // catchError((err) => console.log(err))
        );
    }

    // declarative pattern to access data 
    product$ = this.http.get<any>(this.productUrl)
        .pipe(
            tap((res) => console.log(res))
        )

    constructor() {
        this.loadCart()
    }


    loadCart() {

        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const cart = localStorage.getItem('cart');

        if (cart) {
            this.productsList.set(JSON.parse(cart));
        } else {
            this.productsList.set([]);
        }
    }


    addToCart(product: any) {
        this.productsList.update(products => {

            const existingProduct = products.find(p => p.id === product.id);

            if (existingProduct) {

                let addAgain = confirm((product.title.split(" ")[0] + " " + product.title.split(" ")[1]).toUpperCase() + "  Already Added To Cart.. DO You want to Add Again...")

                if (!addAgain) {
                    return [...products];
                }
                return products.map(p => p.id === product.id ? { ...p, count: p.count + 1 } : p);
            }
            alert((product.title.split(" ")[0] + " " + product.title.split(" ")[1]).toUpperCase() + "  Added to Cart..")

            return [...products, { ...product, count: 1 }];
        });
        this.saveCart();
    }


    increment(item: any) {
        this.productsList.update(products => products.map(p => p.id === item.id ? { ...p, count: p.count + 1 } : p)
        );
        this.saveCart();
    }


    decrement(item: any) {

        if (item.count === 1) {
            let toggle = confirm("Are You Sure Want to Remove " + (item.title.split(" ").slice(0, 2).join(" ")).toUpperCase())
            if (toggle) {
                this.removeCartItem(item);
            }
            return;
        }

        this.productsList.update(products =>
            products.map(p => p.id === item.id ? { ...p, count: p.count - 1 } : p
            )
        );
        this.saveCart();
    }


    removeCartItem(item: any) {
        this.productsList.update(products =>
            products.filter(p => p.id !== item.id)
        );
        this.saveCart();

    }


    clearCart() {
        this.productsList.set([]);
        localStorage.removeItem('cart');
    }

    private saveCart() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        localStorage.setItem(
            'cart',
            JSON.stringify(this.productsList())
        );
    }





}









































// import { computed, Injectable, Service, signal } from '@angular/core';

// // @Injectable({
// //     providedIn: 'root'
// // })

// @Service()
// export class CartService {
// //

//     productsList = signal<any[]>([]);

//     // totalProducts = computed(() => {
//     //     return this.productsList().length;
//     // });

//     totalProducts = signal<number>(0)

//     totalAmount = signal<number>(0)


//     getFromLS(isdeleted?: boolean, item?: any) {
//         //go if 1st time , not execute if removing
//         if (!isdeleted) {
//             let cart = localStorage.getItem("cart")

//             if (cart) {
//                 this.productsList.set(JSON.parse(cart))
//             }
//             this.totalProducts.set(this.productsList().length)

//             this.totalAmount.set(0)
//             this.getTotalAmount()

//         }
//         // execute when removing
//         else {
//             this.getTotalAmountWhenRemove(item)
//         }
//         this.totalProducts.set(this.productsList().length)

//     }


//     removeCartItemFromLS(item: any, isClear?: boolean) {
//         let toggle = true;
//         if (!isClear) {
//             toggle = confirm("Are You Sure Want to Remove " + (item.title.split(" ")[0] + " " + item.title.split(" ")[1]).toUpperCase())
//         }
//         if (toggle) {

//             this.productsList.set(this.productsList().filter((p) => p !== item))

//             localStorage.setItem("cart", JSON.stringify(this.productsList()))

//             this.getFromLS(true, item)

//         }

//     }


//     clearCartfromLS() {
//         let toggle = confirm("Are You Sure Want To Clear The Cart")
//         if (toggle) {
//             localStorage.removeItem("cart");
//             // this.getFromLS()
//             this.productsList.set([])
//             this.totalAmount.set(0)
//             this.totalProducts.set(0)
//         }

//     }

//     getTotalAmount() {
//         for (let i = 0; i < this.totalProducts(); i++) {
//             this.totalAmount.update((sum = 0) => sum + Number(this.productsList()[i].price * this.productsList()[i].count))
//             console.log(this.productsList()[i].price);
//         }
//         console.log("initial amount...", this.totalAmount());

//     }


//     getTotalAmountWhenRemove(item: any) {
//         this.totalAmount.update((totalAmount) => totalAmount - item.price)
//         console.log("removed item price : ", item.price);
//         console.log("after removall..", this.totalAmount());
//         // console.log( this.totalAmount());
//     }

//     increment(item: any) {

//         for (let i = 0; i < this.totalProducts(); i++) {
//             if (this.productsList()[i] === item) {
//                 this.productsList()[i].count++;

//                 this.totalAmount.update((sum = this.totalAmount()) => sum + item.price)

//                 localStorage.setItem("cart", JSON.stringify(this.productsList()))

//                 return
//             }
//         }

//     }


//     decrement(item: any) {

//         for (let i = 0; i < this.totalProducts(); i++) {
//             if (this.productsList()[i] === item) {
//                 if (this.productsList()[i].count === 1) {
//                     this.removeCartItemFromLS(item)
//                     return
//                 }
//                 this.productsList()[i].count--;

//                 this.totalAmount.update((sum = this.totalAmount()) => sum - item.price)

//                 localStorage.setItem("cart", JSON.stringify(this.productsList()))

//                 return
//             }
//         }

//     }


// }
