import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private router: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParam = this.router.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(item: Product) {
    this.cartService.addToCart(item);
    window.alert(`Your product ${item.name} has been added to the cart!`);
  }
}
