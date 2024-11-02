import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'quiz', loadChildren: './questionaire/questionaire.module#QuestionaireModule' },
  { path: 'uid-input', loadChildren: './uid-input/uid-input.module#UidInputModule' },
  { path: 'winners-view', loadChildren: './winners-view/winners-view.module#WinnersViewModule' },
  { path: '', loadChildren: './gallery-screen/gallery-screen.module#GalleryScreenModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
