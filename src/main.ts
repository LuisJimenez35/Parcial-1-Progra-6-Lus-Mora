import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Inicializacion de la aplicacion
if (environment.production) {
  enableProdMode();
}

// Inicializacion de la aplicacion
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
