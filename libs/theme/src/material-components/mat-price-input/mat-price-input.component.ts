import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
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
  providers: [
    provideNgxMask(),
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MatPriceInputComponent,
    },
  ],
})
export class MatPriceInputComponent implements ControlValueAccessor {
  priceValue: any;

  //#region ControlValueAccessor implementation
  onChange = (result: string) => {};
  onTouched: Function = () => {};
  onWriteValue: Function = () => {};

  //called by the Forms module to write a value into a form control
  writeValue(result: string) {
    this.priceValue = result;
  }
  //report the value back to the parent form
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  //In order to report to the parent form that the control was touched
  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

  //#endregion

  onBlur(event: FocusEvent) {
    this.onChange(this.priceValue);
  }

  onKeyup(event: KeyboardEvent) {
    if (event.key == '+') {
      // const oldValue = this.priceFormControl.getRawValue() ?? 0;
      //this.priceFormControl.setValue(this.priceInput+'000');
      this.priceValue = this.priceValue * 1000;
      this.onChange(this.priceValue);
    }
  }
}
