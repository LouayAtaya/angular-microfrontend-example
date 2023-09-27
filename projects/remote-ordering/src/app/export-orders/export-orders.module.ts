import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportOrdersRoutingModule } from './export-orders-routing.module';
import { ExportOrdersComponent } from './export-orders.component';


@NgModule({
  declarations: [
    ExportOrdersComponent
  ],
  imports: [
    CommonModule,
    ExportOrdersRoutingModule
  ]
})
export class ExportOrdersModule { }
