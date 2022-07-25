import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiscoverPage } from './discover.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DiscoverPage,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
