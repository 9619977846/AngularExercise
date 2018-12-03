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
          description: `A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering
plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains",
distinguishing them from dessert bananas.`
        },
        {
          name : 'Chicken',
          type : 'meat',
          description: `Chickens are gregarious birds and live together in flocks. They have a communal approach to the
incubation of eggs and raising of young. Individual chickens in a flock will dominate others, establishing a "pecking order",
with dominant individuals having priority for food access and nesting locations.
This behaviour may also be observed in mother hens to call their chicks and encourage them to eat.`
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
