import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewProduct } from './product/view-product/view-product';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { App } from './app';
import { Cart } from './product/cart/cart';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: "products",
        // component: ViewProduct
        loadComponent: () => import("./product/view-product/view-product").then(vp => vp.ViewProduct),
        // children: [
        //     {
        //         path: "products/:productId",
        //         loadComponent: () => import("./product/show-details/show-details").then((sd) => sd.ShowDetails)
        //     }
        // ]
    },
    {

        path: "products/:productId",
        loadComponent: () => import("./product/show-details/show-details").then(sd => sd.ShowDetails)
    },
    {
        path: "about",
        component: About
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: "signup",
        // component: Signup
        loadComponent: () => import("./user/signup/signup").then(s => s.Signup)
    },
    {
        path: "login",
        // component: Login
        loadComponent: () => import("./user/login/login").then(l => l.Login)
    },
    {
        path: "cart",
        // loadComponent: () => import("./product/cart/cart").then(c => c.Cart)
        component: Cart
    },
    {
        path: "cart/:id",
        // loadComponent: () => import("./product/cart/cart").then(c => c.Cart)
        // component: Cart
        loadComponent: () => import("./product/show-details/show-details").then(sd => sd.ShowDetails)

    },
    {
        path: "**",
        component: ErrorPage
    }

];
