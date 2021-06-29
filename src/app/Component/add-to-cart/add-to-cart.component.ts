import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book/book-service.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  bookList: any;
  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCarts();
}

getAllCarts(){
  this.bookService.getallcart().subscribe((res: any) => {
    console.log(res);
    this.bookList = res;
  })
}

  onLogout(){
    console.log("OnSubmit");
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
