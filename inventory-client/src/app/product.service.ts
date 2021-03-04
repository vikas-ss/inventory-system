import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    console.log("Getting product list");
    //let headers = new HttpHeaders();
    //headers.set('userId', '64');
    let headers = new HttpHeaders().set('userId', '64');
    headers = headers.set('QuestionnaireId', '3');
    return this.http.get('http://localhost:8080/property/properties', {headers: headers});
  }

}
