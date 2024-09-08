import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliscategoriesComponent } from './detaliscategories.component';

describe('DetaliscategoriesComponent', () => {
  let component: DetaliscategoriesComponent;
  let fixture: ComponentFixture<DetaliscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaliscategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaliscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
