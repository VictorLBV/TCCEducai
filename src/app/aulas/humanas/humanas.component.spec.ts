import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanasComponent } from './humanas.component';

describe('HumanasComponent', () => {
  let component: HumanasComponent;
  let fixture: ComponentFixture<HumanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
