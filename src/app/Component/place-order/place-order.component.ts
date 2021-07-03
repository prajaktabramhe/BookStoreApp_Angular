import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book/book-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  orderList: any;
  constructor(private router : Router,private bookService: BookServiceService,) { }

  ngOnInit(): void {
    this.getOderDetails();
  }
  continueShopping(){
    this.router.navigateByUrl("/books");
  }

  getOderDetails(){
    this.bookService.getAllUserOrders().subscribe((res: any) => {
      console.log(res);
      this.orderList = res;
    },(error) => {
      console.log(error);
    
    })
  }
}
