import { Context } from '@nuxt/types';
import { studentRepository } from '~/api/repositories/student.repository';
import { authRepository } from '~/api/repositories/auth.repository';

export const createRepository = ({ $axios }: Context) => {
  return {
    student: studentRepository($axios),
    auth: authRepository($axios),
  };
};
