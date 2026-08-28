import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ApiService {

    http = inject(HttpClient)

    getProductsApi(): Observable<any> {
        return this.http.get("http://localhost:3000/products")
    }

    postProductsApi(item: any): Observable<any> {
        return this.http.post("http://localhost:3000/cart", item)
    }

    getCartApi(): Observable<any> {
        return this.http.get("http://localhost:3000/cart")
    }

    deleteCartApi(id: any): Observable<any> {
        return this.http.delete("http://localhost:3000/cart/" + id)
    }
}
