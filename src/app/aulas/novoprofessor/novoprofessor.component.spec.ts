import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoprofessorComponent } from './novoprofessor.component';

describe('NovoprofessorComponent', () => {
  let component: NovoprofessorComponent;
  let fixture: ComponentFixture<NovoprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoprofessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
