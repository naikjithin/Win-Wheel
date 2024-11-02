import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersViewComponent } from './winners-view/winners-view.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

const appRoutesWinnerView: Routes = [
  {
      path: '', component: WinnersViewComponent
  }];

@NgModule({
  declarations: [WinnersViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(appRoutesWinnerView)
  ]
})
export class WinnersViewModule { }
