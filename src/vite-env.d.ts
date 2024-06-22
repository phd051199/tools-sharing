/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import type { Component } from 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    Component: Component;
    highlightjs: Component;
    $fileStorage: any;
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;

  export default component;
}

declare module 'virtual-icons' {}

declare module 'virtual:pwa-register/vue' {
  import type { Ref } from 'vue';
  import type { RegisterSWOptions } from 'vite-plugin-pwa/types';

  export type { RegisterSWOptions };

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>;
    offlineReady: Ref<boolean>;
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
