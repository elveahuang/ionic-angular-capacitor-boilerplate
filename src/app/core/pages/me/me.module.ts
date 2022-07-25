import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MePage } from '@/app/core/pages/me/me.page';
import { MePageRoutingModule } from '@/app/core/pages/me/me-routing.module';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, MePageRoutingModule],
    declarations: [MePage],
})
export class MePageModule {}
