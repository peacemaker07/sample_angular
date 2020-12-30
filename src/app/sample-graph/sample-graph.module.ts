import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleGraphRoutingModule } from './sample-graph-routing.module';
import { SampleGraphComponent } from './sample-graph.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [SampleGraphComponent],
  imports: [
    CommonModule,
    SampleGraphRoutingModule,
    MaterialModule,
  ]
})
export class SampleGraphModule { }
