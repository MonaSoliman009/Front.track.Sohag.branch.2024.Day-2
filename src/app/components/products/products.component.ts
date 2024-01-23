import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Icategory } from '../../models/icategory';
import { BorderImageDirective } from '../../directives/border-image.directive';

@Component({
  selector: 'app-products', //component directive
  standalone: true,
  imports: [CommonModule,FormsModule,BorderImageDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[];
  categories: Icategory[];
  selectedCatId:number=1;
  myClass:string="card"
  totalOrderPrice:number=0

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Iphone',
        quantity: 1,
        price: 50000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 1,
      },
      {
        id: 200,
        name: 'Dell Laptop',
        quantity: 5,
        price: 15000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 2,
      },
      {
        id: 300,
        name: 'Samsung Tablet',
        quantity: 0,
        price: 5000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 3,
      },
      {
        id: 400,
        name: 'Oppo',
        quantity: 4,
        price: 800,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 1,
      },
      {
        id: 500,
        name: 'HP Laptop',
        quantity: 1,
        price: 50000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 2,
      },
      {
        id: 600,
        name: 'Hawaui Tablet',
        quantity: 3,
        price: 700,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 3,
      },
    ];

    this.categories=[
      {id:1,name:"Mobiles"},
      {id:2,name:"Laptop"},
      {id:3,name:"Tablet"}
    ]
  }

  buy(price:number,count:string) {
  
    // this.totalOrderPrice=price* Number(count);

    // this.totalOrderPrice=price* +count;

    this.totalOrderPrice=price* parseInt(count);

    // this.totalOrderPrice=price* count as number;

  }

  changeCat(){
    this.selectedCatId=2
  }

  fun(i:number,prd:Iproduct){

    return prd.id
  }
}
