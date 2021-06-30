import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book/book-service.service';
const EMAIL_REGEX = new RegExp("^([a-zA-Z0-9+-])+(\\.?[a-zA-Z0-9_+-])*@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.]?[a-zA-Z]{2,3})?$")

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  AddCart:FormGroup;
  cartList: any;
  showCustomerDetails = false;
  constructor(private bookService: BookServiceService, private router: Router,  formBuilder:FormBuilder,) {
    
    this.AddCart = formBuilder.group(
      {
        firstName: ['', [Validators.required], ],
        phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        pincode: ['',[Validators.required,Validators.maxLength(6)]],
        locality: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
        address: ['', [Validators.required], ],
        city: ['', [Validators.required], ],
        landmark: ['', [Validators.required], ],
        type: ['', Validators.required]
      }
    )
   }

  ngOnInit(): void {
   this.getCartDetails();
}


getCartDetails(){
  console.log("checked cart");
  this.bookService.getAllUserCart().subscribe((res: any) => {
    console.log(res);
    this.cartList = res;
  })
}

  placeOrder()
  {
    this.showCustomerDetails = true;
  }

  continue(){

  }
  onLogout()
  {
    console.log("OnSubmit");
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
