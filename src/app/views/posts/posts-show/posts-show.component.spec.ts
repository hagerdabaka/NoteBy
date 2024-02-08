import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsShowComponent } from './posts-show.component';

describe('PostsShowComponent', () => {
  let component: PostsShowComponent;
  let fixture: ComponentFixture<PostsShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsShowComponent]
    });
    fixture = TestBed.createComponent(PostsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
