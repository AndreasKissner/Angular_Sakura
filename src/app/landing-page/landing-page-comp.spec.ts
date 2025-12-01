import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComp } from './landing-page-comp';

describe('LandingPageComp', () => {
  let component: LandingPageComp;
  let fixture: ComponentFixture<LandingPageComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
