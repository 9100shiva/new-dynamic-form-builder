import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedFormComponent } from './generated-form.component';

describe('GeneratedFormComponent', () => {
  let component: GeneratedFormComponent;
  let fixture: ComponentFixture<GeneratedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedFormComponent]
    });
    fixture = TestBed.createComponent(GeneratedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
