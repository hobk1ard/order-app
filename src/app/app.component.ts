import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-app';
  ordersHidden:boolean = true;
  userId:string = "";
  displayOrders(userId:string) {
    console.log(`Displaying orders for ${userId}`);
    this.userId = userId;
    this.ordersHidden = false;
  }
}
