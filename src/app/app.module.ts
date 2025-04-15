import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponentComponent } from './accueil/accueil-component/accueil-component.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompetenceComponent } from './competence/competence/competence.component';
import { RealisationComponent } from './realisation/realisation/realisation.component';
import { CompetenceDetailsComponent } from './competence/details/competence-details/competence-details.component';
import { RealisationDetailsComponent } from './realisation/details/realisation-details/realisation-details.component';
import { ParcourDetailsComponent } from './accueil/parcour-details/parcour-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponentComponent,
    NavbarComponent,
    CompetenceComponent,
    RealisationComponent,
    CompetenceDetailsComponent,
    RealisationDetailsComponent,
    ParcourDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
