import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parcour-details',
  templateUrl: './parcour-details.component.html',
  styleUrls: ['./parcour-details.component.scss']
})
export class ParcourDetailsComponent {
  parcours: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.parcours = params.get('parcours');
    });
  }
}
