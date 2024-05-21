import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transport-cargo-info',
  templateUrl: './cargo-info.component.html',
  styleUrl: './cargo-info.component.css',
})
export class CargoInfoComponent {
  //https://lsdbtech.wordpress.com/2020/02/10/angular-material-table-with-reactive-forms-as-the-data-source/
  //https://stackblitz.com/edit/angular-rsyuhh?file=src%2Fapp%2Fparent-component%2Fparent.component.ts,src%2Fapp%2Fparent-component%2Fparent.component.html,src%2Fapp%2Fchild-component%2Fchild.component.ts,src%2Fapp%2Fchild-component%2Fchild.component.html
  parentForm!: FormGroup;
  parentGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      parentGroup: this.fb.group({
        parentItem1: [''],
        parentItem2: [''],
      }),
      childFormArray: this.fb.array([]),
    });

    this.parentGroup = this.parentForm.get('parentGroup') as FormGroup;
  }

  private get childFormArray(): FormArray {
    return this.parentForm.get('childFormArray') as FormArray;
  }

  chilsFormvalue: any;
  getChildValue() {
    let x1 = this.parentForm.controls['childFormArray'] as FormArray;
    let x2 = this.parentForm.get('childFormArray') as FormArray;

    this.chilsFormvalue = this.childFormArray.getRawValue();
  }
}
