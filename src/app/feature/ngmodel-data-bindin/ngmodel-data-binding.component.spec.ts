import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelDataBindingComponent } from './ngmodel-data-binding.component';

describe('NgmodelDataBindingComponent', () => {
  let component: NgmodelDataBindingComponent;
  let fixture: ComponentFixture<NgmodelDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
