import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningangularComponent } from './learningangular.component';

describe('LearningangularComponent', () => {
  let component: LearningangularComponent;
  let fixture: ComponentFixture<LearningangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
