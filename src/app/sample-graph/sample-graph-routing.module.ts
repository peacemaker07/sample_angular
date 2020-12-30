import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleGraphComponent } from './sample-graph.component';

const routes: Routes = [
  {
    path: '',
    component: SampleGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleGraphRoutingModule { }
