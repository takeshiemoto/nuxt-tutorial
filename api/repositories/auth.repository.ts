import { NuxtAxiosInstance } from '@nuxtjs/axios';

export const authRepository: ($axios: NuxtAxiosInstance) => {
  login: (payload: {
    username: string;
    password: string;
  }) => Promise<{ accessToken: string }>;
} = ($axios: NuxtAxiosInstance) => ({
  login: (payload: { username: string; password: string }) =>
    $axios.$post('/auth/login', { ...payload }),
});

export type AuthRepository = ReturnType<typeof authRepository>;
