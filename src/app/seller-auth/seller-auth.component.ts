import { Component, OnInit } from '@angular/core';
//import validator and FormBuilder
import { Validators, FormBuilder } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  passwordMatchError: boolean = false;
  //Create FormGroup
  sellerform: any;
  constructor(
    private fb: FormBuilder,
    private seller: SellerService,
    private route: Router
  ) {
    this.myForm();
  }

  //Create required field validator for name
  myForm() {
    this.sellerform = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      phone_no: ['', Validators.required],
      Password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  ngOnInit() {}
  sellerdata(data: object) {
    this.seller.sellersignup(data).subscribe((result) => {
      this.route.navigate(['seller-home']);
    });
  }
}
