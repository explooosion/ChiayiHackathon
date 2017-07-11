import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarModalComponent } from './navbar-modal.component';

describe('NavbarModalComponent', () => {
  let component: NavbarModalComponent;
  let fixture: ComponentFixture<NavbarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
