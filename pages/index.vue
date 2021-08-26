<template>
  <div>
    <Nav />
    <StudentList :students="students" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import Nav from '~/components/Nav.vue';
import StudentList from '~/components/StudentList.vue';
import { useStudents } from '~/composables/useStudents';

export default defineComponent({
  components: { StudentList, Nav },
  setup() {
    const { students, fetchStudents } = useStudents();

    fetchStudents();

    return {
      students,
    };
  },
});
</script>
