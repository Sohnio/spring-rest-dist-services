import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpringBootRestDistSystem101SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SpringBootRestDistSystem101SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class SpringBootRestDistSystem101HomeModule {}
