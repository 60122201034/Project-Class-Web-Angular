import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermovieComponent } from './headermovie.component';

describe('HeadermovieComponent', () => {
  let component: HeadermovieComponent;
  let fixture: ComponentFixture<HeadermovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadermovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadermovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
