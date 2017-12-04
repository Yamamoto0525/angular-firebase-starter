import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
  ],
  declarations: []
})
export class SharedModule { }
