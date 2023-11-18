/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints/md3';

import { darkTheme, lightTheme } from '@/constants/themes';
import { localStorage } from '@/utils/storage';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: localStorage.get('prefer-dark') ? 'dark' : 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme
    }
  }
});
