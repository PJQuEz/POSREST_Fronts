import { InputDialogComponent } from './../dialog/input-dialog/input-dialog.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    constructor(public dialog: MdDialog) {
        this.availableProducts.push(new Product('Blue Shoes', 'normal', 35));
        this.availableProducts.push(new Product('Good Jacket', 'high', 90));
        this.availableProducts.push(new Product('Red Shirt', 'premium', 12));
        this.availableProducts.push(new Product('Blue Jeans', 'normal', 60));
    }

    ngOnInit() {
    }

    openDialog() {
        let dialogRef = this.dialog.open(InputDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

    orderedProduct(event: any) {
        let test = _.remove(this.availableProducts, (n) => {
            return n.name == event.dragData.name;
        });
    }


    backProduct(event: any) {
        let test = _.remove(this.shoppingBasket, (n) => {
            return n.name == event.dragData.name;
        });
    }


    addToBack($event: any) {
        let newProduct: Product = $event.dragData;
        let answer = prompt('Hello');
        if (answer) {
            this.shoppingBasket.push(new Product(newProduct.name, newProduct.type, newProduct.cost));
            this.shoppingBasket.sort((a: Product, b: Product) => {
                return a.name.localeCompare(b.name);
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
        }
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * 3);
        }
        return cost;
    }


}

class Product {
    constructor(public name: string, public type: string, public cost: number) { }
}

class Product2 {
    constructor(public name: string, public type: string, public cost: number, public amount: number) { }
}