import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'app-gallery-screen',
    templateUrl: './gallery-screen.component.html',
    styleUrls: ['./gallery-screen.component.css']
})
export class GalleryScreenComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80
            },
            // max-width 1200
            {
                breakpoint: 1200,
                preview: false,
                width: '100%',
                height: '1200px',
                imagePercent: 80
            },
            {
                "imageAutoPlayInterval": 5000 ,"imageAnimation": "rotate","imageAutoPlay": true, "previewAutoPlay": true,
                "previewFullscreen": true, "previewForceFullscreen": true, "previewAutoPlayInterval": 5000, previewRotate: true 
            },
        ];

        this.galleryImages = [
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
            }
        ];
    }
}
