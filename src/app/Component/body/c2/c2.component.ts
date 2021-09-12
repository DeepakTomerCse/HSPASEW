import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  propertyList: Array<any>= [{
    "name":"Sweet Home",
    "price":15000
  },
  {
    "name":"River Home",
    "price":35000
  },
  {
    "name":"City Home",
    "price":25000
  },
  {
    "name":"Hill Home",
    "price":25000
  },
  {
    "name":"Sweet Home",
    "price":15000
  },
  {
    "name":"River Home",
    "price":35000
  },
  {
    "name":"City Home",
    "price":25000
  },
  {
    "name":"Hill Home",
    "price":25000
  }]
}
