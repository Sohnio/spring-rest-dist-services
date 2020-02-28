import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SpringBootRestDistSystem101SharedModule } from 'app/shared/shared.module';
import { SpringBootRestDistSystem101CoreModule } from 'app/core/core.module';
import { SpringBootRestDistSystem101AppRoutingModule } from './app-routing.module';
import { SpringBootRestDistSystem101HomeModule } from './home/home.module';
import { SpringBootRestDistSystem101EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SpringBootRestDistSystem101SharedModule,
    SpringBootRestDistSystem101CoreModule,
    SpringBootRestDistSystem101HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SpringBootRestDistSystem101EntityModule,
    SpringBootRestDistSystem101AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SpringBootRestDistSystem101AppModule {}
