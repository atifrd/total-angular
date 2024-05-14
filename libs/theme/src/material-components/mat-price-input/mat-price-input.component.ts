import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'lib-mat-price-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './mat-price-input.component.html',
  styleUrl: './mat-price-input.component.scss',
  providers: [provideNgxMask()],
})
export class MatPriceInputComponent {
  emailFormControl = new FormControl(0, [
    Validators.required,
    Validators.email,
  ]);

  priceFormControl = new FormControl();

  price = 1000000;
  a: number = 0.259;
  b: number = 1.3495;

  onKeyup(event: KeyboardEvent) {
    if (event.key == '+') {
      const oldValue = this.emailFormControl.getRawValue() ?? 0;
      this.emailFormControl.setValue(+oldValue * 1000);
    }
    console.log('this.emailFormControl.getRawValue(): ',this.emailFormControl.getRawValue())
  }
}
