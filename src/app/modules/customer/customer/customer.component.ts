import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent {
  constructor(private drawerService: NzDrawerService) {}

  open() {
    this.drawerService.create({
      nzContent: CustomerEditComponent,
      nzContentParams: {},
    });
  }
}
