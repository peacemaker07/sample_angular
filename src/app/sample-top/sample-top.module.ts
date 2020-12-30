import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleTopRoutingModule } from './sample-top-routing.module';
import { SampleTopComponent } from './sample-top.component';


@NgModule({
  declarations: [SampleTopComponent],
  imports: [
    CommonModule,
    SampleTopRoutingModule
  ]
})
export class SampleTopModule { }
