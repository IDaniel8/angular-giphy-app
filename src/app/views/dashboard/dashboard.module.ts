import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';

import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [DashboardComponent, SearchComponent, ListComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
