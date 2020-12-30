import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleTopComponent } from './sample-top.component';

const routes: Routes = [{ path: '', component: SampleTopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleTopRoutingModule { }
