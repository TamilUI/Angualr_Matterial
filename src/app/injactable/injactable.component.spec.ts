import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjactableComponent } from './injactable.component';

describe('InjactableComponent', () => {
  let component: InjactableComponent;
  let fixture: ComponentFixture<InjactableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjactableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjactableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
