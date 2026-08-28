import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field, form } from '@angular/forms/signals';

@Component({
  imports: [TitleCasePipe, CurrencyPipe],
  selector: 'app-show-details',
  styleUrl: './show-details.css',
  templateUrl: './show-details.html',
})
export class ShowDetails implements OnInit {

  // productId = input.required<string>()
  route = inject(ActivatedRoute)
  productDetails = signal<any>(null)

  http = inject(HttpClient)

  details = signal({
    id: "",
    title: "",
    price: 0,
    category: "",
    stock: 0,
    image: "",
    count: 1
  })

  detailsform = form(this.details);


  ngOnInit(): void {
    this.singleProduct()

  }

  singleProduct() {
    let productId = this.route.snapshot.paramMap.get("productId")
    // let id = this.route.snapshot.paramMap.get("id")
    console.log("rrrrrrrrrrrr'", productId);

    // let code = productId !== undefined ? productId : id;

    this.http.get(`http://localhost:3000/products/${productId}`)
      .subscribe({
        next: (res: any) => {
          // console.log(res);
          this.productDetails.set(res)
          this.details.set({ ...this.productDetails() })
          console.log("hhh  : ", this.productDetails());

        },
        error: (err) => {
          console.log(err);
        }
      })
  }


}
