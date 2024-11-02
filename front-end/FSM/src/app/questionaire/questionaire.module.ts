import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/Quiz.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConfirmBoxService } from '../common/confirm-box/conform-box.service';
import { ConfirmBoxComponent } from '../common/confirm-box/confirm-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutesQuestionaireView: Routes = [
    {
        path: '', component: QuizComponent
    }];


@NgModule({
  declarations: [QuizComponent, ConfirmBoxComponent],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(appRoutesQuestionaireView)
  ],
  providers: [ ConfirmBoxService ],
  entryComponents: [ ConfirmBoxComponent ]
})
export class QuestionaireModule { }
