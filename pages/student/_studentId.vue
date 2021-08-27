<template>
  <div>
    <ProfileCard v-if="student" :student="student" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';

import ProfileCard from '~/components/ProfileCard.vue';
import { useStudent } from '~/composables/useStudent';

export default defineComponent({
  components: { ProfileCard },
  layout: 'authenticated',
  setup() {
    const { params } = useContext();
    const studentId = (params.value as { studentId: string }).studentId;
    const { student, fetchStudent } = useStudent();

    fetchStudent(studentId);

    return {
      student,
    };
  },
});
</script>
