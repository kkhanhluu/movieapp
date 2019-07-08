import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimiliarMoviesComponent } from './similiar-movies.component';

describe('SimiliarMoviesComponent', () => {
  let component: SimiliarMoviesComponent;
  let fixture: ComponentFixture<SimiliarMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimiliarMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimiliarMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
