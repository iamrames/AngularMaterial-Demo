import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MatComponentsModule { }
