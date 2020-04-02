import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDerechaComponent } from './barra-derecha.component';

describe('BarraDerechaComponent', () => {
  let component: BarraDerechaComponent;
  let fixture: ComponentFixture<BarraDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
