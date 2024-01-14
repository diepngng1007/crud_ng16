import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  products : Product[] = []
  id: any
  name : any
  price : any
  desc : any
  constructor(private productService : ProductsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
        this.id = params.get('id')
        if(this.id){
            this.productService.updateProduct(this.id).subscribe((product) => {
              this.name = product.name,
              this.price = product.price,
              this.desc = product.desc
            })
        }
    })
  }
  submitForm(){
    const updateProduct : Product = {
        id: this.id,
        name: this.id,
        price: this.price,
        desc: this.desc
    }
    this.productService.updateProduct(updateProduct).subscribe((data) => {
        console.log(data)
    })
  }
}
