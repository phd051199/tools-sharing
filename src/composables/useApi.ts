import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Ref, ref } from 'vue';

export interface Response<T> {
  data: T;
  code: number;
  message: string;
}

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type Options<R, P> = Partial<{
  params?: P;
  config?: AxiosRequestConfig;
  onSuccess?: (data: R) => void;
  onError?: (error: unknown) => void;
}>;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOCK_API_BASE
});

export function useApi<R = any, P = Record<string, any>>(
  url: string,
  method: HttpMethod
) {
  async function load<OVR = R, OP = P>(
    params?: OP,
    config?: AxiosRequestConfig
  ): Promise<Response<OVR>> {
    const response: AxiosResponse<Response<OVR>> = await axiosInstance({
      url,
      method,
      ...config,
      ...(method === 'get' ? { params } : { data: params })
    });
    return response.data;
  }

  function fetch<OVR = R, OP = P>(
    options: Options<OVR, OP> = {},
    fetchOptions = { immediate: true }
  ) {
    const data: Ref<OVR | null> = ref(null);
    const loading: Ref<boolean> = ref(false);
    const error: Ref<any> = ref(null);

    const fetchData = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await load<OVR, OP>(options.params, options.config);
        data.value = <OVR>response;

        if (options.onSuccess) {
          options.onSuccess(<OVR>response);
        }
      } catch (err) {
        error.value = err;

        if (options.onError) {
          options.onError(err);
        }
      } finally {
        loading.value = false;
      }
    };

    if (fetchOptions.immediate) {
      fetchData();
    }

    return { data, loading, error, fetchData };
  }

  function lazyFetch<OVR = R, OP = P>(options: Options<OVR, OP> = {}) {
    return fetch<OVR, OP>(options, { immediate: false });
  }

  return {
    url,
    load,
    fetch,
    lazyFetch
  };
}
