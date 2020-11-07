import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizNewsComponent } from './biz-news.component';

describe('BizNewsComponent', () => {
  let component: BizNewsComponent;
  let fixture: ComponentFixture<BizNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
