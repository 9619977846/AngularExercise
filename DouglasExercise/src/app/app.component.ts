import { Component, PipeTransform, Pipe, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'DouglasExercise';
  filteredProducts = [];
  public productsDisplayed: Array<any>;
  public filterItems: Array<any>;
  filter = { fruit: true, vegetable: true, meat: true };
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productsDisplayed = this.productService.getProducts();

    this.filterItems = [
      {
        value: 'vegetable',
        checked: false
      },
      {
        value: 'fruit',
        checked: false
      },
      {
        value: 'meat',
        checked: false
      },
    ];
  }

  checked() {
    return this.filterItems.filter(item => item.checked);
  }
}
