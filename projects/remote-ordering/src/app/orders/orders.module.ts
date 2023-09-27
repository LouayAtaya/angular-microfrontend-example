import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NzSpaceModule,
    NzGridModule,
    NzSwitchModule,
    NzPaginationModule,
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzImageModule,
    NzDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzRadioModule,
    NzDatePickerModule,
    NzListModule,
    NzTableModule,
    NzTagModule,
    NzTabsModule,
    NzStepsModule,
    NzCheckboxModule,
    NzCarouselModule
  ]
})
export class OrdersModule { }
