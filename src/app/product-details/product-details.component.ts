
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 

  product: any;
  params: any;
  // product: { id: number; name: string; price: number; description: string; } | undefined;
  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService

  ) { }

  ngOnInit() {
    const routeParms = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParms.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    
    };
  }


