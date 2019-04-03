import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsMinutesPipe } from './seconds-minutes.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SecondsMinutesPipe
  ],
  exports: [
    SecondsMinutesPipe
  ]
})

export class SharedModule {}
