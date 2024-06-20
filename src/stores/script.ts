import { defineStore } from 'pinia';

import { localStorage } from '@/utils/storage';

export const useScriptStorage = defineStore('installed', {
  state: () => ({
    installed: localStorage.get('installed') || []
  }),
  actions: {
    setInstalled(ids: number[]) {
      this.installed = ids;
      localStorage.set('installed', ids);
    }
  }
});
