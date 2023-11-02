import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherModule } from './pages/father.module';

const routes: Routes = [
  { path: 'modulo1', loadChildren: () => FatherModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
