import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BradcrumbsComponent } from './bradcrumbs/bradcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    BradcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    BradcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
