import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competence-details',
  templateUrl: './competence-details.component.html',
  styleUrls: ['./competence-details.component.scss']
})
export class CompetenceDetailsComponent {
  comp: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer le paramètre de route :techno
    this.route.paramMap.subscribe(params => {
      this.comp = params.get('comp');
    });
  }
}
