import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataDetailComponentComponent } from './biodata-detail-component.component';

describe('BiodataDetailComponentComponent', () => {
  let component: BiodataDetailComponentComponent;
  let fixture: ComponentFixture<BiodataDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiodataDetailComponentComponent]
    });
    fixture = TestBed.createComponent(BiodataDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
