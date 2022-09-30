import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}
  sellersignup(data: any) {
    let url = 'http://localhost:3000/seller';
    return this.http.post(url, data);
  }
}
