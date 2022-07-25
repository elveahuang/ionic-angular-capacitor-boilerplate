import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperPageRoutingModule } from './swiper-routing.module';
import { SwiperPage } from './swiper.page';
import {SwiperModule} from "swiper/angular";

@NgModule({
    imports : [CommonModule, FormsModule, IonicModule, SwiperPageRoutingModule, SwiperModule],
    declarations: [SwiperPage],
})
export class SwiperPageModule {}
