import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataHeaderComponentComponent } from './biodata-header-component.component';

describe('BiodataHeaderComponentComponent', () => {
  let component: BiodataHeaderComponentComponent;
  let fixture: ComponentFixture<BiodataHeaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiodataHeaderComponentComponent]
    });
    fixture = TestBed.createComponent(BiodataHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
