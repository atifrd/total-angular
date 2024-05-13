import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-mat-price-input',
  standalone: true,
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './mat-price-input.component.html',
  styleUrl: './mat-price-input.component.scss',
})
export class MatPriceInputComponent {

  
  emailFormControl = new FormControl(0, [Validators.required, Validators.email]);
  price=1000000;
  a: number = 0.259;
  b: number = 1.3495;



  onKeyup(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key == '+') {
      console.log('jjjjjjjjjjjjjjjjjjjj',this.emailFormControl.getRawValue())
      const nbh=this.emailFormControl.getRawValue()??0;
      this.emailFormControl.setValue(+nbh*1000)
    }
  }
}
