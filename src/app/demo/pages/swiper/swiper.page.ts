import { Component } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.page.html',
    styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage {
    onSegmentChange($event: any) {
        console.log($event);
    }

    onSwiper(swiper) {
        console.log(swiper);
    }

    onSlideChange() {
        console.log('slide change');
    }
}
