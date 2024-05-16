import { Component } from '@angular/core';
import { Models, Auth, Mat } from '@total/theme';

@Component({
  selector: 'app-transport-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'transport';
  CupleDate = new Date();
  options: string[] = ['One', 'Two', 'Three', 'ati', 'mali', 'ela', 'ala'];
  selectedoption = 'mali';
  price: string='1000000';
  constructor(
    private sdfsd: Auth.Services.AuthenticationService,
    private _matSnackService: Mat.MatSnackService,
    private _matDialogService: Mat.MatDialogService,
  ) {}

  xxxx() {
    let d = this.options.slice();
    console.log('..............', d, 'khodesh: ', this.options,'price is',this.price);

    console.log(`cuple date is ${this.CupleDate}`);
    // this._matSnackService.openSnackBar('hi','closeIt');
    // this._matDialogService.openDeletePrompt().afterClosed().subscribe((result: any) => {

    //   alert(result);
    // })
  }


  
}
