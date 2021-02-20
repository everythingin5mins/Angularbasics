import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
   headerValue = "Header Component";
  ngOnInit(): void {
  }

  changeDescr(){
    this.headerValue ="Header changed";
  }

}
