import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexPage } from './index.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: IndexPage,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class IndexPageRoutingModule {}
