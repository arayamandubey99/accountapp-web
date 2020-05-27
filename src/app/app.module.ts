import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'product', component: ProductComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    InvoiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
