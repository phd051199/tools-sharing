/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import type { Component } from 'vue';
import type dayjs from 'dayjs';

declare module 'vue' {
  interface ComponentCustomProperties {
    Component: Component;
    $dayjs: typeof dayjs;
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;

  export default component;
}

declare module 'virtual-icons' {}
