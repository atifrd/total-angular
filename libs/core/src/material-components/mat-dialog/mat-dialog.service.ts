import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DeletePromptComponent } from './delete-propmpt-component/delete-prompt.component';

@Injectable({
  providedIn: 'root',
})
export class MatDialogService {
  constructor(public dialog: MatDialog) { }

  openCustomDialog(
    templateOrComponent: ComponentType<any>,
    config: MatDialogConfig,
  ): MatDialogRef<any> {
    return this.dialog.open(templateOrComponent, config);
  }

  openDeletePrompt(config?: MatDialogConfig): MatDialogRef<any> {
    return this.dialog.open(DeletePromptComponent, config);
  }
}

export interface DialogData {
  width: '550px';
  message: string;
  extra: string;
}
