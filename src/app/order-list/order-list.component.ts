import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() owner:string = "";
  orderList = [
    {owner: "Bill", userid: "GARSTBI", number: "00001", date: new Date('1989-04-01')},
    {owner: "Brenda", userid: "BARSTBR", number: "00002", date: new Date('1999-10-12')},
    {owner: "Bill", userid: "GARSTBI", number: "00003", date: new Date('2012-04-01')},
    {owner: "Brenda", userid: "BARSTBR", number: "00004", date: new Date('1989-04-19')},
    {owner: "Bill", userid: "GARSTBI", number: "00005", date: new Date('2020-06-02')}
  ]
  constructor() { }

  ngOnInit() {
  }
  removeOrder(event) {
    for(let i = 0; i < this.orderList.length; i++) {
      if(this.orderList[i].number === event.currentTarget.name) {
        this.orderList.splice(i, 1);
      }
    }
  }
}
