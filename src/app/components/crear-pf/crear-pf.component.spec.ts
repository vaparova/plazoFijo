import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPfComponent } from './crear-pf.component';

describe('CrearPfComponent', () => {
  let component: CrearPfComponent;
  let fixture: ComponentFixture<CrearPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
