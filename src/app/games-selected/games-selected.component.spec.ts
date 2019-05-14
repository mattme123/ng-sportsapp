import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSelectedComponent } from './games-selected.component';

describe('GamesSelectedComponent', () => {
  let component: GamesSelectedComponent;
  let fixture: ComponentFixture<GamesSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
