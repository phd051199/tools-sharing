import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const refreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token available');

  try {
    const response: AxiosResponse<TokenResponse> = await axios.post(
      '/refresh-token',
      {
        token: refreshToken
      }
    );

    const { accessToken, refreshToken: newRefreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    axiosInstance.defaults.headers.common['Authorization'] =
      `Bearer ${accessToken}`;

    return accessToken;
  } catch (error) {
    throw new Error('Unable to refresh token');
  }
};

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
