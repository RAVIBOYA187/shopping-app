import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { CartService } from '../service/cart-service';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  cartService = inject(CartService)

  totalProducts = this.cartService.totalProducts;

}
