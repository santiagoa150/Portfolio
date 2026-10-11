import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from '../../src/app/app';
import { routes } from '../../src/app/app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('creates the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
