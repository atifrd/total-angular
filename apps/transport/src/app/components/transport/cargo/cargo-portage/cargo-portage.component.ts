//https://stackblitz.com/edit/angular-material-table-with-form?file=app%2Fapp.component.ts
//https://stackblitz.com/edit/angular-ivy-gv4pnw?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html,src%2Fapp%2Fchild%2Fchild.component.ts
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  output,
} from '@angular/core';
//import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Models } from '@total/core';
import { ViewModels } from 'libs/core/src/models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-transport-cargo-portage',
  templateUrl: './cargo-portage.component.html',
  styleUrl: './cargo-portage.component.css',
})
export class CargoPortageComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Output() parentFormChange = new EventEmitter<any>();

  sampleList: ViewModels.Forwarder.CargoPortage.GetCargoPortageListDto[] = [
    {
      intRow: 1,
      chCode: 'chCode1',
      chReferenceCode: 'chReferenceCode1',
      chReferenceName: 'chReferenceName1',
      guidRecNo: 'guidRecNo1',
      guidReferenceRecNo: 'guidReferenceRecNo1',
      chPortageStatusCode: '1',
    },
    {
      intRow: 2,
      chCode: 'chCode2',
      chReferenceCode: 'chReferenceCode2',
      chReferenceName: 'chReferenceName2',
      guidRecNo: 'guidRecNo2',
      guidReferenceRecNo: 'guidReferenceRecNo2',
      chPortageStatusCode: '1',
    },
    {
      intRow: 3,
      chCode: 'chCode3',
      chReferenceCode: 'chReferenceCode3',
      chReferenceName: 'chReferenceName3',
      guidRecNo: 'guidRecNo3',
      guidReferenceRecNo: 'guidReferenceRecNo3',
      chPortageStatusCode: '1',
    },
  ];

  portageStatusList: Models.Dtos.Def.PortageStatus.GetPortageStatusListParam[] =
    [
      { chCode: '11', chName: 'hi' },
      { chCode: '22', chName: 'bye' },
    ];

  @Input() set parentId(value: number) {
    if (!value) return;
  }
  @Output() detailsTableChanged = new EventEmitter<any>();

  tableDataSource: MatTableDataSource<AbstractControl>;
  displayedColumns = ['chCode', 'guidRecNo', 'chPortageStatusCode', 'Delete'];

  //form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    //*if component is not child we use this code
    // this.form = this._formBuilder.group({
    //   formArray: this._formBuilder.array([]),
    // });
    // let sampleListAsFormArray: FormArray<any> = this.getDataListAsFormArray();
    // this.form.setControl('childFormArray', sampleListAsFormArray);
    // this.tableDataSource = new MatTableDataSource(this.childFormArray.controls);
  }

  ngOnInit() {
    //*if component is  a child we use this code
    let sampleListAsFormArray: FormArray<any> = this.getDataListAsFormArray();
    this.parentForm.setControl('childFormArray', sampleListAsFormArray);
    this.tableDataSource = new MatTableDataSource(this.childFormArray.controls);
  }

  getDataListAsFormArray(): FormArray {
    //move to service
    const fgs = this.sampleList.map((x) =>
      ViewModels.Forwarder.CargoPortage.GetCargoPortageListDto.asFormGroup(x),
    );
    return new FormArray(fgs);
  }
  get childFormArray() {
    return this.parentForm.controls['childFormArray'] as FormArray;
  }

  addRowTotable() {
    let newFormGroup =
      ViewModels.Forwarder.CargoPortage.GetCargoPortageListDto.asFormGroup({
        chCode: '',
        chPortageStatusCode: '',
        chReferenceCode: '',
        chReferenceName: '',
        guidRecNo: '',
        guidReferenceRecNo: '',
        intRow: 10,
      });

    this.childFormArray.controls.push(newFormGroup);
    this.tableDataSource = new MatTableDataSource(this.childFormArray.controls);
  }

  deleteRowFromTable(rowIndex: any) {
    this.childFormArray.removeAt(rowIndex);
    this.tableDataSource = new MatTableDataSource(this.childFormArray.controls);
  }

  getDataFromTable() {
    return this.childFormArray.getRawValue();
  }

  //#region API

  //get real data frpm server
  getDataList(guidCargoRecNo: number) {
    //this.dataSource=
  }
  //#endregion
}
