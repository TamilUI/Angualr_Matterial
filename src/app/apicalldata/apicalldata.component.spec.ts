import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicalldataComponent } from './apicalldata.component';

describe('ApicalldataComponent', () => {
  let component: ApicalldataComponent;
  let fixture: ComponentFixture<ApicalldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicalldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicalldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
