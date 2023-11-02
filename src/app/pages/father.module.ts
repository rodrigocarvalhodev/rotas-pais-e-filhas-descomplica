import { NgModule } from '@angular/core';
import { FatherComponent } from './father.component';
import { Child1Component } from './children/child1.component';
import { Child2Component } from './children/child2.component';
import { FatherRoutingModule } from './father.routing';

@NgModule({
  declarations: [
    FatherComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    FatherRoutingModule,
  ],
  exports: [
  ],
  providers: []
})

export class FatherModule { }
