import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from '@/app/core/pages/tabs/tabs-routing.module';
import { TabsPage } from '@/app/core/pages/tabs/tabs.page';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
    declarations: [TabsPage],
})
export class TabsPageModule {}
