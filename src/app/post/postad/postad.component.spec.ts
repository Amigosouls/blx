import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostadComponent } from './postad.component';

describe('PostadComponent', () => {
  let component: PostadComponent;
  let fixture: ComponentFixture<PostadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostadComponent]
    });
    fixture = TestBed.createComponent(PostadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
