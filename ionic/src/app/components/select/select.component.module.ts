import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})

export class SelectComponentModule { }