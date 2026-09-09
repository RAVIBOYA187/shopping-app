import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewProduct } from './product/view-product/view-product';
import { App } from './app';
import { Cart } from './product/cart/cart';
import { ErrorPage } from './error-page/error-page';
import { Counter } from './person/counter/counter';

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
        path: "observalbes",
        loadComponent: () => import("./observable/observable-comp/observable-comp").then(ob => ob.ObservableComp),
        children: [
            {
                path: "fromEvent",
                loadComponent: () => import("./observable/from-eventcomp/from-eventcomp").then(fe => fe.FromEventcomp)
            },
            {
                path: "interval",
                loadComponent: () => import("./observable/interval-comp/interval-comp").then(int => int.IntervalComp)
            },
            {
                path: "of-from",
                loadComponent: () => import("./observable/of-from-compo/of-from-compo").then(off => off.OfFromCompo)
            },
            {
                path: "toArray",
                loadComponent: () => import("./observable/to-array/to-array").then(ta => ta.ToArray)
            },
            {
                path: "switchComp",
                loadComponent: () => import("./observable/switch-comp/switch-comp").then(sc => sc.SwitchComp)
            },
            {
                path: "customeComp",
                loadComponent: () => import("./observable/custome-obs/custome-obs").then(co => co.CustomeObs),
                // loa
            }
        ]
    },
    {
        path: "ngrx",
        component: Counter
    },
    {
        path: "**",
        component: ErrorPage
    }

];
