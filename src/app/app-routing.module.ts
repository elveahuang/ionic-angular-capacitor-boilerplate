import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@/app/core/pages/tabs/tabs.module').then((m) => m.TabsPageModule),
    },
    {
        path: 'settings',
        loadChildren: () => import('@/app/core/pages/settings/settings.module').then((m) => m.SettingsPageModule),
    },
    {
        path: 'about',
        loadChildren: () => import('@/app/core/pages/about/about.module').then((m) => m.AboutPageModule),
    },
    {
        path: 'demo-index',
        loadChildren: () => import('@/app/demo/pages/index/index.module').then((m) => m.IndexPageModule),
    },
    {
        path: 'demo-swiper',
        loadChildren: () => import('@/app/demo/pages/swiper/swiper.module').then((m) => m.SwiperPageModule),
    },
    {
        path: 'demo-swiper',
        loadChildren: () => import('@/app/demo/pages/swiper/swiper.module').then((m) => m.SwiperPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
