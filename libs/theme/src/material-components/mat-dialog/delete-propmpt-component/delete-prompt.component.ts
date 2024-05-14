import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogData } from '../mat-dialog.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'lib-delete-prompt',
  templateUrl: './delete-prompt.component.html',
  styleUrl: './delete-prompt.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DeletePromptComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onClick(result: boolean): void {
    this.dialogRef.close(result);
  }
}
