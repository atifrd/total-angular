import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
export interface State {
  name: string;
  value: number;
}

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
  templateUrl: './mat-autocomplete.component.html',
  styleUrl: './mat-autocomplete.component.scss',
})
export class MatAutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  @Input() set dataList(value: any) {
    this.options = value;
  }

  //#region 2way databinding
  ////2way databinding for parent of MatAutocompleteComponent
  @Input() set selectedoption(value: string) {
    //*bin value from parent form
    if (!value) return;
    this.myControl.setValue(value);
  }

  @Output() selectedoptionChange = new EventEmitter<string>();

  optionSelected(event: MatAutocompleteSelectedEvent) {
    //*send value to parent form
    this.selectedoptionChange.emit(event.option.value);
  }
  //#endregion

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
