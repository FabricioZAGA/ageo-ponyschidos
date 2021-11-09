import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FasesComponent } from './fases/fases.component';

@NgModule({
  declarations: [FasesComponent],
  exports: [FasesComponent],
  imports: [CommonModule],
})
export class DragonBallModule {}
