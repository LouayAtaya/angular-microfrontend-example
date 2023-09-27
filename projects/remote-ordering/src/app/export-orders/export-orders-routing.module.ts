import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportOrdersComponent } from './export-orders.component';

const routes: Routes = [{ path: '', component: ExportOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportOrdersRoutingModule { }
