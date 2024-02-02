import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditorFormComponent } from './name-editor-form.component';

describe('NameEditorFormComponent', () => {
  let component: NameEditorFormComponent;
  let fixture: ComponentFixture<NameEditorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameEditorFormComponent]
    });
    fixture = TestBed.createComponent(NameEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
