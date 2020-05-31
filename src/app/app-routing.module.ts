import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
