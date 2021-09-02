import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabLabComponent } from './fab-lab.component';

describe('FabLabComponent', () => {
  let component: FabLabComponent;
  let fixture: ComponentFixture<FabLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
