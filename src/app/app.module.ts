import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from '@/app/app.component';
import { AppRoutingModule } from '@/app/app-routing.module';
import { CoreModule } from '@/app/core/core.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(),
        CoreModule.forRoot(),
        AppRoutingModule,
        SwiperModule,
        CoreModule,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
