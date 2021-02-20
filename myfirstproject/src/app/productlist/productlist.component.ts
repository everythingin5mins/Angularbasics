import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }
 productList =[];
 productDesc = '';
  ngOnInit(): void {
  }

  addProduct(){
    this.productDesc ? this.productList.push(this.productDesc) : this.productList.push('Products');
    this.productDesc = '';
  }
  removeProduct(index){
    this.productList.splice(index,1)
  }

}
