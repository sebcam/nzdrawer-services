import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
})
export class CustomerEditComponent {
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.log();
  }
}
