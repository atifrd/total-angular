import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargoPortageComponent } from './cargo-portage.component';

describe('CargoPortageComponent', () => {
  let component: CargoPortageComponent;
  let fixture: ComponentFixture<CargoPortageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoPortageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CargoPortageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
