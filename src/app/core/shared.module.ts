import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage-angular';

const SharedComponents = [];
const EntryComponents = [];
const SharedDirectives = [];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, IonicModule, TranslateModule],
    entryComponents: [...EntryComponents],
    declarations: [...SharedComponents, ...SharedDirectives],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        IonicModule,
        TranslateModule,
        IonicStorageModule,
        //
        ...SharedComponents,
        ...SharedDirectives,
    ],
})
export class SharedModule {}
