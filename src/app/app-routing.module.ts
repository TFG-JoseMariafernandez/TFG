import { variable } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContextComponent } from './pages/context/context.component';
import { variableComponent } from './pages/variables/variable.component';
import { hypothesesComponent } from './pages/hypotheses/hypotheses.component';
const routes: Routes = [
  
  { path:'context', component: ContextComponent },
  
  { path:'variable', component: variableComponent },
  { path:'hypotheses', component: hypothesesComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
