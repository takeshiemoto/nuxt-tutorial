import { StudentRepository } from '~/api/repositories/student.repository';
import { AuthRepository } from '~/api/repositories/auth.repository';

export type Repository = {
  student: StudentRepository;
  auth: AuthRepository;
};
