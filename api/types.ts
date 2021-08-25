import { AuthRepository } from '~/api/repositories/auth.repository';
import { StudentRepository } from '~/api/repositories/student.repository';

export type Repository = {
  student: StudentRepository;
  auth: AuthRepository;
};
