import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StuffUnitComponent } from './stuff-unit.component';

describe('StuffUnitComponent', () => {
  let component: StuffUnitComponent;
  let fixture: ComponentFixture<StuffUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffUnitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StuffUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
