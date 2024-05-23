import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'lib-mat-autocomplete',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MatAutocompleteComponent,
    },
  ],
  templateUrl: './mat-autocomplete.component.html',
  styleUrl: './mat-autocomplete.component.scss',
})
export class MatAutocompleteComponent implements OnInit, ControlValueAccessor {
  //#region ControlValueAccessor implementation
  onChange = (result: string) => {};
  onTouched: Function = () => {};
  onWriteValue: Function = () => {};

  //called by the Forms module to write a value into a form control
  writeValue(value: string) {
    this.myControl.setValue(value);
  }
  //report the value back to the parent form
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  //In order to report to the parent form that the control was touched
  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }
  //#endregion

  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions: Observable<any[]>;

  @Input() set dataList(value: any) {
    this.options = value;
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    //*send value to parent form
    this.onChange(event.option.value);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (value ? this._filter(value) : this.options.slice())),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
