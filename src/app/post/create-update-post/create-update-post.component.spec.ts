import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdatePostComponent } from './create-update-post.component';

describe('CreateUpdatePostComponent', () => {
  let component: CreateUpdatePostComponent;
  let fixture: ComponentFixture<CreateUpdatePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdatePostComponent]
    });
    fixture = TestBed.createComponent(CreateUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
