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
    return this.http.post(this.url + '/register', data, this.options);
  }
  loginService(data: any) {
    return this.http.post(this.url + '/login', data, this.options);
  }
  forgotPasswordService(data: any){
    return this.http.put(this.url + '/forgotpassword', data, '');
  }
  getAllBook(){
    return this.http.get(this.bookurl + '/getBooks', {...this.options, headers : new HttpHeaders().set("token", localStorage.getItem("Token"))});
  }
  getallcart(){
    return this.http.get(this.bookurl + '/getAllUserCart', {...this.options, headers : new HttpHeaders().set("token", localStorage.getItem("Token"))});
  }
}


