import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [];
  constructor() {
    this.products = [
        {
          name : 'Banana',
          type : 'fruit',
          description: `banana fruit description banana
          fruit descriptionbanana
          fruit descriptionbanana
           fruit descriptionbanana
           fruit descriptionbanana
           fruit descriptionbanana
           fruit descriptionbanana
           fruit descriptionbanana fruit descriptionbanana fruit descriptionbanana
           fruit descriptionbanana fruit descriptionbanana fruit descriptionbanana fruit
           descriptionbanana fruit description`
        },
        {
          name : 'Chicken',
          type : 'meat',
          description: 'banana meat description'
        },
        {
          name : 'Broccoli',
          type : 'vegetable',
          description: 'broccoli vegetable description'
        },
        {
          name : 'Mango',
          type : 'fruit',
          description: 'Mango fruit description'
        },
        {
          name : 'Beef',
          type : 'meat',
          description: 'Beef meat description'
        },
        {
          name : 'Gobbi',
          type : 'vegetable',
          description: 'broccoli vegetable description'
        }
      ];
    }

  getProducts() {
    return this.products;
  }
}
