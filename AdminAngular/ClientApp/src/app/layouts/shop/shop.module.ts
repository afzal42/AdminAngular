import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ShopHomeComponent, FormatCountdownPipe } from '../../shop/shop-home/shop-home.component';
import { ProductComponent, FormatTimePipe } from '../../shop/product/product.component';
import { CartComponent } from '../../shop/cart/cart.component';
import { ProductDetailComponent } from '../../shop/product-detail/product-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    ShopComponent,
    ShopHomeComponent,
    ProductComponent,
    CartComponent,
    ProductDetailComponent,
    FormatTimePipe,
    FormatCountdownPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng5SliderModule
  ]
})
export class ShopModule { }
