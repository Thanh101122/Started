import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component:CartComponent},
    { path: 'shipping', component: ShippingComponent},
];
@NgModule({
    imports: [
      HttpClientModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }