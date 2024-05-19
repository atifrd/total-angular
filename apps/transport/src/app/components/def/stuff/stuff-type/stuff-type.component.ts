import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatatableComponent } from 'libs/theme/src/material-components/mat-datatable/mat-datatable.component';
import { FormBuilder, Validators } from '@angular/forms';
import { services, models } from '@total/core';
import { finalize } from 'rxjs';
import { Mat } from '@total/theme';

const ELEMENT_DATA: models.dtos.stufftypes.StuffTypeDto[] = [
  { chCode: '1', chName: 'Hydrogen', chEnName: '1.0079', chCMRCode: 'H' },
  { chCode: '2', chName: 'Helium', chEnName: '1.0026', chCMRCode: 'He' },
  { chCode: '3', chName: 'Lithium', chEnName: '6.941', chCMRCode: 'Li' },
  { chCode: '4', chName: 'Beryllium', chEnName: '9.0122', chCMRCode: 'Be' },
  { chCode: '5', chName: 'Boron', chEnName: '10.811', chCMRCode: 'B' },
  { chCode: '6', chName: 'Carbon', chEnName: '12.0107', chCMRCode: 'C' },
  { chCode: '7', chName: 'Nitrogen', chEnName: '14.0067', chCMRCode: 'N' },
  { chCode: '8', chName: 'Oxygen', chEnName: '15.9994', chCMRCode: 'O' },
  { chCode: '9', chName: 'Fluorine', chEnName: '18.9984', chCMRCode: 'F' },
  { chCode: '10', chName: 'Neon', chEnName: ' 20.1797', chCMRCode: 'Ne' },
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

  displayedColumns: string[] = ['chCode', 'chName', 'chCMRCode', 'chEnName'];
  dataSource = new MatTableDataSource<models.dtos.stufftypes.StuffTypeDto>(
    ELEMENT_DATA,
  );
  //https://stackblitz.com/edit/angular-material-table-with-form?file=package.json
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
    private _matDialogService: Mat.MatDialogService,
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
    let model = new models.dtos.stufftypes.AddStaffTypeParam(
      this.stuffTypeForm.value,
    );

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
    let model = new models.dtos.stufftypes.EditStaffTypeParam(
      this.stuffTypeForm.value,
    );
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

  delete() {
    this._matDialogService
      .openDeletePrompt()
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
        }
      });
  }

  public cancel() {
    this.isSubmit = false;
    this.stuffTypeForm.reset();
  }

  getSelectedItem(item: models.dtos.stufftypes.AddStaffTypeParam) {
    this.stuffTypeForm.patchValue(item);
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
