import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextComponent } from './context/context.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { VariablesComponent } from './variables/variables.component';
import { HypothesesComponent } from './hypotheses/hypotheses.component';
import { DesignComponent } from './design/design.component';
import {  MatCardModule} from "@angular/material/card";
import {
  MatGridListModule,

} from '@angular/material/grid-list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnalysesComponent } from './analyses/analyses.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

//import {DecoupledEditor} from '@ckeditor/ckeditor5-build-decoupled-document'





@NgModule({
  declarations: [
    AppComponent,
    ContextComponent,
    VariablesComponent,
    HypothesesComponent,
    DesignComponent,
    AnalysesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    CKEditorModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
