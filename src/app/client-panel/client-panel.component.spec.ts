import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPanelComponent } from './client-panel.component';

describe('ClientPanelComponent', () => {
  let component: ClientPanelComponent;
  let fixture: ComponentFixture<ClientPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
