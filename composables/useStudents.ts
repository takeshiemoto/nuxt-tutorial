import { ref, useContext } from '@nuxtjs/composition-api';

export const useStudents = () => {
  const { $repository } = useContext();

  const students = ref<{ id: string; name: string }[]>([]);

  const fetchStudents = async () => {
    students.value = await $repository.student.findAll();
  };

  return {
    fetchStudents,
    students,
  };
};
