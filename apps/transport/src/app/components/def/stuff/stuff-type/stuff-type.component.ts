import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatatableComponent } from 'libs/theme/src/material-components/mat-datatable/mat-datatable.component';
import { FormBuilder, Validators } from '@angular/forms';
import { services, models } from '@total/core';
import { finalize } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 1.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-transport-stuff-type',
  standalone: false,
  // imports: [ forwardRef(() => MatDatatableComponent)],
  templateUrl: './stuff-type.component.html',
  styleUrl: './stuff-type.component.css',
})
export class StuffTypeComponent {
  isSubmit: boolean;

  displayedColumns: string[] = ['position', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  stuffTypeForm = this.fb.group({
    chCode: [],
    chName: ['', Validators.required],
    chCMRCode: [''],
    chEnName: [''],
    chComment: [''],
  });

  constructor(
    private fb: FormBuilder,
    private _stuffTypeService: services.def.StuffTypeService,
  ) {
    this.isSubmit = false;
  }

  addData() {
    this.dataSource.data = ELEMENT_DATA;
  }
  clearTable() {
    this.dataSource.data = [];
  }

  getList() {
    //this._stuffTypeService.
  }

  insUpAddress() {
    if (1 == 1) this.add();
    else this.update();
  }

  add() {
    let model = new models.AddStaffTypeParam(this.stuffTypeForm.value);

    this._stuffTypeService
      .AddStuffType(model)
      .pipe(
        finalize(() => {
          this.isSubmit = true;
        }),
      )
      .subscribe({
        next: () => {},
      });
  }

  update() {
    let model = new models.EditStaffTypeParam(this.stuffTypeForm.value);
    this._stuffTypeService
      .AddStuffType(model)
      .pipe(
        finalize(() => {
          this.isSubmit = true;
        }),
      )
      .subscribe({
        next: () => {},
      });
  }

  delete() {}

  public cancel() {
    this.isSubmit = false;
    this.stuffTypeForm.reset();
  }

  //#region validation
  get chName() {
    return this.stuffTypeForm.get('chName');
  }
  get chCode1() {
    return this.stuffTypeForm.get('chCode');
  }
  get chEnName() {
    return this.stuffTypeForm.get('chEnName');
  }

  get chCMRCode() {
    return this.stuffTypeForm.get('chCMRCode');
  }

  get chComment() {
    return this.stuffTypeForm.get('chComment');
  }
  //#endregion
}
