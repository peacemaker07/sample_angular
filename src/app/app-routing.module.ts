import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./sample-top/sample-top.module').then(m => m.SampleTopModule)
  },
  {
    path: 'sample-graph',
    loadChildren: () => import('./sample-graph/sample-graph.module').then(m => m.SampleGraphModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
