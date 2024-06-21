import {
  QueryFunctionContext,
  VueQueryPlugin,
  VueQueryPluginOptions
} from '@tanstack/vue-query';
import type { App } from 'vue';

import axios from '@/services/axios';

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const [key] = queryKey;
  const { data } = await axios.get(<string>key);
  return data;
};

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { queryFn: defaultQueryFn } }
  }
};
export default {
  install: (app: App) => {
    app.use(VueQueryPlugin, vueQueryPluginOptions);
  }
};
