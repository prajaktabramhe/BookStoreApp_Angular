import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  url: any = "/user";
  bookurl: string = "/book"

  constructor(
    private http : HttpService
  ) { }

  registerService(data: any){
    return this.http.Post(this.url + '/register', data, this.options);
  }
  loginService(data: any) {
    return this.http.Post(this.url + '/login', data, this.options);
  }
  forgotPasswordService(data: any){
    return this.http.Put(this.url + '/forgotpassword', data, '');
  }
  getAllBook(){
    return this.http.get(this.bookurl + '/getBooks', {...this.options, headers : new HttpHeaders().set("token", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4fQ.SwCsvul6q9fQCv6tZ9gF7_wHwXKzed2wJjkK8E1HSlA') });
  }
}


