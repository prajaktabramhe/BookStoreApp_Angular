import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book/book-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookList: any;
  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
      this.getAllContacts();
  }
  
  getAllContacts(){
    this.bookService.getAllBook().subscribe((res: any) => {
      console.log(res);
      this.bookList = res;
    })
  }

}
