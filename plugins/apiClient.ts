import aspida from '@aspida/fetch';

import api from '@/api/$api';
import mock from '@/api/$mock';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const fetchConfig = {
    credentials: 'include',
    baseURL: config.public.BASE_URL,
    throwHttpErrors: true,
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    },
  } as const;

  return {
    provide: {
      apiClient() {
        return config.public.appStage === 'development'
          ? mock(aspida(fetch, fetchConfig))
          : api(aspida(fetch, fetchConfig));
      },
    },
  };
});
