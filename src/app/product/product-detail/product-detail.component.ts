import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product(1, 'りんご', 150, '青森県産');
  }

}
