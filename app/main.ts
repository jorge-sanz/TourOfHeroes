import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter, RouterConfig }  from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]);

