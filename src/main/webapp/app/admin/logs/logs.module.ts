import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpringBootRestDistSystem101SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [SpringBootRestDistSystem101SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
