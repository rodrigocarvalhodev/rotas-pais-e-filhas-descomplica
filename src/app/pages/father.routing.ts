import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatherComponent } from './father.component';
import { Child1Component } from './children/child1.component';
import { Child2Component } from './children/child2.component';

const routes: Routes = [
  {
    path: '',
    component: FatherComponent,
    children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatherRoutingModule {}
