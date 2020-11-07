import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizNewsListComponent } from './biz-news-list.component';

describe('BizNewsListComponent', () => {
  let component: BizNewsListComponent;
  let fixture: ComponentFixture<BizNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
