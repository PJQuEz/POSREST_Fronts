import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.scss']
})
export class ManageMenuComponent implements OnInit {
  foods = [
    { value: 'brewing', viewValue: 'Brewing' },
    { value: 'non brewing', viewValue: 'Non-brewing' }
  ];
  p = {
    'name': '',
    'type': '',
    'pic': ''
  };

  nCost = 0;
  hCost = 0;
  pCost = 0;
  tCost = 0;
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product2> = [];
  listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
  constructor() {
    this.availableProducts.push(new Product('Blue Shoes', 'normal', 35));
    this.availableProducts.push(new Product('Good Jacket', 'high', 90));
    this.availableProducts.push(new Product('Red Shirt', 'premium', 12));
    this.availableProducts.push(new Product('Blue Jeans', 'normal', 60));
    this.availableProducts.push(new Product('Blue Shoes', 'high', 45));
    this.availableProducts.push(new Product('Blue Jeans', 'high', 65));
    this.availableProducts.push(new Product('Blue Shoes', 'premium', 45));




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
      _.remove(this.availableProducts, (n) => {
        if (n.name == $event.dragData.name) {
          return n.type == $event.dragData.type;
        }
      });
    }
    this.test();
  }

  addToBasket($event: any) {
    let newProduct: Product = $event.dragData;
    let answers = prompt('test');
    if (answers) {
      this.availableProducts.push(new Product(newProduct.name, newProduct.type, newProduct.cost));
      this.availableProducts.sort((a: Product, b: Product) => {
        return a.name.localeCompare(b.name);
      });
      console.log(this.availableProducts)
      _.remove(this.shoppingBasket, (n) => {
        if (n.name == $event.dragData.name) {
          return n.type == $event.dragData.type;
        }
      });
    }
    this.test2();
    
  }

  normalCost() {
    // this.test();
    let cost: number = 0;
    this.nCost =0;
    this.hCost =0;
    this.pCost =0;
    for (let indx in this.shoppingBasket) {
      let product2: Product2 = this.shoppingBasket[indx];
      cost += (product2.cost * product2.quantity);
      if (product2.type == 'normal') {
        this.nCost = cost;
      }
      if (product2.type == 'high') {
        this.hCost = cost;
      }
      if (product2.type == 'premium') {
        this.pCost = cost;
      }
      this.tCost = cost;
    }
    this.test();
  }
  test() {
    let test1 = _.map(this.shoppingBasket, 'name');
    let test2 = _.filter(test1, function (value, index, iteratee) {
      return _.includes(iteratee, value, index + 1);
    });
    let test3 = _.uniq(test2);
    console.log(test3.length);
    console.log(test3);

    _.forEach(this.shoppingBasket, (value) => {
      this.tCost += (value.cost * value.quantity);
      
      _.forEach(test3, (value2) => {
        console.log(value.name)
        if (value.name === value2) {
          if (value.type === 'premium') {
            console.log('p');
            // this.nCost -= value.cost;
            // this.hCost -= value.cost;
          }
          else if (value.type === 'high') {
            console.log('h');
            // this.nCost -= value.cost;
            // this.pCost -= value.cost;
          }
          else {
            console.log('n');
            // this.hCost -= value.cost;
            // this.pCost -= value.cost;
          }
        }
        else {

        }
        // else if (value.prop === 'qq') {

        // }
        // else {
        //   objResult[value.prop] = value.value;

        // }
      });


    });
  }
  test2() {
    let test1 = _.map(this.shoppingBasket, 'name');
    let test2 = _.filter(test1, function (value, index, iteratee) {
      return _.includes(iteratee, value, index + 1);
    });
    let test3 = _.uniq(test2);
    console.log(test3.length);
    console.log(test3);

    _.forEach(this.shoppingBasket, (value) => {
      this.tCost -= (value.cost * value.quantity);
      
      _.forEach(test3, (value2) => {
        console.log(value.name)
        if (value.name === value2) {
          if (value.type === 'premium') {
            console.log('p');
            // this.nCost -= value.cost;
            // this.hCost -= value.cost;
          }
          else if (value.type === 'high') {
            console.log('h');
            // this.nCost -= value.cost;
            // this.pCost -= value.cost;
          }
          else {
            console.log('n');
            // this.hCost -= value.cost;
            // this.pCost -= value.cost;
          }
        }
        else {

        }
        // else if (value.prop === 'qq') {

        // }
        // else {
        //   objResult[value.prop] = value.value;

        // }
      });


    });
  }

}


class Product {
  constructor(public name: string, public type: string, public cost: number) { }
}

class Product2 {
  constructor(public name: string, public type: string, public cost: number, public quantity: number) { }
}