/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import type { App } from 'vue';

import router from '../router';
import pinia from '../stores';
import hljs from './hljs';
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(hljs);
}
