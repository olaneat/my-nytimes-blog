import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciNewsListComponent } from './sci-news-list.component';

describe('SciNewsListComponent', () => {
  let component: SciNewsListComponent;
  let fixture: ComponentFixture<SciNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
