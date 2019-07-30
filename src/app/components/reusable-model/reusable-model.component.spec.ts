import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableModelComponent } from './reusable-model.component';

describe('ReusableModelComponent', () => {
  let component: ReusableModelComponent;
  let fixture: ComponentFixture<ReusableModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
