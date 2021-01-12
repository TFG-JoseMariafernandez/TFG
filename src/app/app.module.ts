import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ContextComponent } from './pages/context/context.component';
import { AnalysesComponent } from './pages/analyses/analyses.component';
import { variableComponent } from './pages/variables/variable.component';
import { hypothesesComponent } from './pages/hypotheses/hypotheses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ContextComponent,
    variableComponent,
    hypothesesComponent,
    AnalysesComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,  
    MatDialogModule, 
    MatIconModule, 
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,

    BrowserAnimationsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatSliderModule]
})
export class AppModule { }

