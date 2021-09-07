import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPostUpdateDeleteComponent } from './insert-post-update-delete.component';

describe('InsertPostUpdateDeleteComponent', () => {
  let component: InsertPostUpdateDeleteComponent;
  let fixture: ComponentFixture<InsertPostUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPostUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPostUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
