import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [CustomerComponent, CustomerEditComponent],
  imports: [CommonModule, CustomerRoutingModule, NzDrawerModule],
  providers: [CustomerService],
})
export class CustomerModule {}
