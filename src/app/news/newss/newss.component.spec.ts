import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssComponent } from './newss.component';

describe('NewssComponent', () => {
  let component: NewssComponent;
  let fixture: ComponentFixture<NewssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
