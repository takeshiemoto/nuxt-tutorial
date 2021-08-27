import { ref, useContext } from '@nuxtjs/composition-api';

export const useStudent = () => {
  const { $repository } = useContext();
  const student = ref<
    { id: string; name: string; teacher: string } | undefined
  >(undefined);

  const fetchStudent = async (studentId: string) => {
    student.value = await $repository.student.findById(studentId);
  };

  return {
    student,
    fetchStudent,
  };
};
