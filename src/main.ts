import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import VConsole from 'vconsole';
import { AppModule } from '@/app/app.module';
import { environment } from '@/environments/environment';

if (environment.production) {
    enableProdMode();
}

new VConsole();

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
