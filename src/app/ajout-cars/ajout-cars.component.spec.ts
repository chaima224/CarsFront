import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCarsComponent } from './ajout-cars.component';

describe('AjoutCarsComponent', () => {
  let component: AjoutCarsComponent;
  let fixture: ComponentFixture<AjoutCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
