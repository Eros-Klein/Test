import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { NavModule } from './nav/nav.module';

import { HeadlineModule } from './headline/headline.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(NavModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(HeadlineModule)
  .catch(err => console.error(err));