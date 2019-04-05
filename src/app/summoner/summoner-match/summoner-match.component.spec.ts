import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerMatchComponent } from './summoner-match.component';

describe('SummonerMatchComponent', () => {
  let component: SummonerMatchComponent;
  let fixture: ComponentFixture<SummonerMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
