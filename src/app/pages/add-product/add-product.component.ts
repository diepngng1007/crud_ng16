import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
    products : Product[] = []
    name : any
    price : any
    desc : any
    constructor(private productService: ProductsService){}
    ngOnInit(): void {
      this.submitForm()
    }
    submitForm(){
        const newProduct: Product = {
           name: this.name,
           price: this.price,
           desc: this.desc
        } as Product
        this.productService.addProduct(newProduct).subscribe(data => {
          this.products.push(data)
          this.name = ''
          this.price = null
          this.desc = ''
          console.log(data)
        })
    }
}
