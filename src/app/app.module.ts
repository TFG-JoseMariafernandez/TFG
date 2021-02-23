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


@NgModule({
  declarations: [
    AppComponent,
    ContextComponent,
    VariablesComponent,
    HypothesesComponent,
    DesignComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
