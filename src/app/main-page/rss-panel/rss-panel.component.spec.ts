import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RssPanelComponent} from './rss-panel.component';

describe('RssPanelComponent', () => {
  let component: RssPanelComponent;
  let fixture: ComponentFixture<RssPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
