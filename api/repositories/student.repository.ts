import { NuxtAxiosInstance } from '@nuxtjs/axios';

export const studentRepository = ($axios: NuxtAxiosInstance) => {
  return {
    findAll: () => $axios.$get('/api/students'),
  };
};

export type StudentRepository = ReturnType<typeof studentRepository>;
