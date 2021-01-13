import { variable } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContextComponent } from './pages/context/context.component';
import { variableComponent } from './pages/variables/variable.component';
import { hypothesesComponent } from './pages/hypotheses/hypotheses.component';
import { AnalysesComponent } from './pages/analyses/analyses.component';
import { DesignComponent } from './pages/design/design.component';

const routes: Routes = [
  
  { path:'context', component: ContextComponent },
  { path:'analyses', component: AnalysesComponent },
  { path:'variable', component: variableComponent },
  { path:'hypotheses', component: hypothesesComponent },
  { path:'design', component: DesignComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
