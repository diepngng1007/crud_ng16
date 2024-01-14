import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/service/products.service';
import { FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  products!: Product;
  validate = false;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    desc: ['', [Validators.required]],
  });
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: any = params.get('id');
      this.productService.listOneProduct(id).subscribe((product) => {
        this.products = product;
        this.productForm.patchValue({
          name: this.products.name,
          price: this.products.price,
          desc: this.products.desc,
        });
      });
    });
  }
  onHandleSubmit() {
    this.validate = true;
    if (this.productForm.valid && this.products) {
      const product: Product = {
        id: this.products.id,
        name: this.productForm.controls['name'].value || '',
        price: this.productForm.controls['price'].value || 0,
        desc: this.productForm.controls['desc'].value || '',
      };
      this.productService.updateProduct(product).subscribe((data) => {
        alert('update thành công');
      });
    }
  }
}
