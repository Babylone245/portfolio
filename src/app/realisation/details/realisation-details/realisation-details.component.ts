import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-realisation-details',
  templateUrl: './realisation-details.component.html',
  styleUrls: ['./realisation-details.component.scss']
})
export class RealisationDetailsComponent {
  real: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer le paramètre de route :techno
    this.route.paramMap.subscribe(params => {
      this.real = params.get('real');
    });
  }
}
