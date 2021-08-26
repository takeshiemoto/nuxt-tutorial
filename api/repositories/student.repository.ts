import { NuxtAxiosInstance } from '@nuxtjs/axios';

type FindAllResponse = {
  id: string;
  name: string;
  teacher: string;
}[];

export const studentRepository: ($axios: NuxtAxiosInstance) => {
  findById: (studentId: string) => Promise<any>;
  findAll: () => Promise<FindAllResponse[]>;
} = ($axios: NuxtAxiosInstance) => ({
  findAll: () => $axios.$get('/students'),
  findById: (studentId: string) => $axios.$get(`/student/${studentId}`),
});

export type StudentRepository = ReturnType<typeof studentRepository>;
