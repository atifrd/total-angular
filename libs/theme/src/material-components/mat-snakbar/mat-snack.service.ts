import { Component, Injectable, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MatSnackService {
  private durationInSeconds: number = 5;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    actionLable: string,
    config?: MatSnackBarConfig<any>,
  ) {
    this._snackBar.open(message, actionLable, {
      duration: config?.duration ?? this.durationInSeconds * 1000,
      horizontalPosition: config?.horizontalPosition ?? this.horizontalPosition,
      verticalPosition: config?.verticalPosition ?? this.verticalPosition,
    });
  }

  openCustomSnackBar(config?: MatSnackBarConfig<any>) {
    this._snackBar.openFromComponent(CustomSnackComponent, {
      duration: config?.duration ?? this.durationInSeconds * 1000,
      horizontalPosition: config?.horizontalPosition ?? this.horizontalPosition,
      verticalPosition: config?.verticalPosition ?? this.verticalPosition,
    });
  }
}

////in custom mode
@Component({
  selector: 'custom-snack',
  template: ` <span class="example-pizza-party"> Pizza party!!! 🍕 </span> `,
  styles: `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  standalone: true,
})
export class CustomSnackComponent {
  snackBarRef = inject(MatSnackBarRef);
}
