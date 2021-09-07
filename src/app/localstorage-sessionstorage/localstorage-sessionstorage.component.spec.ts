import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageSessionstorageComponent } from './localstorage-sessionstorage.component';

describe('LocalstorageSessionstorageComponent', () => {
  let component: LocalstorageSessionstorageComponent;
  let fixture: ComponentFixture<LocalstorageSessionstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalstorageSessionstorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstorageSessionstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
