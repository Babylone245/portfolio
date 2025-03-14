import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationDetailsComponent } from './realisation-details.component';

describe('RealisationDetailsComponent', () => {
  let component: RealisationDetailsComponent;
  let fixture: ComponentFixture<RealisationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealisationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
