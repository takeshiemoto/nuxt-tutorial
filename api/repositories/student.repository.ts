import { NuxtAxiosInstance } from '@nuxtjs/axios';

type FindAllResponse = {
  id: string;
  name: string;
  teacher: string;
}[];

type FindByIdResponse = {
  id: string;
  name: string;
  teacher: string;
};

export const studentRepository: ($axios: NuxtAxiosInstance) => {
  findById: (studentId: string) => Promise<FindByIdResponse>;
  findAll: () => Promise<FindAllResponse>;
} = ($axios: NuxtAxiosInstance) => ({
  findAll: () => $axios.$get('/students'),
  findById: (studentId: string) => $axios.$get(`/students/${studentId}`),
});

export type StudentRepository = ReturnType<typeof studentRepository>;
