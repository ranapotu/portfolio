import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootHeaderComponent } from './boot-header.component';

describe('BootHeaderComponent', () => {
  let component: BootHeaderComponent;
  let fixture: ComponentFixture<BootHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
