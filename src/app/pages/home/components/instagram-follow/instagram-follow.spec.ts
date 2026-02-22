import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramFollow } from './instagram-follow';

describe('InstagramFollow', () => {
  let component: InstagramFollow;
  let fixture: ComponentFixture<InstagramFollow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramFollow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramFollow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
