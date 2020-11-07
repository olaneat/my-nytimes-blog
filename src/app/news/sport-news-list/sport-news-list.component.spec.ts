import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportNewsListComponent } from './sport-news-list.component';

describe('SportNewsListComponent', () => {
  let component: SportNewsListComponent;
  let fixture: ComponentFixture<SportNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
