import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerProfileComponent } from './summoner-profile.component';

describe('SummonerProfileComponent', () => {
  let component: SummonerProfileComponent;
  let fixture: ComponentFixture<SummonerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
