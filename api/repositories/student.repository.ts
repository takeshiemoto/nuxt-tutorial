import { NuxtAxiosInstance } from '@nuxtjs/axios';

export const studentRepository = ($axios: NuxtAxiosInstance) => ({
  findAll: () => $axios.$get('/students'),
  findById: (studentId: string) => $axios.$get(`/student/${studentId}`),
});

export type StudentRepository = ReturnType<typeof studentRepository>;
