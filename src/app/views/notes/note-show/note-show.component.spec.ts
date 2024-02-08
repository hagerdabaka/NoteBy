import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteShowComponent } from './note-show.component';

describe('NoteShowComponent', () => {
  let component: NoteShowComponent;
  let fixture: ComponentFixture<NoteShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteShowComponent]
    });
    fixture = TestBed.createComponent(NoteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
