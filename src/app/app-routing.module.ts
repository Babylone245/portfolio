import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponentComponent } from './accueil/accueil-component/accueil-component.component';
import { CompetenceComponent } from './competence/competence/competence.component';
import { RealisationComponent } from './realisation/realisation/realisation.component';
import { CompetenceDetailsComponent } from './competence/details/competence-details/competence-details.component';
import { RealisationDetailsComponent } from './realisation/details/realisation-details/realisation-details.component';

const routes: Routes = [
  { path: '', component: AccueilComponentComponent, pathMatch: 'full' }, 
  { path: 'competence', component: CompetenceComponent },
  { path: 'competence/:comp', component: CompetenceDetailsComponent },
  { path: 'realisation/:real', component: RealisationDetailsComponent },
  { path: 'realisation', component: RealisationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
