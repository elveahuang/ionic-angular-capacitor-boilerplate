import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperPage } from './swiper.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SwiperPage,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class SwiperPageRoutingModule {}
