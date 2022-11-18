import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle:string ='Product List';
  imageWidth: number = 50;
  imageMargin:number =2;
  products:any[]= [{
    "productid":2,
    "productName": "Garden Cart",
    "productCode":"ip-89899",
    "releaseDate":"March 18 2022",
    "description":"15 Gallon capacity rolling",
    "price":32.99,
    "startRating":4.2,
    "imageUrl":"assets/images/garden_cart.png"},
    {
      "productid":5,
      "productName": "Hammer",
      "productCode":"ip-89890",
      "releaseDate":"May 21 2021",
      "description":"Curved claw steel hammer",
      "price":8.9,
      "startRating":4.8,
      "imageUrl":"assets/images/hammer.png"
  }]
}
