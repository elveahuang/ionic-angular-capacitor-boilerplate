import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule),
            },
            {
                path: 'discover',
                loadChildren: () => import('../discover/discover.module').then((m) => m.DiscoverPageModule),
            },
            {
                path: 'me',
                loadChildren: () => import('../me/me.module').then((m) => m.MePageModule),
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
