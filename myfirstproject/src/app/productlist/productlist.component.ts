import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }
 productList =[];
  ngOnInit(): void {
    this.productList.push('Product 1')
  }

  add(event){
    this.productList.push(event);
  }
  removeProduct(index){
    this.productList.splice(index,1)
  }
}
