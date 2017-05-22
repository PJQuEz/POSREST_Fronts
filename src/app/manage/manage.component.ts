import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  foods = [
    { value: 'brewing', viewValue: 'Brewing' },
    { value: 'non brewing', viewValue: 'Non-brewing' }
  ];
  p = {
    'name': '',
    'type': '',
    'pic':''
  };
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product2> = [];

  constructor() {
    this.availableProducts.push(new Product('Blue Shoes', 'normal', 35));
    this.availableProducts.push(new Product('Good Jacket', 'high', 90));
    this.availableProducts.push(new Product('Red Shirt', 'premium', 12));
    this.availableProducts.push(new Product('Blue Jeans', 'normal', 60));
  }

  ngOnInit() {
  }



  orderedProduct(event: any) {
    // let test = _.remove(this.availableProducts, (n) => {
    //     return n.name == event.dragData.name;
    // });
  }


  backProduct(event: any) {
    // let test = _.remove(this.shoppingBasket, (n) => {
    //     return n.name == event.dragData.name;
    // });
  }


  addToBack($event: any) {
    let newProduct: Product2 = $event.dragData;
    let answer = prompt('Hello');
    let num1 = parseInt(answer);
    if (answer) {
      console.log(num1)
      this.shoppingBasket.push(new Product2(newProduct.name, newProduct.type, newProduct.cost, num1));
      this.shoppingBasket.sort((a: Product2, b: Product2) => {
        return a.name.localeCompare(b.name);
      });
      console.log(this.shoppingBasket)
      
      let test = _.remove(this.availableProducts, (n) => {
        return n.name == $event.dragData.name;
      });
    }
  }

  addToBasket($event: any) {
    let newProduct: Product = $event.dragData;
    let answers = prompt('test');
    if (answers) {
      this.availableProducts.push(new Product(newProduct.name, newProduct.type, newProduct.cost));
      this.availableProducts.sort((a: Product, b: Product) => {
        return a.name.localeCompare(b.name);
      });
      let test = _.remove(this.shoppingBasket, (n) => {
        return n.name == $event.dragData.name;
      });
    }
  }

  normalCost(): number {
    let cost: number = 0;
    for (let indx in this.shoppingBasket) {
      let product2: Product2 = this.shoppingBasket[indx];
      if(product2.type=='normal'){
      cost += (product2.cost * product2.quantity);
      }
    }
    return cost;
  }


}

class Product {
  constructor(public name: string, public type: string, public cost: number) { }
}

class Product2 {
  constructor(public name: string, public type: string, public cost: number, public quantity: number) { }
}