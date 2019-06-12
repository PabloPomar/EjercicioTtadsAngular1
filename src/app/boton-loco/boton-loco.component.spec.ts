import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLocoComponent } from './boton-loco.component';

describe('BotonLocoComponent', () => {
  let component: BotonLocoComponent;
  let fixture: ComponentFixture<BotonLocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonLocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
