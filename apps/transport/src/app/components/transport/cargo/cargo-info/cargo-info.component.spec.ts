import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargoInfoComponent } from './cargo-info.component';

describe('CargoInfoComponent', () => {
  let component: CargoInfoComponent;
  let fixture: ComponentFixture<CargoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CargoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
