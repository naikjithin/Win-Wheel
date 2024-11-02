import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UidInputComponent } from './uid-input/uid-input.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRouteUIDInput: Routes = [
{
    path: '', component: UidInputComponent
}];

@NgModule({
  declarations: [UidInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRouteUIDInput),
  ]
})
export class UidInputModule { }
