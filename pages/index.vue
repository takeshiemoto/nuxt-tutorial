<template>
  <div>
    <StudentList :students="students" />
    <NuxtLink to="/student/add">Add Student</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import StudentList from '~/components/StudentList.vue';
import { useStudents } from '~/composables/useStudents';

export default defineComponent({
  components: { StudentList },
  layout: 'authenticated',
  setup() {
    const { students, fetchStudents } = useStudents();

    fetchStudents();

    return {
      students,
    };
  },
});
</script>
