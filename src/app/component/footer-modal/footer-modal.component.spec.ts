import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterModalComponent } from './footer-modal.component';

describe('FooterModalComponent', () => {
  let component: FooterModalComponent;
  let fixture: ComponentFixture<FooterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
