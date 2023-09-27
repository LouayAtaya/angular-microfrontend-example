import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzCardModule,
    NzSpaceModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzImageModule,
    NzPaginationModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzPaginationModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
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
    FormsModule,
    NzStepsModule,
    NzCheckboxModule,
    NzCarouselModule
  ]
})
export class ItemsModule { }
