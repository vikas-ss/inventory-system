import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Object;
  property: any;

  constructor(private data: ProductService) { }

  ngOnInit() {

    this.data.getProducts().subscribe(
      data => this.property = data
    );


  }

}
