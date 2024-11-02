import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryScreenComponent } from './gallery-screen/gallery-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';

const appRoutesGalleryView: Routes = [
    {
        path: '', component: GalleryScreenComponent
    }];

@NgModule({
  declarations: [GalleryScreenComponent],
  imports: [
    CommonModule,
    NgxGalleryModule,
    RouterModule.forChild(appRoutesGalleryView)
  ]
})
export class GalleryScreenModule { }
