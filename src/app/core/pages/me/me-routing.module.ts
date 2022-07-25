import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MePage } from '@/app/core/pages/me/me.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MePage,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class MePageRoutingModule {}
