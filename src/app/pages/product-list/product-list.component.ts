import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = []
  constructor(private productService : ProductsService) { };

  ngOnInit() {
    this.ProductList()
  };

  ProductList(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data
    
    });
  }
  removeProduct(id : any){
    if(confirm('Are you sure you want to remove')){
      this.productService.deleteProduct(id).subscribe(data => {
        this.products.splice(this.products.findIndex(product => product.id === id), 1);
        this.ProductList();
      });
    }
  }
  
}