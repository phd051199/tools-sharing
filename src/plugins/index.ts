/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import type { App } from 'vue';
import GoogleSignInPlugin from 'vue3-google-signin';

import router from '../router';
import pinia from '../stores';
import hljs from './hightlight';
import vueQuery from './vueQuery';
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(pinia)
    .use(hljs)
    .use(vueQuery)
    .use(router)
    .use(GoogleSignInPlugin, {
      clientId: import.meta.env.VITE_GOOGLE_SIGNIN_CLIENT_ID
    });
}
