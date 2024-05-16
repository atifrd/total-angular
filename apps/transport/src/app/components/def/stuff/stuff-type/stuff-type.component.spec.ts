import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StuffTypeComponent } from './stuff-type.component';

describe('StuffTypeComponent', () => {
  let component: StuffTypeComponent;
  let fixture: ComponentFixture<StuffTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StuffTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
