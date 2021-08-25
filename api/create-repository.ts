import { Context } from '@nuxt/types';

import { authRepository } from '~/api/repositories/auth.repository';
import { studentRepository } from '~/api/repositories/student.repository';

export const createRepository = ({ $axios }: Context) => {
  return {
    student: studentRepository($axios),
    auth: authRepository($axios),
  };
};
