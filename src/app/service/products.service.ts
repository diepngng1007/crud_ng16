import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = "http://localhost:3000/products"
  constructor(private http: HttpClient) {
    
   };
  getProducts():Observable<any>{
    return this.http.get(this.apiUrl)
  }
  addProduct(data:any):Observable<any>{
    return this.http.post(this.apiUrl,data)
  }
  listOneProduct(id:string|number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  deleteProduct(id:string|number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
  updateProduct(data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${data.id}`,data)
  }
}
