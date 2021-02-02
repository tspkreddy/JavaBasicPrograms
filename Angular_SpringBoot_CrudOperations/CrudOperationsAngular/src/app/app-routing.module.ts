import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { RetriveComponent } from './retrive/retrive.component';

const routes: Routes = [
  { path:'crud', component: CrudComponent },
  { path:'table', component: RetriveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
