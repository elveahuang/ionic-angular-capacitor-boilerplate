import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/app/core/shared.module';
import { CoreService } from '@/app/core/services/core.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    providers: [CoreService],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
        };
    }
}
