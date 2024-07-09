import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Models, Auth, Mat } from '@total/theme';

@Component({
  selector: 'app-transport-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  optionForm: FormGroup = new FormGroup({});

  form = this.fb.group({
    totalQuantity: [60, [Validators.required, Validators.max(5000)]],

    myDate: [
      new Date('Sun Jun 02 2024 00:00:00 GMT+0330 (Iran Standard Time)'),
    ],
    selectdOption: new FormControl('mali'),
  });
  get totalQuantity() {
    return this.form.get('totalQuantity');
  }

  title = 'transport';
  CupleDate = new Date();
  options: string[] = ['One', 'Two', 'Three', 'ati', 'mali', 'ela', 'ala'];
  selectedoption = 'mali';
  price: string = '1000000';
  constructor(
    private fb: FormBuilder,
    private sdfsd: Auth.Services.AuthenticationService,
    private _matSnackService: Mat.MatSnackService,
    private _matDialogService: Mat.MatDialogService,
  ) {
    this.optionForm = new FormGroup({
      myprice: new FormControl('0'),
      selectdOption: new FormControl(''),
    });
    //this.myprice = new FormControl('7000');
  }

  xxxx() {
    let d = this.options.slice();
    console.log(
      '..............',
      d,
      'khodesh: ',
      this.options,
      'price is',
      this.price,
    );

    console.log(`cuple date is ${this.CupleDate}`);
    // this._matSnackService.openSnackBar('hi','closeIt');
    // this._matDialogService.openDeletePrompt().afterClosed().subscribe((result: any) => {

    //   alert(result);
    // })
  }

  doConsole() {
    console.log('.............', this.form.controls['totalQuantity'].value);
    console.log('....', this.price);
    console.log('...myDate..', this.form.controls['myDate'].value);

    console.log('auto comp...', this.form.controls['selectdOption'].value);
  }


  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    username: new FormControl()
  })
}
